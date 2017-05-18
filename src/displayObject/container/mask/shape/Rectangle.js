"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Rectangle
|--------------------------------------------------------------------------
|
| This file defines the Rectangle Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Shape.js"),
    Shape = _require.Shape;

var Rectangle = function (_Shape) {
	_inherits(Rectangle, _Shape);

	/**
  * constructor
  * This function is used in order to build a Rectangle.
  * @param {Number}  x  The X coordinate of the center of this Rectangle.
  * @param {Number}  y  The Y coordinate of the center of this Rectangle.
  * @param {Number}  width  The overall width of this rectangle.
  * @param {Number}  height  The overall height of this rectangle.
  * @param {Options}  options  Default options for drawing.
  * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
  * @param {PIXI.Rectangle}  x  The Pixi object to build the HandyPixi object.
  */
	function Rectangle() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
		var nativeLines = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

		_classCallCheck(this, Rectangle);

		var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, options, nativeLines));

		if (_this.constructor !== Rectangle) return _possibleConstructorReturn(_this);

		if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

		if (x instanceof PIXI.Rectangle) {
			_this._properties = x;
		} else {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			_this._properties = new PIXI.Rectangle(x, y, width, height);
		}

		_this.beginFill();
		_this._out.drawShape(_this._properties);
		_this.endFill();
		return _this;
	}

	/**
  * rectangleWidth
  * @getter
  * This function is a getter for the member rectangleWidth.
  * @return {Number} The overall width of this rectangle. 
  */


	_createClass(Rectangle, [{
		key: "redraw",


		/**
   * redraw
   * This function is used in order to clear and redraw the Rectangle.
   */
		value: function redraw() {
			this.clear();
			this.beginFill();
			this._out.drawShape(this._properties);
			this.endFill();
		}
	}, {
		key: "rectangleWidth",
		get: function get() {
			return this._properties.width;
		}

		/**
   * rectangleWidth
   * @setter
   * This function is a setter for the member rectangleWidth.
   * @param {Number}  width  The overall width of this rectangle. 
   */
		,
		set: function set(width) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			this._properties.width = width;
			this.redraw();
		}

		/**
   * rectangleHeight
   * @getter
   * This function is a getter for the member rectangleHeight.
   * @return {Number} The overall height of this rectangle. 
   */

	}, {
		key: "rectangleHeight",
		get: function get() {
			return this._properties.height;
		}

		/**
   * rectangleHeight
   * @setter
   * This function is a setter for the member rectangleHeight.
   * @param {Number}  height  The overall height of this rectangle. 
   */
		,
		set: function set(height) {
			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this._properties.height = height;
			this.redraw();
		}

		/**
   * x
   * @getter
   * This function is a getter for the member x.
   * @return {Number} The X coordinate of the center of this Rectangle. 
   */

	}, {
		key: "x",
		get: function get() {
			return this._properties.x;
		}

		/**
   * x
   * @setter
   * This function is a setter for the member x.
   * @param {Number}  x  The X coordinate of the center of this Rectangle. 
   */
		,
		set: function set(x) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			this._properties.x = x;
			this.redraw();
		}

		/**
   * y
   * @getter
   * This function is a getter for the member y.
   * @return {Number} The Y coordinate of the center of this Rectangle. 
   */

	}, {
		key: "y",
		get: function get() {
			return this._properties.y;
		}

		/**
   * y
   * @setter
   * This function is a setter for the member y.
   * @param {Number}  y  The Y coordinate of the center of this Rectangle. 
   */
		,
		set: function set(y) {
			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._properties.y = y;
			this.redraw();
		}
	}]);

	return Rectangle;
}(Shape);

;

module.exports = {
	Rectangle: Rectangle
};