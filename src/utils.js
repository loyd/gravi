export const noopFrag = '#version 300 es\nvoid main() {}';

export const log4 = x => .5 * Math.log2(x);

export function invariant(expr) {
    if (!expr) {
        const error = new Error;
        error.name = 'AssertionError';
        throw error;
    }
}
