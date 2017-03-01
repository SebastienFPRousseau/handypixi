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

class Matrix
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
			for(let i = 0, l = params.length; i < l; i++)
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
			throw new TypeError("array must be an Array, its length must be six.");
		}
		else 
		{
			for(let i = 0, l = array.length; i < l; i++)
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
	 * This function is used in order to invert this Matrix
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	invert()
	{
		this._out.invert();
		return this;
	}

	/**
	 * prepend
	 * This function is used in order to prepend the given Matrix to this Matrix.
	 * @param {Matrix}	matrix 	The matrix to prepend.
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	prepend(matrix)
	{
		if (matrix instanceof Matrix)
			throw new TypeError("matrix must be a Matrix.");

		this._out.prepend(matrix.getOut());
		return this;
	}

	/**
	 * rotate
	 * This function is used in order to apply a rotation transformation to this matrix.
	 * @param {Number} angle The angle in radians.
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	rotate(angle)
	{
		if ({}.toString.call(angle) !== "[object Number]")
			throw new TypeError("angle must be a number.");

		this._out.rotate(angle);
		return this;
	}

	/**
	 * scale
	 * This function is used in order to apply a scale transformation to this matrix.
	 * @param {Number} x The amount to scale horizontally
	 * @param {Number} y The amount to scale vertically 
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	scale(x, y)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		this._out.scale(x,y);
		return this; 
	}

	/**
	 * set
	 * This function is used in order to set matrix properties. 
	 * @param   {Number[4]}   params         X scale, y skew, x skew, y scale.
	 * @param   {Number}   tx         X translation.
	 * @param   {Number}   ty         Y translation.
	 * @param   {PIXI.Matrix}   params         The Pixi object to build the HandyPixi object.
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	set(params = [1, 0, 0, 1], tx = 0, ty = 0)
	{
		if ({}.toString.call(tx) !== "[object Number]")
			throw new TypeError("tx must be a number.");

		if ({}.toString.call(ty) !== "[object Number]")
			throw new TypeError("ty must be a number.");

		if (!Array.isArray(params) || params.length != 4)
			throw new TypeError("params must be an array, its length must be four.");

		for(let i = 0, l = params.length; i < l; i++)
		{
			if ({}.toString.call(params[i]) !== "[object Number]")
				throw new TypeError("params must be an array of numbers.");
		}
		this._out.set(params[0], params[1], params[2], params[3], tx, ty);

		return this;
	}

	/**
	 * setTransform
	 * This function is used in order to sets the matrix based on all available properties.
	 * @param {Object} transform Contains properties x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY to set the matrix.
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	setTransform(transform)
	{
		if (typeof transform !== "object" && {}.toString.call(transform) !== "[object Object]")
			throw new TypeError("transform must be an Object.");

		if ( transform.x === undefined || {}.toString.call(transform.x) !== "[object Number]")
			throw new TypeError("transform.x must exist and be a number.");

		if ( transform.y === undefined || {}.toString.call(transform.y) !== "[object Number]")
			throw new TypeError("transform.y must exist and be a number.");

		if ( transform.pivotX === undefined || {}.toString.call(transform.pivotX) !== "[object Number]")
			throw new TypeError("transform.pivotX must exist and be a number.");

		if ( transform.pivotY === undefined || {}.toString.call(transform.pivotY) !== "[object Number]")
			throw new TypeError("transform.pivotY must exist and be a number.");

		if ( transform.scaleX === undefined || {}.toString.call(transform.scaleX) !== "[object Number]")
			throw new TypeError("transform.scaleX must exist and be a number.");

		if ( transform.scaleY === undefined || {}.toString.call(transform.scaleY) !== "[object Number]")
			throw new TypeError("transform.scaleY must exist and be a number.");

		if ( transform.skewX === undefined || {}.toString.call(transform.skewX) !== "[object Number]")
			throw new TypeError("transform.skewX must exist and be a number.");

		if ( transform.skewY === undefined || {}.toString.call(transform.skewY) !== "[object Number]")
			throw new TypeError("transform.skewY must exist and be a number.");

		if ( transform.rotation === undefined || {}.toString.call(transform.rotation) !== "[object Number]")
			throw new TypeError("transform.rotation must exist and be a number.");

		this._out.setTransform(transform.x, transform.y, 
							   transform.pivotX, transform.pivotY, 
							   transform.scaleX, transform.scaleY, 
							   transform.rotation, 
							   transform.skewX, transform.skewY);
		return this;
	}

	/**
	 * toArray
	 * This function is used in order to create an array from this Matrix.
	 * @param {Boolean} transpose Whether we need to transpose the matrix or not.
	 * @param {Number[9]} out If provided the array will be assigned to out.
	 * @return {Number[9]} The newly created array which contains the matrix.
	 */
	toArray(transpose, out = [])
	{
		if ({}.toString.call(transpose) !== "[object Boolean]")
			throw new TypeError("transpose must be a Boolean.");

		out = this._out.toArray(transpose);
		return out;
	}

	/**
	 * translate
	 * This function is used in order to apply a translate transformation to this matrix.
	 * @param {Number} x How much to translate horizontally
	 * @param {Number} y How much to translate vertically 
	 * @return {Matrix} This Matrix. Good for chaining method calls.
	 */
	translate(x, y)
	{
		if ({}.toString.call(x) !== "[object Number]")
			throw new TypeError("x must be a number.");

		if ({}.toString.call(y) !== "[object Number]")
			throw new TypeError("y must be a number.");

		this._out.translate(x,y);
		return this; 
	}
}

module.exports = {
	Matrix: Matrix,
};