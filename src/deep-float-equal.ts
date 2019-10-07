/**
 * deep-float-equal
 * Check two objects for float-equality
 */

import zip from '@strong-roots-capital/zip'
import almostEqual from 'almost-equal'

export { FLT_EPSILON, DBL_EPSILON } from 'almost-equal'

/**
 * Check two objects for float-equality
 *
 * @remarks
 * Currently only supports deep-quality testing on arrays, not objects.
 *
 * @param a - First object to be compared `b`
 * @param b - Second object to be compared to `a`
 * @returns True if all floats in the objects are equivalent
 */
export default function deepFloatEqual(
    a: ReadonlyArray<number>,
    b: ReadonlyArray<number>,
    epsilon: number = almostEqual.FLT_EPSILON
): boolean {

    if (a.length !== b.length) {
        return false
    }

    const zipped = zip(a, b)
    for (const [x, y] of zipped) {
        if (!almostEqual(x, y, epsilon, epsilon))
            return false
    }

    return true
}
