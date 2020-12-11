export function goldenRatio(num: number) {
    return num*1.61803398875
}

export function degToRad(deg: number) {
    return deg * Math.PI / 180
}

export function radToDeg(rad: number) {
    return rad * 180 / Math.PI
}

export function toDollars(num: number) {
    return "$" + num.toFixed(2)
}

export function randomRange(start: number, end: number) {
    return Math.floor(Math.random() * (end - start + 1)) + start
}

module.exports.goldenRatio = goldenRatio
module.exports.degToRad = degToRad
module.exports.radToDeg = radToDeg
module.exports.toDollars = toDollars
module.exports.randomRange = randomRange