/*
|--------------------------------------------------------------------------
| Shader
|--------------------------------------------------------------------------
|
| This file defines the Shader Object.
| This object build a PIXI.Filter for HandyPixi.
| This package is based on Pixi.js.
| http://www.pixijs.com/
|
*/

class Shader
{
	/**
	* constructor
	* This function is used in order to build a Shader.
	* @param {PIXI.Filter}  pixiObj  The Pixi object to build the HandyPixi object.
	*/
	constructor(pixiObj = null)
	{
		if (pixiObj === null && this.constructor !== Shader)
     		return ;

		if (pixiObj instanceof PIXI.Filter)
		{
			this._out = pixiObj;
		}
		else 
		{
			this._out = new PIXI.Filter();
		}
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.Filter} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	 * fragmentSrc
	 * @getter
	 * This function is a getter for the member fragmentSrc.
	 * @return {String} The fragment shader as a String.
	 */
	get fragmentSrc()
	{
		return this._out.fragmentSrc;
	}

	/**
	 * fragmentSrc
	 * @setter
	 * This function is a setter for the member fragmentSrc.
	 * @param {String}  fragmentSrc  The fragment shader as a String.
	 */
	set fragmentSrc(fragmentSrc)
	{
		if (!(typeof fragmentSrc === "string" && {}.toString.call(fragmentSrc) === "[object String]"))
			throw new TypeError("fragmentSrc must be a string.");

		this._out.fragmentSrc = fragmentSrc;
	}
	
	/**
	 * vertexSrc
	 * @getter
	 * This function is a getter for the member vertexSrc.
	 * @return {String} The vertex shader as a String.
	 */
	get vertexSrc()
	{
		return this._out.vertexSrc;
	}

	/**
	 * vertexSrc
	 * @setter
	 * This function is a setter for the member vertexSrc.
	 * @param {String}  vertexSrc  The vertex shader as a String.
	 */
	set vertexSrc(vertexSrc)
	{
		if (!(typeof vertexSrc === "string" && {}.toString.call(vertexSrc) === "[object String]"))
			throw new TypeError("vertexSrc must be a string.");

		this._out.vertexSrc = vertexSrc;
	}

	/**
	 * padding
	 * @getter
	 * This function is a getter for the member padding.
	 * @return {Number} The padding of the filter.
	 */
	get padding()
	{
		return this._out.padding;
	}

	/**
	 * padding
	 * @setter
	 * This function is a setter for the member padding.
	 * @param {Number}  padding  The padding of the filter.
	 */
	set padding(padding)
	{
		if ({}.toString.call(padding) !== "[object Number]")
			throw new TypeError("padding must be a number.");

		this._out.padding = padding;
	}

	/**
	 * resolution
	 * @getter
	 * This function is a getter for the member resolution.
	 * @return {Number} The resolution of the filter.
	 */
	get resolution()
	{
		return this._out.resolution;
	}

	/**
	 * resolution
	 * @setter
	 * This function is a setter for the member resolution.
	 * @param {Number}  resolution  The resolution of the filter.
	 */
	set resolution(resolution)
	{
		if ({}.toString.call(resolution) !== "[object Number]")
			throw new TypeError("resolution must be a number.");

		this._out.resolution = resolution;
	}

	/**
	 * uniforms
	 * @getter
	 * This function is a getter for the member uniforms.
	 * @return {String} An object containing the current values of custom uniforms.
	 */
	get uniforms()
	{
		return this._out.uniforms;
	}

	/**
	 * uniforms
	 * @setter
	 * This function is a setter for the member uniforms.
	 * @param {Object}  uniforms  An object containing the current values of custom uniforms.
	 */
	set uniforms(uniforms)
	{
		if (!(typeof uniforms === "object" && {}.toString.call(uniforms) === "[object Object]"))
			throw new TypeError("uniforms must be an object.");

		this._out.uniforms = uniforms;
	}


	/**
	 * enable
	 * This function is used in order to enable the filter applyment.
	 * @param {Boolean} value Set to true to enable, to false to disable.
	 */
	enable(value = true)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a boolean.");

		this._out.enabled = value;
	}

	/**
	 * clone
	 * This function is used in order to clone this Shader
	 * @return {Shader} A copy of this Shader.
	 */
	clone()
	{
		return new Shader(this._out);
	}
};

module.exports = {
	Shader: Shader,
};