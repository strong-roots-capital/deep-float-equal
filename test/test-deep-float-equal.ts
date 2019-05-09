import test from 'ava'

/**
 * Library under test
 */

import deepFloatEqual from '../src/deep-float-equal'

test('should return true when array values are equal', t => {
    let firstArray = [1, 2]
    let secondArray = [1, 2]
    t.true(deepFloatEqual(firstArray, secondArray))
})

test('should return true when array values have varying floats but still equal', t => {
    let firstArray = [1.3456789, 100]
    let secondArray = [1.345679, 100 + 1e-5]
    t.true(deepFloatEqual(firstArray, secondArray))
})

test('should return false  when array values have varying floats', t => {
    let firstArray = [1.3456789, 25.2334]
    let secondArray = [1.345679, 25.2343]
    t.false(deepFloatEqual(firstArray, secondArray))
})

test('should return true when comparing known float-inaccuracies ', t => {
    let firstArray = [0.1 + 0.2]
    let secondArray = [0.3]
    t.true(deepFloatEqual(firstArray, secondArray))
})

test('should return false when b is shorter than a ', t => {
    let firstArray = [0.1, 0.5]
    let secondArray = [0.1]
    t.false(deepFloatEqual(firstArray, secondArray))
})

test('should return false when a is shorter than b ', t => {
    let firstArray = [0.1]
    let secondArray = [0.1, 0.6]
    t.false(deepFloatEqual(firstArray, secondArray))
})
