"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| PixiTouchEventListener
|--------------------------------------------------------------------------
|
| This file defines the PixiTouchEventListener Object.
| This object is the abstract event listener for the pixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./PixiEventListener"),
    PixiEventListener = _require.PixiEventListener;

/**
 * TAP
 * Identify the TAP event.
 * @type {Number} 
 */


var TAP = 0;

/**
 * TOUCH_END
 * Identify the TOUCH_END event.
 * @type {Number} 
 */
var TOUCH_END = 1;

/**
 * TOUCH_ENDOUTSIDE
 * Identify the TOUCH_ENDOUTSIDE event.
 * @type {Number} 
 */
var TOUCH_ENDOUTSIDE = 2;

/**
 * TOUCH_MOVE
 * Identify the TOUCH_MOVE event.
 * @type {Number} 
 */
var TOUCH_MOVE = 3;

/**
 * TOUCH_START
 * Identify the TOUCH_START event.
 * @type {Number} 
 */
var TOUCH_START = 4;

/**
 * TOUCH_CANCEL
 * Identify the TOUCH_CANCEL event.
 * @type {Number} 
 */
var TOUCH_CANCEL = 5;

var PixiTouchEventListener = function (_PixiEventListener) {
	_inherits(PixiTouchEventListener, _PixiEventListener);

	/**
  * constructor
  * This function is used in order to forbidden the built of an PixiTouchEventListener
  * @param {Object2D}  obj  The object2D to bind with the event.
  * @param {Number}  code  The code of the event.
  * @param {Function}  handle The function called when the event is fired.
  * @param {Object}  data  The data using by the handle function.
  */
	function PixiTouchEventListener(obj, code, handle) {
		var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		_classCallCheck(this, PixiTouchEventListener);

		return _possibleConstructorReturn(this, (PixiTouchEventListener.__proto__ || Object.getPrototypeOf(PixiTouchEventListener)).call(this, obj, code, handle, data));
	}

	/**
  * TAP
  * @getter
  */


	_createClass(PixiTouchEventListener, [{
		key: "getPixiType",


		/**
   * getPixiType
   * This function is used in order to get the PIXI type of this event. Need to be overwritten by children.
   * @param {Number}  code  The code of the event.
   * @return {String} The pixi type as a String.
   */
		value: function getPixiType(code) {
			if ({}.toString.call(code) !== "[object Number]") throw new TypeError("code must be a number.");

			switch (code) {
				case TAP:
					return 'tap';

				case TOUCH_END:
					return 'touchend';

				case TOUCH_ENDOUTSIDE:
					return 'touchendoutside';

				case TOUCH_MOVE:
					return 'touchmove';

				case TOUCH_START:
					return 'touchstart';

				case TOUCH_CANCEL:
					return 'touchcancel';

				default:
					return 'tap';
			}
		}
	}], [{
		key: "TAP",
		get: function get() {
			return TAP;
		}

		/**
   * TOUCH_END
   * @getter
   */

	}, {
		key: "TOUCH_END",
		get: function get() {
			return TOUCH_END;
		}

		/**
   * TOUCH_ENDOUTSIDE
   * @getter
   */

	}, {
		key: "TOUCH_ENDOUTSIDE",
		get: function get() {
			return TOUCH_ENDOUTSIDE;
		}

		/**
   * TOUCH_MOVE
   * @getter
   */

	}, {
		key: "TOUCH_MOVE",
		get: function get() {
			return TOUCH_MOVE;
		}

		/**
   * TOUCH_START
   * @getter
   */

	}, {
		key: "TOUCH_START",
		get: function get() {
			return TOUCH_START;
		}

		/**
   * TOUCH_CANCEL
   * @getter
   */

	}, {
		key: "TOUCH_CANCEL",
		get: function get() {
			return TOUCH_CANCEL;
		}
	}]);

	return PixiTouchEventListener;
}(PixiEventListener);

;

module.exports = {
	PixiTouchEventListener: PixiTouchEventListener
};