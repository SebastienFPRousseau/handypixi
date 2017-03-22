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
const { Shape } = require("./mask/shape/Shape.js");
const { Circle } = require("./mask/shape/Circle.js");
const { Ellipse } = require("./mask/shape/Ellipse.js");
const { Rectangle } = require("./mask/shape/Rectangle.js");
const { RoundedRectangle } = require("./mask/shape/RoundedRectangle.js");
const { Polygon } = require("./mask/shape/Polygon.js");
const { Sprite } = require("./mask/sprite/Sprite.js");
const { AnimatedSprite } = require("./mask/sprite/AnimatedSprite.js");
const { TilingSprite } = require("./mask/sprite/TilingSprite.js");

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
 * SPECIAL_SPRITE_FACTORY
 * Identify the SpecialSpriteFactory 
 * @type {Number} 
 */
const SPECIAL_SPRITE_FACTORY = 2;

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
	 * SPECIAL_SPRITE_FACTORY
	 * @getter
	 */
	static get SPECIAL_SPRITE_FACTORY()
	{
		return SPECIAL_SPRITE_FACTORY;
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

			case SHAPE_FACTORY:
				return new ShapeFactory();
			break;

			case SPECIAL_SPRITE_FACTORY:
				return new SpecialSpriteFactory();
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

/*
|--------------------------------------------------------------------------
| ShapeFactory
|--------------------------------------------------------------------------
|
| This file defines the ShapeFactory Object.
| This object is a factory for Shape.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class ShapeFactory extends AbstractContainerFactory
{
	/**
	 * constructor
	 * This function is used in order to build a ShapeFactory.
	 */
	constructor()
	{
		super();
	}

	/**
	 * createShape
	 * This function is used in order to build a Shape.
	 * @param {Object}  options  Default options for drawing.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	 * @return {Shape} The Shape built. 
	 */
	createShape(options = undefined, nativeLines = undefined)
	{
		return new Shape(options, nativeLines);
	}

	/**
	 * createCircle
	 * This function is used in order to build a Circle.
	 * @param {Number}  x  The X coordinate of the center of this circle.
	 * @param {Number}  y  The Y coordinate of the center of this circle.
	 * @param {Number}  radius  The radius of the circle.
	 * @param {Object}  options  Default options for drawing.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	 * @return {Circle} The Circle built. 
	 */
	createCircle(x = undefined, y = undefined, radius = undefined, options = undefined, nativeLines = undefined)
	{
		return new Circle(x, y, radius, options, nativeLines);
	}

	/**
	 * createEllipse
	 * This function is used in order to build a Ellipse.
	 * @param {Number}  x  The X coordinate of the center of this Ellipse.
	 * @param {Number}  y  The Y coordinate of the center of this Ellipse.
	 * @param {Number}  width  The half width of this ellipse.
	 * @param {Number}  height  The half height of this ellipse.
	 * @param {Object}  options  Default options for drawing.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	 * @return {Ellipse} The Ellipse built. 
	 */
	createEllipse(x = undefined, y = undefined, width = undefined, height = undefined, options = undefined, nativeLines = undefined)
	{
		return new Ellipse(x, y, width, height, options, nativeLines);
	}

	/**
	 * createPolygon
	 * This function is used in order to build a Polygon.
	 * @param {Point[]} points An array of Points that form the polygon.
	 * @param {Object}  options  Default options for drawing.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	 * @return {Polygon} The Polygon built. 
	 */
	createPolygon(points = undefined, options = undefined, nativeLines = undefined)
	{
		return new Polygon(points, options, nativeLines);
	}

	/**
	 * createRectangle
	 * This function is used in order to build a Rectangle.
	 * @param {Number}  x  The X coordinate of the center of this Rectangle.
	 * @param {Number}  y  The Y coordinate of the center of this Rectangle.
	 * @param {Number}  width  The overall width of this rectangle.
	 * @param {Number}  height  The overall height of this rectangle.
	 * @param {Object}  options  Default options for drawing.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	 * @return {Rectangle} The Rectangle built. 
	 */
	createRectangle(x = undefined, y = undefined, width = undefined, height = undefined, options = undefined, nativeLines = undefined)
	{
		return new Rectangle(x, y, width, height, options, nativeLines);
	}

	/**
	 * createRoundedRectangle
	 * This function is used in order to build a RoundedRectangle.
	 * @param {Number}  x  The X coordinate of the center of this RoundedRectangle.
	 * @param {Number}  y  The Y coordinate of the center of this RoundedRectangle.
	 * @param {Number}  width  The overall width of this RoundedRectangle.
	 * @param {Number}  height  The overall height of this RoundedRectangle.
	 * @param {Number}  radius  Controls the radius of the rounded corners.
	 * @param {Object}  options  Default options for drawing.
	 * @param {Boolean}  nativeLines  Lines will be draw using LINES instead of TRIANGLE_STRIP
	 * @return {RoundedRectangle} The RoundedRectangle built. 
	 */
	createRoundedRectangle(x = undefined, y = undefined, width = undefined, height = undefined, radius = undefined, options = undefined, nativeLines = undefined)
	{
		return new RoundedRectangle(x, y, width, height, radius, options, nativeLines);
	}
	
}

/*
|--------------------------------------------------------------------------
| SpecialSpriteFactory
|--------------------------------------------------------------------------
|
| This file defines the SpecialSpriteFactory Object.
| This object is a factory for specials Sprite.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class SpecialSpriteFactory extends AbstractContainerFactory
{
	/**
	 * constructor
	 * This function is used in order to build a SpecialSpriteFactory.
	 */
	constructor()
	{
		super();
	}

	/**
	 * createAnimatedSprite
	 * This function is used in order to build a AnimatedSprite.
	 * @param {Boolean}  autoUpdate  Use the shared Ticker to auto update animation or not.
	 * @return {AnimatedSprite} The AnimatedSprite built. 
	 */
	createAnimatedSprite(autoUpdate = undefined)
	{
		return new AnimatedSprite(autoUpdate);
	}

	/**
	 * createTilingSprite
	 * This function is used in order to build a TilingSprite.
	 * @param {Number}  width  The width of the tiling sprite.
	 * @param {Number}  height  The height of the tiling sprite.
	 * @return {TilingSprite} The TilingSprite built. 
	 */
	createTilingSprite(width = undefined, height = undefined)
	{
		return new TilingSprite(width, height);
	}
}

module.exports = {
	AbstractContainerFactory: AbstractContainerFactory,
	TextFactory: TextFactory,
	BitmapTextFactory: BitmapTextFactory,
	MeshFactory: MeshFactory,
	ShapeFactory: ShapeFactory,
	SpecialSpriteFactory: SpecialSpriteFactory,
};