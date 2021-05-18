#!/usr/bin/env node
"use strict";
const meow = require("meow");
const killFirefox = require(".");

const cli = meow(
  `
  Usage
    $ kill-firefox-tabs

    $ kill-firefox-tabs -m 250
`,
  {
    flags: {
      memory: {
        type: "number",
        default: 200,
        alias: "m",
      },
    },
  }
);

killFirefox(cli.flags);
