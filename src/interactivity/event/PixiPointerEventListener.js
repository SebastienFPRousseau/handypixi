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

const { PixiEventListener } = require("./PixiEventListener");

/**
 * POINTER_DOWN
 * Identify the POINTER_DOWN event.
 * @type {Number} 
 */
const POINTER_DOWN = 0;

/**
 * POINTER_MOVE
 * Identify the POINTER_MOVE event.
 * @type {Number} 
 */
const POINTER_MOVE = 1;

/**
 * POINTER_OUT
 * Identify the POINTER_OUT event.
 * @type {Number} 
 */
const POINTER_OUT = 2;

/**
 * POINTER_OVER
 * Identify the POINTER_OVER event.
 * @type {Number} 
 */
const POINTER_OVER = 3;

/**
 * POINTER_TAP
 * Identify the POINTER_TAP event.
 * @type {Number} 
 */
const POINTER_TAP = 4;

/**
 * POINTER_UP
 * Identify the POINTER_UP event.
 * @type {Number} 
 */
const POINTER_UP = 5;

/**
 * POINTER_UPOUTSIDE
 * Identify the POINTER_UPOUTSIDE event.
 * @type {Number} 
 */
const POINTER_UPOUTSIDE = 6;

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

/**
 * POINTER_CANCEL
 * Identify the POINTER_CANCEL event.
 * @type {Number} 
 */
const POINTER_CANCEL = 11;

class PixiPointerEventListener extends PixiEventListener
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an PixiPointerEventListener
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
	 * POINTER_DOWN
	 * @getter
	 */
	static get POINTER_DOWN()
	{
		return POINTER_DOWN;
	}

	/**
	 * POINTER_MOVE
	 * @getter
	 */
	static get POINTER_MOVE()
	{
		return POINTER_MOVE;
	}

	/**
	 * POINTER_OUT
	 * @getter
	 */
	static get POINTER_OUT()
	{
		return POINTER_OUT;
	}

	/**
	 * POINTER_OVER
	 * @getter
	 */
	static get POINTER_OVER()
	{
		return POINTER_OVER;
	}

	/**
	 * POINTER_TAP
	 * @getter
	 */
	static get POINTER_TAP()
	{
		return POINTER_TAP;
	}

	/**
	 * POINTER_UP
	 * @getter
	 */
	static get POINTER_UP()
	{
		return POINTER_UP;
	}

	/**
	 * POINTER_UPOUTSIDE
	 * @getter
	 */
	static get POINTER_UPOUTSIDE()
	{
		return POINTER_UPOUTSIDE;
	}

	/**
	 * POINTER_CANCEL
	 * @getter
	 */
	static get POINTER_CANCEL()
	{
		return POINTER_CANCEL;
	}

	/**
	 * RIGHT_CLIK
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
};

module.exports = {
	PixiPointerEventListener: PixiPointerEventListener,
};