/*
|--------------------------------------------------------------------------
| Bounds
|--------------------------------------------------------------------------
|
| This file defines the Bounds Object.
| This object build a PIXI.Rectangle for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Point } = require("./../../support/geometry/point");
const { TransformBase } = require("./../../support/geometry/matrix");

class Bounds {
  /**
   * Create a Bounds object.
   * @param {PIXI.Rectangle|Pixi.Bounds}  pixiObj  A Pixi object to build the HandyPixi object.
   */
  constructor(pixiObj = null) {
    if (pixiObj instanceof PIXI.Rectangle) {
      this._out = pixiObj;
      this._builder = new PIXI.Bounds();

      this._builder.minX = this._out.x;
      this._builder.minY = this._out.y;
      this._builder.maxX = this._out.x + this._out.width;
      this._builder.maxY = this._out.y + this._out.height;
    } else if (pixiObj instanceof PIXI.Bounds) {
      this._builder = pixiObj;
      this._out = this._builder.getRectangle(this._out);
    } else {
      this._builder = new PIXI.Bounds();
      this._out = this._builder.getRectangle(this._out);
    }
  }

  /**
   * @getter
   * This function is a getter for the member _out.
   * @return  {PIXI.Rectangle} The PIXI Object used by this object.
   */
  get out() {
    this._out = this._builder.getRectangle(this._out);
    return this._out;
  }

  /**
   * @getter
   * This function is a getter for the member _builder.
   * @return  {PIXI.Bounds} The PIXI Object used by this object.
   */
  get builder() {
    return this._builder;
  }

  /**
   * @getter
   * This function is a getter for the member maxX.
   * @return {Number} Horizontal maximum limit.
   */
  get maxX() {
    return this._builder.maxX;
  }

  /**
   * @setter
   * This function is a setter for the member maxX.
   * @param {Number} maxX Horizontal maximum limit.
   */
  set maxX(maxX) {
    if ({}.toString.call(maxX) !== "[object Number]")
      throw new TypeError("maxX must be a number.");

    this._builder.maxX = maxX;
  }

  /**
   * @getter
   * This function is a getter for the member minX.
   * @return {Number} Horizontal minimum limit.
   */
  get minX() {
    return this._builder.minX;
  }

  /**
   * @setter
   * This function is a setter for the member minX.
   * @param {Number} minX Horizontal minimum limit.
   */
  set minX(minX) {
    if ({}.toString.call(minX) !== "[object Number]")
      throw new TypeError("minX must be a number.");

    this._builder.minX = minX;
  }

  /**
   * @getter
   * This function is a getter for the member maxY.
   * @return {Number} Vertical maximum limit.
   */
  get maxY() {
    return this._builder.maxY;
  }

  /**
   * @setter
   * This function is a setter for the member maxY.
   * @param {Number} maxY Vertical maximum limit.
   */
  set maxY(maxY) {
    if ({}.toString.call(maxY) !== "[object Number]")
      throw new TypeError("maxY must be a number.");

    this._builder.maxY = maxY;
  }

  /**
   * @getter
   * This function is a getter for the member minY.
   * @return {Number} Vertical minimum limit.
   */
  get minY() {
    return this._builder.minY;
  }

  /**
   * @setter
   * This function is a setter for the member minY.
   * @param {Number} minY Vertical minimum limit.
   */
  set minY(minY) {
    if ({}.toString.call(minY) !== "[object Number]")
      throw new TypeError("minY must be a number.");

    this._builder.minY = minY;
  }

  /**
   * This function is used in order to add other Bounds.
   * @param {Bounds}  bounds  Bounds to add.
   */
  addBounds(bounds) {
    if (!(bounds instanceof Bounds))
      throw new TypeError("bounds must be a Bounds.");

    this._builder.addBounds(bounds.builder);
  }

  /**
   * This function is used in order to add other Bounds, masked with Rectangle
   * @param {Bounds}  bounds  Bounds to add.
   * @param {Bounds}  area  Mask to use.
   */
  addBoundsArea(bounds, area) {
    if (!(bounds instanceof Bounds))
      throw new TypeError("bounds must be a Bounds.");

    if (!(area instanceof Bounds))
      throw new TypeError("area must be a Bounds.");

    this._builder.addBoundsArea(bounds.builder, area.out);
  }

  /**
   * This function is used in order to add other Bounds, masked with Bounds.
   * @param {Bounds}  bounds  Bounds to add.
   * @param {Bounds}  mask  Mask to use.
   */
  addBoundsMask(bounds, mask) {
    if (!(bounds instanceof Bounds))
      throw new TypeError("bounds must be a Bounds.");

    if (!(mask instanceof Bounds))
      throw new TypeError("mask must be a Bounds.");

    this._builder.addBoundsMask(bounds.builder, mask.builder);
  }

  /**
   * This function is used in order to add sprite frame, transformed.
   * @param {TransformBase}   transform   Transformation to apply
   * @param {Point}           p0          First point
   * @param {Point}           p1          Second point
   */
  addFrame(transform, p0, p1) {
    if (!(transform instanceof TransformBase))
      throw new TypeError("transform must be a TransformBase.");

    if (!(p0 instanceof Point)) throw new TypeError("p0 must be a Point.");

    if (!(p1 instanceof Point)) throw new TypeError("p1 must be a Point.");

    this._builder.addFrame(transform.out, p0.x, p0.y, p1.x, p1.y);
  }

  /**
   * This function is used in order to add a point on the Bounds.
   * @param {Point}  point  Point to add.
   */
  addPoint(point) {
    if (!(point instanceof Point))
      throw new TypeError("point must be a Point.");

    this._builder.addPoint(point.out);
  }

  /**
   * This function is used in order to add a quad, not transformed.
   * @param {Float32Array}  vertices  The vertices of the quad to add.
   */
  addQuad(vertices) {
    if (!(vertices instanceof Float32Array))
      throw new TypeError("vertices must be a Float32Array.");

    this._builder.addQuad(vertices);
  }

  /**
   * This function is used in order to add an array of vertices.
   * @param {TransformBase}   transform       Transformation to apply
   * @param {Float32Array}    vertices        Array of vertices
   * @param {Number}          beginOffset     Begin offset value
   * @param {Number}          endOffset       Ending offset value
   */
  addVertices(transform, vertices, beginOffset, endOffset) {
    if (!(transform instanceof TransformBase))
      throw new TypeError("transform must be a TransformBase.");

    if (!(vertices instanceof Float32Array))
      throw new TypeError("vertices must be a Float32Array.");

    if ({}.toString.call(beginOffset) !== "[object Number]")
      throw new TypeError("beginOffset must be a number.");

    if ({}.toString.call(endOffset) !== "[object Number]")
      throw new TypeError("endOffset must be a number.");

    this._builder.addVertices(transform.out, vertices, beginOffset, endOffset);
  }

  /**
   * This function is used in order to clears the bounds and resets
   */
  clear() {
    this._builder.clear();
  }

  /**
   * This function is used in order to know if the Bounds contains the point.
   * @param {Point} point The point to observe.
   * @return {Boolean} The point belongs to the bounds or not.
   */
  contains(point) {
    if (!(point instanceof Point))
      throw new TypeError("point must be a Point.");

    return this.out.contains(point.out);
  }

  /**
   * This function is used in order to check if bounds are empty.
   * @return {Boolean} The Bounds have limits or not.
   */
  isBlank() {
    return this._builder.isEmpty();
  }
}

module.exports = {
  Bounds,
};
