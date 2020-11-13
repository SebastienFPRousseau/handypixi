/*
|--------------------------------------------------------------------------
| Polygon
|--------------------------------------------------------------------------
|
| This file defines the Polygon Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Shape } = require("./shape");
const { Point } = require("./../../../../support/geometry/point");

class Polygon extends Shape {
  /**
   * constructor
   * This function is used in order to build a Polygon.
   * @param {Point[]} points An array of Points that form the polygon.
   * @param {Object}  options  Default options for drawing.
   * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
   * @param {PIXI.Polygon}  points  The Pixi object to build the HandyPixi object.
   */
  constructor(points = [], options = {}, nativeLines = false) {
    super(options, nativeLines);

    if (points instanceof PIXI.Polygon) {
      this._properties = points;
    } else if (Array.isArray(points)) {
      const pixiPoints = [];

      for (let i = 0, l = points.length; i < l; i++) {
        if (!(points[i] instanceof Point)) {
          throw new TypeError(
            "Can't use the " + i + " element, it must be a Point"
          );
        }

        pixiPoints.push(points[i].out);
      }

      this._properties = new PIXI.Polygon(pixiPoints);
    } else {
      throw new TypeError("points must be an array.");
    }

    this.beginFill();
    this._out.drawShape(this._properties);
    this.endFill();
  }

  /**
   * points
   * @getter
   * This function is a getter for the member points.
   * @return {Points[]} An array of Points that form the polygon.
   */
  get points() {
    const outPoints = [];

    for (let i = 0, l = this._properties.points.length; i < l; i += 2) {
      outPoints.push(
        new Point(this._properties.points[i], this._properties.points[i + 1])
      );
    }

    return outPoints;
  }

  /**
   * points
   * @setter
   * This function is a setter for the member points.
   * @param {Points[]}  points  An array of Points that form the polygon.
   */
  set points(points) {
    if (!Array.isArray(points)) {
      throw new TypeError("points must be an array.");
    }

    const pixiPoints = [];

    for (let i = 0, l = points.length; i < l; i++) {
      if (!(points[i] instanceof Point)) {
        throw new TypeError(
          "Can't use the " + i + " element, it must be a Point"
        );
      }

      pixiPoints.push(points[i].x);
      pixiPoints.push(points[i].y);
    }

    this.redraw();
    this._properties.points = pixiPoints;

    return this._properties.points;
  }

  /**
   * isClosed
   * This function is used in order to know if the Polygon is closed.
   * @return {Boolean} If the polygon is closed or not.
   */
  isClosed() {
    return this._properties.closed;
  }

  /**
   * redraw
   * This function is used in order to clear and redraw the Polygon.
   */
  redraw() {
    this.clear();
    this.beginFill();
    this._out.drawShape(this._properties);
    this.endFill();
  }
}

module.exports = {
  Polygon,
};
