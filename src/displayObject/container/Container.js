/*
|--------------------------------------------------------------------------
| Container
|--------------------------------------------------------------------------
|
| This file defines the Container Object.
| This object build a PIXI.Container for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Matrix } = require("./../../support/geometry/Matrix.js");
const { AbstractPoint } = require("./../../support/geometry/AbstractPoint.js");
const { ObservablePoint } = require("./../../support/geometry/ObservablePoint.js");
const { Bounds } = require("./../bounds/Bounds.js");

class Container
{
	/**
	* constructor
	* This function is used in order to build a Container.
	* @param {PIXI.Container}  pixiObj  The Pixi object to build the HandyPixi object.
	*/
	constructor(pixiObj = null)
	{
		if (pixiObj === null && this.constructor.name !== "Container")
     		return ;

		if (pixiObj instanceof PIXI.Container)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.Container();
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.Container} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * alpha
	 * @getter
	 * This function is a getter for the member alpha.
	 * @return {Number} The opacity of the object.
	 */
	get alpha()
	{
		return this._out.alpha;
	}

	/**
	 * alpha
	 * @setter
	 * This function is a setter for the member alpha.
	 * @param {Number}  alpha  The opacity of the object.
	 */
	set alpha(alpha)
	{
		if ({}.toString.call(alpha) !== "[object Number]")
			throw new TypeError("alpha must be a number.");

		this._out.alpha = alpha;
	}

	/**
	 * filterArea
	 * @getter
	 * This function is a getter for the member filterArea.
	 * @return {Bounds} The area the filter is applied to. 
	 * This is used as more of an optimisation rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
	 * Also works as an interaction mask.
	 */
	get filterArea()
	{
		return new Bounds(this._out.filterArea);
	}

	/**
	 * filterArea
	 * @setter
	 * This function is a setter for the member filterArea.
	 * @param {Bounds}  filterArea  The area the filter is applied to. 
	 * This is used as more of an optimisation rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
	 * Also works as an interaction mask.
	 */
	set filterArea(filterArea)
	{
		if (!(filterArea instanceof Bounds))
			throw new TypeError("filterArea must be a Bounds.");

		this._out.filterArea = filterArea.out;
	}

	/**
	 * localTransform
	 * @getter
	 * This function is a getter for the member localTransform.
	 * @return {Matrix} Current transform of the object based on local factors: position, scale, other stuff...
	 */
	get localTransform()
	{
		return new Matrix(this._out.localTransform);
	}

	/**
	 * pivot
	 * @getter
	 * This function is a getter for the member pivot.
	 * @return {AbstractPoint} The pivot point of the displayObject that it rotates around.
	 */
	get pivot()
	{
		let pivot = null;

		if (this._out.pivot.constructor.name === "Point")
		{
			pivot = new Point(this._out.pivot);
		}
		else if (this._out.pivot.constructor.name === "ObservablePoint")
		{
			pivot = new ObservablePoint(this._out.pivot);
		}

		return pivot;
	}

	/**
	 * pivot
	 * @setter
	 * This function is a setter for the member pivot.
	 * @param {AbstractPoint}  pivot  The pivot point of the displayObject that it rotates around.
	 */
	set pivot(pivot)
	{
		if (!(pivot instanceof AbstractPoint))
			throw new TypeError("pivot must be an AbstractPoint.");

		this._out.pivot = pivot.out;
	}
	
	/**
	 * position
	 * @getter
	 * This function is a getter for the member position.
	 * @return {AbstractPoint} The coordinate of the object relative to the local coordinates of the parent.
	 */
	get position()
	{
		let position = null;

		if (this._out.position.constructor.name === "Point")
		{
			position = new Point(this._out.position);
		}
		else if (this._out.position.constructor.name === "ObservablePoint")
		{
			position = new ObservablePoint(this._out.position);
		}

		return position;
	}

	/**
	 * position
	 * @setter
	 * This function is a setter for the member position.
	 * @param {AbstractPoint}  position  The coordinate of the object relative to the local coordinates of the parent.
	 */
	set position(position)
	{
		if (!(position instanceof AbstractPoint))
			throw new TypeError("position must be a AbstractPoint.");

		this._out.position = position.out;
	}

	/**
	 * scale
	 * @getter
	 * This function is a getter for the member scale.
	 * @return {AbstractPoint} The scale factor of the object.
	 */
	get scale()
	{
		let scale = null;

		if (this._out.scale.constructor.name === "Point")
		{
			scale = new Point(this._out.scale);
		}
		else if (this._out.scale.constructor.name === "ObservablePoint")
		{
			scale = new ObservablePoint(this._out.scale);
		}

		return scale;
	}

	/**
	 * scale
	 * @setter
	 * This function is a setter for the member scale.
	 * @param {AbstractPoint}  scale  The scale factor of the object.
	 */
	set scale(scale)
	{
		if (!(scale instanceof AbstractPoint))
			throw new TypeError("scale must be a AbstractPoint.");

		this._out.scale = scale.out;
	}

	/**
	 * skew
	 * @getter
	 * This function is a getter for the member skew.
	 * @return {ObservablePoint} The skew factor for the object in radians.
	 */
	get skew()
	{
		return new ObservablePoint(this._out.skew);
	}

	/**
	 * skew
	 * @setter
	 * This function is a setter for the member skew.
	 * @param {ObservablePoint}  skew  The skew factor for the object in radians.
	 */
	set skew(skew)
	{
		if (!(skew instanceof ObservablePoint))
			throw new TypeError("skew must be a ObservablePoint.");

		this._out.skew = skew.out;
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
	 * cacheAsBitmap
	 * This function is used in order to cache this object as a bitmap. It takes a snap shot when the method is called.
	 * Make sure that all your textures are preloaded before setting this to true !
	 * @param {Boolean}  value  If the object must to be cached or not.
	 */
	
	 /**
	 * isRenderable
	 * This function is used in order to make renderable this object.
	 * If not, the object will not be drawn but the updateTransform methods will still be called.
	 * @param {Boolean}  value  If the object can be rendered or not.
	 */
}

module.exports = {
	Container: Container,
};