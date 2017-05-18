"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| This file defines the Configuration Object.
| This object build a PIXI.prepare.TimeLimiter and a PIXI.prepare.CountLimiter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var Configuration = function () {
	/**
 * constructor
 * This function is used in order to build a CanvasElement.
 * @param {Number}  maxMilliseconds  The maximum milliseconds that can be spent preparing items each frame.
 * @param {Number}  maxItemsPerFrame  The maximum number of items that can be prepared each frame.
 */
	function Configuration() {
		var maxMilliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
		var maxItemsPerFrame = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

		_classCallCheck(this, Configuration);

		if ({}.toString.call(maxMilliseconds) !== "[object Number]") throw new TypeError("maxMilliseconds must be a number.");

		if ({}.toString.call(maxItemsPerFrame) !== "[object Number]") throw new TypeError("maxItemsPerFrame must be a number.");

		this._maxMilliseconds = maxMilliseconds;
		this._maxItemsPerFrame = maxItemsPerFrame;
		this._countLimiter = new PIXI.prepare.CountLimiter(maxMilliseconds);
		this._timeLimiter = new PIXI.prepare.TimeLimiter(maxItemsPerFrame);
	}

	/**
  * countLimiter
  * @getter
  * This function is a getter for the member _countLimiter.
  * @return {PIXI.prepare.CountLimiter} A PIXI Object used by this object
  */


	_createClass(Configuration, [{
		key: "allowedToUpload",


		/**
   * allowedToUpload
   * This function is used in order to check if another item can be uploaded. This should only be called once per item.
   * @return {Boolean} 	If the item is allowed to be uploaded.
   */
		value: function allowedToUpload() {
			return this._countLimiter.allowedToUpload() && this._timeLimiter.allowedToUpload();
		}

		/**
   * beginFrame
   * This function is used in order to reset any counting properties to start fresh on a new frame.
   */

	}, {
		key: "beginFrame",
		value: function beginFrame() {
			this._countLimiter.beginFrame();
			this._timeLimiter.beginFrame();
		}
	}, {
		key: "countLimiter",
		get: function get() {
			return this._countLimiter;
		}

		/**
   * timeLimiter
   * @getter
   * This function is a getter for the member _timeLimiter.
   * @return {PIXI.prepare.TimeLimiter} A PIXI Object used by this object
   */

	}, {
		key: "timeLimiter",
		get: function get() {
			return this._timeLimiter;
		}

		/**
   * maxMilliseconds
   * @getter
   * This function is a getter for the member _maxMilliseconds.
   * @return {Number} The maximum milliseconds that can be spent preparing items each frame.
   */

	}, {
		key: "maxMilliseconds",
		get: function get() {
			return this._maxMilliseconds;
		}

		/**
   * maxMilliseconds
   * @setter
   * This function is a setter for the member _maxMilliseconds.
   * @param {Number}  max The maximum milliseconds that can be spent preparing items each frame.
   */
		,
		set: function set(max) {
			if ({}.toString.call(max) !== "[object Number]") throw new TypeError("max must be a number.");

			this._maxMilliseconds = max;
			this._timeLimiter.maxMilliseconds = max;
		}

		/**
   * maxItemsPerFrame
   * @getter
   * This function is a getter for the member _maxItemsPerFrame.
   * @return {Number} The maximum number of items that can be prepared each frame.
   */

	}, {
		key: "maxItemsPerFrame",
		get: function get() {
			return this._maxItemsPerFrame;
		}

		/**
   * maxItemsPerFrame
   * @setter
   * This function is a setter for the member _maxItemsPerFrame.
   * @param {Number} max The maximum number of items that can be prepared each frame.
   */
		,
		set: function set(max) {
			if ({}.toString.call(max) !== "[object Number]") throw new TypeError("max must be a number.");

			this._maxItemsPerFrame = max;
			this._countLimiter.maxItemsPerFrame = max;
		}
	}]);

	return Configuration;
}();

;

module.exports = {
	Configuration: Configuration
};