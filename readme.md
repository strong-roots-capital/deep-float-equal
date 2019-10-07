# deep-float-equal [![Build status](https://travis-ci.org/strong-roots-capital/deep-float-equal.svg?branch=master)](https://travis-ci.org/strong-roots-capital/deep-float-equal) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/deep-float-equal.svg)](https://npmjs.org/package/@strong-roots-capital/deep-float-equal) [![codecov](https://codecov.io/gh/strong-roots-capital/deep-float-equal/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/deep-float-equal)

> Check two objects for float-equality

## Install

```shell
npm install @strong-roots-capital/deep-float-equal
```

## Use

```typescript
import deepFloatEqual from '@strong-roots-capital/deep-float-equal'

let firstArray = [0.1 + 0.2]
let secondArray = [0.3]
console.log(deepFloatEqual(firstArray, secondArray))
//=>true
```

Optionally change the allowed epsilon tolerance

```typescript
import deepFloatEqual, { FLT_EPSILON } from '@strong-roots-capital/deep-float-equal'

let firstArray = [0.1 + 0.2]
let secondArray = [0.3]
console.log(deepFloatEqual(firstArray, secondArray, FLT_EPSILON / 1e10))
//=>false
```

`FLT_EPSILON` and `DBL_EPSILON` are re-exported from [almost-equal].

## Related

- [almost-equal]
- [zip](https://github.com/strong-roots-capital/zip)

  [almost-equal]: https://github.com/scijs/almost-equal
