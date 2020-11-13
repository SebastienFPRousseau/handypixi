/*
|--------------------------------------------------------------------------
| ObservablePoint
|--------------------------------------------------------------------------
|
| This file defines the ObservablePoint Object.
| This object build a PIXI.ObservablePoint for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Point } = require("./point");
const { AbstractPoint } = require("./abstract-point");

class ObservablePoint extends AbstractPoint {
  /**
   * constructor
   * This function is used in order to build an ObservablePoint.
   * @param   {Function}   onMove         Callback when the point's position is changed.
   * @param   {Object}   scope         Owner of callback.
   * @param   {Number}   x         Position of the point on the x axis.
   * @param   {Number}   y         Position of the point on the y axis
   * @param   {PIXI.ObservablePoint}   onMove         The Pixi object to build the HandyPixi object.
   */
  constructor(onMove, scope, x, y) {
    super();

    if (onMove instanceof PIXI.ObservablePoint) {
      this._out = onMove;
    } else {
      if ({}.toString.call(onMove) !== "[object Function]") {
        throw new TypeError("onMove must be a function.");
      }

      if (
        !(
          typeof scope === "object" &&
          {}.toString.call(scope) === "[object Object]"
        )
      ) {
        throw new TypeError("scope must be an object.");
      }

      if ({}.toString.call(x) !== "[object Number]") {
        throw new TypeError("x must be a number.");
      }

      if ({}.toString.call(y) !== "[object Number]") {
        throw new TypeError("y must be a number.");
      }

      this._out = new PIXI.ObservablePoint(onMove, scope, x, y);
    }
  }
}

module.exports = {
  ObservablePoint,
};
