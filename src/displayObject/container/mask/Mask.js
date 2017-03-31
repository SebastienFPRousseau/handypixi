/*
|--------------------------------------------------------------------------
| Mask
|--------------------------------------------------------------------------
|
| This file defines the Mask Object.
| This object is the abstract mask for Shape and Sprite.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Container } = require("./../Container.js");

class Mask extends Container
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an AbstractPoint
	 */
	constructor()
	{
		super();
		
		if (this.constructor === Mask)
			throw new TypeError("Cannot construct Abstract instances like Mask directly.");

		this._mask = null;
	}

	/**
	 * mask
	 * @getter
	 * This function is a getter for the member _mask.
	 * @return {Mask} The mask applied on this Mask.
	 */
	get mask()
	{
		return this._mask;
	}

	/**
	 * blendMode
	 * @getter
	 * This function is a getter for the member blendMode.
	 * @return {Number} The blend mode to be applied to the sprite.
	 */
	get blendMode()
	{
		return this._out.blendMode;
	}

	/**
	 * blendMode
	 * @setter
	 * This function is a setter for the member blendMode.
	 * @param {Number}  mode  The blend mode to be applied to the sprite.
	 */
	set blendMode(mode)
	{
		if ({}.toString.call(mode) !== "[object Number]")
			throw new TypeError("mode must be a number.");

		this._out.blendMode = mode;
	}

	/**
	 * tint
	 * @getter
	 * This function is a getter for the member tint.
	 * @return {Number} The tint applied to the sprite. This is a hex value.
	 */
	get tint()
	{
		return this._out.tint;
	}

	/**
	 * tint
	 * @setter
	 * This function is a setter for the member tint.
	 * @param {Number}  tint  The tint applied to the sprite. This is a hex value.
	 */
	set tint(tint)
	{
		if ({}.toString.call(tint) !== "[object Number]")
			throw new TypeError("tint must be a number.");

		this._out.tint = tint;
	}

	/**
	 * applyMask
	 * This function is used in order to apply a mask on this Mask.
	 * @param {Mask} mask The Mask to apply.
	 */
	applyMask(mask)
	{
		if (!(mask instanceof Mask))
			throw new TypeError("mask must be a Mask.");

		this._out.mask = mask.out;
		this._mask = mask;
	}

	/**
	 * removeMask
	 * This function is used in order to remove the mask applied on this Mask.
	 */
	removeMask()
	{
		this._out.mask = null;
		this._mask = null;
	}
};

module.exports = {
	Mask: Mask,
};