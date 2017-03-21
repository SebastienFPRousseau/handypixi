/*
|--------------------------------------------------------------------------
| AbstractContainerFactory
|--------------------------------------------------------------------------
|
| This file defines the AbstractContainerFactory Object.
| This object is the abstract factory for Container.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Container } = require("./Container.js");
const { SimpleText } = require("./mask/sprite/SimpleText.js");
const { BitmapText } = require("./BitmapText.js");
const { Mesh } = require("./mesh/Mesh.js");
const { Rope } = require("./mesh/Rope.js");
const { Plane } = require("./mesh/Plane.js");
const { NineSlicePlane } = require("./mesh/NineSlicePlane.js");

/**
 * TEXT_FACTORY
 * Identify the TextFactory 
 * @type {Number} 
 */
const TEXT_FACTORY = 0;

/**
 * MESH_FACTORY
 * Identify the MeshFactory 
 * @type {Number} 
 */
const MESH_FACTORY = 1;

/**
 * SPRITE_FACTORY
 * Identify the SpriteFactory 
 * @type {Number} 
 */
const SPRITE_FACTORY = 2;

/**
 * SHAPE_FACTORY
 * Identify the ShapeFactory 
 * @type {Number} 
 */
const SHAPE_FACTORY = 3;

/**
 * BITMAPTEXT_FACTORY
 * Identify the BitmapTextFactory 
 * @type {Number} 
 */
const BITMAPTEXT_FACTORY = 4;

class AbstractContainerFactory
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an AbstractContainerFactory
	 */
	constructor()
	{
		if (this.constructor.name === "AbstractContainerFactory")
			throw new TypeError("Cannot construct Abstract instances like AbstractContainerFactory directly.");
	}

	/**
	 * TEXT_FACTORY
	 * @getter
	 */
	static get TEXT_FACTORY()
	{
		return TEXT_FACTORY;
	}

	/**
	 * MESH_FACTORY
	 * @getter
	 */
	static get MESH_FACTORY()
	{
		return MESH_FACTORY;
	}

	/**
	 * SPRITE_FACTORY
	 * @getter
	 */
	static get SPRITE_FACTORY()
	{
		return SPRITE_FACTORY;
	}

	/**
	 * SHAPE_FACTORY
	 * @getter
	 */
	static get SHAPE_FACTORY()
	{
		return SHAPE_FACTORY;
	}

	/**
	 * BITMAPTEXT_FACTORY
	 * @getter
	 */
	static get BITMAPTEXT_FACTORY()
	{
		return BITMAPTEXT_FACTORY;
	}

	/**
	 * getFactory
	 * This function is used in order to get the factory using its id.
	 * @param {Number}  id  The container factory id.
	 * @return {AbstractContainerFactory} The factory needed.
	 */
	static getFactory(id)
	{
		if ({}.toString.call(id) !== "[object Number]")
			throw new TypeError("id must be a number.");

		switch(id)
		{
			case TEXT_FACTORY:
				return new TextFactory();
			break;

			case BITMAPTEXT_FACTORY:
				return new BitmapTextFactory();
			break;

			case MESH_FACTORY:
				return new MeshFactory();
			break;

			default: 
				throw new Error("No factory found for this id: "+ id +"!");
		}
	}
}

/*
|--------------------------------------------------------------------------
| TextFactory
|--------------------------------------------------------------------------
|
| This file defines the TextFactory Object.
| This object is a factory for text objects.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class TextFactory extends AbstractContainerFactory
{
	/**
	 * constructor
	 * This function is used in order to build a TextFactory.
	 */
	constructor()
	{
		super();
	}

	/**
	 * createSimpleText
	 * This function is used in order to build a SimpleText.
	 * @param {String}  text  The string to display by this Object.
	 * @return {SimpleText} The SimpleText built. 
	 */
	createSimpleText(text)
	{
		return new SimpleText(text);
	}
}

/*
|--------------------------------------------------------------------------
| BitmapTextFactory
|--------------------------------------------------------------------------
|
| This file defines the BitmapTextFactory Object.
| This object is a factory for BitmapText.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class BitmapTextFactory extends AbstractContainerFactory
{
	/**
	 * constructor
	 * This function is used in order to build a BitmapTextFactory.
	 */
	constructor()
	{
		super();
	}

	/**
	 * createBitmapText
	 * This function is used in order to build a BitmapText.
	 * @param {String}  text  The text to display.
	 * @param {Object}  style  The style parameters.
	 * @return {BitmapText} The BitmapText built. 
	 */
	createBitmapText(text, style = undefined)
	{
		return new BitmapText(text, style);
	}
}

/*
|--------------------------------------------------------------------------
| MeshFactory
|--------------------------------------------------------------------------
|
| This file defines the MeshFactory Object.
| This object is a factory for Mesh.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class MeshFactory extends AbstractContainerFactory
{
	/**
	 * constructor
	 * This function is used in order to build a MeshFactory.
	 */
	constructor()
	{
		super();
	}

	/**
	 * createMesh
	 * This function is used in order to build a Mesh.
	 * @param {Object}  options  Options for the build ( vertices, uvs, indices, drawModes)
	 * @return {Mesh} The Mesh built. 
	 */
	createMesh(options = undefined)
	{
		return new Mesh(options);
	}

	/**
	 * createRope
	 * This function is used in order to build a Rope.
	 * @param {Points[]}  points  An array of Point to construct this rope. They can't change after building.
	 * @return {Rope} The Rope built. 
	 */
	createRope(points)
	{
		return new Rope(points);
	}

	/**
	 * createPlane
	 * @param {Number}  verticesX  The number of vertices in the x-axis.
	 * @param {Number}  verticesY  The number of vertices in the y-axis.
	 * This function is used in order to build a Plane.
	 * @return {Plane} The Plane built. 
	 */
	createPlane(verticesX = undefined, verticesY = undefined)
	{
		return new Plane(verticesX, verticesY);
	}

	/**
	 * createNineSlicePlane
	 * This function is used in order to build a NineSlicePlane.
	 * @param {Object}  barsSizes  Sizes of the bar horizontal and vertical. 
	 * @return {NineSlicePlane} The NineSlicePlane built. 
	 */
	createNineSlicePlane(barsSizes = undefined)
	{
		return new NineSlicePlane(barsSizes);
	}
}


module.exports = {
	AbstractContainerFactory: AbstractContainerFactory,
	TextFactory: TextFactory,
	BitmapTextFactory: BitmapTextFactory,
	MeshFactory: MeshFactory,
};