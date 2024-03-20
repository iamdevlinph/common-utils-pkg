---
slug: /
sidebar_position: 1
id: getting-started
sidebar_label: Getting started
title: Getting started
---

Welcome to the new look!

# Getting started

![img](img/js-pkg.png#center)

## :tada: `v4` is here

v4 is just migrating the code base to TypeScript. Kindly refer to the [changelog](https://common-utils-pkg.js.org/changelog.html) for more info.

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
