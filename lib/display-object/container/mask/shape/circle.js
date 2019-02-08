/*
|--------------------------------------------------------------------------
| Circle
|--------------------------------------------------------------------------
|
| This file defines the Circle Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Shape } = require("./shape");

class Circle extends Shape {
  /**
   * constructor
   * This function is used in order to build a Circle.
   * @param {Number}  x  The X coordinate of the center of this circle.
   * @param {Number}  y  The Y coordinate of the center of this circle.
   * @param {Number}  radius  The radius of the circle.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @param {PIXI.Circle}  x  The Pixi object to build the HandyPixi object.
   */
  constructor(x = 0, y = 0, radius = 0, options = {}, nativeLines = false) {
    super(options, nativeLines);

    if ({}.toString.call(y) !== "[object Number]") {
      throw new TypeError("y must be a number.");
    }

    if ({}.toString.call(radius) !== "[object Number]") {
      throw new TypeError("radius must be a number.");
    }

    if (x instanceof PIXI.Circle) {
      this._properties = x;
    } else {
      if ({}.toString.call(x) !== "[object Number]") {
        throw new TypeError("x must be a number.");
      }

      this._properties = new PIXI.Circle(x, y, radius);
    }

    this.beginFill();
    this._out.drawShape(this._properties);
    this.endFill();
  }

  /**
   * radius
   * @getter
   * This function is a getter for the member radius.
   * @return {Number} The radius of the circle.
   */
  get radius() {
    return this._properties.radius;
  }

  /**
   * radius
   * @setter
   * This function is a setter for the member radius.
   * @param {Number}  radius  The radius of the circle.
   */
  set radius(radius) {
    if ({}.toString.call(radius) !== "[object Number]") {
      throw new TypeError("radius must be a number.");
    }

    this._properties.radius = radius;
    this.redraw();
  }

  /**
   * x
   * @getter
   * This function is a getter for the member x.
   * @return {Number} The X coordinate of the center of this circle.
   */
  get x() {
    return this._properties.x;
  }

  /**
   * x
   * @setter
   * This function is a setter for the member x.
   * @param {Number}  x  The X coordinate of the center of this circle.
   */
  set x(x) {
    if ({}.toString.call(x) !== "[object Number]") {
      throw new TypeError("x must be a number.");
    }

    this._properties.x = x;
    this.redraw();
  }

  /**
   * y
   * @getter
   * This function is a getter for the member y.
   * @return {Number} The Y coordinate of the center of this circle.
   */
  get y() {
    return this._properties.y;
  }

  /**
   * y
   * @setter
   * This function is a setter for the member y.
   * @param {Number}  y  The Y coordinate of the center of this circle.
   */
  set y(y) {
    if ({}.toString.call(y) !== "[object Number]") {
      throw new TypeError("y must be a number.");
    }

    this._properties.y = y;
    this.redraw();
  }

  /**
   * redraw
   * This function is used in order to clear and redraw the Circle.
   */
  redraw() {
    this.clear();
    this.beginFill();
    this._out.drawShape(this._properties);
    this.endFill();
  }
}

module.exports = {
  Circle,
};
