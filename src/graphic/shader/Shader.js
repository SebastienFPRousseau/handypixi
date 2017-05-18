"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Shader
|--------------------------------------------------------------------------
|
| This file defines the Shader Object.
| This object build a PIXI.Filter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var Shader = function () {
	/**
 * constructor
 * This function is used in order to build a Shader.
 * @param {PIXI.Filter}  pixiObj  The Pixi object to build the HandyPixi object.
 */
	function Shader() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Shader);

		if (pixiObj === null && this.constructor !== Shader) return;

		if (pixiObj instanceof PIXI.Filter) {
			this._out = pixiObj;
		} else {
			this._out = new PIXI.Filter();
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Filter} The PIXI Object used by this object. 
 */


	_createClass(Shader, [{
		key: "enable",


		/**
   * enable
   * This function is used in order to enable the filter applyment.
   * @param {Boolean} value Set to true to enable, to false to disable.
   */
		value: function enable() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.enabled = value;
		}

		/**
   * clone
   * This function is used in order to clone this Shader
   * @return {Shader} A copy of this Shader.
   */

	}, {
		key: "clone",
		value: function clone() {
			return new Shader(this._out);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * fragmentSrc
   * @getter
   * This function is a getter for the member fragmentSrc.
   * @return {String} The fragment shader as a String.
   */

	}, {
		key: "fragmentSrc",
		get: function get() {
			return this._out.fragmentSrc;
		}

		/**
   * fragmentSrc
   * @setter
   * This function is a setter for the member fragmentSrc.
   * @param {String}  fragmentSrc  The fragment shader as a String.
   */
		,
		set: function set(fragmentSrc) {
			if (!(typeof fragmentSrc === "string" && {}.toString.call(fragmentSrc) === "[object String]")) throw new TypeError("fragmentSrc must be a string.");

			this._out.fragmentSrc = fragmentSrc;
		}

		/**
   * vertexSrc
   * @getter
   * This function is a getter for the member vertexSrc.
   * @return {String} The vertex shader as a String.
   */

	}, {
		key: "vertexSrc",
		get: function get() {
			return this._out.vertexSrc;
		}

		/**
   * vertexSrc
   * @setter
   * This function is a setter for the member vertexSrc.
   * @param {String}  vertexSrc  The vertex shader as a String.
   */
		,
		set: function set(vertexSrc) {
			if (!(typeof vertexSrc === "string" && {}.toString.call(vertexSrc) === "[object String]")) throw new TypeError("vertexSrc must be a string.");

			this._out.vertexSrc = vertexSrc;
		}

		/**
   * padding
   * @getter
   * This function is a getter for the member padding.
   * @return {Number} The padding of the filter.
   */

	}, {
		key: "padding",
		get: function get() {
			return this._out.padding;
		}

		/**
   * padding
   * @setter
   * This function is a setter for the member padding.
   * @param {Number}  padding  The padding of the filter.
   */
		,
		set: function set(padding) {
			if ({}.toString.call(padding) !== "[object Number]") throw new TypeError("padding must be a number.");

			this._out.padding = padding;
		}

		/**
   * resolution
   * @getter
   * This function is a getter for the member resolution.
   * @return {Number} The resolution of the filter.
   */

	}, {
		key: "resolution",
		get: function get() {
			return this._out.resolution;
		}

		/**
   * resolution
   * @setter
   * This function is a setter for the member resolution.
   * @param {Number}  resolution  The resolution of the filter.
   */
		,
		set: function set(resolution) {
			if ({}.toString.call(resolution) !== "[object Number]") throw new TypeError("resolution must be a number.");

			this._out.resolution = resolution;
		}

		/**
   * uniforms
   * @getter
   * This function is a getter for the member uniforms.
   * @return {String} An object containing the current values of custom uniforms.
   */

	}, {
		key: "uniforms",
		get: function get() {
			return this._out.uniforms;
		}

		/**
   * uniforms
   * @setter
   * This function is a setter for the member uniforms.
   * @param {Object}  uniforms  An object containing the current values of custom uniforms.
   */
		,
		set: function set(uniforms) {
			if (!((typeof uniforms === "undefined" ? "undefined" : _typeof(uniforms)) === "object" && {}.toString.call(uniforms) === "[object Object]")) throw new TypeError("uniforms must be an object.");

			this._out.uniforms = uniforms;
		}
	}]);

	return Shader;
}();

;

module.exports = {
	Shader: Shader
};