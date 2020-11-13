/*
|--------------------------------------------------------------------------
| AbstractPoint
|--------------------------------------------------------------------------
|
| This file defines the AbstractPoint Object.
| This object is the abstract point for Point and ObservablePoint.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class AbstractPoint {
  /**
   * constructor
   * This function is used in order to forbid the built of an AbstractPoint.
   */
  constructor() {
    if (this.constructor === AbstractPoint) {
      throw new TypeError(
        "Cannot construct Abstract instances like AbstractPoint directly."
      );
    }
  }

   /**
   * out
   * @getter
   * This function is a getter for the member _out.
   * @return  {PIXI.Point|PIXI.ObservablePoint} The PIXI Object used by this object.
   */
  get out() {
    return this._out;
  }

  /**
   * x
   * @getter
   * This function is a getter for the member x.
   * @return  {Number} Position of the point on the x axis.
   */
  get x() {
    return this._out.x;
  }

  /**
   * x
   * @setter
   * This function is a setter for the member x.
   * @param  {Number}   x    Position of the point on the x axis.
   */
  set x(x) {
    if ({}.toString.call(x) !== "[object Number]") {
      throw new TypeError("x must be a number.");
    }

    this._out.x = x;
  }

  /**
   * y
   * @getter
   * This function is a getter for the member y.
   * @return  {Number} Position of the point on the y axis.
   */
  get y() {
    return this._out.y;
  }

  /**
   * y
   * @setter
   * This function is a setter for the member y.
   * @param  {Number}   y  Position of the point on the y axis.
   */
  set y(y) {
    if ({}.toString.call(y) !== "[object Number]") {
      throw new TypeError("y must be a number.");
    }

    this._out.y = y;
  }

  /**
   * set
   * This function is a setter for the members x and y.
   * @param  {Number} x   Position of the point on the x axis.
   * @param  {Number} y   Position of the point on the y axis.
   */
  set(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * copy
   * This function is used in order to copy this ObservablePoint into the given ObservablePoint.
   * @param {ObservablePoint|Point} point   The ObservablePoint to change.
   */
  copy(point) {
    if (!(point instanceof AbstractPoint && point.constructor !== AbstractPoint)) {
      throw new TypeError("point must be a Point or an ObservablePoint.");
    }

    this._out.copy(point.out);
  }

  /**
   * clone
   * This function is used in order to clone this Point.
   * @return {Point|ObservablePoint} A copy of this Point.
   */
  clone() {
    return new this.constructor(this._out.clone());
  }

  /**
   * equals
   * This function is used in order to know if the given Point is equal to this Point.
   * @param {ObservablePoint|Point}  point  The point to test.
   * @return {Boolean} True if the points are equals.
   */
  equals(point) {
    if (!(point instanceof AbstractPoint && point.constructor !== AbstractPoint)) {
      throw new TypeError("point must be a Point or an ObservablePoint.");
    }

    return this._out.equals(point.out);
  }
}

module.exports = {
  AbstractPoint,
};
