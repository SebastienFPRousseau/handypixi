"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| PixiMouseEventListener
|--------------------------------------------------------------------------
|
| This file defines the PixiMouseEventListener Object.
| This object is the abstract event listener for the pixi events.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./PixiEventListener"),
    PixiEventListener = _require.PixiEventListener;

/**
 * CLICK
 * Identify the CLICK event.
 * @type {Number} 
 */


var CLICK = 0;

/**
 * MOUSE_DOWN
 * Identify the MOUSE_DOWN event.
 * @type {Number} 
 */
var MOUSE_DOWN = 1;

/**
 * MOUSE_MOVE
 * Identify the MOUSE_MOVE event.
 * @type {Number} 
 */
var MOUSE_MOVE = 2;

/**
 * MOUSE_OUT
 * Identify the MOUSE_OUT event.
 * @type {Number} 
 */
var MOUSE_OUT = 3;

/**
 * MOUSE_OVER
 * Identify the MOUSE_OVER event.
 * @type {Number} 
 */
var MOUSE_OVER = 4;

/**
 * MOUSE_UP
 * Identify the MOUSE_UP event.
 * @type {Number} 
 */
var MOUSE_UP = 5;

/**
 * MOUSE_UPOUTSIDE
 * Identify the MOUSE_UPOUTSIDE event.
 * @type {Number} 
 */
var MOUSE_UPOUTSIDE = 6;

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

var PixiMouseEventListener = function (_PixiEventListener) {
	_inherits(PixiMouseEventListener, _PixiEventListener);

	/**
  * constructor
  * This function is used in order to forbidden the built of an PixiMouseEventListener
  * @param {Object2D}  obj  The object2D to bind with the event.
  * @param {Number}  code  The code of the event.
  * @param {Function}  handle The function called when the event is fired.
  * @param {Object}  data  The data using by the handle function.
  */
	function PixiMouseEventListener(obj, code, handle) {
		var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		_classCallCheck(this, PixiMouseEventListener);

		return _possibleConstructorReturn(this, (PixiMouseEventListener.__proto__ || Object.getPrototypeOf(PixiMouseEventListener)).call(this, obj, code, handle, data));
	}

	/**
  * CLICK
  * @getter
  */


	_createClass(PixiMouseEventListener, [{
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
				case CLICK:
					return 'click';

				case MOUSE_DOWN:
					return 'mousedown';

				case MOUSE_MOVE:
					return 'mousemove';

				case MOUSE_OUT:
					return 'mouseout';

				case MOUSE_OVER:
					return 'mouseover';

				case MOUSE_UP:
					return 'mouseup';

				case MOUSE_UPOUTSIDE:
					return 'mouseupoutside';

				case RIGHT_CLICK:
					return 'rightclick';

				case RIGHT_DOWN:
					return 'rightdown';

				case RIGHT_UP:
					return 'rightup';

				case RIGHT_UPOUTSIDE:
					return 'rightupoutside';

				default:
					return 'click';
			}
		}
	}], [{
		key: "CLICK",
		get: function get() {
			return CLICK;
		}

		/**
   * MOUSE_DOWN
   * @getter
   */

	}, {
		key: "MOUSE_DOWN",
		get: function get() {
			return MOUSE_DOWN;
		}

		/**
   * MOUSE_MOVE
   * @getter
   */

	}, {
		key: "MOUSE_MOVE",
		get: function get() {
			return MOUSE_MOVE;
		}

		/**
   * MOUSE_OUT
   * @getter
   */

	}, {
		key: "MOUSE_OUT",
		get: function get() {
			return MOUSE_OUT;
		}

		/**
   * MOUSE_OVER
   * @getter
   */

	}, {
		key: "MOUSE_OVER",
		get: function get() {
			return MOUSE_OVER;
		}

		/**
   * MOUSE_UP
   * @getter
   */

	}, {
		key: "MOUSE_UP",
		get: function get() {
			return MOUSE_UP;
		}

		/**
   * MOUSE_UPOUTSIDE
   * @getter
   */

	}, {
		key: "MOUSE_UPOUTSIDE",
		get: function get() {
			return MOUSE_UPOUTSIDE;
		}

		/**
   * RIGHT_CLICK
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

	return PixiMouseEventListener;
}(PixiEventListener);

;

module.exports = {
	PixiMouseEventListener: PixiMouseEventListener
};