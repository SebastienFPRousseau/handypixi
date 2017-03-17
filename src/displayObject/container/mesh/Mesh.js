/*
|--------------------------------------------------------------------------
| Mesh
|--------------------------------------------------------------------------
|
| This file defines the Mesh Object.
| This object build a PIXI.mesh.Mesh for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Container } = require("./../Container.js");
const { Point } = require("./../../../support/geometry/Point.js");

/**
 * DRAW_MODES
 * Various webgl draw modes.
 * @type {Object} 
 * @property {Number} TRIANGLE_MESH
 * @property {Number} TRIANGLES
 */
const DRAW_MODES = PIXI.mesh.Mesh.DRAW_MODES;

class Mesh extends Container
{
	/**
	 * DRAW_MODES
	 * @getter
	 */
	static get DRAW_MODES()
	{
		return DRAW_MODES;
	}

	/**
	 * constructor
	 * This function is used in order to build a Mesh.
	 * @param {Object}  options  Options for the build ( vertices, uvs, indices, drawModes)
	 * @param {PIXI.mesh.Mesh}  options  The Pixi object to build the HandyPixi object.
	 */
	constructor(options = {})
	{
		super(); 

		if (this.constructor.name !== "Mesh")
     		return ;

		if (options instanceof PIXI.mesh.Mesh)
		{
			this._out = options;
		}
		else 
		{
			if (!(typeof options === "object" && {}.toString.call(options) === "[object Object]"))
				throw new TypeError("options must be an object.");

			this._out = new PIXI.mesh.Mesh(PIXI.Texture.EMPTY, options.vertices, options.uvs, options.indices, options.drawMode);
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.mesh.Mesh} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * blendMode
	 * @getter
	 * This function is a getter for the member blendMode.
	 * @return {Number} The blend mode to be applied to the Mesh.
	 */
	get blendMode()
	{
		return this._out.blendMode;
	}

	/**
	 * blendMode
	 * @setter
	 * This function is a setter for the member blendMode.
	 * @param {Number}  mode  The blend mode to be applied to the Mesh.
	 */
	set blendMode(mode)
	{
		if ({}.toString.call(mode) !== "[object Number]")
			throw new TypeError("mode must be a number.");

		this._out.blendMode = mode;
	}

	/**
	 * tint
	 * @getter
	 * This function is a getter for the member tint.
	 * @return {Number} The tint applied to the mesh. This is a hex value.
	 */
	get tint()
	{
		return this._out.tint;
	}

	/**
	 * tint
	 * @setter
	 * This function is a setter for the member tint.
	 * @param {Number}  tint  The tint applied to the mesh. This is a hex value.
	 */
	set tint(tint)
	{
		if ({}.toString.call(tint) !== "[object Number]")
			throw new TypeError("tint must be a number.");

		this._out.tint = tint;
	}

	/**
	 * pluginName
	 * @getter
	 * This function is a getter for the member pluginName.
	 * @return {String} Name of plugin renderer that is responsible for rendering this element.
	 */
	get pluginName()
	{
		return this._out.pluginName;
	}

	/**
	 * pluginName
	 * @setter
	 * This function is a setter for the member pluginName.
	 * @param {String}  plugin  Name of plugin renderer that is responsible for rendering this element.
	 */
	set pluginName(plugin)
	{
		if (!(typeof plugin === "string" && {}.toString.call(plugin) === "[object String]"))
			throw new TypeError("plugin must be a string.");

		this._out.pluginName = plugin;
	}

	/**
	 * vertices
	 * @getter
	 * This function is a getter for the member vertices.
	 * @return {Float32Array} An array of vertices.
	 */
	get vertices()
	{
		return this._out.vertices;
	}

	/**
	 * vertices
	 * @setter
	 * This function is a setter for the member vertices.
	 * @param {Float32Array}  vertices  An array of vertices.
	 */
	set vertices(vertices)
	{
		if (!(vertices instanceof Float32Array))
			throw new TypeError("vertices must be a Float32Array.");

		this._out.vertices = vertices;
	}

	/**
	 * uvs
	 * @getter
	 * This function is a getter for the member uvs.
	 * @return {Float32Array} The Uvs of the Mesh.
	 */
    get uvs()
	{
		return this._out.uvs;
	}

	/**
	 * uvs
	 * @setter
	 * This function is a setter for the member uvs.
	 * @param {Float32Array}  uvs  The Uvs of the Mesh.
	 */
	set uvs(uvs)
	{
		if (!(uvs instanceof Float32Array))
			throw new TypeError("uvs must be a Float32Array.");

		this._out.uvs = uvs;
	}

	 /**
	 * canvasPadding
	 * @getter
	 * This function is a getter for the member canvasPadding.
	 * @return {Number} Triangles in canvas mode are automatically antialiased.
	 * Use this value to force triangles to overlap a bit with each other.
	 */
	get canvasPadding()
	{
		return this._out.canvasPadding;
	}

	/**
	 * canvasPadding
	 * @setter
	 * This function is a setter for the member canvasPadding.
	 * @param {Number}  canvasPadding  Triangles in canvas mode are automatically antialiased.
	 * Use this value to force triangles to overlap a bit with each other.
	 */
	set canvasPadding(canvasPadding)
	{
		if ({}.toString.call(canvasPadding) !== "[object Number]")
			throw new TypeError("canvasPadding must be a number.");

		this._out.canvasPadding = canvasPadding;
	}

	/**
	 * drawMode
	 * @getter
	 * This function is a getter for the member drawMode.
	 * @return {Number} The way the Mesh should be drawn, can be any of the Mesh.DRAW_MODES.
	 */
	get drawMode()
	{
		return this._out.drawMode;
	}

	/**
	 * drawMode
	 * @setter
	 * This function is a setter for the member drawMode.
	 * @param {Number}  drawMode  The way the Mesh should be drawn, can be any of the Mesh.DRAW_MODES.
	 */
	set drawMode(drawMode)
	{
		if ({}.toString.call(drawMode) !== "[object Number]")
			throw new TypeError("drawMode must be a number.");

		this._out.drawMode = drawMode;
	}

	/**
	 * dirty
	 * @getter
	 * This function is a getter for the member dirty.
	 * @return {Number} Version of mesh uvs are dirty or not.
	 */
	get dirty()
	{
		return this._out.dirty;
	}

	/**
	 * dirty
	 * @setter
	 * This function is a setter for the member dirty.
	 * @param {Number}  dirty  Version of mesh uvs are dirty or not.
	 */
	set dirty(dirty)
	{
		if ({}.toString.call(dirty) !== "[object Number]")
			throw new TypeError("dirty must be a number.");

		this._out.dirty = dirty;
	}

	/**
	 * indexDirty
	 * @getter
	 * This function is a getter for the member indexDirty.
	 * @return {Number} Version of mesh uvs are indexDirty or not.
	 */
	get indexDirty()
	{
		return this._out.indexDirty;
	}

	/**
	 * indexDirty
	 * @setter
	 * This function is a setter for the member indexDirty.
	 * @param {Number}  indexDirty  Version of mesh uvs are dirty or not.
	 */
	set indexDirty(indexDirty)
	{
		if ({}.toString.call(indexDirty) !== "[object Number]")
			throw new TypeError("indexDirty must be a number.");

		this._out.indexDirty = indexDirty;
	}

	/**
	 * containsPoint
	 * This function is used in order to check if a point is inside this mesh.
	 * @param {Point}  point  The point to check.
	 * @return {Boolean} Whether or not the mesh contains the point.
	 */
	containsPoint(point)
	{
		if (!(point instanceof Point))
			throw new TypeError("point must be a Point.");

		return this._out.containsPoint(point.out);
	}
}

module.exports = {
	Mesh: Mesh,
};