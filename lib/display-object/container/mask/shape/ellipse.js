/*
|--------------------------------------------------------------------------
| Ellipse
|--------------------------------------------------------------------------
|
| This file defines the Ellipse Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Shape } = require("./shape");

class Ellipse extends Shape {
  /**
   * constructor
   * This function is used in order to build a Ellipse.
   * @param {Number}  x  The X coordinate of the center of this Ellipse.
   * @param {Number}  y  The Y coordinate of the center of this Ellipse.
   * @param {Number}  width  The half width of this ellipse.
   * @param {Number}  height  The half height of this ellipse.
   * @param {Options}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @param {PIXI.Ellipse}  x  The Pixi object to build the HandyPixi object.
   */
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    options = {},
    nativeLines = false
  ) {
    super(options, nativeLines);

    if ({}.toString.call(y) !== "[object Number]") {
      throw new TypeError("y must be a number.");
    }

    if ({}.toString.call(width) !== "[object Number]") {
      throw new TypeError("width must be a number.");
    }

    if ({}.toString.call(height) !== "[object Number]") {
      throw new TypeError("height must be a number.");
    }

    if (x instanceof PIXI.Ellipse) {
      this._properties = x;
    } else {
      if ({}.toString.call(x) !== "[object Number]") {
        throw new TypeError("x must be a number.");
      }

      this._properties = new PIXI.Ellipse(x, y, width, height);
    }

    this.beginFill();
    this._out.drawShape(this._properties);
    this.endFill();
  }

  /**
   * halfWidth
   * @getter
   * This function is a getter for the member halfWidth.
   * @return {Number} The half width of this ellipse.
   */
  get halfWidth() {
    return this._properties.width;
  }

  /**
   * halfWidth
   * @setter
   * This function is a setter for the member halfWidth.
   * @param {Number}  width  The half width of this ellipse.
   */
  set halfWidth(width) {
    if ({}.toString.call(width) !== "[object Number]") {
      throw new TypeError("width must be a number.");
    }

    this._properties.width = width;
    this.redraw();
  }

  /**
   * halfHeight
   * @getter
   * This function is a getter for the member halfHeight.
   * @return {Number} The half height of this ellipse.
   */
  get halfHeight() {
    return this._properties.height;
  }

  /**
   * halfHeight
   * @setter
   * This function is a setter for the member halfHeight.
   * @param {Number}  height  The half height of this ellipse.
   */
  set halfHeight(height) {
    if ({}.toString.call(height) !== "[object Number]") {
      throw new TypeError("height must be a number.");
    }

    this._properties.height = height;
    this.redraw();
  }

  /**
   * x
   * @getter
   * This function is a getter for the member x.
   * @return {Number} The X coordinate of the center of this Ellipse.
   */
  get x() {
    return this._properties.x;
  }

  /**
   * x
   * @setter
   * This function is a setter for the member x.
   * @param {Number}  x  The X coordinate of the center of this Ellipse.
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
   * @return {Number} The Y coordinate of the center of this Ellipse.
   */
  get y() {
    return this._properties.y;
  }

  /**
   * y
   * @setter
   * This function is a setter for the member y.
   * @param {Number}  y  The Y coordinate of the center of this Ellipse.
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
   * This function is used in order to clear and redraw the Ellipse.
   */
  redraw() {
    this.clear();
    this.beginFill();
    this._out.drawShape(this._properties);
    this.endFill();
  }
}

module.exports = {
  Ellipse,
};
