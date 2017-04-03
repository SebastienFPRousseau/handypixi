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

const {Object2D} = require("./../../displayObject/object2D/Object2D.js");

class PixiEventListener
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an PixiEventListener
	 * @param {Object2D}  obj  The object2D to bind with the event.
	 * @param {Number}  code  The code of the event.
	 * @param {Function}  handle The function called when the event is fired.
	 */
	constructor(obj, code, handle)
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
	 * getPixiType
	 * This function is used in order to get the type of this event. Need to be overwritten by children.
	 * @param {Number}  code  The code of the event.
	 * @return {String} The type as a String.
	 */
	getPixiType(code)
	{
		if ({}.toString.call(code) !== "[object Number]")
			throw new TypeError("code must be a number.");

		return "NO_EVENT";
	}
};

module.exports = {
	PixiEventListener: PixiEventListener,
};