# Common Utilities Package

A package of commonly used JavaScript utilities.

<p align="center">
  <img src="/static/img/js-pkg.png">
</p>

#### Package Details

[![npm version][npm-img]][npm-url]
[![node version][node-img]][node-url]
[![coverage][codecov-img]][codecov-url]
[![downloads][downloads-img]][downloads-url]

#### Repo Details

[![open issues][issues-img]][issues-url]
[![open prs][pr-img]][pr-url]
![code size](https://img.shields.io/github/languages/code-size/iamdevlinph/common-utils-pkg.svg?style=flat-square&maxAge=7200)
[![contributors][contributor-img]][contributor-url]

## Installation

NPM

```
npm i --save common-utils-pkg
```

Yarn

```
yarn add common-utils-pkg
```

## Usage

### ES6

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

### Browser

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

Read more about the usage [here](https://iamdevlinph.github.io/common-utils-pkg/usage.html)

## Available Methods

Read more about the methods available [here](https://iamdevlinph.github.io/common-utils-pkg/docs.html)

<!-- ## Features

- Transpile ES6 to ES5 using [Babel](https://github.com/babel/babel)
- Coverage using [Istanbul](https://github.com/gotwarlost/istanbul) with [nyc](https://github.com/istanbuljs/nyc) and report by [Codecov](https://github.com/codecov/codecov-node)
- Create the bundle using [webpack](https://github.com/webpack/webpack)
- Run tests using [Mocha](https://github.com/mochajs/mocha) and [chai](https://github.com/chaijs/chai)
- Build status by [Travis](https://github.com/travis-ci/travis-ci)
- Precommit using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky)
- Provides TypeScript type definitions -->
<!-- ![typedef](./docs/img/ts-type-def.png) -->

# Contributing

1.Create a folder under `src/` and name the folder with the same name as the method.

2.Create `methodName.ts` and `methodName.test.ts`

The full directory should look like this:

```
src/
  method-name/
    - method-name.ts
    - method-name.test.ts
```

### Scripts

- `yarn docusaurus:generate` - generate new files. Will auto refresh page
- `yarn docusaurus:start` - start up the docu page

# Publishing

Maintainers should validate a release locally before publishing:

```sh
pnpm run typecheck
pnpm test
pnpm run pack:check
```

Configure **Settings → Trusted Publisher** for this package on npmjs.com:

| Setting | Value |
| --- | --- |
| Provider | GitHub Actions |
| Organization / user | `iamdevlinph` |
| Repository | `common-utils-pkg` |
| Workflow filename | `publish-package.yml` |
| Environment | *(blank)* |
| Allowed action | `npm publish` |

Enter only the workflow filename, not its full path. Trusted Publishing uses
OIDC; do not add `NPM_TOKEN`, `NODE_AUTH_TOKEN`, or a package PAT. It requires a
GitHub-hosted runner, Node 22.14 or newer, and npm 11.5.1 or newer. The workflow
uses Node 24 (from `.nvmrc`), verifies npm 11.5.1 or newer, and uses pnpm 11.2.2.

To release, update the version in `package.json`, create and push the matching
tag `v<version>`, then publish a GitHub Release for that tag. The workflow
requires the release tag to equal `v` plus the package version.

If publishing fails only because of external configuration, rerun the failed
job. If code or workflow changes are required, publish a new version unless the
failed tag was never released and is intentionally recreated. After the first
successful OIDC publish, delete the obsolete GitHub `NPM_TOKEN` secret and set
npm publishing access to require two-factor authentication and disallow tokens.

### Publish doc updates

Doc updates should be automatically be deployed once merged to main by github action.

<!-- Have something to pitch in? Open a [pull request](https://github.com/iamdevlinph/common-utils-pkg/pulls) or an [issue](https://github.com/iamdevlinph/common-utils-pkg/issues/new). -->

<!-- ## Commands
Run by `npm run <script>`
* `build:clean` - Deletes the build folder.
* `build` - Builds `dev` and `prod` ready files.
* `cover:serve` - Serve the coverage report page. Open at `http://localhost:8080/`.
* `cover` - Run coverage tool.
* `docu:serve` - Serve the documentation page. Open at `http://localhost:8080/`.
* `docu` - Generated a `.json` documentation file that will be used by the `docs.html` page.
* `lint:install` - Install precommit related tools. It sometimes doesn't install properly.
* `precommit` - The precommit hook which runs `lint-staged` to lint staged files on commit.
* `prepare` - Runs `build` before publishing a new version of the package.
* `test:watch` - Re-run tests on file changes.
* `test` - Run the tests -->

<!-- ## To Do's
- [ ] Immutable arrays and objects
- [ ] Update `takes(func, [...required])` to `takes(func, [...required], [...optional])`
- [ ] Update `takes` to support `typeof` `any`
- [ ] Update `argTypesMatch` to support `typeof` `any` -->

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
