"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Circle
|--------------------------------------------------------------------------
|
| This file defines the Circle Object.
| This object build a PIXI.Graphics for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Shape.js"),
    Shape = _require.Shape;

var Circle = function (_Shape) {
	_inherits(Circle, _Shape);

	/**
  * constructor
  * This function is used in order to build a Circle.
  * @param {Number}  x  The X coordinate of the center of this circle.
  * @param {Number}  y  The Y coordinate of the center of this circle.
  * @param {Number}  radius  The radius of the circle.
  * @param {Object}  options  Default options for drawing.
  * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
  * @param {PIXI.Circle}  x  The Pixi object to build the HandyPixi object.
  */
	function Circle() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		var nativeLines = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		_classCallCheck(this, Circle);

		var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, options, nativeLines));

		if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

		if ({}.toString.call(radius) !== "[object Number]") throw new TypeError("radius must be a number.");

		if (x instanceof PIXI.Circle) {
			_this._properties = x;
		} else {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			_this._properties = new PIXI.Circle(x, y, radius);
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
  * @return {Number} The radius of the circle. 
  */


	_createClass(Circle, [{
		key: "redraw",


		/**
   * redraw
   * This function is used in order to clear and redraw the Circle.
   */
		value: function redraw() {
			this.clear();
			this.beginFill();
			this._out.drawShape(this._properties);
			this.endFill();
		}
	}, {
		key: "radius",
		get: function get() {
			return this._properties.radius;
		}

		/**
   * radius
   * @setter
   * This function is a setter for the member radius.
   * @param {Number}  radius  The radius of the circle. 
   */
		,
		set: function set(radius) {
			if ({}.toString.call(radius) !== "[object Number]") throw new TypeError("radius must be a number.");

			this._properties.radius = radius;
			this.redraw();
		}

		/**
   * x
   * @getter
   * This function is a getter for the member x.
   * @return {Number} The X coordinate of the center of this circle. 
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
   * @param {Number}  x  The X coordinate of the center of this circle. 
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
   * @return {Number} The Y coordinate of the center of this circle. 
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
   * @param {Number}  y  The Y coordinate of the center of this circle. 
   */
		,
		set: function set(y) {
			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._properties.y = y;
			this.redraw();
		}
	}]);

	return Circle;
}(Shape);

;

module.exports = {
	Circle: Circle
};