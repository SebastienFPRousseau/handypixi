"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| PixiEventListener
|--------------------------------------------------------------------------
|
| This file defines the PixiEventListener Object.
| This object is the abstract event listener for the pixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../../displayObject/object2D/Object2D.js"),
    Object2D = _require.Object2D;

var PixiEventListener = function () {
	/**
  * constructor
  * This function is used in order to forbidden the built of an PixiEventListener
  * @param {Object2D}  obj  The object2D to bind with the event.
  * @param {Number}  code  The code of the event.
  * @param {Function}  handle The function called when the event is fired.
  * @param {Object}  data  The data using by the handle function.
  */
	function PixiEventListener(obj, code, handle, context) {
		_classCallCheck(this, PixiEventListener);

		if (this.constructor === PixiEventListener) throw new TypeError("Cannot construct Abstract instances like PixiEventListener directly.");

		if (!(obj instanceof Object2D)) throw new TypeError("obj must be a Object2D.");

		if ({}.toString.call(code) !== "[object Number]") throw new TypeError("code must be a number.");

		if ({}.toString.call(handle) !== "[object Function]") throw new TypeError("handle must be a function.");

		this._type = code;
		this._target = obj;

		handle = handle.bind(this, context);

		obj.out.out.interactive = true;
		obj.out.out.buttonMode = true;
		obj.out.out.on(this.getPixiType(code), handle);
	}

	/**
  * type
  * @getter
  * This function is a getter for the member _type.
  * @return {Number}  The code of this event.
  */


	_createClass(PixiEventListener, [{
		key: "getPixiType",


		/**
   * getPixiType
   * This function is used in order to get the type of this event. Need to be overwritten by children.
   * @param {Number}  code  The code of the event.
   * @return {String} The type as a String.
   */
		value: function getPixiType(code) {
			if ({}.toString.call(code) !== "[object Number]") throw new TypeError("code must be a number.");

			return "NO_EVENT";
		}
	}, {
		key: "type",
		get: function get() {
			return this._type;
		}

		/**
   * target
   * @getter
   * This function is a getter for the member _target.
   * @return {Object2D}  The code of this event.
   */

	}, {
		key: "target",
		get: function get() {
			return this._target;
		}

		/**
   * data
   * @getter
   * This function is a getter for the member _data.
   * @return {Object}  The code of this event.
   */

	}, {
		key: "data",
		get: function get() {
			return this._data;
		}
	}]);

	return PixiEventListener;
}();

;

module.exports = {
	PixiEventListener: PixiEventListener
};