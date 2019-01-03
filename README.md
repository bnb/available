# tla [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/bnb/tla/master.svg
[travis-url]: https://travis-ci.org/bnb/tla
[npm-image]: https://img.shields.io/npm/v/tla.svg
[npm-url]: https://npmjs.org/package/tla
[downloads-image]: https://img.shields.io/npm/dm/tla.svg
[downloads-url]: https://npmjs.org/package/tla
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Scan npm for available three-letter acronym package names

tla is 100% a fork of the always awesome [@feross](https://twitter.com/feross)'s module, [available](https://github.com/feross/available), with a different [`dictionary.txt`](./dictionary.txt). He did **99.95%** of the work. Please support his [Patreon](https://www.patreon.com/feross).

## install

```
npm install tla -g
```

## usage

### cli

Get available names from the npm registry:

```bash
$ tla
AAA
AAI
AAC
...
```

Full options list:

```
Usage:
    tla [optional-name] <options>

    Scan npm for available three-letter acronym package names.

Examples:

    Print lots of possible names:
        tla
        tla --offline

    Check for a certain name:
        tla my-cool-name
        tla my-cool-name --related
        tla my-cool-name --offline

Flags:
    -r, --related    Search for related module names (Uses thesaurus)
    -o, --offline    Force offline mode (Does not verify names are actually available)
    -v, --version    Show current version
    -h, --help       Show usage information
```

### api

#### `tla.getNames(opts, next)`

Get available package names from npm.

If `opts.online` is `true`, verify that the
names are actually available. Otherwise, a local
[package name database](https://npmjs.com/package/all-the-package-names) is used,
which may be slightly out-of-date.

`next(err, name)` is called each time an available package is found. This allows
for "streaming" the possible names from the registry. If `err` is an `Error`, then
there was a problem and `next` will not be called again. `name` is the available
package name.

#### `tla.checkName(name, opts, next)`

Check if a specific `name` is available on npm.

If `opts.online` is `true`, verify that the
names are actually available. Otherwise, a local
[package name database](https://npmjs.com/package/all-the-package-names) is used,
which may be slightly out-of-date.

If `opts.related` is `true`, then this will search for related module names using
a thesaurus.

`next(err, name)` is called each time an available package is found. This allows
for "streaming" the possible names from the registry. If `err` is an `Error`, then
there was a problem and `next` will not be called again. `name` is the available
package name.

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
^ I dunno if I update this or not since this is a fork, so I'll leave it. 