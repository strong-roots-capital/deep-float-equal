/**
 * deep-float-equal
 * Check two objects for float-equality
 */
import Debug from 'debug'
const debug = {
    test: Debug('deep-float-equal')
}

import is from '@sindresorhus/is'
import almostEqual from 'almost-equal'

export { FLT_EPSILON, DBL_EPSILON } from 'almost-equal'


/**
 * Check two objects for float-equality
 *
 * @param a - First object to be compared `b`
 * @param b - Second object to be compared to `a`
 * @returns True if all floats in the objects are equivalent
 */
export default function deepFloatEqual<A, B>(
    a: A,
    b: B,
    absoluteTolerance: number = almostEqual.DBL_EPSILON,
    relativeTolerance: number = almostEqual.DBL_EPSILON
): boolean {

    if ((a as any) === (b as any)) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if ((a as unknown as object).constructor !== (b as unknown as object).constructor) return false;

        var length, i, keys;
        if (Array.isArray(a)) {
            if (!Array.isArray(b)) return false;
            length = a.length;
            if (length !== b.length) return false;
            for (i = length; i-- !== 0;)
                if (!deepFloatEqual(a[i], b[i], absoluteTolerance, relativeTolerance)) return false;
            return true;
        }

        if (a instanceof Map) {
            if (!(b instanceof Map)) return false;
            if (a.size !== b.size) return false;
            for(i of a.entries())
                if (!b.has(i[0])) return false;

            for(i of a.entries())
                if (!deepFloatEqual(i[1], b.get(i[0]), absoluteTolerance, relativeTolerance)) return false;

            return true;
        }

        if (a instanceof Set) {
            if (!(b instanceof Set)) return false;
            if (a.size !== b.size) return false;
            for(i of a.entries())
                if (!b.has(i[0])) return false;

            return true;
        }

        if (is.int8Array(a) ||
            is.uint8Array(a) ||
            is.uint8ClampedArray(a) ||
            is.int16Array(a) ||
            is.uint16Array(a) ||
            is.int32Array(a) ||
            is.uint32Array(a) ||
            is.float32Array(a) ||
            is.float64Array(a) // ||
            // is.bigInt64Array(a) ||
            // is.bigUint64Array(a)
           ) {

            if (!is.int8Array(b) &&
                !is.uint8Array(b) &&
                !is.uint8ClampedArray(b) &&
                !is.int16Array(b) &&
                !is.uint16Array(b) &&
                !is.int32Array(b) &&
                !is.uint32Array(b) &&
                !is.float32Array(b) &&
                !is.float64Array(b) // &&
                // !is.bigInt64Array(b) &&
                // !is.bigUint64Array(b)
               ) {
                return false;
            }

            length = a.length;
            if (length !== b.length) return false;
            for (i = length; i-- !== 0;) {
                const isEqual = almostEqual(a[i], b[i], absoluteTolerance, relativeTolerance)
                debug.test(`${isEqual ? 'equal' : 'UNEQUAL'}: ${a} ~= ${b} with epsilon (${absoluteTolerance},${relativeTolerance})`)
                if (!isEqual) return false;
            }
            return true;
        }


        if (is.regExp(a)) {
            if (!is.regExp(b)) return false;
            return a.source === b.source && a.flags === b.flags;
        }
        if ((a as unknown as object).valueOf !== Object.prototype.valueOf) return (a as unknown as object).valueOf() === (b as unknown as object).valueOf();
        if ((a as unknown as object).toString !== Object.prototype.toString) return (a as unknown as object).toString() === (b as unknown as object).toString();

        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

        for (i = length; i-- !== 0;) {
            var key = keys[i];
            if (!deepFloatEqual((a as any)[key], (b as any)[key], absoluteTolerance, relativeTolerance)) return false;
        }

        return true;
    }

    if (Number.isNaN(a as unknown as number) && Number.isNaN(b as unknown as number)) return true;

    if (is.number(a) && is.number(b)) {
        const isEqual = almostEqual(a, b, absoluteTolerance, relativeTolerance)
        debug.test(`${isEqual ? 'equal' : 'UNEQUAL'}: ${a} ~= ${b} with epsilon (${absoluteTolerance},${relativeTolerance})`)
        return isEqual
    }

    // true if both NaN, false otherwise
    return a!==a && b!==b;
}

//  LocalWords:  absoluteTolerance relativeTolerance isEqual
