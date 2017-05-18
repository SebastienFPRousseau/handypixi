"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| ObservablePoint
|--------------------------------------------------------------------------
|
| This file defines the ObservablePoint Object.
| This object build a PIXI.ObservablePoint for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./AbstractPoint.js"),
    AbstractPoint = _require.AbstractPoint;

var ObservablePoint = function (_AbstractPoint) {
	_inherits(ObservablePoint, _AbstractPoint);

	/**
 * constructor
 * This function is used in order to build an ObservablePoint.
 * @param   {Function}   onMove         Callback when the point's position is changed.
 * @param   {Object}   scope         Owner of callback.
 * @param   {Number}   x         Position of the point on the x axis.
 * @param   {Number}   y         Position of the point on the y axis
 * @param   {PIXI.ObservablePoint}   onMove         The Pixi object to build the HandyPixi object.
 */
	function ObservablePoint(onMove, scope) {
		var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

		_classCallCheck(this, ObservablePoint);

		var _this = _possibleConstructorReturn(this, (ObservablePoint.__proto__ || Object.getPrototypeOf(ObservablePoint)).call(this));

		if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

		if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

		if (onMove instanceof PIXI.ObservablePoint) {
			_this._out = onMove;
		} else if ({}.toString.call(onMove) !== "[object Function]") {
			throw new TypeError("onMove must be a function.");
		} else {
			_this._out = new PIXI.ObservablePoint(onMove, scope, x, y);
		}
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.ObservablePoint} The PIXI Object used by this object. 
 */


	_createClass(ObservablePoint, [{
		key: "set",


		/**
  * set
  * This function is a setter for the members x and y.
  * @param  {Number}	x 	Position of the point on the x axis. 
  * @param  {Number}	y 	Position of the point on the y axis.
  */
		value: function set(x, y) {
			this.x = x;
			this.y = y;
		}

		/**
  * copy
  * This function is used in order to copy this ObservablePoint into the given ObservablePoint.
  * @param {ObservablePoint}	point 	The ObservablePoint to change. 
  * @param {Point}	point 	The Point to copy. 
  */

	}, {
		key: "copy",
		value: function copy(point) {
			if (!(point instanceof Point || point instanceof ObservablePoint)) throw new TypeError("point must be a Point or an ObservablePoint.");

			this._out.copy(point.out);
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
  * @param  {Number} 	y  Position of the point on the y axis. 
  */
		,
		set: function set(y) {
			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._out.y = y;
		}
	}]);

	return ObservablePoint;
}(AbstractPoint);

;

module.exports = {
	ObservablePoint: ObservablePoint
};