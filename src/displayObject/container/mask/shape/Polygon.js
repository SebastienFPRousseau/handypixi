"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Polygon
|--------------------------------------------------------------------------
|
| This file defines the Polygon Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Shape.js"),
    Shape = _require.Shape;

var _require2 = require("./../../../../support/geometry/Point.js"),
    Point = _require2.Point;

var Polygon = function (_Shape) {
	_inherits(Polygon, _Shape);

	/**
  * constructor
  * This function is used in order to build a Polygon.
  * @param {Point[]} points An array of Points that form the polygon.
  * @param {Object}  options  Default options for drawing.
  * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
  * @param {PIXI.Polygon}  points  The Pixi object to build the HandyPixi object.
  */
	function Polygon() {
		var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var nativeLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		_classCallCheck(this, Polygon);

		var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this, options, nativeLines));

		if (points instanceof PIXI.Polygon) {
			_this._properties = points;
		} else if (!Array.isArray(points)) {
			throw new TypeError("points must be an array.");
		} else {
			var pixiPoints = [];

			for (var i = 0, l = points.length; i < l; i++) {
				if (!(points[i] instanceof Point)) throw new TypeError("Can't use the " + i + " element, it must be a Point");

				pixiPoints.push(points[i].out);
			}

			_this._properties = new PIXI.Polygon(pixiPoints);
		}

		_this.beginFill();
		_this._out.drawShape(_this._properties);
		_this.endFill();
		return _this;
	}

	/**
  * points
  * @getter
  * This function is a getter for the member points.
  * @return {Points[]} An array of Points that form the polygon.
  */


	_createClass(Polygon, [{
		key: "isClosed",


		/**
   * isClosed
   * This function is used in order to know if the Polygon is closed.
   * @return {Boolean} If the polygon is closed or not.
   */
		value: function isClosed() {
			return this._properties.closed;
		}

		/**
   * redraw
   * This function is used in order to clear and redraw the Polygon.
   */

	}, {
		key: "redraw",
		value: function redraw() {
			this.clear();
			this.beginFill();
			this._out.drawShape(this._properties);
			this.endFill();
		}
	}, {
		key: "points",
		get: function get() {
			var outPoints = [];

			for (var i = 0, l = this._properties.points.length; i < l; i += 2) {
				outPoints.push(new Point(this._properties.points[i], this._properties.points[i + 1]));
			}return outPoints;
		}

		/**
   * points
   * @setter
   * This function is a setter for the member points.
   * @param {Points[]}  points  An array of Points that form the polygon.
   */
		,
		set: function set(points) {
			if (!Array.isArray(points)) throw new TypeError("points must be an array.");

			var pixiPoints = [];

			for (var i = 0, l = points.length; i < l; i++) {
				if (!(points[i] instanceof Point)) throw new TypeError("Can't use the " + i + " element, it must be a Point");

				pixiPoints.push(points[i].x);
				pixiPoints.push(points[i].y);
			}

			this.redraw();

			return this._properties.points = pixiPoints;
		}
	}]);

	return Polygon;
}(Shape);

;

module.exports = {
	Polygon: Polygon
};