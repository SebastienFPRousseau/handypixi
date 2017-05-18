"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Dispatcher
|--------------------------------------------------------------------------
|
| This file defines the Dispatcher Object.
| This object is a dispatcher for the HandyPixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var Dispatcher = function () {
	/**
  * constructor
  * This function is used in order to build a Dispatcher.
  */
	function Dispatcher() {
		_classCallCheck(this, Dispatcher);

		if (this.constructor !== Dispatcher) throw new TypeError("Subclassing is not allowed. Dispatcher is final.");

		this._listeners = [];
	}

	/**
 * listeners
 * @getter
 * This function is a getter for the member _listeners.
 * @return {EventListener[]} The event listeners binded on this manager.
 */


	_createClass(Dispatcher, [{
		key: "addListener",


		/**
   * addListener
   * This function is used in order to add a listener on this dispatcher.
   * @param {EventListener}  listener  The listener to add.
   */
		value: function addListener(listener) {
			if (!(listener instanceof EventListener)) throw new TypeError("listener must be a EventListener.");

			for (var i = 0, l = listener.listenTo.length; i < l; i++) {
				if (!Array.isArray(this._listeners[listener.listenTo[i]])) {
					this._listeners[listener.listenTo[i]] = [];
				}

				this._listeners[listener.listenTo[i]].push(listener);
			}
		}

		/**
   * notify
   * This function is used in order to call the handle methods of the listeners.
   * @param {Event}  event  The event fired.
   */

	}, {
		key: "notify",
		value: function notify(event) {
			if (!(event instanceof Event)) throw new TypeError("event must be a Event.");

			if (this._listeners[event.name] === undefined) throw new ReferenceError("There is no event listener registered for the event named " + event.name + ".");

			for (var i = 0, ls = this._listeners[event.name]; i < ls.length; i++) {
				if (ls[i].handle(event)) break;
			}
		}
	}, {
		key: "listeners",
		get: function get() {
			return this._listeners;
		}
	}]);

	return Dispatcher;
}();

;

/*
|--------------------------------------------------------------------------
| EventListener
|--------------------------------------------------------------------------
|
| This file defines the EventListener Object.
| This object is the EventListener for the handypixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var EventListener = function () {
	/**
  * constructor
  * This function is used in order to forbidden the built of an EventListener
  * @param {Object}  options  The options for the EventListener instance.
  */
	function EventListener(options) {
		_classCallCheck(this, EventListener);

		if (this._isValid(options)) {
			this._dispatcher = options.dispatcher;
			this.name = options.name;
			this.listenTo = options.listenTo;
			this.handle = options.handle.bind(this, options.context);

			this.register();
		}
	}

	/**
  * register
  * This function is used in order to register this listener in the dispatcher
  */


	_createClass(EventListener, [{
		key: "register",
		value: function register() {

			this._dispatcher.addListener(this);
		}

		/**
     * isValid
     * This function is used in order to validate the EventListener description.
     * @param {Object} options An object containing the description of the event listener.
     * @return {Boolean} True if the EventListener description is valid, a Javascript TypeError otherwise.
     */

	}, {
		key: "_isValid",
		value: function _isValid(options) {
			if (!(options.dispatcher instanceof Dispatcher)) {
				throw new TypeError("dispatcher must be a Dispatcher.");
			}
			if ({}.toString.call(options.handle) !== "[object Function]") {
				throw new TypeError(this.constructor.name + " must override the handle method.");
			} else if (!_.isString(options.name) || _.isEmpty(options.name)) {
				throw new TypeError("EventListener name must be a string.");
			} else if (!this._isValidTarget(options.listenTo)) {
				throw new TypeError("EventListener listenTo must be a String[*].");
			}

			return true;
		}

		/**
     * isValidTarget
     * This function is used in order to validate the target(s) of the listener.
     * @param {Array} listenTo An array containing the name of the events to monitor.
     * @return {Boolean} True if the event target is valid, false otherwise.
     */

	}, {
		key: "_isValidTarget",
		value: function _isValidTarget(listenTo) {
			if (Array.isArray(listenTo)) {
				for (var i = 0, l = listenTo.length; i < l; i++) {
					if (!(typeof listenTo[i] === "string" && {}.toString.call(listenTo[i]) === "[object String]")) {
						return false;
					}
				}
			} else {
				return false;
			}

			return true;
		}
	}]);

	return EventListener;
}();

;

/*
|--------------------------------------------------------------------------
| Event
|--------------------------------------------------------------------------
|
| This file defines the Event Object.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var Event = function () {
	/**
  * constructor
  * This function is used in order to forbidden the built of an Event
  * @param {Dispatcher}  dispatcher  The dispatcher instance.
  * @param {Number}  code  The code of the event.
  * @param {String}  name  The name of the event.
  */
	function Event(dispatcher, code, name) {
		_classCallCheck(this, Event);

		if (!(dispatcher instanceof Dispatcher)) throw new TypeError("dispatcher must be a Dispatcher.");

		if ({}.toString.call(code) !== "[object Number]") throw new TypeError("code must be a number.");

		if (!(typeof name === "string" && {}.toString.call(name) === "[object String]")) throw new TypeError("name must be a string.");

		this._dispatcher = dispatcher;
		this.code = code;
		this.name = name;
	}

	/**
  * fire
  * This function is used in order to notify the dispatcher than the event is fired.
  */


	_createClass(Event, [{
		key: "fire",
		value: function fire() {
			this._dispatcher.notify(this);
		}
	}]);

	return Event;
}();

;

module.exports = {
	Dispatcher: Dispatcher,
	EventListener: EventListener,
	Event: Event
};