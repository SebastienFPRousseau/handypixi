"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| PixiPointerEventListener
|--------------------------------------------------------------------------
|
| This file defines the PixiPointerEventListener Object.
| This object is the abstract event listener for the pixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./PixiEventListener"),
    PixiEventListener = _require.PixiEventListener;

/**
 * POINTER_DOWN
 * Identify the POINTER_DOWN event.
 * @type {Number} 
 */


var POINTER_DOWN = 0;

/**
 * POINTER_MOVE
 * Identify the POINTER_MOVE event.
 * @type {Number} 
 */
var POINTER_MOVE = 1;

/**
 * POINTER_OUT
 * Identify the POINTER_OUT event.
 * @type {Number} 
 */
var POINTER_OUT = 2;

/**
 * POINTER_OVER
 * Identify the POINTER_OVER event.
 * @type {Number} 
 */
var POINTER_OVER = 3;

/**
 * POINTER_TAP
 * Identify the POINTER_TAP event.
 * @type {Number} 
 */
var POINTER_TAP = 4;

/**
 * POINTER_UP
 * Identify the POINTER_UP event.
 * @type {Number} 
 */
var POINTER_UP = 5;

/**
 * POINTER_UPOUTSIDE
 * Identify the POINTER_UPOUTSIDE event.
 * @type {Number} 
 */
var POINTER_UPOUTSIDE = 6;

/**
 * RIGHT_CLICK
 * Identify the RIGHT_CLICK event.
 * @type {Number} 
 */
var RIGHT_CLICK = 7;

/**
 * RIGHT_DOWN
 * Identify the RIGHT_DOWN event.
 * @type {Number} 
 */
var RIGHT_DOWN = 8;

/**
 * RIGHT_UP
 * Identify the RIGHT_UP event.
 * @type {Number} 
 */
var RIGHT_UP = 9;

/**
 * RIGHT_UPOUTSIDE
 * Identify the RIGHT_UPOUTSIDE event.
 * @type {Number} 
 */
var RIGHT_UPOUTSIDE = 10;

/**
 * POINTER_CANCEL
 * Identify the POINTER_CANCEL event.
 * @type {Number} 
 */
var POINTER_CANCEL = 11;

var PixiPointerEventListener = function (_PixiEventListener) {
	_inherits(PixiPointerEventListener, _PixiEventListener);

	/**
  * constructor
  * This function is used in order to forbidden the built of an PixiPointerEventListener
  * @param {Object2D}  obj  The object2D to bind with the event.
  * @param {Number}  code  The code of the event.
  * @param {Function}  handle The function called when the event is fired.
  * @param {Object}  data  The data using by the handle function.
  */
	function PixiPointerEventListener(obj, code, handle) {
		var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		_classCallCheck(this, PixiPointerEventListener);

		return _possibleConstructorReturn(this, (PixiPointerEventListener.__proto__ || Object.getPrototypeOf(PixiPointerEventListener)).call(this, obj, code, handle, data));
	}

	/**
  * POINTER_DOWN
  * @getter
  */


	_createClass(PixiPointerEventListener, [{
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
				case POINTER_DOWN:
					return 'pointerdown';

				case POINTER_MOVE:
					return 'pointermove';

				case POINTER_OUT:
					return 'pointerout';

				case POINTER_OVER:
					return 'pointerover';

				case POINTER_TAP:
					return 'pointertap';

				case POINTER_UP:
					return 'pointerup';

				case POINTER_UPOUTSIDE:
					return 'pointerupoutside';

				case POINTER_CANCEL:
					return 'pointercancel';

				case RIGHT_CLICK:
					return 'rightclick';

				case RIGHT_DOWN:
					return 'rightdown';

				case RIGHT_UP:
					return 'rightup';

				case RIGHT_UPOUTSIDE:
					return 'rightupoutside';

				default:
					return 'pointertap';
			}
		}
	}], [{
		key: "POINTER_DOWN",
		get: function get() {
			return POINTER_DOWN;
		}

		/**
   * POINTER_MOVE
   * @getter
   */

	}, {
		key: "POINTER_MOVE",
		get: function get() {
			return POINTER_MOVE;
		}

		/**
   * POINTER_OUT
   * @getter
   */

	}, {
		key: "POINTER_OUT",
		get: function get() {
			return POINTER_OUT;
		}

		/**
   * POINTER_OVER
   * @getter
   */

	}, {
		key: "POINTER_OVER",
		get: function get() {
			return POINTER_OVER;
		}

		/**
   * POINTER_TAP
   * @getter
   */

	}, {
		key: "POINTER_TAP",
		get: function get() {
			return POINTER_TAP;
		}

		/**
   * POINTER_UP
   * @getter
   */

	}, {
		key: "POINTER_UP",
		get: function get() {
			return POINTER_UP;
		}

		/**
   * POINTER_UPOUTSIDE
   * @getter
   */

	}, {
		key: "POINTER_UPOUTSIDE",
		get: function get() {
			return POINTER_UPOUTSIDE;
		}

		/**
   * POINTER_CANCEL
   * @getter
   */

	}, {
		key: "POINTER_CANCEL",
		get: function get() {
			return POINTER_CANCEL;
		}

		/**
   * RIGHT_CLIK
   * @getter
   */

	}, {
		key: "RIGHT_CLICK",
		get: function get() {
			return RIGHT_CLICK;
		}

		/**
   * RIGHT_DOWN
   * @getter
   */

	}, {
		key: "RIGHT_DOWN",
		get: function get() {
			return RIGHT_DOWN;
		}

		/**
   * RIGHT_UP
   * @getter
   */

	}, {
		key: "RIGHT_UP",
		get: function get() {
			return RIGHT_UP;
		}

		/**
   * RIGHT_UPOUTSIDE
   * @getter
   */

	}, {
		key: "RIGHT_UPOUTSIDE",
		get: function get() {
			return RIGHT_UPOUTSIDE;
		}
	}]);

	return PixiPointerEventListener;
}(PixiEventListener);

;

module.exports = {
	PixiPointerEventListener: PixiPointerEventListener
};