import test from 'ava'

/**
 * Library under test
 */

import deepFloatEqual from '../src/deep-float-equal'
import { FLT_EPSILON } from '../src/deep-float-equal'

test('should return false when near array-values are compared with strict epsilon', t => {
    let firstArray = [1.3456789, 100]
    let secondArray = [1.345679, 100 + 1e-5]
    t.false(deepFloatEqual(firstArray, secondArray, FLT_EPSILON / 10))
})

test('should return true when near array-values are compared with loose epsilon', t => {
    let firstArray = [1.3456789, 100]
    let secondArray = [1.345679, 100 + 1e-5]
    t.true(deepFloatEqual(firstArray, secondArray, 1e-5, 1e-5))
})
