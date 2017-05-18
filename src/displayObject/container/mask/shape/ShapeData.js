"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| ShapeData
|--------------------------------------------------------------------------
|
| This file defines the ShapeData Object.
| This object build a PIXI.GraphicsData for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var ShapeData = function () {
	/**
  * constructor
  * This function is used in order to build a ShapeData.
  * @param {Object}  options  Default options for drawing.
  * @param {Boolean}  fill  Whether or not the shape is filled with a colour.
  * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP.
  * @param {PIXI.Shape}  shape  The shape properties to draw.
  * @param {PIXI.GraphicsData}  options  The Pixi object to build the HandyPixi object.
  */
	function ShapeData(options, fill, nativeLines, shape) {
		_classCallCheck(this, ShapeData);

		if ({}.toString.call(fill) !== "[object Boolean]") throw new TypeError("fill must be a boolean.");

		if ({}.toString.call(nativeLines) !== "[object Boolean]") throw new TypeError("nativeLines must be a boolean.");

		if (!(shape instanceof PIXI.Circle || shape instanceof PIXI.Ellipse || shape instanceof PIXI.Polygon || shape instanceof PIXI.Rectangle || shape instanceof PIXI.RoundedRectangle || shape === null)) throw new TypeError("shape must be a PIXI.Shape.");

		if (options instanceof PIXI.GraphicsData) {
			this._out = options;
		} else {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			this._out = new PIXI.GraphicsData(options.lineWidth, options.lineColor, options.lineAlpha, options.fillColor, options.fillAlpha, fill, nativeLines, shape);
		}
	}

	/**
  * out
  * @getter
  * This function is a getter for the member _out.
  * @return  {PIXI.GraphicsData} The PIXI Object used by this object. 
  */


	_createClass(ShapeData, [{
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * lineWidth
   * @getter
   * This function is a getter for the member lineWidth.
   * @return {Number} The width of the line to draw. 
   */

	}, {
		key: "lineWidth",
		get: function get() {
			return this._out.lineWidth;
		}

		/**
   * lineColor
   * @getter
   * This function is a getter for the member lineColor.
   * @return {Number} The color of the line to draw. 
   */

	}, {
		key: "lineColor",
		get: function get() {
			return this._out.lineColor;
		}

		/**
   * lineAlpha
   * @getter
   * This function is a getter for the member lineAlpha.
   * @return {Number} The alpha of the line to draw. 
   */

	}, {
		key: "lineAlpha",
		get: function get() {
			return this._out.lineAlpha;
		}

		/**
   * fillColor
   * @getter
   * This function is a getter for the member fillColor.
   * @return {Number} The color of the fill. 
   */

	}, {
		key: "fillColor",
		get: function get() {
			return this._out.fillColor;
		}

		/**
   * fillAlpha
   * @getter
   * This function is a getter for the member fillAlpha.
   * @return {Number} The alpha of the fill. 
   */

	}, {
		key: "fillAlpha",
		get: function get() {
			return this._out.fillAlpha;
		}

		/**
   * fill
   * @getter
   * This function is a getter for the member fill.
   * @return {Boolean} Whether or not the shape is filled with a colour. 
   */

	}, {
		key: "fill",
		get: function get() {
			return this._out.fill;
		}

		/**
   * nativeLines
   * @getter
   * This function is a getter for the member nativeLines.
   * @return {Boolean} Lines will be draw using LINES instead of TRIANGLE_STRIP. 
   */

	}, {
		key: "nativeLines",
		get: function get() {
			return this._out.nativeLines;
		}

		/**
   * shape
   * @getter
   * This function is a getter for the member shape.
   * @return {PIXI.Shape} The shape object to draw. 
   */

	}, {
		key: "shape",
		get: function get() {
			return this._out.shape;
		}
	}]);

	return ShapeData;
}();

;

module.exports = {
	ShapeData: ShapeData
};