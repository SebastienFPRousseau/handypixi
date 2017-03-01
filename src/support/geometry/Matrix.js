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
		if ({}.toString.call(tx) !== "[object Number]")
			throw new TypeError("tx must be a number.");

		if ({}.toString.call(ty) !== "[object Number]")
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
			for(let i = 0; i < params.length; i++)
			{
				if ({}.toString.call(params[i]) !== "[object Number]")
					throw new TypeError("params must be an array of numbers.");
			}
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
	 * This function is used in order to append the given Matrix to this Matrix.
	 * @param {Matrix}	matrix 	The matrix to append.
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	append(matrix)
	{
		if (matrix instanceof Matrix)
			throw new TypeError("matrix must be a Matrix.");

		this._out.append(matrix.getOut());
		return this;
	}

	/**
	 * apply
	 * This function is used in order to apply this Matrix to a point.
	 * @param {Point}	point  The origin.
	 * @param {Point}	resultingPoint The container point for the result.
	 * @return {Point} The new point, transformed through this matrix.
	 */
	apply(point, resultingPoint)
	{
		if (point instanceof Point)
			throw new TypeError("point must be a Point.");

		if (resultingPoint instanceof Point)
			throw new TypeError("resultingPoint must be a Point.");

		resultingPoint = new Point(this._out.apply(point.getOut()));

		return resultingPoint;
	}

	/**
	 * applyInverse
	 * This function is used in order to inverse-apply this Matrix to a point.
	 * @param {Point}	point  The origin.
	 * @param {Point}	resultingPoint The container point for the result.
	 * @return {Point} The new point, inverse-transformed through this matrix.
	 */
	applyInverse(point, resultingPoint)
	{
		if (point instanceof Point)
			throw new TypeError("point must be a Point.");

		if (resultingPoint instanceof Point)
			throw new TypeError("resultingPoint must be a Point.");

		resultingPoint = new Point(this._out.applyInverse(point.getOut()));

		return resultingPoint;
	}

	/**
	* clone
	* This function is used in order to clone this Matrix.
	* @return {Matrix} A copy of this Matrix. 
	*/
	clone()
	{
		return new Matrix(this._out.clone());
	}

	/**
	* copy
	* This function is used in order to copy this matrix into the given Matrix.
	* @param {Matrix} 	point 	 The Matrix to change. 
	*/
	copy(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.copy(matrix.getOut());	
	}

	/**
	 * decompose
	 * This function is used in order to decompose the matrix into a transform. 
	 * @param {Transform}  transform  The transform to apply the properties to.
	 * @param {TransformStatic}  transform  The transform to apply the properties to.
	 * @return {Transform|TransformStatic} The transform with the newly applied properties.
	 * 
	 */
	decompose(transform)
	{
		if (transform instanceof Transform)
		{
			transform = new Transform(this._out.decompose(transform.getOut()));
		}
		else if (transform instanceof TransformStatic)
		{
			transform = new TransformStatic(this._out.decompose(transform.getOut()));
		}
		else
		{
			throw new TypeError("transform must be a Transform or a TransformStatic.");
		}

		return transform;
	}

	/**
	 * fromArray
	 * This function is used in order to build a matrix from an array. Care of the order :
	 * | array[0] | array[1] | array[2]|
	 * | array[3] | array[4] | array[5]|
	 * | 0        | 0        | 1       |
	 * @param {Number[6]} [varname] [description]
	 */
	fromArray(array)
	{
		if (!Array.isArray(array) || array.length != 6)
		{
			throw new TypeError("array must be an Array, its length must be four.");
		}
		else 
		{
			for(let i = 0; i < array.length; i++)
			{
				if ({}.toString.call(array[i]) !== "[object Number]")
					throw new TypeError("array must be an Array of Numbers.");
			}
			
			this._out.fromArray(array);
		}
	}

	/**
	 * identity
	 * This function is used in order to reset this Matrix to an identity matrix.
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	identity()
	{
		this._out.identity();
		return this;
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