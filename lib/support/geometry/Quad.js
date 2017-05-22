/*
|--------------------------------------------------------------------------
| Quad
|--------------------------------------------------------------------------
|
| This file defines the Quad Object.
| This object build a PIXI.Quad for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

const { WebGLEnvironment } = require("./../../renderingSystem/system/WebGLEnvironment.js");
const { Shader } = require("./../../graphic/shader/Shader.js");
const { Bounds } = require("./../../displayObject/bounds/Bounds.js");

class Quad
{
	/**
	* constructor
	* This function is used in order to build a Quad.
	* @param   {WebGLEnvironment}   environment         The gl environment for this quad to use.
	* @param   {PIXI.Quad}   environment         The Pixi object to build the HandyPixi object.
	*/
	constructor(environment)
	{
		if (environment instanceof PIXI.Quad)
		{
			this._out = environment;
		}
		else if (!(environment instanceof WebGLEnvironment))
		{
			throw new TypeError("environment must be an WebGLEnvironment.");
		}
		else
		{
			this._out = new PIXI.Quad(environment.config.gl, {});
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.Quad} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	* vertices
	* @getter
	* This function is a getter for the member vertices.
	* @return  {Number} An array of vertices. 
	*/
	get vertices()
	{
		return this._out.vertices;
	}

	/**
	* vertices
	* @setter
	* This function is a setter for the member vertices.
	* @param  {Float32Array[8]} 	vertices 	 An array of vertices. 
	*/
	set vertices(vertices)
	{
		if (!(vertices instanceof Float32Array) || vertices.length != 8)
			throw new TypeError("vertices must be a Float32Array, its length must be eight.");

		this._out.vertices = vertices;
	}

	/**
	* uvs
	* @getter
	* This function is a getter for the member uvs.
	* @return  {Number} The Uvs of the quad. 
	*/
	get uvs()
	{
		return this._out.uvs;
	}

	/**
	* uvs
	* @setter
	* This function is a setter for the member uvs.
	* @param  {Float32Array}	uvs 	 The Uvs of the quad. 
	*/
	set uvs(uvs)
	{
		if (!(uvs instanceof Float32Array) || uvs.length != 8)
			throw new TypeError("uvs must be an Float32Array, its length must be eight.");

		this._out.uvs = uvs;
	}

	/**
	 * initVao
	 * This function is used in order to initialize the vaos and use the shader.
	 * @param {Shader}  shader  The shader to use.
	 */
	initVao(shader)
	{
		if (!(shader instanceof Shader))
			throw new TypeError("shader must be a Shader.");

		this._out.initVao(shader.out);
	}

	/**
	 * map
	 * This function is used in order to map two Rectangle to the quad.
	 * @param {Bounds} target  The target rectangle texture frame.
	 * @param {Bounds} destination  The destination rectangle frame.
	 */
	map(target, destination)
	{
		if (!(target instanceof Bounds))
			throw new TypeError("target must be a Bounds.");

		if (!(destination instanceof Bounds))
			throw new TypeError("destination must be a Bounds.");

		this._out.map(target.out, destination.out);
	}

	/**
	 * upload
	 * This function is used in order to bind the buffer and upload data.
	 */
	upload()
	{
		this._out.upload();
	}

	/**
	 * destroy
	 * This function is used in order to remove this Quad from WebGL.
	 */
	destroy()
	{
		this._out.destroy();
	}
};

module.exports = {
	Quad: Quad,
};