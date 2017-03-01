/*
|--------------------------------------------------------------------------
| Matrix
|--------------------------------------------------------------------------
|
| This file defines the Matrix Object.
| This object build a PIXI.Matrix for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

Matrix = class Matrix
{
	/**
	* constructor
	* This function is used in order to build a Matrix.
	* @param   {Number[4]}   params         X scale, y skew, x skew, y scale.
	* @param   {Number}   tx         X translation.
	* @param   {Number}   ty         Y translation.
	* @param   {PIXI.Matrix}   params         The Pixi object to build the HandyPixi object.
	*/
	constructor(params = [1, 0, 0, 1], tx = 0, ty = 0)
	{
		if (typeof tx != "number")
			throw new TypeError("tx must be a number.");

		if (typeof ty != "number")
			throw new TypeError("ty must be a number.");

		if (params instanceof PIXI.Matrix)
		{
			this._out = params;
		}
		else if (!Array.isArray(params) || params.length != 4)
		{
			throw new TypeError("params must be an array, its length must be four.");
		}
		else 
		{
			params.forEach(function(element)
			{
				if (typeof element != "number")
					throw new TypeError("params must be an array of numbers.");
			});

			this._out = new PIXI.Matrix(params[0], params[1], params[2], params[3], tx, ty);
		}
	}

	/**
	* getOut
	* This function is a getter for the member _out.
	* @return  {PIXI.Matrix} The PIXI Object used by this object. 
	*/
	getOut()
	{
		return this._out;
	}

	/**
	 * getAt
	 * This function is used in order to
	 */
	getAt()
	{

	}

	/**
	 * setAt
	 * This function is used in order to
	 */
	setAt()
	{

	}

	/**
	 * append
	 * This function is used in order to
	 */
	append()
	{

	}

	/**
	 * apply
	 * This function is used in order to
	 */
	apply()
	{

	}

	/**
	 * applyInverse
	 * This function is used in order to
	 */
	applyInverse()
	{

	}

	/**
	 * clone
	 * This function is used in order to
	 */
	clone()
	{

	}

	/**
	 * copy
	 * This function is used in order to
	 */
	copy()
	{

	}

	/**
	 * decompose
	 * This function is used in order to
	 */
	decompose()
	{

	}

	/**
	 * fromArray
	 * This function is used in order to
	 */
	fromArray()
	{

	}

	/**
	 * identity
	 * This function is used in order to
	 */
	identity()
	{

	}

	/**
	 * invert
	 * This function is used in order to
	 */
	invert()
	{

	}

	/**
	 * prepend
	 * This function is used in order to
	 */
	prepend()
	{

	}

	/**
	 * rotate
	 * This function is used in order to
	 */
	rotate()
	{

	}

	/**
	 * scale
	 * This function is used in order to
	 */
	scale()
	{

	}

	/**
	 * set
	 * This function is used in order to
	 */
	set()
	{

	}

	/**
	 * setTransform
	 * This function is used in order to
	 */
	setTransform()
	{

	}

	/**
	 * toArray
	 * This function is used in order to
	 */
	toArray()
	{

	}

	/**
	 * translate
	 * This function is used in order to
	 */
	translate()
	{

	}
}

module.exports = {
	Matrix: Matrix,
};