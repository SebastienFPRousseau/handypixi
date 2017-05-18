"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Point
|--------------------------------------------------------------------------
|
| This file defines the Point Object.
| This object build a PIXI.Point for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./AbstractPoint.js"),
    AbstractPoint = _require.AbstractPoint;

var Point = function (_AbstractPoint) {
	_inherits(Point, _AbstractPoint);

	/**
 * constructor
 * This function is used in order to build a Point.
 * @param   {Number}   x         Position of the point on the x axis.
 * @param   {Number}   y         Position of the point on the y axis
 * @param   {PIXI.Point}   x         The Pixi object to build the HandyPixi object.
 */
	function Point() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Point);

		var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this));

		if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

		if (x instanceof PIXI.Point) {
			_this._out = x;
		} else if ({}.toString.call(x) !== "[object Number]") {
			throw new TypeError("x must be a number.");
		} else {
			_this._out = new PIXI.Point(x, y);
		}
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Point} The PIXI Object used by this object. 
 */


	_createClass(Point, [{
		key: "set",


		/**
  * set
  * This function is a setter for the members x and y.
  * @param  {Number} 	x 	 Position of the point on the x axis. 
  * @param  {Number} 	y 	 Position of the point on the y axis.
  */
		value: function set(x, y) {
			this.x = x;
			this.y = y;
		}

		/**
  * clone
  * This function is used in order to clone this Point.
  * @return {Point} A copy of this Point. 
  */

	}, {
		key: "clone",
		value: function clone() {
			return new Point(this._out.clone());
		}

		/**
  * copy
  * This function is used in order to copy this Point into the given Point.
  * @param {Point} 	point 	 The Point to change. 
  */

	}, {
		key: "copy",
		value: function copy(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			this._out.copy(point.out);
		}

		/**
  * equals
  * This function is used in order to know if the given Point is equal to this Point.
  * @return {Boolean} True if the points are equals. 
  */

	}, {
		key: "equals",
		value: function equals(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return this._out.equals(point.out);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
  * x
  * @getter
  * This function is a getter for the member x.
  * @return  {Number} Position of the point on the x axis. 
  */

	}, {
		key: "x",
		get: function get() {
			return this._out.x;
		}

		/**
  * x
  * @setter
  * This function is a setter for the member x.
  * @param  {Number} 	x 	 Position of the point on the x axis. 
  */
		,
		set: function set(x) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			this._out.x = x;
		}

		/**
  * y
  * @getter
  * This function is a getter for the member y.
  * @return  {Number} Position of the point on the y axis. 
  */

	}, {
		key: "y",
		get: function get() {
			return this._out.y;
		}

		/**
  * y
  * @setter
  * This function is a setter for the member y.
  * @param  {Number}	y 	 Position of the point on the y axis. 
  */
		,
		set: function set(y) {
			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._out.y = y;
		}
	}]);

	return Point;
}(AbstractPoint);

;

module.exports = {
	Point: Point
};