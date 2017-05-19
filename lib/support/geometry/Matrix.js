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

const { Point } = require("./Point.js");
const { ObservablePoint } = require("./ObservablePoint.js");

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
			for (let i = 0, l = params.length; i < l; i++)
			{
				if ({}.toString.call(params[i]) !== "[object Number]")
					throw new TypeError("params must be an array of numbers.");
			}

			this._out = new PIXI.Matrix(params[0], params[1], params[2], params[3], tx, ty);
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.Matrix} The PIXI Object used by this object. 
	*/
	get out()
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
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.append(matrix.out);
		return this;
	}

	/**
	 * apply
	 * This function is used in order to apply this Matrix to a point.
	 * @param {Point}	point  The origin.
	 * @return {Point} The new point, transformed through this matrix.
	 */
	apply(point)
	{
		if (!(point instanceof Point))
			throw new TypeError("point must be a Point.");

		return new Point(this._out.apply(point.out));
	}

	/**
	 * applyInverse
	 * This function is used in order to inverse-apply this Matrix to a point.
	 * @param {Point}	point  The origin.
	 * @return {Point} The new point, inverse-transformed through this matrix.
	 */
	applyInverse(point)
	{
		if (!(point instanceof Point))
			throw new TypeError("point must be a Point.");

		return new Point(this._out.applyInverse(point.out));
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

		this._out.copy(matrix.out);	
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
			transform = new Transform(this._out.decompose(transform.out));
		}
		else if (transform instanceof TransformStatic)
		{
			transform = new TransformStatic(this._out.decompose(transform.out));
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
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.prepend(matrix.out);
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

		for (let i = 0, l = params.length; i < l; i++)
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

		if ({}.toString.call(transform.x) !== "[object Number]")
			throw new TypeError("transform.x must exist and be a number.");

		if ({}.toString.call(transform.y) !== "[object Number]")
			throw new TypeError("transform.y must exist and be a number.");

		if ({}.toString.call(transform.pivotX) !== "[object Number]")
			throw new TypeError("transform.pivotX must exist and be a number.");

		if ({}.toString.call(transform.pivotY) !== "[object Number]")
			throw new TypeError("transform.pivotY must exist and be a number.");

		if ({}.toString.call(transform.scaleX) !== "[object Number]")
			throw new TypeError("transform.scaleX must exist and be a number.");

		if ({}.toString.call(transform.scaleY) !== "[object Number]")
			throw new TypeError("transform.scaleY must exist and be a number.");

		if ({}.toString.call(transform.skewX) !== "[object Number]")
			throw new TypeError("transform.skewX must exist and be a number.");

		if ({}.toString.call(transform.skewY) !== "[object Number]")
			throw new TypeError("transform.skewY must exist and be a number.");

		if ({}.toString.call(transform.rotation) !== "[object Number]")
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
	 * @param {Float32Array[9]} out If provided the array will be assigned to out.
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
};

/*
|--------------------------------------------------------------------------
| TransformBase
|--------------------------------------------------------------------------
|
| This file defines the TransformBase Object.
| This object build a PIXI.TransformBase for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class TransformBase
{
	/**
	 * constructor
	 * This function is used in order to build a TransformBase.
	 * @param   {PIXI.TransformBase}   pixiObj     The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		if (this.constructor !== TransformBase)
     		return ;

		if (pixiObj instanceof PIXI.TransformBase)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.TransformBase();
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.TransformBase} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * localTransform
	 * @getter
	 * This function is a getter for the member localTransform.
	 * @return {Matrix} The local matrix transform.
	 */
	get localTransform()
	{
		return new Matrix(this._out.localTransform);
	}
	
	/**
	 * localTransform
	 * @setter
	 * This function is a setter for the member localTransform.
	 * @param {Matrix}  matrix  The local matrix transform.
	 */
	set localTransform(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.localTransform = matrix.out;
	}

	/**
	 * worldTransform
	 * @getter
	 * This function is a getter for the member worldTransform.
	 * @return {Matrix} The global matrix transform.
	 */
	get worldTransform()
	{
		return new Matrix(this._out.worldTransform);
	}
	
	/**
	 * worldTransform
	 * @setter
	 * This function is a setter for the member worldTransform.
	 * @param {Matrix}  matrix  The global matrix transform.
	 */
	set worldTransform(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.worldTransform = matrix.out;
	}
	
	/**
	 * updateLocalTransform
	 * TransformBase does not have decomposition, so this function wont do anything.
	 */
	updateLocalTransform()
	{
		this._out.updateLocalTransform();
	}
	
	/**
	 * updateTransform
	 * This function is used in order to apply the parent's transform.
	 * @param {TransformBase}  parent  The transform of the parent of this object.
	 */
	updateTransform(parent)
	{
		if (!(parent instanceof TransformBase))
			throw new TypeError("parent must be a TransformBase.");

		this._out.updateTransform(parent.out);
	}
};

/*
|--------------------------------------------------------------------------
| Transform
|--------------------------------------------------------------------------
|
| This file defines the Transform Object.
| This object build a PIXI.Transform for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Transform extends TransformBase
{
	/**
	 * constructor
	 * This function is used in order to build a Transform.
	 * @param   {PIXI.Transform}   pixiObj     The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		super();

		if (pixiObj instanceof PIXI.Transform)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.Transform();
		}
	}

	/**
	 * pivot
	 * @getter
	 * This function is a getter for the member pivot.
	 * @return {Point} The pivot point of the displayObject that it rotates around.
	 */
	get pivot()
	{
		return new Point(this._out.pivot);
	}

	/**
	 * pivot
	 * @setter
	 * This function is a setter for the member pivot.
	 * @param {Point}  pivot  The pivot point of the displayObject that it rotates around.
	 */
	set pivot(pivot)
	{
		if (!(pivot instanceof Point))
			throw new TypeError("pivot must be a Point.");

		this._out.pivot = pivot.out;
	}

	/**
	 * position
	 * @getter
	 * This function is a getter for the member position.
	 * @return {Point} The coordinate of the object relative to the local coordinates of the parent.
	 */
	get position()
	{
		return new Point(this._out.position);
	}

	/**
	 * position
	 * @setter
	 * This function is a setter for the member position.
	 * @param {Point}  position  The coordinate of the object relative to the local coordinates of the parent.
	 */
	set position(position)
	{
		if (!(position instanceof Point))
			throw new TypeError("position must be a Point.");

		this._out.position = position.out;
	}

	/**
	 * rotation
	 * @getter
	 * This function is a getter for the member rotation.
	 * @return {Number} The rotation of the object in radians.
	 */
	get rotation()
	{
		return this._out.rotation;
	}

	/**
	 * rotation
	 * @setter
	 * This function is a setter for the member rotation.
	 * @param {Number}  rotation  The rotation of the object in radians.
	 */
	set rotation(rotation)
	{
		if ({}.toString.call(rotation) !== "[object Number]")
			throw new TypeError("rotation must be a number.");

		this._out.rotation = rotation;
	}

	/**
	 * scale
	 * @getter
	 * This function is a getter for the member scale.
	 * @return {Point} The scale factor of the object.
	 */
	get scale()
	{
		return new Point(this._out.scale);
	}
	
	/**
	 * scale
	 * @setter
	 * This function is a setter for the member scale.
	 * @param {Point}  scale  The scale factor of the object.
	 */
	set scale(scale)
	{
		if (!(scale instanceof Point))
			throw new TypeError("scale must be a Point.");

		this._out.scale = scale.out;
	}

	/**
	 * skew
	 * @getter
	 * This function is a getter for the member skew.
	 * @return {ObservablePoint} The skew amount, on the x and y axis.
	 */
	get skew()
	{
		return new ObservablePoint(this._out.skew);
	}

	/**
	 * skew
	 * @setter
	 * This function is a setter for the member skew.
	 * @param {ObservablePoint}  skew   The skew amount, on the x and y axis.
	 */
	set skew(skew)
	{
		if (!(skew instanceof ObservablePoint))
			throw new TypeError("skew must be an ObservablePoint.");

		this._out.skew = skew.out;
	}

	/**
	 * setFromMatrix
	 * This function is used in order to sets the transforms properties based on a matrix.
	 * @param {Matrix}  matrix  The matrix to decompose.
	 */
	setFromMatrix(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.setFromMatrix(matrix.out);
	}

	/**
	 * updateTransform
	 * This function is used in order to apply the parent's transform.
	 * @param {Transform}  parent  The transform of the parent of this object.
	 */
	updateTransform(parent)
	{
		if (!(parent instanceof Transform))
			throw new TypeError("parent must be a Transform.");

		this._out.updateTransform(parent.out);
	}
};

/*
|--------------------------------------------------------------------------
| TransformStatic
|--------------------------------------------------------------------------
|
| This file defines the TransformStatic Object.
| This object build a PIXI.TransformStatic for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class TransformStatic extends TransformBase
{
	/**
	 * constructor
	 * This function is used in order to build a TransformStatic.
	 * @param   {PIXI.TransformStatic}   pixiObj     The Pixi object to build the HandyPixi object.
	 */
	constructor(pixiObj = null)
	{
		super();
		
		if (pixiObj instanceof PIXI.TransformStatic)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.TransformStatic();
		}
	}

	/**
	 * pivot
	 * @getter
	 * This function is a getter for the member pivot.
	 * @return {ObservablePoint} The pivot point of the displayObject that it rotates around.
	 */
	get pivot()
	{
		return new ObservablePoint(this._out.pivot);
	}

	/**
	 * pivot
	 * @setter
	 * This function is a setter for the member pivot.
	 * @param {ObservablePoint}  pivot  The pivot point of the displayObject that it rotates around.
	 */
	set pivot(pivot)
	{
		if (!(pivot instanceof ObservablePoint))
			throw new TypeError("pivot must be an ObservablePoint.");

		this._out.pivot = pivot.out;
	}

	/**
	 * position
	 * @getter
	 * This function is a getter for the member position.
	 * @return {ObservablePoint} The coordinate of the object relative to the local coordinates of the parent.
	 */
	get position()
	{
		return new ObservablePoint(this._out.position);
	}

	/**
	 * position
	 * @setter
	 * This function is a setter for the member position.
	 * @param {ObservablePoint}  position  The coordinate of the object relative to the local coordinates of the parent.
	 */
	set position(position)
	{
		if (!(position instanceof ObservablePoint))
			throw new TypeError("position must be an ObservablePoint.");

		this._out.position = position.out;
	}

	/**
	 * rotation
	 * @getter
	 * This function is a getter for the member rotation.
	 * @return {Number} The rotation of the object in radians.
	 */
	get rotation()
	{
		return this._out.rotation;
	}

	/**
	 * rotation
	 * @setter
	 * This function is a setter for the member rotation.
	 * @param {Number}  rotation  The rotation of the object in radians.
	 */
	set rotation(rotation)
	{
		if ({}.toString.call(rotation) !== "[object Number]")
			throw new TypeError("rotation must be a number.");

		this._out.rotation = rotation;
	}

	/**
	 * scale
	 * @getter
	 * This function is a getter for the member scale.
	 * @return {ObservablePoint} The scale factor of the object.
	 */
	get scale()
	{
		return new ObservablePoint(this._out.scale);
	}
	
	/**
	 * scale
	 * @setter
	 * This function is a setter for the member scale.
	 * @param {ObservablePoint}  scale  The scale factor of the object.
	 */
	set scale(scale)
	{
		if (!(scale instanceof Point))
			throw new TypeError("scale must be an ObservablePoint.");

		this._out.scale = scale.out;
	}

	/**
	 * skew
	 * @getter
	 * This function is a getter for the member skew.
	 * @return {ObservablePoint} The skew amount, on the x and y axis.
	 */
	get skew()
	{
		return new ObservablePoint(this._out.skew);
	}

	/**
	 * skew
	 * @setter
	 * This function is a setter for the member skew.
	 * @param {ObservablePoint}  skew   The skew amount, on the x and y axis.
	 */
	set skew(skew)
	{
		if (!(skew instanceof ObservablePoint))
			throw new TypeError("skew must be an ObservablePoint.");

		this._out.skew = skew.out;
	}

	/**
	 * setFromMatrix
	 * This function is used in order to sets the transforms properties based on a matrix.
	 * @param {Matrix}  matrix  The matrix to decompose.
	 */
	setFromMatrix(matrix)
	{
		if (!(matrix instanceof Matrix))
			throw new TypeError("matrix must be a Matrix.");

		this._out.setFromMatrix(matrix.out);
	}

	/**
	 * updateTransform
	 * This function is used in order to apply the parent's transform.
	 * @param {Transform}  parent  The transform of the parent of this object.
	 */
	updateTransform(parent)
	{
		if (!(parent instanceof Transform))
			throw new TypeError("parent must be a Transform.");

		this._out.updateTransform(parent.out);
	}
};

module.exports = {
	TransformStatic: TransformStatic,
	Transform: Transform,
	TransformBase: TransformBase,
	Matrix: Matrix,
};