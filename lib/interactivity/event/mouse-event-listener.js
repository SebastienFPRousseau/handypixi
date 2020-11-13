/*
|--------------------------------------------------------------------------
| MouseEventListener
|--------------------------------------------------------------------------
|
| This file defines the MouseEventListener Object.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { EventListener } = require("./event-listener");
const { PixiMouseEventListener } = require("./pixi-mouse-event-listener");

/**
 * WHEEL
 * Identify the WHEEL event.
 * @type {Number}
 */
const WHEEL = 0;

class MouseEventListener extends EventListener {
  /**
   * constructor
   * This function is used in order to build a MouseEventListener
   * @param {Object2D}  obj  The object2D to bind with the event.
   * @param {Number}  code  The code of the event.
   * @param {Function}  handle The function called when the event is fired.
   * @param {Object}  data  The data using by the handle function.
   */
  constructor(obj, code, handle, data = {}) {
    super(obj, code, handle, data);

    this._handle = handle.bind(this, data);

    this._mouseOverEventListener = new PixiMouseEventListener(
      obj,
      PixiMouseEventListener.MOUSE_OVER,
      this.mouseOver,
      this
    );

    this._mouseOutEventListener = new PixiMouseEventListener(
      obj,
      PixiMouseEventListener.MOUSE_OUT,
      this.mouseOut,
      this
    );
  }

  /**
   * WHEEL
   * @getter
   */
  static get WHEEL() {
    return WHEEL;
  }

  /**
   * type
   * @getter
   * This function is a getter for the member _type.
   * @return {Number}  The code of this event.
   */
  get type() {
    return this._type;
  }

  /**
   * target
   * @getter
   * This function is a getter for the member _target.
   * @return {Object2D}  The code of this event.
   */
  get target() {
    return this._target;
  }

  /**
   * getJSType
   * This function is used in order to get the JS type of this event.
   * @param {Number}  code  The code of the event.
   * @return {String} The JS type as a String.
   */
  getJSType(code) {
    if ({}.toString.call(code) !== "[object Number]") {
      throw new TypeError("code must be a number.");
    }

    switch (code) {
      case WHEEL:
        return "wheel";

      default:
        return "wheel";
    }
  }

  /**
   * mouseOver
   * This function is used in order to add the event listener.
   * Second parameter is omitted, it may be original event from pixi.
   */
  mouseOver(context) {
    window.addEventListener(context.getJSType(context.type), context._handle);
  }

  /**
   * mouseOut
   * This function is used in order to remove the event listener.
   * Second parameter is omitted, it may be original event from pixi.
   */
  mouseOut(context) {
    window.removeEventListener(
      context.getJSType(context.type),
      context._handle
    );
  }
}

module.exports = {
  MouseEventListener,
};
