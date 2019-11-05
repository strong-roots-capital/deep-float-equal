import test, { ExecutionContext } from 'ava'
import { FLT_EPSILON, DBL_EPSILON } from 'almost-equal'

/**
 * Library under test
 */

import deepFloatEqual from '../src/deep-float-equal'


function shouldBeEqual<A, B>(
    t: ExecutionContext,
    expected: boolean,
    a: A,
    b: B,
    absoluteTolerance: number = DBL_EPSILON,
    relativeTolerance: number = DBL_EPSILON
) {
    t.is(
        expected,
        deepFloatEqual(a, b, absoluteTolerance, relativeTolerance)
    )
}
shouldBeEqual.title = <A, B>(
    _ = '',
    expected: boolean,
    a: A,
    b: B,
    absoluteTolerance: number = DBL_EPSILON,
    relativeTolerance: number = DBL_EPSILON
) => `should${expected ? ' ' : ' not '}find that ${JSON.stringify(a)} deep-equals ${JSON.stringify(b)} with tolerance (${absoluteTolerance},${relativeTolerance})`

test(shouldBeEqual, true, [1, 2], [1, 2])
test(shouldBeEqual, true, [1.3456789, 100], [1.345679, 100 + 1e-5], FLT_EPSILON, FLT_EPSILON)
test(shouldBeEqual, false, [1.3456789, 25.2334], [1.345679, 25.2343])
test(shouldBeEqual, true, [0.1 + 0.2], [0.3])
test(shouldBeEqual, false, [0.1 + 0.2], [0.3], FLT_EPSILON / 1e10, FLT_EPSILON / 1e10)
test(shouldBeEqual, false, [0.1, 0.5], [0.1])
test(shouldBeEqual, false, [0.1], [0.1, 0.6])

test(shouldBeEqual, true, {a: 1.3456789, b: 100}, {a: 1.345679, b: 100 + 1e-5}, FLT_EPSILON, FLT_EPSILON)
test(shouldBeEqual, false, {a: 1.3456789, b: 100}, {c: 1.345679, b: 100 + 1e-5})
test(shouldBeEqual, false, {a: 1.3456789, b: 25.2334}, {a: 1.345679, b: 25.2343})
test(shouldBeEqual, true, {horse: 0.1 + 0.2}, {horse: 0.3})

test(shouldBeEqual, false, {a: 1.3456789, b: 100}, [1.345679, 100 + 1e-5])
test(shouldBeEqual, true, {a: [1.3456789, 100], b: [0.1 + 0.2]}, {a: [1.345679, 100 + 1e-5], b: [0.3]}, FLT_EPSILON, FLT_EPSILON)

test(shouldBeEqual, true, 100, 100 + 1e-5, FLT_EPSILON, FLT_EPSILON)
test(shouldBeEqual, false, 1.3456789, 1.345679)

test(shouldBeEqual, true, NaN, NaN)

// TODO: test Map

// TODO: test Set

//  LocalWords:  absoluteTolerance relativeTolerance
