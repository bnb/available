#!/usr/bin/env node

const tla = require('../')
const connectivity = require('connectivity')
const minimist = require('minimist')
const pkg = require('../package.json')

const argv = minimist(process.argv.slice(2), {
  boolean: ['offline', 'version', 'help'],
  alias: {
    o: 'offline',
    v: 'version',
    h: 'help'
  }
})

if (argv.help) {
  runHelp()
} else if (argv.version) {
  runVersion()
} else {
  if (argv.offline) { // Force offline mode
    run(false)
  } else {
    connectivity(run)
  }
}

function runHelp () {
  console.log(`
Usage:
    tla [optional-name] <options>

    Scan npm for available package names.

Examples:

    Print lots of possible names:
        tla
        tla --offline

    Check for a certain name:
        tla my-cool-name
        tla my-cool-name --offline

Flags:
    -o, --offline    Force offline mode (Does not verify names are actually available)
    -v, --version    Show current version
    -h, --help       Show usage information
  `)
}

function runVersion () {
  console.log(pkg.version)
}

function run (online) {
  if (argv._[0]) {
    runCheckName(argv._[0], online)
  } else {
    runGetNames(online)
  }
}

function runGetNames (online) {
  if (!online) {
    console.error('OFFLINE MODE: Printing list of likely available names...')
  }
  tla.getNames({ online }, printName)
}

function runCheckName (name, online) {
  let sanitizedName = name.toUpperCase()

  tla.checkName(sanitizedName, {
    online
  }, printName)
}

function printName (err, name) {
  if (err) throw err
  console.log(name.toLowerCase())
}
