"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Shape
|--------------------------------------------------------------------------
|
| This file defines the Shape Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../Mask.js"),
    Mask = _require.Mask;

var _require2 = require("./../../../../support/geometry/Point.js"),
    Point = _require2.Point;

var _require3 = require("./ShapeData.js"),
    ShapeData = _require3.ShapeData;

var Shape = function (_Mask) {
	_inherits(Shape, _Mask);

	/**
 * constructor
 * This function is used in order to build a Shape.
 * @param {Object}  options  Default options for drawing.
 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
 * @param {PIXI.Graphics}  options  The Pixi object to build the HandyPixi object.
 */
	function Shape() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var nativeLines = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		_classCallCheck(this, Shape);

		var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this));

		if ({}.toString.call(nativeLines) !== "[object Boolean]") throw new TypeError("nativeLines must be a boolean.");

		_this._options = {};
		_this._properties = null;

		if (options instanceof PIXI.Graphics) {
			_this._out = options;
		} else {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			_this.options = options;
			_this._out = new PIXI.Graphics(nativeLines);
		}
		return _this;
	}

	/**
  * out
  * @getter
  * This function is a getter for the member _out.
  * @return  {PIXI.Graphics} The PIXI Object used by this object. 
  */


	_createClass(Shape, [{
		key: "addHole",


		/**
   * addHole
   * This function is used in order to add a hole in the current path.
   */
		value: function addHole() {
			this._out.addHole();
		}

		/**
   * arc
   * This function is used in order to draw an arc/curve.
   * @param {Object}  params  Coordinates, radius, angles.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "arc",
		value: function arc(params) {
			if (!((typeof params === "undefined" ? "undefined" : _typeof(params)) === "object" && {}.toString.call(params) === "[object Object]")) throw new TypeError("params must be an object.");

			if ({}.toString.call(params.cx) !== "[object Number]") throw new TypeError("params.cx must exist and be a number.");

			if ({}.toString.call(params.cy) !== "[object Number]") throw new TypeError("params.cy must exist and be a number.");

			if ({}.toString.call(params.radius) !== "[object Number]") throw new TypeError("params.radius must exist and be a number.");

			if ({}.toString.call(params.startAngle) !== "[object Number]") throw new TypeError("params.startAngle must exist and be a number.");

			if ({}.toString.call(params.endAngle) !== "[object Number]") throw new TypeError("params.endAngle must exist and be a number.");

			this._out.arc(params.cx, params.cy, params.radius, params.startAngle, params.endAngle, params.anticlockwise);
			return this;
		}

		/**
   * arcTo
   * This function is used in order to draw an arc/curve between two tangents on the canvas.
   * @param {Object}  params  Coordinates, radius.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "arcTo",
		value: function arcTo(params) {
			if (!((typeof params === "undefined" ? "undefined" : _typeof(params)) === "object" && {}.toString.call(params) === "[object Object]")) throw new TypeError("params must be an object.");

			if ({}.toString.call(params.x1) !== "[object Number]") throw new TypeError("params.x1 must exist and be a number.");

			if ({}.toString.call(params.y1) !== "[object Number]") throw new TypeError("params.y1 must exist and be a number.");

			if ({}.toString.call(params.x2) !== "[object Number]") throw new TypeError("params.x2 must exist and be a number.");

			if ({}.toString.call(params.y2) !== "[object Number]") throw new TypeError("params.y2 must exist and be a number.");

			if ({}.toString.call(params.radius) !== "[object Number]") throw new TypeError("params.radius must exist and be a number.");

			this._out.arcTo(params.x1, params.y1, params.x2, params.y2, params.radius);

			return this;
		}

		/**
   * beginFill
   * This function is used in order to specify a color to draw with others methods.
   * @param {Number}  color  The color of the fill.
   * @param {Number}  alpha  The alpha of the fill.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "beginFill",
		value: function beginFill() {
			var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.fillColor || 0;
			var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.fillAlpha || 1;

			if ({}.toString.call(color) !== "[object Number]") throw new TypeError("color must be a number.");

			if ({}.toString.call(alpha) !== "[object Number]") throw new TypeError("alpha must be a number.");

			this._out.beginFill(color, alpha);
			this.lineStyle({ lineWidth: this._options.lineWidth, color: this._options.lineColor, alpha: this._options.lineAlpha });

			return this;
		}

		/**
   * bezierCurveTo
   * This function is used in order to draw the points for a bezier curve.
   * @param {Object}  points  Controls points, destination point.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "bezierCurveTo",
		value: function bezierCurveTo(points) {
			if (!((typeof points === "undefined" ? "undefined" : _typeof(points)) === "object" && {}.toString.call(points) === "[object Object]")) throw new TypeError("points must be an object.");

			if ({}.toString.call(points.cpX1) !== "[object Number]") throw new TypeError("points.cpX1 must exist and be a number.");

			if ({}.toString.call(points.cpY1) !== "[object Number]") throw new TypeError("points.cpY1 must exist and be a number.");

			if ({}.toString.call(points.cpX2) !== "[object Number]") throw new TypeError("points.cpX2 must exist and be a number.");

			if ({}.toString.call(points.cpY2) !== "[object Number]") throw new TypeError("points.cpY2 must exist and be a number.");

			if ({}.toString.call(points.toX) !== "[object Number]") throw new TypeError("points.toX must exist and be a number.");

			if ({}.toString.call(points.toY) !== "[object Number]") throw new TypeError("points.toY must exist and be a number.");

			this._out.bezierCurveTo(points.cpX1, points.cpY1, points.cpX2, points.cpY2, points.toX, points.toY);

			return this;
		}

		/**
   * clear
   * This function is used in order to clear shapes that were drawn and reset settings.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "clear",
		value: function clear() {
			this._out.clear();

			return this;
		}

		/**
   * clone
   * This function is used in order to clone this Shape.
   * @return {Shape} A copy of this object.
   */

	}, {
		key: "clone",
		value: function clone() {
			return new Shape(this._out.clone());
		}

		/**
   * closePath
   * This function is used in order to close the current path.
   */

	}, {
		key: "closePath",
		value: function closePath() {
			this._out.closePath();
		}

		/**
   * containsPoint
   * This function is used in order to check if a point is inside this filled shape.
   * @param {Point}  point  The point to check.
   * @return {Boolean} Whether or not the shape contains the point.
   */

	}, {
		key: "containsPoint",
		value: function containsPoint(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return this._out.containsPoint(point.out);
		}

		/**
   * endFill
   * This function is used in order to apply a fill to the lines and shapes drawn since the last call to the beginFill method.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "endFill",
		value: function endFill() {
			this._out.endFill();

			return this;
		}

		/**
   * lineStyle
   * This function is used in order to set the line style parameters for drawing methods.
   * @param {Object}  style  Width, color and alpha of the line to draw. 
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "lineStyle",
		value: function lineStyle(style) {
			if (!((typeof style === "undefined" ? "undefined" : _typeof(style)) === "object" && {}.toString.call(style) === "[object Object]")) throw new TypeError("style must be an object.");

			this._out.lineStyle(style.lineWidth, style.color, style.alpha);

			return this;
		}

		/**
   * lineTo
   * This function is used in order to draw a line between two points.
   * @param {Point}  from  The point to start the draw.
   * @param {Point}  to  The point to end the draw.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "lineTo",
		value: function lineTo(from, to) {
			if (!(from instanceof Point)) throw new TypeError("from must be a Point.");

			if (!(to instanceof Point)) throw new TypeError("to must be a Point.");

			this._out.moveTo(from.x, from.y);
			this._out.lineTo(to.x, to.y);

			return this;
		}

		/**
   * quadraticCurveTo
   * This function is used in order to draw a quadratic bezier curve.
   * @param {Object}  points Control and destination point.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "quadraticCurveTo",
		value: function quadraticCurveTo(points) {
			if (!((typeof points === "undefined" ? "undefined" : _typeof(points)) === "object" && {}.toString.call(points) === "[object Object]")) throw new TypeError("points must be an object.");

			if ({}.toString.call(points.cpX) !== "[object Number]") throw new TypeError("points.cpX must exist and be a number.");

			if ({}.toString.call(points.cpY) !== "[object Number]") throw new TypeError("points.cpY must exist and be a number.");

			if ({}.toString.call(points.toX) !== "[object Number]") throw new TypeError("points.toX must exist and be a number.");

			if ({}.toString.call(points.toY) !== "[object Number]") throw new TypeError("points.toY must exist and be a number.");

			this._out.quadraticCurveTo(points.cpX, points.cpY, points.toX, points.toY);

			return this;
		}

		/**
   * updateLocalBounds
   * This function is used in order to
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "updateLocalBounds",
		value: function updateLocalBounds() {
			this._out.updateLocalBounds();

			return this;
		}

		/**
   * getShapeData
   * This function is used in order to get the related ShapeData object of this Shape.
   * @return {ShapeData} The ShapeData.
   */

	}, {
		key: "getShapeData",
		value: function getShapeData() {
			var fill = false;

			if (this._options.fillColor !== undefined) fill = true;

			return new ShapeData(this._options, fill, this._out.nativeLines, this._properties);
		}

		/**
   * drawCircle
   * This function is used in order to draw a circle into this Shape.
   * @param {Number}  x  The X coordinate of the center of this circle.
   * @param {Number}  y  The Y coordinate of the center of this circle.
   * @param {Number}  radius  The radius of the circle.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "drawCircle",
		value: function drawCircle(x, y, radius) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			if ({}.toString.call(radius) !== "[object Number]") throw new TypeError("radius must be a number.");

			this._out.drawCircle(x, y, radius);

			return this;
		}

		/**
   * drawEllipse
   * This function is used in order to draw an ellipse into this Shape.
   * @param {Number}  x  The X coordinate of the center of this Ellipse.
   * @param {Number}  y  The Y coordinate of the center of this Ellipse.
   * @param {Number}  width  The half width of this ellipse.
   * @param {Number}  height  The half height of this ellipse.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "drawEllipse",
		value: function drawEllipse(x, y, width, height) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this._out.drawEllipse(x, y, width, height);

			return this;
		}

		/**
   * drawPolygon
   * This function is used in order to draw a polygon into this Shape.
   * @param {Point[]}  points  An array of Points that form the polygon.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "drawPolygon",
		value: function drawPolygon(points) {
			if (!Array.isArray(points)) throw new TypeError("points must be an array.");

			var pixiPoints = [];
			for (var i = 0, l = points.length; i < l; i++) {
				if (!(points[i] instanceof Point)) throw new TypeError("Can't use the " + i + " element, it must be a Point");

				pixiPoints.push(points[i].out);
			}
			this._out.drawPolygon(pixiPoints);

			return this;
		}

		/**
   * drawRectangle
   * This function is used in order to draw a rectangle into this Shape.
   * @param {Number}  x  The X coordinate of the center of this Rectangle.
   * @param {Number}  y  The Y coordinate of the center of this Rectangle.
   * @param {Number}  width  The overall width of this rectangle.
   * @param {Number}  height  The overall height of this rectangle.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "drawRectangle",
		value: function drawRectangle(x, y, width, height) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this._out.drawRect(x, y, width, height);

			return this;
		}

		/**
   * drawRoundedRectangle
   * This function is used in order to draw a rounded rectangle into this Shape.
   * @param {Number}  x  The X coordinate of the center of this RoundedRectangle.
   * @param {Number}  y  The Y coordinate of the center of this RoundedRectangle.
   * @param {Number}  width  The overall width of this RoundedRectangle.
   * @param {Number}  height  The overall height of this RoundedRectangle.
   * @param {Number}  radius  Controls the radius of the rounded corners.
   * @return {Shape} This Shape object. Good for chaining method calls.
   */

	}, {
		key: "drawRoundedRectangle",
		value: function drawRoundedRectangle(x, y, width, height, radius) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			if ({}.toString.call(radius) !== "[object Number]") throw new TypeError("radius must be a number.");

			this._out.drawRoundedRect(x, y, width, height, radius);

			return this;
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * boundsPadding
   * @getter
   * This function is a getter for the member boundsPadding.
   * @return {Number} The bounds' padding used for bounds calculation. 
   */

	}, {
		key: "boundsPadding",
		get: function get() {
			return this._out.boundsPadding;
		}

		/**
   * boundsPadding
   * @setter
   * This function is a setter for the member boundsPadding.
   * @param {Number}  padding  The bounds' padding used for bounds calculation. 
   */
		,
		set: function set(padding) {
			if ({}.toString.call(padding) !== "[object Number]") throw new TypeError("padding must be a number.");

			this._out.boundsPadding = padding;
		}

		/**
   * fillAlpha
   * @getter
   * This function is a getter for the member fillAlpha.
   * @return {Number} The alpha value used when filling the Shape object. 
   */

	}, {
		key: "fillAlpha",
		get: function get() {
			return this._out.fillAlpha;
		}

		/**
   * fillAlpha
   * @setter
   * This function is a setter for the member fillAlpha.
   * @param {Number}  alpha  The alpha value used when filling the Shape object. 
   */
		,
		set: function set(alpha) {
			if ({}.toString.call(alpha) !== "[object Number]") throw new TypeError("alpha must be a number.");

			this._out.fillAlpha = alpha;
		}

		/**
   * lineColor
   * @getter
   * This function is a getter for the member lineColor.
   * @return {String} The color of any lines drawn. 
   */

	}, {
		key: "lineColor",
		get: function get() {
			return this._out.lineColor;
		}

		/**
   * lineColor
   * @setter
   * This function is a setter for the member lineColor.
   * @param {String}  color  The color of any lines drawn. 
   */
		,
		set: function set(color) {
			if (!(typeof color === "string" && {}.toString.call(color) === "[object String]")) throw new TypeError("color must be a string.");

			this._out.lineColor = color;
		}

		/**
   * lineWidth
   * @getter
   * This function is a getter for the member lineWidth.
   * @return {Number} The width (thickness) of any lines drawn. 
   */

	}, {
		key: "lineWidth",
		get: function get() {
			return this._out.lineWidth;
		}

		/**
   * lineWidth
   * @setter
   * This function is a setter for the member lineWidth.
   * @param {Number}  width  The width (thickness) of any lines drawn. 
   */
		,
		set: function set(width) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			this._out.lineWidth = width;
		}

		/**
   * options
   * @getter
   * This function is a getter for the member _options.
   * @return {Object} Default options for drawing.
   */

	}, {
		key: "options",
		get: function get() {
			return this._options;
		}

		/**
   * options
   * @setter
   * This function is a setter for the member _options.
   * @param {Object}  options  Default options for drawing.
   */
		,
		set: function set(options) {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			if (options.fillColor !== undefined) {
				if ({}.toString.call(options.fillColor) !== "[object Number]") throw new TypeError("options.fillColor must be a number.");

				this._options.fillColor = options.fillColor;
			}

			if (options.fillAlpha !== undefined) {
				if ({}.toString.call(options.fillAlpha) !== "[object Number]") throw new TypeError("options.fillAlpha must be a number.");

				this._options.fillAlpha = options.fillAlpha;
			}

			if (options.lineWidth !== undefined) {
				if ({}.toString.call(options.lineWidth) !== "[object Number]") throw new TypeError("options.lineWidth must be a number.");

				this._options.lineWidth = options.lineWidth;
			}

			if (options.lineColor !== undefined) {
				if ({}.toString.call(options.lineColor) !== "[object Number]") throw new TypeError("options.lineColor must be a number.");

				this._options.lineColor = options.lineColor;
			}

			if (options.lineAlpha !== undefined) {
				if ({}.toString.call(options.lineAlpha) !== "[object Number]") throw new TypeError("options.lineAlpha must be a number.");

				this._options.lineAlpha = options.lineAlpha;
			}
		}
	}]);

	return Shape;
}(Mask);

;

module.exports = {
	Shape: Shape
};