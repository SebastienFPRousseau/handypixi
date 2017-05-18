"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| WebGLConfiguration
|--------------------------------------------------------------------------
|
| This file defines the WebGLConfiguration Object.
| This object build a PIXI.WebGLState for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Configuration.js"),
    Configuration = _require.Configuration;

var WebGLConfiguration = function (_Configuration) {
	_inherits(WebGLConfiguration, _Configuration);

	/**
 * constructor
 * This function is used in order to build a CanvasElement.
 * @param {PIXI.WebGLState}  gl  The PIXI Object used by this object ( reference of the renderer's state ). 
 * @param {Number}  maxMilliseconds  The maximum milliseconds that can be spent preparing items each frame.
 * @param {Number}  maxItemsPerFrame  The maximum number of items that can be prepared each frame.
 */
	function WebGLConfiguration(gl) {
		var maxMilliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
		var maxItemsPerFrame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

		_classCallCheck(this, WebGLConfiguration);

		if ({}.toString.call(maxMilliseconds) !== "[object Number]") throw new TypeError("maxMilliseconds must be a number.");

		if ({}.toString.call(maxItemsPerFrame) !== "[object Number]") throw new TypeError("maxItemsPerFrame must be a number.");

		var _this = _possibleConstructorReturn(this, (WebGLConfiguration.__proto__ || Object.getPrototypeOf(WebGLConfiguration)).call(this, maxMilliseconds, maxItemsPerFrame));

		_this._out = gl;
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.WebGLState} The PIXI Object used by this object. 
 */


	_createClass(WebGLConfiguration, [{
		key: "pop",


		/**
   * pop
   * This function is used in order to pop a state out.
   */
		value: function pop() {
			this._out.pop();
		}

		/**
   * push
   * This function is used in order to push a new active state.
   */

	}, {
		key: "push",
		value: function push() {
			this._out.push();
		}

		/**
   * resetAttributes
   * This function is used in order to disable all the vaos in use.
   */

	}, {
		key: "resetAttributes",
		value: function resetAttributes() {
			this._out.resetAttributes();
		}

		/**
   * resetToDefault
   * This function is used in order to reset all the logic and disables the vaos.
   */

	}, {
		key: "resetToDefault",
		value: function resetToDefault() {
			this._out.resetToDefault();
		}

		/**
   * enableBlend
   * This function is used in order to enable/disable blending.
   * @param {Boolean} value Turn on or off webgl blending.
   */

	}, {
		key: "enableBlend",
		value: function enableBlend(value) {
			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a Boolean.");

			this._out.setBlend(value);
		}

		/**
   * enableCullFace
   * This function is used in order to enable/disable cull face.
   * @param {Boolean} value Turn on or off cull face.
   */

	}, {
		key: "enableCullFace",
		value: function enableCullFace(value) {
			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a Boolean.");

			this._out.setCullFace(value);
		}

		/**
   * enableDepthTest
   * This function is used in order to enable/disable depth test.
   * @param {Boolean} value Turn on or off webgl depth testing.
   */

	}, {
		key: "enableDepthTest",
		value: function enableDepthTest(value) {
			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a Boolean.");

			this._out.setDepthTest(value);
		}

		/**
   * setFrontFace
   * This function is used in order to set the gl front face.
   * @param {Boolean} value  True is clockwise and false is counter-clockwise.
   */

	}, {
		key: "setFrontFace",
		value: function setFrontFace(value) {
			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a Boolean.");

			this._out.setFrontFace(value);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
  * gl
  * @getter
  * This function is a getter for the member gl.
  * @return  {WebGLRenderingContext} The current WebGL rendering context. 
  */

	}, {
		key: "gl",
		get: function get() {
			return this._out.gl;
		}

		/**
  * gl
  * @setter
  * This function is a setter for the member gl.
  * @param  {WebGLRenderingContext}  gl  The current WebGL rendering context. 
  */
		,
		set: function set(gl) {
			if (!(gl instanceof WebGLRenderingContext)) throw new TypeError("gl must be a WebGLRenderingContext.");

			this._out.gl = gl;
		}

		/**
  * activeState
  * @getter
  * This function is a getter for the member activeState.
  * @return  {Uint8Array} The current active state. 
  */

	}, {
		key: "activeState",
		get: function get() {
			return this._out.activeState;
		}

		/**
  * activeState
  * @setter
  * This function is a setter for the member activeState.
  * @param  {Uint8Array}  activeState  The current active state. 
  */
		,
		set: function set(activeState) {
			if (Object.prototype.toString.call(activeState) !== "[object Uint8Array]") throw new TypeError("activeState must be an Uint8Array.");

			this._out.activeState = activeState;
		}

		/**
  * defaultState
  * @getter
  * This function is a getter for the member defaultState.
  * @return  {Uint8Array} The default state. 
  */

	}, {
		key: "defaultState",
		get: function get() {
			return this._out.defaultState;
		}

		/**
  * defaultState
  * @setter
  * This function is a setter for the member defaultState.
  * @param  {Uint8Array}  defaultState  The default state. 
  */
		,
		set: function set(defaultState) {
			if (Object.prototype.toString.call(defaultState) !== "[object Uint8Array]") throw new TypeError("defaultState must be an Uint8Array.");

			this._out.defaultState = defaultState;
		}
	}]);

	return WebGLConfiguration;
}(Configuration);

;

module.exports = {
	WebGLConfiguration: WebGLConfiguration
};