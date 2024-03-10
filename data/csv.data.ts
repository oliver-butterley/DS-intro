// diary.data.js
//
// all csv files will be converted to json and made available as the data object
// import { data } from './data/csv.data.ts'
// this object contains a separate property for each imported csv file
// i.e., if the file is diary.csv then data.diary will be the json version of the file

import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

export default {
  watch: ["./*.csv"],
  load(watchedFiles: string[]) {
    // creates a single object with a property containing the data for each csv file
    return watchedFiles.reduce((acc, file) => {
      return Object.assign(acc, {
        [path.basename(file, ".csv").toLowerCase()]: parse(
          fs.readFileSync(file, "utf-8"),
          {
            columns: true,
            skip_empty_lines: true,
          }
        ),
      });
    }, {});
  },
};
