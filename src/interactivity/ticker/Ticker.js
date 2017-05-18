"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Ticker
|--------------------------------------------------------------------------
|
| This file defines the Ticker Object.
| This object build a PIXI.ticker.Ticker for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var Ticker = function () {
	/**
 * constructor
 * This function is used in order to build a Ticker.
 * @param   {PIXI.ticker.Ticker}   pixiObj  The Pixi object to build the HandyPixi object.
 */
	function Ticker() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Ticker);

		if (pixiObj instanceof PIXI.ticker.Ticker) {
			this._out = pixiObj;
		} else {
			this._out = new PIXI.ticker.Ticker();
		}

		this._listenersFunctions = [];
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.ticker.Ticker} The PIXI Object used by this object. 
 */


	_createClass(Ticker, [{
		key: "autoStart",


		/**
   * autoStart
   * This function is used in order to invoke the method start automatically when a listener is added or not
   * @param {Boolean} auto Whether or not this ticker should automatically start.
   */
		value: function autoStart() {
			var auto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(auto) !== "[object Boolean]") throw new TypeError("auto must be a boolean.");

			this._out.autoStart = auto;
		}

		/**
   * isStarted
   * This function is used in order to know if the Ticker is running.
   * @return {Boolean} Whether or not this ticker has been called start.
   */

	}, {
		key: "isStarted",
		value: function isStarted() {
			return this._out.started;
		}

		/**
   * add
   * This function is used in order to request a new animation frame at this point.
   * @param {Function}  fn  The listener function to be added for updates.
   * @param {Object}  context  The listener context.
   */

	}, {
		key: "add",
		value: function add(fn) {
			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if ({}.toString.call(fn) !== "[object Function]") throw new TypeError("fn must be a function.");

			if (context != null) {
				if (!((typeof context === "undefined" ? "undefined" : _typeof(context)) === "object" && {}.toString.call(context) === "[object Object]")) throw new TypeError("context must be an object.");

				this._out.add(fn, context);
			} else {
				this._out.add(fn);
			}

			this._listenersFunctions.push(fn);
		}

		/**
   * addOnce
   * This function is used in order to request a new animation frame at this point.
   * @param {Function}  fn  The listener function to be added for ONE update.
   * @param {Object}  context  The listener context.
   */

	}, {
		key: "addOnce",
		value: function addOnce(fn) {
			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if ({}.toString.call(fn) !== "[object Function]") throw new TypeError("fn must be a function.");

			if (context != null) {
				if (!((typeof context === "undefined" ? "undefined" : _typeof(context)) === "object" && {}.toString.call(context) === "[object Object]")) throw new TypeError("context must be an object.");

				this._out.addOnce(fn, context);
			} else {
				this._out.addOnce(fn);
			}
		}

		/**
   * remove
   * This function is used in order to cancel the animation frame.
   * @param {Function}  fn  The listener function to be removed.
   * @param {Object}  context  The listener context to be removed.
   */

	}, {
		key: "remove",
		value: function remove() {
			var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (fn != null) {
				if ({}.toString.call(fn) !== "[object Function]") throw new TypeError("fn must be a function.");

				if (context != null) {
					if (!((typeof context === "undefined" ? "undefined" : _typeof(context)) === "object" && {}.toString.call(context) === "[object Object]")) throw new TypeError("context must be an object.");

					this._out.remove(fn, context);
				} else {
					this._out.remove(fn);
				}

				for (var i = 0, l = this._listenersFunctions.length; i < l; i++) {
					if (this._listenersFunctions[i] === fn) this._listenersFunctions.splice(i, 1);
				}
			} else {
				this._out.remove();
			}
		}

		/**
   * start
   * This function is used in order to start the Ticker. 
   */

	}, {
		key: "start",
		value: function start() {
			this._out.start();
		}

		/**
   * stop
   * This function is used in order to stop the Ticker.
   */

	}, {
		key: "stop",
		value: function stop() {
			this._out.stop();
		}

		/**
   * update
   * This function is used in order to trigger an update.
   * @param {Number}  currentTime  The current time of execution. 
   */

	}, {
		key: "update",
		value: function update() {
			var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (currentTime != null) {
				if ({}.toString.call(currentTime) !== "[object Number]") throw new TypeError("currentTime must be a number.");

				this._out.update(currentTime);
			} else {
				this._out.update();
			}
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
  * listenersFunctions
  * @getter
  * This function is a getter for the member _listenersFunctions.
  * @return  {Array} The listeners functions added for updates. 
  */

	}, {
		key: "listenersFunctions",
		get: function get() {
			return this._listenersFunctions;
		}

		/** 
   * deltaTime
   * @getter
   * This function is a getter for the member deltaTime.
   * @return {Number} Scalar time value from last frame to this frame.
   * This value is capped by setting minFPS and is scaled with speed.
   * Note: The cap may be exceeded by scaling.
   */

	}, {
		key: "deltaTime",
		get: function get() {
			return this._out.deltaTime;
		}

		/** 
   * deltaTime
   * @setter
   * This function is a setter for the member deltaTime.
   * @return {Number}  deltaTime  Scalar time value from last frame to this frame.
   * This value is capped by setting minFPS and is scaled with speed.
   * Note: The cap may be exceeded by scaling.
   */
		,
		set: function set(deltaTime) {
			if ({}.toString.call(deltaTime) !== "[object Number]") throw new TypeError("deltaTime must be a number.");

			this._out.deltaTime = deltaTime;
		}

		/** 
   * elapsedMS
   * @getter
   * This function is a getter for the member elapsedMS.
   * @return {Number} Time elapsed in milliseconds from last frame to this frame.
   */

	}, {
		key: "elapsedMS",
		get: function get() {
			return this._out.elapsedMS;
		}

		/** 
   * FPS
   * @getter
   * This function is a getter for the member elapsedMS.
   * @return {Number} The frames per second at which this ticker is running.
   */

	}, {
		key: "FPS",
		get: function get() {
			return this._out.FPS;
		}

		/** 
   * lastTime
   * @getter
   * This function is a getter for the member lastTime.
   * @return {Number} The last time this.update was invoked.
   */

	}, {
		key: "lastTime",
		get: function get() {
			return this._out.lastTime;
		}

		/** 
   * minFPS
   * @getter
   * This function is a getter for the member minFPS.
   * @return {Number} Manages the maximum amount of milliseconds allowed to elapse between invoking this.update.
   * This value is used to cap deltaTime, but does not effect the measured value of FPS.
   */

	}, {
		key: "minFPS",
		get: function get() {
			return this._out.minFPS;
		}

		/** 
  * minFPS
  * @setter
  * This function is a setter for the member minFPS.
  * @param {Number}  minFPS  Manages the maximum amount of milliseconds allowed to elapse between invoking this.update.
  * This value is used to cap deltaTime, but does not effect the measured value of FPS.
  * When setting this property it is clamped to a value between 0 and Settings.TARGET_FPMS * 1000.
  */
		,
		set: function set(minFPS) {
			if ({}.toString.call(minFPS) !== "[object Number]") throw new TypeError("minFPS must be a number.");

			this._out.minFPS = minFPS;
		}

		/** 
   * speed
   * @getter
   * This function is a getter for the member speed.
   * @return {Number} Factor of current deltaTime.
   */

	}, {
		key: "speed",
		get: function get() {
			return this._out.speed;
		}

		/** 
  * speed
  * @setter
  * This function is a setter for the member speed.
  * @param {Number}  speed  Factor of current deltaTime.
  */
		,
		set: function set(speed) {
			if ({}.toString.call(speed) !== "[object Number]") throw new TypeError("speed must be a number.");

			this._out.speed = speed;
		}

		/** 
   * shared
   * @getter
   * This function is a getter for the member PIXI.ticker.shared.
   * @return {Ticker} The shared ticker instance used by AnimatedSprite and by EventManager.
   * The property autoStart is set to true for this instance.
   */

	}], [{
		key: "shared",
		get: function get() {
			return new Ticker(PIXI.ticker.shared);
		}
	}]);

	return Ticker;
}();

;

module.exports = {
	Ticker: Ticker
};