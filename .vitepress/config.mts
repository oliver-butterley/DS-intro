import { defineConfig } from "vitepress";
import mdImplicitFigures from "markdown-it-implicit-figures";
import mdSuperscript from "markdown-it-sup";
import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";

const courseParts = [
  "Examples and concepts",
  "Topological dynamics",
  "Ergodic theory",
  "Hyperbolic dynamics",
  "Proving ergodicity",
];

const figuresSetup = {
  figcaption: "title",
};

const containerSetup = function (
  md: MarkdownIt,
  name: String,
  heading: String,
  format: "tip" | "info" | "warning" | "danger"
) {
  return [
    name,
    {
      render: function (tokens, idx, _options, env) {
        const token = tokens[idx];
        const info = token.info.trim().slice(name.length).trim();
        const attrs = md.renderer.renderAttrs(token);
        const headerString = `${heading} ${info ? `(${info})` : ""}`;
        if (token.nesting === 1) {
          const title = md.renderInline(headerString, {
            references: env.references,
          });
          return `<div class="${format} custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`;
        } else return `</div>\n`;
      },
    },
  ];
};

export default defineConfig({
  lang: "en-GB",
  title: "Dynamical Systems",
  description: "Course material for Introduction to Dynamical Systems, University of Rome Tor Vergata 2023/24",
  base: "/butterley/DS-intro/",

  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.png", type: "image/png" }],
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: true,
    config: (md) => {
      md.use(mdImplicitFigures, figuresSetup)
        .use(mdSuperscript)
        .use(mdContainer, ...containerSetup(md, "theorem", "Theorem", "tip"))
        .use(
          mdContainer,
          ...containerSetup(md, "definition", "Definition", "tip")
        );
    },
  },

  themeConfig: {
    nav: [
      { text: "Overview", link: "/" },
      { text: "Lecture notes", link: "/pages/part1" },
    ],

    sidebar: [
      { text: "Overview", link: "/" },
      { text: "Lecture diary", link: "/pages/diary" },
      {
        text: "Lecture notes",
        items: Array.from(Array(courseParts.length), (_, n) => ({
          text: `${n + 1}. ${courseParts[n]}`,
          link: `/pages/part${n + 1}`,
        })),
        collapsed: false,
      },
    ],

    editLink: {
      pattern: "https://github.com/oliver-butterley/DS-intro/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/oliver-butterley/DS-intro/" },
    ],

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

    footer: {
      message:
        'Released under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 License</a>',
      copyright:
        'Copyright © 2024 <a href="https://www.mat.uniroma2.it/butterley/">Oliver Butterley</a>',
    },
  },
});
