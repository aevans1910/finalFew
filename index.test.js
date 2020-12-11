const lib = require("./index")

describe('goldenRatio()', () => {
    it('3', () => {
        expect(lib.goldenRatio(3)).toBe(3*1.61803398875)
    })

    it('1', () => {
        expect(lib.goldenRatio(1)).toBe(1.61803398875)
    })

    it('0', () => {
        expect(lib.goldenRatio(0)).toBe(0)
    })

    it('-1', () => {
        expect(lib.goldenRatio(-1)).toBe(-1.61803398875)
    })
})

describe('degToRad()', () => {
    it('90', () => {
        expect(lib.degToRad(90)).toBe(90 * Math.PI / 180)
    })

    it('180', () => {
        expect(lib.degToRad(180)).toBe(180 * Math.PI / 180)
    })

    it('360', () => {
        expect(lib.degToRad(360)).toBe(360 * Math.PI / 180)
    })
})

describe('radToDeg()', () => {
    it('3', () => {
        expect(lib.radToDeg(3)).toBe(3 * 180 / Math.PI)
    })

    it('1.5', () => {
        expect(lib.radToDeg(1.5)).toBe(1.5 * 180 / Math.PI)
    })

    it('0', () => {
        expect(lib.radToDeg(0)).toBe(0)
    })
})

describe('toDollars()', () => {
    it('3', () => {
        expect(lib.toDollars(3)).toBe('$3.00')
    })

    it('1.799999', () => {
        expect(lib.toDollars(1.799999)).toBe('$1.80')
    })

    it('2.5', () => {
        expect(lib.toDollars(2.5)).toBe('$2.50')
    })

    it('0', () => {
        expect(lib.toDollars(0)).toBe('$0.00')
    })
})

describe('randomRange()', () => {
    it('3, 5', () => {
        expect(lib.randomRange(3, 5)).toBeGreaterThanOrEqual(3)
        expect(lib.randomRange(3, 5)).toBeLessThanOrEqual(5)
    })

    it('0, 100', () => {
        expect(lib.randomRange(0, 100)).toBeGreaterThanOrEqual(0)
        expect(lib.randomRange(0, 100)).toBeLessThanOrEqual(100)
    })

    it('1, 2', () => {
        expect(lib.randomRange(1, 2)).toBeGreaterThanOrEqual(1)
        expect(lib.randomRange(1, 2)).toBeLessThanOrEqual(2)
    })
})