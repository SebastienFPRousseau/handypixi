"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| RoundedRectangle
|--------------------------------------------------------------------------
|
| This file defines the RoundedRectangle Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Rectangle.js"),
    Rectangle = _require.Rectangle;

var RoundedRectangle = function (_Rectangle) {
	_inherits(RoundedRectangle, _Rectangle);

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
	function RoundedRectangle() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;
		var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
		var nativeLines = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

		_classCallCheck(this, RoundedRectangle);

		var _this = _possibleConstructorReturn(this, (RoundedRectangle.__proto__ || Object.getPrototypeOf(RoundedRectangle)).call(this, x, y, width, height, options, nativeLines));

		if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

		if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

		if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

		if ({}.toString.call(radius) !== "[object Number]") throw new TypeError("radius must be a number.");

		if (x instanceof PIXI.RoundedRectangle) {
			_this._properties = x;
		} else {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			_this._properties = new PIXI.RoundedRectangle(x, y, width, height, radius);
		}

		_this.beginFill();
		_this._out.drawShape(_this._properties);
		_this.endFill();
		return _this;
	}

	/**
  * radius
  * @getter
  * This function is a getter for the member radius.
  * @return {Number} Controls the radius of the rounded corners. 
  */


	_createClass(RoundedRectangle, [{
		key: "radius",
		get: function get() {
			return this._properties.radius;
		}

		/**
   * radius
   * @setter
   * This function is a setter for the member radius.
   * @param {Number}  radius  Controls the radius of the rounded corners. 
   */
		,
		set: function set(radius) {
			if ({}.toString.call(radius) !== "[object Number]") throw new TypeError("radius must be a number.");

			this._properties.radius = radius;
			this.redraw();
		}
	}]);

	return RoundedRectangle;
}(Rectangle);

;

module.exports = {
	RoundedRectangle: RoundedRectangle
};