/*
|--------------------------------------------------------------------------
| PixiTouchEventListener
|--------------------------------------------------------------------------
|
| This file defines the PixiTouchEventListener Object.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { PixiEventListener } = require("./pixi-event-listener");

/**
 * TAP
 * Identify the TAP event.
 * @type {Number}
 */
const TAP = 0;

/**
 * TOUCH_END
 * Identify the TOUCH_END event.
 * @type {Number}
 */
const TOUCH_END = 1;

/**
 * TOUCH_ENDOUTSIDE
 * Identify the TOUCH_ENDOUTSIDE event.
 * @type {Number}
 */
const TOUCH_ENDOUTSIDE = 2;

/**
 * TOUCH_MOVE
 * Identify the TOUCH_MOVE event.
 * @type {Number}
 */
const TOUCH_MOVE = 3;

/**
 * TOUCH_START
 * Identify the TOUCH_START event.
 * @type {Number}
 */
const TOUCH_START = 4;

/**
 * TOUCH_CANCEL
 * Identify the TOUCH_CANCEL event.
 * @type {Number}
 */
const TOUCH_CANCEL = 5;

class PixiTouchEventListener extends PixiEventListener {
  /**
   * constructor
   * This function is used in order to build a PixiTouchEventListener
   * @param {Object2D}  obj  The object2D to bind with the event.
   * @param {Number}  code  The code of the event.
   * @param {Function}  handle The function called when the event is fired.
   * @param {Object}  data  The data using by the handle function.
   */
  constructor(obj, code, handle, data = {}) {
    super(obj, code, handle, data);
  }

  /**
   * TAP
   * @getter
   */
  static get TAP() {
    return TAP;
  }

  /**
   * TOUCH_END
   * @getter
   */
  static get TOUCH_END() {
    return TOUCH_END;
  }

  /**
   * TOUCH_ENDOUTSIDE
   * @getter
   */
  static get TOUCH_ENDOUTSIDE() {
    return TOUCH_ENDOUTSIDE;
  }

  /**
   * TOUCH_MOVE
   * @getter
   */
  static get TOUCH_MOVE() {
    return TOUCH_MOVE;
  }

  /**
   * TOUCH_START
   * @getter
   */
  static get TOUCH_START() {
    return TOUCH_START;
  }

  /**
   * TOUCH_CANCEL
   * @getter
   */
  static get TOUCH_CANCEL() {
    return TOUCH_CANCEL;
  }

  /**
   * getPixiType
   * This function is used in order to get the PIXI type of this event. Need to be overwritten by children.
   * @param {Number}  code  The code of the event.
   * @return {String} The pixi type as a String.
   */
  getPixiType(code) {
    if ({}.toString.call(code) !== "[object Number]")
      throw new TypeError("code must be a number.");

    switch (code) {
      case TAP:
        return "tap";

      case TOUCH_END:
        return "touchend";

      case TOUCH_ENDOUTSIDE:
        return "touchendoutside";

      case TOUCH_MOVE:
        return "touchmove";

      case TOUCH_START:
        return "touchstart";

      case TOUCH_CANCEL:
        return "touchcancel";

      default:
        return "tap";
    }
  }
}

module.exports = {
  PixiTouchEventListener,
};
