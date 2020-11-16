/*
|--------------------------------------------------------------------------
| Point
|--------------------------------------------------------------------------
|
| This file defines the Point Object.
| This object build a PIXI.Point for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { AbstractPoint } = require("./abstract-point");

class Point extends AbstractPoint {
  /**
   * constructor
   * This function is used in order to build a Point.
   * @param   {Number}   x         Position of the point on the x axis.
   * @param   {Number}   y         Position of the point on the y axis
   * @param   {PIXI.Point}   x         The Pixi object to build the HandyPixi object.
   */
  constructor(x, y) {
    super();

    if (x instanceof PIXI.Point) {
      this._out = x;
    } else {
      if ({}.toString.call(x) !== "[object Number]") {
        throw new TypeError("x must be a number.");
      }

      if ({}.toString.call(y) !== "[object Number]") {
        throw new TypeError("y must be a number.");
      }

      this._out = new PIXI.Point(x, y);
    }
  }
}

module.exports = {
  Point,
};
