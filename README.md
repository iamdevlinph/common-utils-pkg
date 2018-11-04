# Common Utilities Package

A package of commonly used utilities.

[Site](https://codesandcoffees.github.io/common-utils-pkg/) | [Docs](https://codesandcoffees.github.io/common-utils-pkg/docs.html)

#### Package Details

[![npm version][npm-img]][npm-url]
[![node version][node-img]][node-url]
[![build][travis-img]][travis-url]
[![coverage][codecov-img]][codecov-url]
[![dev deps][devdeps-img]][devdeps-url]
[![downloads][downloads-img]][downloads-url]

#### Repo Details

[![Greenkeeper badge](https://badges.greenkeeper.io/codesandcoffees/common-utils-pkg.svg?style=flat-square)](https://greenkeeper.io/)
[![open issues][issues-img]][issues-url]
[![open prs][pr-img]][pr-url]
![code size](https://img.shields.io/github/languages/code-size/codesandcoffees/common-utils-pkg.svg?style=flat-square&maxAge=86400)
[![contributors][contributor-img]][contributor-url]

## Installation

```
npm i --save common-utils-pkg
```

## Usage

### ES6

```
import { ColorUtil } from 'common-util-pkg';

ColorUtil.randomPastelColor();
// "hsl(24.380295231593017,27.395530909987613%,86.86101287292395%)"
```

### Browser

```
<script src="https://unpkg.com/common-utils-pkg"></script>
<script>
  const ColorUtil = window['common-utils-pkg].ColorUtil;
  ColorUtil.randomPastelColor();
  // "hsl(24.380295231593017,27.395530909987613%,86.86101287292395%)"
</script>
```

Read more about the usage [here](https://codesandcoffees.github.io/common-utils-pkg/usage.html)

## Available Utilities
* ArrayUtil
* BoolUtil
* ColorUtil
* CoreUtil
* FileUtil
* KeyUtil
* ObjectUtil
* StringUtil

Read more about the methods available [here](https://codesandcoffees.github.io/common-utils-pkg/docs.html)

## Features
* Transpile ES6 to ES5 using [Babel](https://github.com/babel/babel)
* Coverage using [Istanbul](https://github.com/gotwarlost/istanbul) with [nyc](https://github.com/istanbuljs/nyc) and report by [Codecov](https://github.com/codecov/codecov-node)
* Create the bundle using [webpack](https://github.com/webpack/webpack)
* Run tests using [Mocha](https://github.com/mochajs/mocha) and [chai](https://github.com/chaijs/chai)
* Lint stuff using [ESLint](https://github.com/eslint/eslint)
* Build status by [Travis](https://github.com/travis-ci/travis-ci)
* Precommit using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky)
* Provides TypeScript type definitions
![typedef](./docs/img/ts-type-def.png)

# Contributing
Have something to pitch in? Open a [pull request](https://github.com/codesandcoffees/common-utils-pkg/pulls) or an [issue](https://github.com/codesandcoffees/common-utils-pkg/issues/new).

## Commands
Run by `npm run <script>`
* `build:clean` - Deletes the build folder.
* `build` - Builds `dev` and `prod` ready files.
* `cover:serve` - Serve the coverage report page. Open at `http://localhost:8080/`.
* `cover` - Run coverage tool.
* `docu:serve` - Serve the documentation page. Open at `http://localhost:8080/`.
* `docu` - Generated a `.json` documentation file that will be used by the `docs.html` page.
* `lint:install` - Install precommit related tools. It sometimes doesn't install properly.
* `lint` - Runs the ESLint linter on the `src/` folder.
* `precommit` - The precommit hook which runs `lint-staged` to lint staged files on commit.
* `prepare` - Runs `build` before publishing a new version of the package.
* `test:watch` - Re-run tests on file changes.
* `test` - Run the tests

## To Do's
- [ ] Immutable arrays and objects
- [ ] Update `takes(func, [...required])` to `takes(func, [...required], [...optional])`
- [ ] Update `takes` to support `typeof` `any`
- [ ] Update `argTypesMatch` to support `typeof` `any`

[contributor-img]: https://img.shields.io/github/contributors/codesandcoffees/common-utils-pkg.svg?style=flat-square&maxAge=86400
[contributor-url]: https://github.com/codesandcoffees/common-utils-pkg/graphs/contributors
[deps-img]: https://img.shields.io/david/codesandcoffees/common-utils-pkg.svg?style=flat-square&maxAge=86400
[deps-url]: https://david-dm.org/codesandcoffees/common-utils-pkg
[devdeps-img]: https://img.shields.io/david/dev/codesandcoffees/common-utils-pkg.svg?style=flat-square&maxAge=86400
[devdeps-url]: https://david-dm.org/codesandcoffees/common-utils-pkg?type=dev
[downloads-img]: https://img.shields.io/npm/dm/common-utils-pkg.svg?style=flat-square&maxAge=86400
[downloads-url]: https://npmcharts.com/compare/common-utils-pkg?minimal=true
[issues-img]: https://img.shields.io/github/issues/codesandcoffees/common-utils-pkg.svg?style=flat-square&maxAge=86400
[issues-url]: https://github.com/codesandcoffees/common-utils-pkg/issues
[node-img]: https://img.shields.io/node/v/common-utils-pkg.svg?style=flat-square&maxAge=86400
[node-url]: https://nodejs.org/en/
[npm-img]: https://img.shields.io/npm/v/common-utils-pkg.svg?style=flat-square&maxAge=86400
[npm-url]: https://www.npmjs.com/package/common-utils-pkg
[pr-img]: https://img.shields.io/github/issues-pr/codesandcoffees/common-utils-pkg.svg?style=flat-square&maxAge=86400
[pr-url]: https://github.com/codesandcoffees/common-utils-pkg/pulls
[travis-img]: https://img.shields.io/travis/codesandcoffees/common-utils-pkg/master.svg?style=flat-square&maxAge=86400
[travis-url]: https://travis-ci.com/codesandcoffees/common-utils-pkg
[codecov-img]: https://img.shields.io/codecov/c/github/codesandcoffees/common-utils-pkg.svg?style=flat-square&maxAge=86400
[codecov-url]: https://codecov.io/gh/codesandcoffees/common-utils-pkg
[forks-img]: https://img.shields.io/github/forks/codesandcoffees/common-utils-pkg.svg?style=social&label=Fork&maxAge=86400
[forks-url]: https://github.com/codesandcoffees/common-utils-pkg/network/members
[stars-img]: https://img.shields.io/github/stars/codesandcoffees/common-utils-pkg.svg?style=social&label=Stars&maxAge=86400
[stars-url]: https://github.com/codesandcoffees/common-utils-pkg/stargazers
