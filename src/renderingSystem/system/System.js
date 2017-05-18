"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| System
|--------------------------------------------------------------------------
|
| This file defines the System Object.
| This object is the singleton for Environment.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../config/Settings.js"),
    Settings = _require.Settings;

var _require2 = require("./WebGLEnvironment.js"),
    WebGLEnvironment = _require2.WebGLEnvironment;

var _require3 = require("./CanvasEnvironment.js"),
    CanvasEnvironment = _require3.CanvasEnvironment;

var _require4 = require("./../../support/utils/Setup.js"),
    Setup = _require4.Setup;

/**
 * instance
 * A premade instance of System. 
 * @type {System} 
 */


var instance = undefined;

var System = function () {
	/**
  * constructor
  * This function is used in order to build a System.
  */
	function System() {
		_classCallCheck(this, System);

		this._settings = Settings;
		Setup.skipHello();
	}

	/**
 * getInstance
 * @getter
 */


	_createClass(System, [{
		key: "getEnvironment",


		/**
   * getEnvironment
   * This function is used in order to build an Environment.
   * @param {HTMLCollection}  dom  The html DOM the 2D scene belongs. 
   * @param {Object}  options  Options for the environment.
   * @param {Boolean}  forceCanvas  Force a CanvasEnvironment build or not.
   * @return {Environment} The Environment built. 
   */
		value: function getEnvironment(dom) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var forceCanvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			if ({}.toString.call(forceCanvas) !== "[object Boolean]") throw new TypeError("forceCanvas must be a boolean.");

			if (Setup.isWebGLSupported() && !forceCanvas) return new WebGLEnvironment(dom, options);else return new CanvasEnvironment(dom, options);
		}
	}, {
		key: "settings",


		/**
   * settings
   * @getter
   * This function is a getter for the member _settings.
   * @return {Settings} The static class Settings.
   */
		get: function get() {
			return this._settings;
		}
	}], [{
		key: "getInstance",
		value: function getInstance() {
			if (instance === undefined) instance = new System();

			return instance;
		}
	}]);

	return System;
}();

;

module.exports = {
	System: System
};