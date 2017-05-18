"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Ellipse
|--------------------------------------------------------------------------
|
| This file defines the Ellipse Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Shape.js"),
    Shape = _require.Shape;

var Ellipse = function (_Shape) {
	_inherits(Ellipse, _Shape);

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
	function Ellipse() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
		var nativeLines = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

		_classCallCheck(this, Ellipse);

		var _this = _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).call(this, options, nativeLines));

		if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

		if (x instanceof PIXI.Ellipse) {
			_this._properties = x;
		} else {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			_this._properties = new PIXI.Ellipse(x, y, width, height);
		}

		_this.beginFill();
		_this._out.drawShape(_this._properties);
		_this.endFill();
		return _this;
	}

	/**
  * halfWidth
  * @getter
  * This function is a getter for the member halfWidth.
  * @return {Number} The half width of this ellipse. 
  */


	_createClass(Ellipse, [{
		key: "redraw",


		/**
   * redraw
   * This function is used in order to clear and redraw the Ellipse.
   */
		value: function redraw() {
			this.clear();
			this.beginFill();
			this._out.drawShape(this._properties);
			this.endFill();
		}
	}, {
		key: "halfWidth",
		get: function get() {
			return this._properties.width;
		}

		/**
   * halfWidth
   * @setter
   * This function is a setter for the member halfWidth.
   * @param {Number}  width  The half width of this ellipse. 
   */
		,
		set: function set(width) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			this._properties.width = width;
			this.redraw();
		}

		/**
   * halfHeight
   * @getter
   * This function is a getter for the member halfHeight.
   * @return {Number} The half height of this ellipse. 
   */

	}, {
		key: "halfHeight",
		get: function get() {
			return this._properties.height;
		}

		/**
   * halfHeight
   * @setter
   * This function is a setter for the member halfHeight.
   * @param {Number}  height  The half height of this ellipse. 
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
   * @return {Number} The X coordinate of the center of this Ellipse. 
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
   * @param {Number}  x  The X coordinate of the center of this Ellipse. 
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
   * @return {Number} The Y coordinate of the center of this Ellipse. 
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
   * @param {Number}  y  The Y coordinate of the center of this Ellipse. 
   */
		,
		set: function set(y) {
			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._properties.y = y;
			this.redraw();
		}
	}]);

	return Ellipse;
}(Shape);

;

module.exports = {
	Ellipse: Ellipse
};