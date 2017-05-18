"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| NineSlicePlane
|--------------------------------------------------------------------------
|
| This file defines the NineSlicePlane Object.
| This object build a PIXI.mesh.NineSlicePlane for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Plane.js"),
    Plane = _require.Plane;

var NineSlicePlane = function (_Plane) {
	_inherits(NineSlicePlane, _Plane);

	/**
  * constructor
  * This function is used in order to build a NineSlicePlane.
  * @param {Object}  barsSizes  Sizes of the bar horizontal and vertical. 
  * @param {PIXI.mesh.NineSlicePlane}  barsSizes  The Pixi object to build the HandyPixi object.
  */
	function NineSlicePlane() {
		var barsSizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, NineSlicePlane);

		var _this = _possibleConstructorReturn(this, (NineSlicePlane.__proto__ || Object.getPrototypeOf(NineSlicePlane)).call(this));

		if (barsSizes instanceof PIXI.mesh.NineSlicePlane) {
			_this._out = barsSizes;
		} else {
			if (!((typeof barsSizes === "undefined" ? "undefined" : _typeof(barsSizes)) === "object" && {}.toString.call(barsSizes) === "[object Object]")) throw new TypeError("barsSizes must be an object.");

			_this._out = new PIXI.mesh.NineSlicePlane(PIXI.Texture.EMPTY, barsSizes.leftWidth, barsSizes.topHeight, barsSizes.rightWidth, barsSizes.bottomHeight);
		}
		return _this;
	}

	/**
  * barsSizes
  * @getter
  * This function is a getter for the member barsSizes.
  * @return {Object} Sizes of the bar horizontal and vertical.
  */


	_createClass(NineSlicePlane, [{
		key: "update",


		/**
   * update
   * This function is used in order to update the vertices.
   */
		value: function update() {
			this._out.updateHorizontalVertices();
			this._out.updateVerticalVertices();
		}
	}, {
		key: "barsSizes",
		get: function get() {
			return { leftWidth: this._out.leftWidth, topHeight: this._out.topHeight,
				rightWidth: this._out.rightWidth, bottomHeight: this._out.bottomHeight };
		}

		/**
   * barsSizes
   * @setter
   * This function is a setter for the member barsSizes.
   * @param {Object}  barsSizes  Sizes of the bar horizontal and vertical.
   */
		,
		set: function set(barsSizes) {
			if (!((typeof barsSizes === "undefined" ? "undefined" : _typeof(barsSizes)) === "object" && {}.toString.call(barsSizes) === "[object Object]")) throw new TypeError("barsSizes must be an object.");

			if (barsSizes.leftWidth !== undefined) this._out.leftWidth = barsSizes.leftWidth;

			if (barsSizes.topHeight !== undefined) this._out.topHeight = barsSizes.topHeight;

			if (barsSizes.rightWidth !== undefined) this._out.rightWidth = barsSizes.rightWidth;

			if (barsSizes.bottomHeight !== undefined) this._out.bottomHeight = barsSizes.bottomHeight;
		}
	}]);

	return NineSlicePlane;
}(Plane);

;

module.exports = {
	NineSlicePlane: NineSlicePlane
};