# Common Utilities Package

A package of commonly used utilities. Read the docs [here](https://codes-and-coffees.gitbook.io/common-utils-pkg/)

### Package Details

[![](https://img.shields.io/npm/v/common-utils-pkg.svg)](https://www.npmjs.com/package/common-utils-pkg) [![](https://img.shields.io/node/v/common-utils-pkg.svg)](https://nodejs.org/en/) [![](https://img.shields.io/david/codesandcoffees/common-utils-pkg.svg)](https://david-dm.org/codesandcoffees/common-utils-pkg) [![](https://img.shields.io/npm/dm/common-utils-pkg.svg)](https://npmcharts.com/compare/common-utils-pkg?minimal=true)

### Repo Details

[![](https://img.shields.io/github/issues/codesandcoffees/common-utils-pkg.svg)](https://github.com/codesandcoffees/common-utils-pkg/issues) [![](https://img.shields.io/github/issues-pr/codesandcoffees/common-utils-pkg.svg)](https://github.com/codesandcoffees/common-utils-pkg/pulls) ![code size](https://img.shields.io/github/languages/code-size/codesandcoffees/common-utils-pkg.svg) [![](https://img.shields.io/github/contributors/codesandcoffees/common-utils-pkg.svg)](https://github.com/codesandcoffees/common-utils-pkg/graphs/contributors)

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
  * `toBool(val)`
* ColorUtil
  * `randomPastelColor()`
* DateUtil
* FileUtil
  * `convertBytes(number, decimals)`
* StringUtil
  * `arrToString(array, delimiter)`
  * `toSentenceCase(string)`
  * `toTitleCase(string)`

## Features

## Commands

## To Do's

* [ ] Coverage

