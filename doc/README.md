
deep-float-equal [![Build status](https://travis-ci.org/strong-roots-capital/deep-float-equal.svg?branch=master)](https://travis-ci.org/strong-roots-capital/deep-float-equal) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/deep-float-equal.svg)](https://npmjs.org/package/@strong-roots-capital/deep-float-equal) [![codecov](https://codecov.io/gh/strong-roots-capital/deep-float-equal/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/deep-float-equal)
===============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Check two objects for float-equality

Note that `BigInt`s are currently not supported.

Install
-------

```shell
npm install @strong-roots-capital/deep-float-equal
```

Use
---

#### `deepFloatEqual<A, B>(a: A, b: B, absoluteTolerance = DBL_EPSILON, relativeTolerance = DBL_EPSILON`)

Checks for normal deep-equality between objects a and b with the exception that floats are allowed to vary within the given tolerances of one another using the formula:

\|x - y\| < max(absoluteTolerance, min(\|x\|, \|y\|) \* relativeTolerance)

*   x and y are two numbers within the objects to comapre
*   absoluteTolerance is x fixed minimal tolerance (set to 0 to ignore)
*   relativeTolerance is x tolerance that scales with x/y (set to 0 to ignore)

Returns true if a, b are deep-equal, with all corresponding floats being approximately equal.

If tolerance argument is omitted, almostEqual.DBL\_EPSILON value is used by default.

Examples
--------

```typescript
import deepFloatEqual from '@strong-roots-capital/deep-float-equal'

let firstArray = [0.1 + 0.2]
let secondArray = [0.3]
console.log(deepFloatEqual(firstArray, secondArray))
//=>true
```

Optionally change the allowed epsilon tolerance (default `DBL_EPSILON`)

```typescript
import deepFloatEqual, { FLT_EPSILON } from '@strong-roots-capital/deep-float-equal'

let firstArray = [0.1 + 0.2]
let secondArray = [0.3]
console.log(deepFloatEqual(firstArray, secondArray, FLT_EPSILON / 1e10, FLT_EPSILON / 1e10))
//=>false
```

`FLT_EPSILON` and `DBL_EPSILON` are re-exported from [almost-equal](https://github.com/scijs/almost-equal).

Acknowledgments
---------------

*   [almost-equal](https://github.com/scijs/almost-equal)
*   [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal)

## Index

### Functions

* [deepFloatEqual](#deepfloatequal)

---

## Functions

<a id="deepfloatequal"></a>

###  deepFloatEqual

▸ **deepFloatEqual**<`A`,`B`>(a: *`A`*, b: *`B`*, absoluteTolerance?: *`number`*, relativeTolerance?: *`number`*): `boolean`

*Defined in [deep-float-equal.ts:23](https://github.com/strong-roots-capital/deep-float-equal/blob/52d8065/src/deep-float-equal.ts#L23)*

Check two objects for float-equality

**Type parameters:**

#### A 
#### B 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | `A` | - |  First object to be compared \`b\` |
| b | `B` | - |  Second object to be compared to \`a\` |
| `Default value` absoluteTolerance | `number` |  almostEqual.DBL_EPSILON |
| `Default value` relativeTolerance | `number` |  almostEqual.DBL_EPSILON |

**Returns:** `boolean`
True if all floats in the objects are equivalent

___

