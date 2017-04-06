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

const { PixiEventListener } = require("./PixiEventListener");

/**
 * CLICK
 * Identify the CLICK event.
 * @type {Number} 
 */
const CLICK = 0;

/**
 * MOUSE_DOWN
 * Identify the MOUSE_DOWN event.
 * @type {Number} 
 */
const MOUSE_DOWN = 1;

/**
 * MOUSE_MOVE
 * Identify the MOUSE_MOVE event.
 * @type {Number} 
 */
const MOUSE_MOVE = 2;

/**
 * MOUSE_OUT
 * Identify the MOUSE_OUT event.
 * @type {Number} 
 */
const MOUSE_OUT = 3;

/**
 * MOUSE_OVER
 * Identify the MOUSE_OVER event.
 * @type {Number} 
 */
const MOUSE_OVER = 4;

/**
 * MOUSE_UP
 * Identify the MOUSE_UP event.
 * @type {Number} 
 */
const MOUSE_UP = 5;

/**
 * MOUSE_UPOUTSIDE
 * Identify the MOUSE_UPOUTSIDE event.
 * @type {Number} 
 */
const MOUSE_UPOUTSIDE = 6;

/**
 * RIGHT_CLICK
 * Identify the RIGHT_CLICK event.
 * @type {Number} 
 */
const RIGHT_CLICK = 7;

/**
 * RIGHT_DOWN
 * Identify the RIGHT_DOWN event.
 * @type {Number} 
 */
const RIGHT_DOWN = 8;

/**
 * RIGHT_UP
 * Identify the RIGHT_UP event.
 * @type {Number} 
 */
const RIGHT_UP = 9;

/**
 * RIGHT_UPOUTSIDE
 * Identify the RIGHT_UPOUTSIDE event.
 * @type {Number} 
 */
const RIGHT_UPOUTSIDE = 10;

class PixiMouseEventListener extends PixiEventListener
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an PixiMouseEventListener
	 * @param {Object2D}  obj  The object2D to bind with the event.
	 * @param {Number}  code  The code of the event.
	 * @param {Function}  handle The function called when the event is fired.
	 * @param {Object}  data  The data using by the handle function.
	 */
	constructor(obj, code, handle, data = {})
	{
		super(obj, code, handle);
	}

	/**
	 * CLICK
	 * @getter
	 */
	static get CLICK()
	{
		return CLICK;
	}

	/**
	 * MOUSE_DOWN
	 * @getter
	 */
	static get MOUSE_DOWN()
	{
		return MOUSE_DOWN;
	}

	/**
	 * MOUSE_MOVE
	 * @getter
	 */
	static get MOUSE_MOVE()
	{
		return MOUSE_MOVE;
	}

	/**
	 * MOUSE_OUT
	 * @getter
	 */
	static get MOUSE_OUT()
	{
		return MOUSE_OUT;
	}

	/**
	 * MOUSE_OVER
	 * @getter
	 */
	static get MOUSE_OVER()
	{
		return MOUSE_OVER;
	}

	/**
	 * MOUSE_UP
	 * @getter
	 */
	static get MOUSE_UP()
	{
		return MOUSE_UP;
	}

	/**
	 * MOUSE_UPOUTSIDE
	 * @getter
	 */
	static get MOUSE_UPOUTSIDE()
	{
		return MOUSE_UPOUTSIDE;
	}

	/**
	 * RIGHT_CLICK
	 * @getter
	 */
	static get RIGHT_CLICK()
	{
		return RIGHT_CLICK;
	}

	/**
	 * RIGHT_DOWN
	 * @getter
	 */
	static get RIGHT_DOWN()
	{
		return RIGHT_DOWN;
	}

	/**
	 * RIGHT_UP
	 * @getter
	 */
	static get RIGHT_UP()
	{
		return RIGHT_UP;
	}

	/**
	 * RIGHT_UPOUTSIDE
	 * @getter
	 */
	static get RIGHT_UPOUTSIDE()
	{
		return RIGHT_UPOUTSIDE;
	}

	/**
	 * getPixiType
	 * This function is used in order to get the PIXI type of this event. Need to be overwritten by children.
	 * @param {Number}  code  The code of the event.
	 * @return {String} The pixi type as a String.
	 */
	getPixiType(code)
	{
		if ({}.toString.call(code) !== "[object Number]")
			throw new TypeError("code must be a number.");

		switch(code)
		{
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
};

module.exports = {
	PixiMouseEventListener: PixiMouseEventListener,
};