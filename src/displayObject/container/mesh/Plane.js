"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Plane
|--------------------------------------------------------------------------
|
| This file defines the Plane Object.
| This object build a PIXI.mesh.Plane for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Mesh.js"),
    Mesh = _require.Mesh;

var Plane = function (_Mesh) {
	_inherits(Plane, _Mesh);

	/**
  * constructor
  * This function is used in order to build a Plane.
  * @param {Number}  verticesX  The number of vertices in the x-axis.
  * @param {Number}  verticesY  The number of vertices in the y-axis.
  * @param {PIXI.mesh.Plane}  verticesX  The Pixi object to build the HandyPixi object.
  */
	function Plane() {
		var verticesX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
		var verticesY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

		_classCallCheck(this, Plane);

		var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this));

		if (_this.constructor !== Plane) return _possibleConstructorReturn(_this);

		if ({}.toString.call(verticesY) !== "[object Number]") throw new TypeError("verticesY must be a number.");

		if (verticesX instanceof PIXI.mesh.Plane) {
			_this._out = verticesX;
		} else {
			if ({}.toString.call(verticesX) !== "[object Number]") throw new TypeError("verticesX must be a number.");

			_this._out = new PIXI.mesh.Plane(PIXI.Texture.EMPTY, verticesX, verticesY);
		}
		return _this;
	}

	/**
  * verticesX
  * @getter
  * This function is a getter for the member verticesX.
  * @return {Number} The number of vertices in the x-axis.
  */


	_createClass(Plane, [{
		key: "refresh",


		/**
   * refresh
   * This function is used in order to refresh the Plane.
   */
		value: function refresh() {
			this._out.refresh();
		}
	}, {
		key: "verticesX",
		get: function get() {
			return this._out.verticesX;
		}

		/**
   * verticesY
   * @getter
   * This function is a getter for the member verticesY.
   * @return {Number} The number of vertices in the y-axis.
   */

	}, {
		key: "verticesY",
		get: function get() {
			return this._out.verticesY;
		}
	}]);

	return Plane;
}(Mesh);

;

module.exports = {
	Plane: Plane
};