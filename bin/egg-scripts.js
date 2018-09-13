#!/usr/bin/env node

'use strict';

// process.once('uncaughtException', err => {
//   console.error(err.message);
//   console.error(err.stack);

//   process.exitCode = 1;
// });

try {
  const Command = require('..');

  new Command().start();
} catch(err) {
  console.error(err.message);
  console.error(err.stack);

  process.exitCode = 1;
}