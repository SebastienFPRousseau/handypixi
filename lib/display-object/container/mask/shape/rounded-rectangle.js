/*
|--------------------------------------------------------------------------
| RoundedRectangle
|--------------------------------------------------------------------------
|
| This file defines the RoundedRectangle Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Rectangle } = require("./rectangle");

class RoundedRectangle extends Rectangle {
  /**
   * constructor
   * This function is used in order to build a RoundedRectangle.
   * @param {Number}  x  The X coordinate of the center of this RoundedRectangle.
   * @param {Number}  y  The Y coordinate of the center of this RoundedRectangle.
   * @param {Number}  width  The overall width of this RoundedRectangle.
   * @param {Number}  height  The overall height of this RoundedRectangle.
   * @param {Number}  radius  Controls the radius of the rounded corners.
   * @param {Options}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @param {PIXI.RoundedRectangle}  x  The Pixi object to build the HandyPixi object.
   */
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    radius = 20,
    options = {},
    nativeLines = false
  ) {
    super(null, y, width, height, options, nativeLines);

    if ({}.toString.call(radius) !== "[object Number]") {
      throw new TypeError("radius must be a number.");
    }

    if (x instanceof PIXI.RoundedRectangle) {
      this._properties = x;
    } else {
      if ({}.toString.call(x) !== "[object Number]") {
        throw new TypeError("x must be a number.");
      }

      this._properties = new PIXI.RoundedRectangle(x, y, width, height, radius);
    }

    this.beginFill();
    this._out.drawShape(this._properties);
    this.endFill();
  }

  /**
   * radius
   * @getter
   * This function is a getter for the member radius.
   * @return {Number} Controls the radius of the rounded corners.
   */
  get radius() {
    return this._properties.radius;
  }

  /**
   * radius
   * @setter
   * This function is a setter for the member radius.
   * @param {Number}  radius  Controls the radius of the rounded corners.
   */
  set radius(radius) {
    if ({}.toString.call(radius) !== "[object Number]") {
      throw new TypeError("radius must be a number.");
    }

    this._properties.radius = radius;
    this.redraw();
  }
}

module.exports = {
  RoundedRectangle,
};
