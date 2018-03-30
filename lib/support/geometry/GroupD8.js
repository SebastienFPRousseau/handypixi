/*
|--------------------------------------------------------------------------
| GroupD8
|--------------------------------------------------------------------------
|
| This file defines the GroupD8 Object.
| This object build a PIXI.GroupD8 for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { Matrix } = require("./Matrix.js");

class GroupD8
{
	/**
	 * constructor
	 * This function is used in order to build a GroupD8.
	 */
	constructor()
	{
		this._out = PIXI.GroupD8;
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.GroupD8} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * byDirection
	 * This function is used in order to 
	 * @param {Number}  dx  Direction horizontale.
	 * @param {Number}  dy  Direction verticale.
	 * @return {Number} 
	 */
	static byDirection(dx, dy)
	{
		if ({}.toString.call(dx) !== "[object Number]")
			throw new TypeError("dx must be a number.");

		if ({}.toString.call(dy) !== "[object Number]")
			throw new TypeError("dy must be a number.");

		return PIXI.GroupD8.byDirection(dx, dy);
	}
	
	/**
	 * isVertical
	 * This function is used in order to know if width and height needs to be swapped. It appends sometimes.
	 * @param {Number}  rotation  The number to check.
	 * @return {Boolean} Whether or not the width/height should be swapped.
	 */
	static isVertical(rotation)
	{
		if ({}.toString.call(rotation) !== "[object Number]")
			throw new TypeError("rotation must be a number.");

		return PIXI.GroupD8.isVertical(rotation);
	}

	/**
	 * matrixAppendRotationInv
	 * This function is used in order to help sprite to compensate texture packer rotation.
	 * @param {Matrix}  matrix  Sprite world matrix.
	 * @param {Number}  rotation  The rotation factor to use.
	 * @param {Number}  tx  Sprite anchoring.
	 * @param {Number}  ty  Sprite anchoring.
	 */
	static matrixAppendRotationInv(matrix, rotation, tx, ty)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		if ({}.toString.call(rotation) !== "[object Number]")
			throw new TypeError("rotation must be a number.");

		if ({}.toString.call(tx) !== "[object Number]")
			throw new TypeError("tx must be a number.");

		if ({}.toString.call(ty) !== "[object Number]")
			throw new TypeError("ty must be a number.");

		PIXI.GroupD8.matrixAppendRotationInv(matrix.out, rotation, tx, ty);
	}

	/**
	 * rotate180
	 * This function is used in order to add 180 degrees to rotation. Commutative operation.
	 * @param  {Number}  rotation  The number to rotate.
	 * @return {Number}  Rotated number. 
	 */
	static rotate180(rotation)
	{
		if ({}.toString.call(rotation) !== "[object Number]")
			throw new TypeError("rotation must be a number.");

		return PIXI.GroupD8.rotate180(rotation);
	}
};

module.exports = {
	GroupD8: GroupD8,
};