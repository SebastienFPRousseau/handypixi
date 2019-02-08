/*
|--------------------------------------------------------------------------
| EventListener
|--------------------------------------------------------------------------
|
| This file defines the EventListener Object.
| This object is the abstract event listener.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Object2D } = require("./../../display-object/object-2d/object-2d");

class EventListener {
  /**
   * constructor
   * This function is used in order to forbidden the built of a EventListener
   * @param {Object2D}  obj  The object2D to bind with the event.
   * @param {Number}  code  The code of the event.
   * @param {Function}  handle The function called when the event is fired.
   * @param {Object}  data  The data using by the handle function.
   */
  constructor(obj, code, handle, data = {}) {
    if (this.constructor === EventListener) {
      throw new TypeError(
        "Cannot construct Abstract instances like EventListener directly."
      );
    }

    if (!(obj instanceof Object2D)) {
      throw new TypeError("obj must be a Object2D.");
    }

    if ({}.toString.call(code) !== "[object Number]") {
      throw new TypeError("code must be a number.");
    }

    if ({}.toString.call(handle) !== "[object Function]") {
      throw new TypeError("handle must be a function.");
    }

    this._type = code;
    this._target = obj;
    this._data = data;
    this._handle = handle;
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
}

module.exports = {
  EventListener,
};
