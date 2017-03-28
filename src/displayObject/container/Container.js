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

const { Matrix, TransformBase } = require("./../../support/geometry/Matrix.js");
const { AbstractPoint } = require("./../../support/geometry/AbstractPoint.js");
const { ObservablePoint } = require("./../../support/geometry/ObservablePoint.js");
const { Point } = require("./../../support/geometry/Point.js");
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
		if (pixiObj === null && this.constructor !== Container)
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

		if (this._out.pivot.constructor === Point)
		{
			pivot = new Point(this._out.pivot);
		}
		else if (this._out.pivot.constructor === ObservablePoint)
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

		if (this._out.position.constructor === Point)
		{
			position = new Point(this._out.position);
		}
		else if (this._out.position.constructor === ObservablePoint)
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
	 * transform
	 * @getter
	 * This function is a getter for the member transform.
	 * @return {TransformBase} World transform and local transform of this object.
	 */
	get transform()
	{
		return new TransformBase(this._out.transform);
	}

	/**
	 * worldAlpha
	 * @getter
	 * This function is a getter for the member worldAlpha.
	 * @return {Number} The multiplied alpha of the object.
	 */
	get worldAlpha()
	{
		return this._out.worldAlpha;
	}

	/**
	 * worldTransform
	 * @getter
	 * This function is a getter for the member worldTransform.
	 * @return {Matrix} Current transform of the object based on world (parent) factors.
	 */
	get worldTransform()
	{
		return new Matrix(this._out.worldTransform);
	}

	/**
	 * worldVisible
	 * @getter
	 * This function is a getter for the member worldVisible.
	 * @return {Boolean} If the object is globally visible.
	 */
	get worldVisible()
	{
		return this._out.worldVisible;
	}

	/**
	 * height
	 * @getter
	 * This function is a getter for the member height.
	 * @return {Number} The height of the Container.
	 */
	get height()
	{
		return this._out.height;
	}

	/**
	 * height
	 * @setter
	 * This function is a setter for the member height.
	 * @param {Number}  height  The height of the Container, setting this will modify the scale to achieve the value set.
	 */
	set height(height)
	{
		if ({}.toString.call(height) !== "[object Number]")
			throw new TypeError("height must be a number.");

		this._out.height = height;
	}

	/**
	 * width
	 * @getter
	 * This function is a getter for the member width.
	 * @return {Number} The width of the Container.
	 */
	get width()
	{
		return this._out.width;
	}

	/**
	 * width
	 * @setter
	 * This function is a setter for the member width.
	 * @param {Number}  width  The width of the Container, setting this will modify the scale to achieve the value set.
	 */
	set width(width)
	{
		if ({}.toString.call(width) !== "[object Number]")
			throw new TypeError("width must be a number.");

		this._out.width = width;
	}

	/**
	 * cacheAsBitmap
	 * This function is used in order to cache this object as a bitmap. It takes a snap shot when the method is called.
	 * Make sure that all your textures are preloaded before setting this to true !
	 * @param {Boolean}  value  If the object must to be cached or not.
	 */
	cacheAsBitmap(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.cacheAsBitmap = value;
	}

	/**
	* renderable
	* This function is used in order to make renderable this object.
	* If not, the object will not be drawn but the updateTransform methods will still be called.
	* @param {Boolean}  value  If the object can be rendered or not.
	*/
	renderable(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.renderable = value;
	}

	/**
	* visible
	* This function is used in order to make visible this object.
	* If false the object will not be drawn, and the updateTransform function will not be called.
	* @param {Boolean}  value  If the object must be visible or not.
	*/
	visible(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.visible = value;
	}

	/**
	 * destroy
	 * This function is used in order to destroy the object and its listeners.
	 * @param {Object}  options  Options parameter to destroy dependencies. 
	 * @param {Boolean}  options  A boolean will act as if all options have been set to that value.
	 */
	destroy(options)
	{
		if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]") && 
			{}.toString.call(options) !== "[object Boolean]")
			throw new TypeError("options must be an object or a boolean.");
		
		this._out.destroy(options);
	}
	
	/**
	 * updateTransform
	 * This function is used in order to update the object transform for rendering.
	 */
	updateTransform()
	{
		this._out.updateTransform();
	}
	
	/**
	 * toGlobal
	 * This function is used in order to calculate the global position of this object
	 * @param {Point}  position  The world origin to calculate from.
	 * @param {Boolean}  skipUpdate  Should we skip the update transform. 
	 * @return {Point} A point object representing the position of this object.
	 */
	toGlobal(position, skipUpdate = false)
	{
		if (!(position instanceof Point))
			throw new TypeError("position must be a Point.");

		if ({}.toString.call(skipUpdate) !== "[object Boolean]")
			throw new TypeError("skipUpdate must be a boolean.");

		return new Point(this._out.toGlobal(position.out, undefined, skipUpdate));
	}

	/**
	 * toLocal
	 * This function is used in order to calculate the local position of this object.
	 * @param {Point}  position  The world origin to calculate from.
	 * @param {Container}  from  The object to calculate the global position from.
	 * @param {Boolean}  skipUpdate  Should we skip the update transform. 
	 * @return {Point} A point object representing the position of this object.
	 */
	toLocal(position, from = null, skipUpdate = false)
	{
		let point;

		if (!(position instanceof Point))
			throw new TypeError("position must be a Point.");

		if ({}.toString.call(skipUpdate) !== "[object Boolean]")
			throw new TypeError("skipUpdate must be a boolean.");

		if (from === null)
		{
			point = new Point(this._out.toLocal(position.out, undefined, undefined, skipUpdate));
		}
		else 
		{
			if (!(from instanceof Container))
				throw new TypeError("from must be a Container.");

			point = new Point(this._out.toLocal(position.out, from.out, undefined, skipUpdate));
		}

		return point;
	}

	/**
	 * setTransform
	 * This function is used in order to set all transform properties at once.
	 * @param {Object}  transform Store the properties to change. A missing property will be reset by default.
	 */
	setTransform(transform)
	{
		if (!(typeof transform === "object" && {}.toString.call(transform) === "[object Object]"))
			throw new TypeError("transform must be an object.");

		this._out.setTransform(transform.x, transform.y,
							   transform.scaleX, transform.scaleY,
							   transform.rotation,
							   transform.skewX, transform.skewY,
							   transform.pivotX, transform.pivotY);
	}

	/**
	 * calculateBounds
	 * This function is used in order to recalculate the bounds of the container.
	 */
	calculateBounds()
	{
		this._out.calculateBounds();
	}

	/**
	 * getBounds
	 * This function is used in order to retrieve the bounds of this object.
	 * @param {Boolean}  skipUpdate  Stop the transforms of the scene from being updated or not.
	 * This means the calculation returned MAY be out of date BUT will give you a nice performance boost.
	 * @return {Bounds} The resulting area.
	 */
	getBounds(skipUpdate = false)
	{
		if ({}.toString.call(skipUpdate) !== "[object Boolean]")
			throw new TypeError("skipUpdate must be a boolean.");

		return new Bounds(this._out.getBounds(skipUpdate));
	}

	/**
	* getLocalBounds
	* This function is used in order to retrieve the local bounds of this object.
	* @return {Bounds} The resulting area.
	*/
	getLocalBounds()
	{
		return new Bounds(this._out.getLocalBounds());
	}
}

module.exports = {
	Container: Container,
};