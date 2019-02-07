/*
|--------------------------------------------------------------------------
| Star
|--------------------------------------------------------------------------
|
| This file defines the Star Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Shape } = require("./shape");

class Star extends Shape {
  /**
   * constructor
   * This function is used in order to build a Star.
   * @param {Number}  x  The X coordinate of the center of this star.
   * @param {Number}  y  The Y coordinate of the center of this star.
   * @param {Number} 	pointsNumber  The number of points of this star.
   * @param {Number}  radius  The radius of the star.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   */
  constructor(
    x = 0,
    y = 0,
    pointsNumber = 5,
    radius = 10,
    options = {},
    nativeLines = false
  ) {
    super(options, nativeLines);

    if ({}.toString.call(x) !== "[object Number]")
      throw new TypeError("x must be a number.");

    if ({}.toString.call(y) !== "[object Number]")
      throw new TypeError("y must be a number.");

    if ({}.toString.call(pointsNumber) !== "[object Number]")
      throw new TypeError("pointsNumber must be a number.");

    if ({}.toString.call(radius) !== "[object Number]")
      throw new TypeError("radius must be a number.");

    this._properties = {
      x,
      y,
      pointsNumber,
      radius,
      innerRadius: options.innerRadius ? options.innerRadius : radius / 2.0,
      rotation: options.rotation ? options.rotation : 0,
    };

    this.beginFill();
    this._out.drawStar(
      x,
      y,
      pointsNumber,
      radius,
      options.innerRadius,
      options.rotation
    );
    this.endFill();
  }

  /**
   * radius
   * @getter
   * This function is a getter for the member radius.
   * @return {Number} The radius of the star.
   */
  get radius() {
    return this._properties.radius;
  }

  /**
   * radius
   * @setter
   * This function is a setter for the member radius.
   * @param {Number}  radius  The radius of the star.
   */
  set radius(radius) {
    if ({}.toString.call(radius) !== "[object Number]")
      throw new TypeError("radius must be a number.");

    this._properties.radius = radius;
    this.redraw();
  }

  /**
   * x
   * @getter
   * This function is a getter for the member x.
   * @return {Number} The X coordinate of the center of this star.
   */
  get x() {
    return this._properties.x;
  }

  /**
   * x
   * @setter
   * This function is a setter for the member x.
   * @param {Number}  x  The X coordinate of the center of this star.
   */
  set x(x) {
    if ({}.toString.call(x) !== "[object Number]")
      throw new TypeError("x must be a number.");

    this._properties.x = x;
    this.redraw();
  }

  /**
   * y
   * @getter
   * This function is a getter for the member y.
   * @return {Number} The Y coordinate of the center of this star.
   */
  get y() {
    return this._properties.y;
  }

  /**
   * y
   * @setter
   * This function is a setter for the member y.
   * @param {Number}  y  The Y coordinate of the center of this star.
   */
  set y(y) {
    if ({}.toString.call(y) !== "[object Number]")
      throw new TypeError("y must be a number.");

    this._properties.y = y;
    this.redraw();
  }

  /**
   * innerRadius
   * @getter
   * This function is a getter for the member innerRadius.
   * @return {Number} The inner radius between points of the star.
   */
  get innerRadius() {
    return this._properties.innerRadius;
  }

  /**
   * innerRadius
   * @setter
   * This function is a setter for the member innerRadius.
   * @param {Number}  innerRadius  The inner radius between points of the star.
   */
  set innerRadius(innerRadius) {
    if ({}.toString.call(innerRadius) !== "[object Number]")
      throw new TypeError("innerRadius must be a number.");

    this._properties.innerRadius = innerRadius;
    this.redraw();
  }

  /**
   * rotation
   * @getter
   * This function is a getter for the member rotation.
   * @return {Number} The rotation in radians of the star.
   */
  get rotation() {
    return this._properties.rotation;
  }

  /**
   * rotation
   * @setter
   * This function is a setter for the member rotation.
   * @param {Number}  rotation  The rotation in radians of the star.
   */
  set rotation(rotation) {
    if ({}.toString.call(rotation) !== "[object Number]")
      throw new TypeError("rotation must be a number.");

    this._properties.rotation = rotation;
    this.redraw();
  }

  /**
   * pointsNumber
   * @getter
   * This function is a getter for the member pointsNumber.
   * @return {Number} The number of points of the star, must be > 1.
   */
  get pointsNumber() {
    return this._properties.pointsNumber;
  }

  /**
   * pointsNumber
   * @setter
   * This function is a setter for the member pointsNumber.
   * @param {Number}  pointsNumber  The number of points of the star, must be > 1.
   */
  set pointsNumber(pointsNumber) {
    if (
      {}.toString.call(pointsNumber) !== "[object Number]" ||
      pointsNumber <= 1
    )
      throw new TypeError("pointsNumber must be a number > 1.");

    this._properties.pointsNumber = pointsNumber;
    this.redraw();
  }

  /**
   * redraw
   * This function is used in order to clear and redraw the Star.
   */
  redraw() {
    this.clear();
    this.beginFill();
    this._out.drawStar(
      this._properties.x,
      this._properties.y,
      this._properties.pointsNumber,
      this._properties.radius,
      this._properties.innerRadius,
      this._properties.rotation
    );
    this.endFill();
  }
}

module.exports = {
  Star,
};
