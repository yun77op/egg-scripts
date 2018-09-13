#!/usr/bin/env node

'use strict';

process.once('uncaughtException', err => {
  console.error(err.message);
  console.error(err.stack);

  process.exitCode = 2;
});

const Command = require('..');

new Command().start();
