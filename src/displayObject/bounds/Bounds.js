"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Bounds
|--------------------------------------------------------------------------
|
| This file defines the Ticker Object.
| This object build a PIXI.Rectangle for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../../support/geometry/Point.js"),
    Point = _require.Point;

var _require2 = require("./../../support/geometry/Matrix.js"),
    TransformBase = _require2.TransformBase;

var Bounds = function () {
	/**
  * constructor
  * This function is used in order to build a Bounds.
  * @param {PIXI.Rectangle}  pixiObj  A Pixi object to build the HandyPixi object.
  * @param {PIXI.Bounds}  pixiObj  A Pixi object to build the HandyPixi object.
  */
	function Bounds() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Bounds);

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
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Rectangle} The PIXI Object used by this object. 
 */


	_createClass(Bounds, [{
		key: "addBounds",


		/**
   * addBounds
   * This function is used in order to add other Bounds.
   * @param {Bounds}  bounds  Bounds to add.
   */
		value: function addBounds(bounds) {
			if (!(bounds instanceof Bounds)) throw new TypeError("bounds must be a Bounds.");

			this._builder.addBounds(bounds.builder);
		}

		/**
   * addBoundsArea
   * This function is used in order to add other Bounds, masked with Rectangle
   * @param {Bounds}  bounds  Bounds to add.
   * @param {Bounds}  area  Mask to use.
   */

	}, {
		key: "addBoundsArea",
		value: function addBoundsArea(bounds, area) {
			if (!(bounds instanceof Bounds)) throw new TypeError("bounds must be a Bounds.");

			if (!(area instanceof Bounds)) throw new TypeError("area must be a Bounds.");

			this._builder.addBoundsArea(bounds.builder, area.out);
		}

		/**
   * addBoundsMask
   * This function is used in order to add other Bounds, masked with Bounds. 
   * @param {Bounds}  bounds  Bounds to add.
   * @param {Bounds}  mask  Mask to use.
   */

	}, {
		key: "addBoundsMask",
		value: function addBoundsMask(bounds, mask) {
			if (!(bounds instanceof Bounds)) throw new TypeError("bounds must be a Bounds.");

			if (!(mask instanceof Bounds)) throw new TypeError("mask must be a Bounds.");

			this._builder.addBoundsMask(bounds.builder, mask.builder);
		}

		/**
   * addFrame
   * This function is used in order to add sprite frame, transformed.
   * @param {TransformBase}  transform  
   * @param {Point}  p0
   * @param {Point}  p1
   */

	}, {
		key: "addFrame",
		value: function addFrame(transform, p0, p1) {
			if (!(transform instanceof TransformBase)) throw new TypeError("transform must be a TransformBase.");

			if (!(p0 instanceof Point)) throw new TypeError("p0 must be a Point.");

			if (!(p1 instanceof Point)) throw new TypeError("p1 must be a Point.");

			this._builder.addFrame(transform.out, p0.x, p0.y, p1.x, p1.y);
		}

		/**
   * addPoint
   * This function is used in order to add a point on the Bounds.
   * @param {Point}  point  Point to add.
   */

	}, {
		key: "addPoint",
		value: function addPoint(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			this._builder.addPoint(point.out);
		}

		/**
   * addQuad
   * This function is used in order to add a quad, not transformed.
   * @param {Float32Array}  vertices  The vertices of the quad to add. 
   */

	}, {
		key: "addQuad",
		value: function addQuad(vertices) {
			if (!(vertices instanceof Float32Array)) throw new TypeError("vertices must be a Float32Array.");

			this._builder.addQuad(vertices);
		}

		/**
   * addVertices
   * This function is used in order to add an array of vertices.
   * @param {TransformBase}  transform
   * @param {Float32Array}  vertices
   * @param {Number}  beginOffset
   * @param {Number}  endOffset
   */

	}, {
		key: "addVertices",
		value: function addVertices(transform, vertices, beginOffset, endOffset) {
			if (!(transform instanceof TransformBase)) throw new TypeError("transform must be a TransformBase.");

			if (!(vertices instanceof Float32Array)) throw new TypeError("vertices must be a Float32Array.");

			if ({}.toString.call(beginOffset) !== "[object Number]") throw new TypeError("beginOffset must be a number.");

			if ({}.toString.call(endOffset) !== "[object Number]") throw new TypeError("endOffset must be a number.");

			this._builder.addVertices(transform.out, vertices, beginOffset, endOffset);
		}

		/**
   * clear
   * This function is used in order to clears the bounds and resets
   */

	}, {
		key: "clear",
		value: function clear() {
			this._builder.clear();
		}

		/**
   * contains
   * This function is used in order to know if the Bounds contains the point.
   * @param {Point} point The point to observe.
   * @return {Boolean} The point belongs to the bounds or not.
   */

	}, {
		key: "contains",
		value: function contains(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return this.out.contains(point.out);
		}

		/**
   * isBlank
   * This function is used in order to check if bounds are empty.
   * @return {Boolean} The Bounds have limits or not. 
   */

	}, {
		key: "isBlank",
		value: function isBlank() {
			return this._builder.isEmpty();
		}
	}, {
		key: "out",
		get: function get() {
			this._out = this._builder.getRectangle(this._out);
			return this._out;
		}

		/**
  * out
  * @getter
  * This function is a getter for the member _builder.
  * @return  {PIXI.Bounds} The PIXI Object used by this object. 
  */

	}, {
		key: "builder",
		get: function get() {
			return this._builder;
		}

		/** 
   * maxX
   * @getter
   * This function is a getter for the member maxX.
   * @return {Number} Horizontal maximum limit. 
   */

	}, {
		key: "maxX",
		get: function get() {
			return this._builder.maxX;
		}

		/** 
   * maxX
   * @setter
   * This function is a setter for the member maxX.
   * @param {Number} maxX Horizontal maximum limit. 
   */
		,
		set: function set(maxX) {
			if ({}.toString.call(maxX) !== "[object Number]") throw new TypeError("maxX must be a number.");

			this._builder.maxX = maxX;
		}

		/** 
   * minX
   * @getter
   * This function is a getter for the member minX.
   * @return {Number} Horizontal minimum limit. 
   */

	}, {
		key: "minX",
		get: function get() {
			return this._builder.minX;
		}

		/** 
   * minX
   * @setter
   * This function is a setter for the member minX.
   * @param {Number} minX Horizontal minimum limit. 
   */
		,
		set: function set(minX) {
			if ({}.toString.call(minX) !== "[object Number]") throw new TypeError("minX must be a number.");

			this._builder.minX = minX;
		}

		/** 
   * maxY
   * @getter
   * This function is a getter for the member maxY.
   * @return {Number} Vertical maximum limit. 
   */

	}, {
		key: "maxY",
		get: function get() {
			return this._builder.maxY;
		}

		/** 
   * maxY
   * @setter
   * This function is a setter for the member maxY.
   * @param {Number} maxY Vertical maximum limit. 
   */
		,
		set: function set(maxY) {
			if ({}.toString.call(maxY) !== "[object Number]") throw new TypeError("maxY must be a number.");

			this._builder.maxY = maxY;
		}

		/** 
   * minY
   * @getter
   * This function is a getter for the member minY.
   * @return {Number} Vertical minimum limit. 
   */

	}, {
		key: "minY",
		get: function get() {
			return this._builder.minY;
		}

		/** 
   * minY
   * @setter
   * This function is a setter for the member minY.
   * @param {Number} minY Vertical minimum limit. 
   */
		,
		set: function set(minY) {
			if ({}.toString.call(minY) !== "[object Number]") throw new TypeError("minY must be a number.");

			this._builder.minY = minY;
		}
	}]);

	return Bounds;
}();

;

module.exports = {
	Bounds: Bounds
};