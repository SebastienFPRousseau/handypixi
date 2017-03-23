/*
|--------------------------------------------------------------------------
| Object2D
|--------------------------------------------------------------------------
|
| This file defines the Object2D Object.
| This object build the main object of displayObject for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Container } = require("./../container/Container.js");
const { BitmapText } = require("./../container/BitmapText.js");
const { Mask } = require("./../container/mask/Mask.js");
const { Shape } = require("./../container/mask/shape/Shape.js");
const { Sprite } = require("./../container/mask/sprite/Sprite.js");
const { AnimatedSprite } = require("./../container/mask/sprite/AnimatedSprite.js");
const { TilingSprite } = require("./../container/mask/sprite/TilingSprite.js");
const { SimpleText } = require("./../container/mask/sprite/SimpleText.js");
const { Mesh } = require("./../container/mesh/Mesh.js");
const { Rope } = require("./../container/mesh/Rope.js");
const { Plane } = require("./../container/mesh/Plane.js");
const { NineSlicePlane } = require("./../container/mesh/NineSlicePlane.js");
const { Look } = require("./../../graphic/look/Look.js");

class Object2D
{
	/**
	 * constructor
	 * This function is used in order to build a Object2D.
	 * @param {Container}  container  The container for this object.
	 */
	constructor(container = new Container())
	{
		this._out = container;
		this._looks = [];
		this._mask = null;
		this._parent = null;
		this._children = [];
	}

	/**
	 * out
	 * @getter
	 * This function is a getter for the member _out.
	 * @return {PIXI.Container} The PIXI Object used by this object. 
	 */
	get out()
	{
		return this._out;
	}

	/**
	 * mask
	 * @getter
	 * This function is a getter for the member _mask.
	 * @return {Mask} The current applied mask on this object. 
	 */
	get mask()
	{
		return this._mask;
	}

	/**
	 * parent
	 * @getter
	 * This function is a getter for the member _parent.
	 * @return {Object2D} The parent of this object. 
	 */
	get parent()
	{
		return this._parent;
	}

	/**
	 * parent
	 * @setter
	 * This function is a setter for the member _parent.
	 * @param {Object2D} parent The parent of this object. 
	 */
	set parent(parent)
	{
		if (!(parent instanceof Object2D))
			throw new TypeError("parent must be a Object2D.");

		parent.addChild(this);
	}

	/**
	 * looks
	 * @getter
	 * This function is a getter for the member _looks.
	 * @return {Look[*]} The Looks of this object. 
	 */
	get looks()
	{
		return this._looks;
	}

	/**
	 * children
	 * @getter
	 * This function is a getter for the member _children.
	 * @return {Object2D[*]} The children of this object. 
	 */
	get children()
	{
		return this._children;
	}

	/**
	 * addLook
	 * This function is used in order to add and apply a Look on this object.
	 * @param {Look}  look  The look to apply on this object.
	 */
	addLook(look)
	{
		if (!(look instanceof Look))
			throw new TypeError("look must be a Look.");

		let type = this._out.constructor.name;

		this._out.out.filters = look.out.filters;

		if (type === "Container")
		{
			this._out = new Sprite(look.clone().out);
		}
		else if (type === "SimpleText")
		{
			this._out.out.style = look.style.out;
		}
		else if (type !== "BitmapText" && !(this._out instanceof Shape))
		{
			this._out.out.texture = look.out.texture;

			if (type === "AnimatedSprite")
				this._out.out.textures.push(look.out.texture);
		}

		this._looks.push(look);
	}

	/**
	 * addLooks
	 * This function is used in order to add and apply some Looks on this object.
	 * @param {Look[]}  looks  The looks to apply on this object.
	 */
	addLooks(looks)
	{
		if (!Array.isArray(looks))
		{
			throw new TypeError("looks must be an array.");
		}
		else 
		{
			for (let i = 0, l = looks.length; i < l; i++)
			{
				if (!(looks[i] instanceof Look))
					throw new TypeError("Can't add the "+ i +" element, it must be an Look");

				this.addLook(looks[i]);
			}
		}
	}

	/**
	 * getLookAt
	 * This function is used in order to get a Look at the given indice.
	 * @param {Number}  id  The indice to get the look.
	 * @return {Look} The corresponding look.
	 */
	getLookAt(id)
	{
		if ({}.toString.call(id) !== "[object Number]")
			throw new TypeError("id must be a number.");

		if (!(id < this._looks.length && id >= 0))
			throw new RangeError("The given indice : "+ id +", is out of range for the looks.");

		return this._looks[id];
	}

	/**
	 * removeLookAt
	 * This function is used in order to remove a Look at the given indice.
	 * @param {Number}  id  The indice of the look to remove.
	 */
	removeLookAt(id)
	{
		if ({}.toString.call(id) !== "[object Number]")
			throw new TypeError("id must be a number.");

		if (!(id < this._looks.length && id >= 0))
			throw new RangeError("The given indice : "+ id +", is out of range for the looks.");

		let type = this._out.constructor.name;

		if (id === this._looks.length-1)
		{
			this._out.out.filters = null;

			if (type !== "Container" && type !== "BitmapText" && !(this._out instanceof Shape))
			{
				this._out.out.texture = PIXI.Texture.EMPTY.clone();

				if (type === "SimpleText")
					this._out.out.style = null;
			}
		}

		if (type === "AnimatedSprite")
			this._out.out.textures.splice(id,1);

		this._looks.splice(id, 1);
	}

	/**
	 * removeLooks
	 * This function is used in order to remove all looks of this object.
	 * @param {Number}  start  The beginning indice included.
	 * @param {Number}  end  The ending indice excluded.
	 */
	removeLooks(start = 0, end = this._looks.length)
	{
		if ({}.toString.call(start) !== "[object Number]")
			throw new TypeError("start must be a number.");

		if ({}.toString.call(end) !== "[object Number]")
			throw new TypeError("end must be a number.");

		if (start >= 0  && end <= this._looks.length)
		{
			for (let i = start; i < end; i++)
				this.removeLookAt(start);
		}
	}

	/**
	 * addChild
	 * This function is used in order to add a child for this object.
	 * @param {Object2D}  obj  The object to add as a child.
	 */
	addChild(obj)
	{
		if (!(obj instanceof Object2D))
			throw new TypeError("obj must be a Object2D.");

		if (obj.parent !== null)
			obj.parent.removeChild(obj);

		obj._parent = this;
		this._children.push(obj);
		this._out.out.addChild(obj.out.out);
	}

	/**
	 * addChildren
	 * This function is used in order to add some children for this object.
	 * @param {Object2D[]} objs The objects to add as children.
	 */
	addChildren(objs)
	{
		if (!Array.isArray(objs))
		{
			throw new TypeError("objs must be an array.");
		}
		else 
		{
			for (let i = 0, l = objs.length; i < l; i++)
			{
				if (!(objs[i] instanceof Object2D))
					throw new TypeError("Can't add the "+ i +" element, it must be an Object2D");

				this.addChild(objs[i]);
			}
		}
	}

	/**
	 * getChildAt
	 * This function is used in order to get the child at the given indice.
	 * @param {Number}  id  The indice to get the child.
	 * @return {Object2D} The corresponding child.
	 */
	getChildAt(id)
	{
		if ({}.toString.call(id) !== "[object Number]")
			throw new TypeError("id must be a number.");

		if (!(id < this._children.length && id >= 0))
			throw new RangeError("The given indice : "+ id +", is out of range for the children.");

		return this._children[id];
	}

	/**
	 * removeChildAt
	 * This function is used in order to remove a child at the given indice.
	 * @param {Number}  id  The indice of the child to remove.
	 */
	removeChildAt(id)
	{
		if ({}.toString.call(id) !== "[object Number]")
			throw new TypeError("id must be a number.");

		if (!(id < this._children.length && id >= 0))
			throw new RangeError("The given indice : "+ id +", is out of range for the children.");

		let child = this._children[id];
		child._parent = null;
		this._children.splice(id, 1);
		this._out.out.removeChild(child.out.out);
	}

	/**
	 * removeChild
	 * This function is used in order to remove a child of this object.
	 * @param {Object2D}  obj  The child to remove from this object.
	 */
	removeChild(obj)
	{
		if (!(obj instanceof Object2D))
			throw new TypeError("obj must be a Object2D.");

		for (let i = 0, l = this._children.length; i < l; i++)
		{
			if (obj === this._children[i])
			{
				this.removeChildAt(i);
				break;
			}
		}
	}

	/**
	 * removeChildren
	 * This function is used in order to remove all children of this object.
	 * @param {Number}  start  The beginning indice included.
	 * @param {Number}  end  The ending indice excluded.
	 */
	removeChildren(start = 0, end = this._children.length)
	{
		if ({}.toString.call(start) !== "[object Number]")
			throw new TypeError("start must be a number.");

		if ({}.toString.call(end) !== "[object Number]")
			throw new TypeError("end must be a number.");

		if (start >= 0  && end <= this._children.length)
		{
			for (let i = start; i < end; i++)
				this.removeChildAt(start);
		}
	}

	/**
	 * applyMask
	 * This function is used in order to apply a mask on this object.
	 * @param {Mask}  mask  The mask to apply.
	 */
	applyMask(mask)
	{
		if (!(mask instanceof Mask))
			throw new TypeError("mask must be a Mask.");

		this._mask = mask;
		this._out.out.mask = mask.out;
	}

	/**
	 * removeMask
	 * This function is used in order to remove the applied mask of this object.
	 */
	removeMask()
	{
		this._mask = null;
		this._out.out.mask = null;
	}

	/**
	 * destroy
	 * This function is used in order to destroy this object.
	 * @param {Object}  options  Options for the destruction.
	 */
	
	/**
	 * clone
	 * This function is used in order to clone this object.
	 * @return {Object2D} A copy of this object.
	 */
	
	/**
	 * update
	 * This function is used in order to update this object.
	 */
	
	/**
	 * getSprite
	 * This function is used in order to get the resulting Sprite of this object to use it as a mask. 
	 * @return {Sprite} The resulting Sprite from this object.
	 */
}

module.exports = {
	Object2D: Object2D,
};