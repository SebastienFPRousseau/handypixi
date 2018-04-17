/*
|--------------------------------------------------------------------------
| PixiEventListener
|--------------------------------------------------------------------------
|
| This file defines the PixiEventListener Object.
| This object is the abstract event listener for the pixi events.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const {Object2D} = require("./../../displayObject/object2D/Object2D.js");

class PixiEventListener
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of a PixiEventListener
	 * @param {Object2D}  obj  The object2D to bind with the event.
	 * @param {Number}  code  The code of the event.
	 * @param {Function}  handle The function called when the event is fired.
	 * @param {Object}  data  The data using by the handle function.
	 */
	constructor(obj, code, handle, data)
	{
		if (this.constructor === PixiEventListener)
			throw new TypeError("Cannot construct Abstract instances like PixiEventListener directly.");

		if (!(obj instanceof Object2D))
			throw new TypeError("obj must be a Object2D.");

		if ({}.toString.call(code) !== "[object Number]")
			throw new TypeError("code must be a number.");

		if ({}.toString.call(handle) !== "[object Function]")
			throw new TypeError("handle must be a function.");

		this._type = code;
		this._target = obj;

		handle = handle.bind(this, data);

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
	get type()
	{
		return this._type;
	}

	/**
	 * target
	 * @getter
	 * This function is a getter for the member _target.
	 * @return {Object2D}  The code of this event.
	 */
	get target()
	{
		return this._target;
	}
};

module.exports = {
	PixiEventListener: PixiEventListener,
};