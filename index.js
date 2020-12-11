"use strict";
exports.__esModule = true;
exports.randomRange = exports.toDollars = exports.radToDeg = exports.degToRad = exports.goldenRatio = void 0;
function goldenRatio(num) {
    return num * 1.61803398875;
}
exports.goldenRatio = goldenRatio;
function degToRad(deg) {
    return deg * Math.PI / 180;
}
exports.degToRad = degToRad;
function radToDeg(rad) {
    return rad * 180 / Math.PI;
}
exports.radToDeg = radToDeg;
function toDollars(num) {
    return "$" + num.toFixed(2);
}
exports.toDollars = toDollars;
function randomRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
exports.randomRange = randomRange;
module.exports.goldenRatio = goldenRatio;
module.exports.degToRad = degToRad;
module.exports.radToDeg = radToDeg;
module.exports.toDollars = toDollars;
module.exports.randomRange = randomRange;
