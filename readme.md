# Introduction to dynamical systems - University of Rome Tor Vergata, 2023-24

This repo contains all practical information related to the course and also the lecture notes.

## Technical details

The webpage uses [vitepress](https://vitepress.dev) to generate everything from content written in markdown. Site is available at [https://www.mat.uniroma2.it/butterley/DS-intro/].

Released under the [Creative Commons Attribution-ShareAlike 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/). Copyright © 2023 [Oliver Butterley](https://www.mat.uniroma2.it/butterley/).

## Local editing

In order to preview locally, make sure [node.js](https://nodejs.org/en) is installed, then run `npm install` is this directory. Run `npm run dev` to startup a local server which will update automatically when content is changed.

See the [full list of markdown extensions](https://vitepress.dev/guide/markdown) from vitepress. Additionally superscript is written as `2^nd^`, etc using a [plugin](https://github.com/markdown-it/markdown-it-sup).

Commits to `main` are automatically processed and deployed to the server.
