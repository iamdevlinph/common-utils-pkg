# Common Utilities Package

A package of commonly used utilities. Read the docs [here](https://codes-and-coffees.gitbook.io/common-utils-pkg/)

#### Package Details

[![npm version][npm-img]][npm-url]
[![node version][node-img]][node-url]
[![deps][deps-img]][deps-url]
[![downloads][downloads-img]][downloads-url]

#### Repo Details

[![open issues][issues-img]][issues-url]
[![open prs][pr-img]][pr-url]
![code size](https://img.shields.io/github/languages/code-size/codesandcoffees/common-utils-pkg.svg)
[![contributors][contributor-img]][contributor-url]

## Installation

```
npm i --save common-utils-pkg
```

## Getting started

### Import a single utility

```
import ArrayUtil from 'common-util-pkg;
```

### Import multiple utilities

```
import { ArrayUtil, Boolutil, ColorUtil } from 'common-util-pkg';
```

### Use `UNPKG`

To use the latest version

```
<script src="https://unpkg.com/common-utils-pkg"></script>
```

You can also specify a version

```
<script src="https://unpkg.com/common-utils-pkg@1.0.9"></script>
```

Use by getting the exposed 'common-utils-pkg'

```
<script>
  const CU = window['common-utils-pkg];
  CU.ColorUtil.randomPastelColor(); // "hsl(24.380295231593017,27.395530909987613%,86.86101287292395%)"
</script>
```

#### Available Utilities

* ArrayUtil
  * `strToArray(string, delimiter)`
* BoolUtil
  * `toBool(val, [trueValuesArr])`
* ColorUtil
  * `randomPastelColor()`
* DateUtil
* FileUtil
  * `convertBytes(number, [decimals])`
* StringUtil
  * `arrToString(array, delimiter)`
  * `toSentenceCase(string)`
  * `toTitleCase(string)`

## Features

## Commands

## To Do's

* [ ] Proper documentation. Include `arguments` and `return value`
* [ ] Demo playground

<!-- ## Documentation Generation -->
<!-- Manually generate documentation for now. No existing suits the current requirements -->
<!-- Possible tools: -->
<!-- https://esdoc.org/ -->
<!-- https://documentation.js.org/ -->

[contributor-img]: https://img.shields.io/github/contributors/codesandcoffees/common-utils-pkg.svg
[contributor-url]: https://github.com/codesandcoffees/common-utils-pkg/graphs/contributors
[deps-img]: https://img.shields.io/david/codesandcoffees/common-utils-pkg.svg
[deps-url]: https://david-dm.org/codesandcoffees/common-utils-pkg
[downloads-img]: https://img.shields.io/npm/dm/common-utils-pkg.svg
[downloads-url]: https://npmcharts.com/compare/common-utils-pkg?minimal=true
[issues-img]: https://img.shields.io/github/issues/codesandcoffees/common-utils-pkg.svg
[issues-url]: https://github.com/codesandcoffees/common-utils-pkg/issues
[node-img]: https://img.shields.io/node/v/common-utils-pkg.svg
[node-url]: https://nodejs.org/en/
[npm-img]: https://img.shields.io/npm/v/common-utils-pkg.svg
[npm-url]: https://www.npmjs.com/package/common-utils-pkg
[pr-img]: https://img.shields.io/github/issues-pr/codesandcoffees/common-utils-pkg.svg
[pr-url]: https://github.com/codesandcoffees/common-utils-pkg/pulls
