---
slug: /
sidebar_position: 1
id: getting-started
sidebar_label: Getting started
title: Getting started
---

# Common Utilities Package

A package of commonly used JavaScript utilities.

![img](img/js-pkg.png#center)

#### Package Details

<!-- [![node version][node-img]][node-url] -->

[![npm version][npm-img]][npm-url]
[![coverage][codecov-img]][codecov-url]
[![downloads][downloads-img]][downloads-url]

#### Repo Details

[![open issues][issues-img]][issues-url]
[![open prs][pr-img]][pr-url]
![code size](https://img.shields.io/github/languages/code-size/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200)
[![contributors][contributor-img]][contributor-url]

### Installation

NPM

```
npm i --save common-utils-pkg
```

Yarn

```
yarn add common-utils-pkg
```

### Usage

#### ES6

```
// Specific methods

import { randomPastelColor } from 'common-utils-pkg';
randomPastelColor();
```

```
// All methods

import * as UTILS from 'common-utils-pkg';
UTILS.randomPastelColor();
```

#### Browser

```
<script src="https://unpkg.com/common-utils-pkg"></script>
<script>
  // Specific methods

  const randomPastelColor = window['common-utils-pkg].randomPastelColor;
  randomPastelColor();
</script>
```

```
<script>
  // All methods

  const UTILS = window['common-utils-pkg'];
  UTILS.randomPastelColor();
</script>
```

[contributor-img]: https://img.shields.io/github/contributors/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200
[contributor-url]: https://github.com/iamdevlinph/common-utils-pkg/graphs/contributors
[deps-img]: https://img.shields.io/david/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200
[deps-url]: https://david-dm.org/iamdevlinph/common-utils-pkg
[devdeps-img]: https://img.shields.io/david/dev/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200
[devdeps-url]: https://david-dm.org/iamdevlinph/common-utils-pkg?type=dev
[downloads-img]: https://img.shields.io/npm/dm/common-utils-pkg.svg?style=flat-square&maxAge=7200
[downloads-url]: https://npmcharts.com/compare/common-utils-pkg?minimal=true
[issues-img]: https://img.shields.io/github/issues/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200
[issues-url]: https://github.com/iamdevlinph/common-utils-pkg/issues
[node-img]: https://img.shields.io/node/v/common-utils-pkg.svg?style=flat-square&maxAge=7200
[node-url]: https://nodejs.org/en/
[npm-img]: https://img.shields.io/npm/v/common-utils-pkg.svg?style=flat-square&maxAge=7200
[npm-url]: https://www.npmjs.com/package/common-utils-pkg
[pr-img]: https://img.shields.io/github/issues-pr/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200
[pr-url]: https://github.com/iamdevlinph/common-utils-pkg/pulls
[travis-img]: https://img.shields.io/travis/iamdevlinph/common-utils-pkg/master.svg?style=flat-square&maxAge=7200
[travis-url]: https://travis-ci.org/iamdevlinph/common-utils-pkg
[codecov-img]: https://img.shields.io/codecov/c/github/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200
[codecov-url]: https://codecov.io/gh/iamdevlinph/common-utils-pkg
[forks-img]: https://img.shields.io/github/forks/iamdevlinph/common-utils-pkg.svg?style=social&label=Fork&maxAge=7200
[forks-url]: https://github.com/iamdevlinph/common-utils-pkg/network/members
[stars-img]: https://img.shields.io/github/stars/iamdevlinph/common-utils-pkg.svg?style=social&label=Stars&maxAge=7200
[stars-url]: https://github.com/iamdevlinph/common-utils-pkg/stargazers
