/*
|--------------------------------------------------------------------------
| AbstractShaderFactory
|--------------------------------------------------------------------------
|
| This file defines the AbstractShaderFactory Object.
| This object is the abstract factory for Shader.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Shader } = require("./Shader.js");
const { GLSLShader } = require("./GLSLShader.js");
const { LookMaskShader } = require("./LookMaskShader.js");

/**
 * SHADER_FACTORY
 * Identify the ShaderFactory 
 * @type {Number} 
 */
const SHADER_FACTORY = 0;

class AbstractShaderFactory
{
	/**
	 * constructor
	 * This function is used in order to forbidden the built of an AbstractShaderFactory
	 */
	constructor()
	{
		if (this.constructor.name === "AbstractShaderFactory")
			throw new TypeError("Cannot construct Abstract instances like AbstractShaderFactory directly.");
	}

	/**
	 * SHADER_FACTORY
	 * @getter
	 */
	static get SHADER_FACTORY()
	{
		return SHADER_FACTORY;
	}

	/**
	 * getFactory
	 * This function is used in order to get the factory using its id.
	 * @param {Number}  id  The shader factory id.
	 * @return {AbstractShaderFactory} The factory needed.
	 */
	static getFactory(id)
	{
		if ({}.toString.call(id) !== "[object Number]")
			throw new TypeError("id must be a number.");

		switch(id)
		{
			case SHADER_FACTORY:
				return new ShaderFactory();
			break;

			default: 
				throw new Error("No factory found for this id: "+ id +"!");
		}

		return undefined;
	}
}


/*
|--------------------------------------------------------------------------
| ShaderFactory
|--------------------------------------------------------------------------
|
| This file defines the ShaderFactory Object.
| This object is a factory for Shader.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class ShaderFactory extends AbstractShaderFactory
{
	/**
	 * constructor
	 * This function is used in order to build a ShaderFactory.
	 */
	constructor()
	{
		super();
	}

	/**
	 * createFromLook
	 * This function is used in order to build a LookMaskShader from a Look.
	 * @param {Look} look The target for the shader.
	 * @return {LookMaskShader} The LookMaskShader built. 
	 */
	createFromLook(look)
	{
		return new LookMaskShader(look);
	}

	/**
	 * createFromGLSL
	 * This function is used in order to build a GLSLShader from a glsl shader.
	 * @param {Object} shader The target for the shader.
	 * @return {GLSLShader} The GLSLShader built. 
	 */
	createFromGLSL(shader)
	{
		if (!(typeof shader === "object" && {}.toString.call(shader) === "[object Object]"))
			throw new TypeError("shader must be an object.");

		return new GLSLShader(shader.vertexSrc, shader.fragmentSrc, shader.uniforms);
	}
}

module.exports = {
	AbstractShaderFactory: AbstractShaderFactory,
	ShaderFactory: ShaderFactory,
};
