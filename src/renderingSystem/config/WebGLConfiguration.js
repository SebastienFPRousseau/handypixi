/*
|--------------------------------------------------------------------------
| WebGLConfiguration
|--------------------------------------------------------------------------
|
| This file defines the WebGLConfiguration Object.
| This object build a PIXI.WebGLState for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Configuration } = require("./Configuration.js");

class WebGLConfiguration extends Configuration
{
	/**
	* constructor
	* This function is used in order to build a CanvasElement.
	* @param {PIXI.WebGLState}  gl  The PIXI Object used by this object ( reference of the renderer's state ). 
	* @param {Number}  maxMilliseconds  The maximum milliseconds that can be spent preparing items each frame.
	* @param {Number}  maxItemsPerFrame  The maximum number of items that can be prepared each frame.
	*/
	constructor(gl, maxMilliseconds = 3, maxItemsPerFrame = 4)
	{
		if ({}.toString.call(maxMilliseconds) !== "[object Number]")
			throw new TypeError("maxMilliseconds must be a number.");

		if ({}.toString.call(maxItemsPerFrame) !== "[object Number]")
			throw new TypeError("maxItemsPerFrame must be a number.");

		super(maxMilliseconds, maxItemsPerFrame);
		this._out = gl;
	}

	/**
	* out
	* @getter
	* This function is a getter for the member _out.
	* @return  {PIXI.WebGLState} The PIXI Object used by this object. 
	*/
	get out()
	{
		return this._out;
	}

	/**
	* gl
	* @getter
	* This function is a getter for the member gl.
	* @return  {WebGLRenderingContext} The current WebGL rendering context. 
	*/
	get gl()
	{
		return this._out.gl;
	}

	/**
	* gl
	* @setter
	* This function is a setter for the member gl.
	* @param  {WebGLRenderingContext}  gl  The current WebGL rendering context. 
	*/
	set gl(gl)
	{
		if (!(gl instanceof WebGLRenderingContext))
			throw new TypeError("gl must be a WebGLRenderingContext.");

		this._out.gl = gl;
	}

	/**
	* activeState
	* @getter
	* This function is a getter for the member activeState.
	* @return  {Uint8Array} The current active state. 
	*/
	get activeState()
	{
		return this._out.activeState;
	}

	/**
	* activeState
	* @setter
	* This function is a setter for the member activeState.
	* @param  {Uint8Array}  activeState  The current active state. 
	*/
	set activeState(activeState)
	{
		if (Object.prototype.toString.call(activeState) !== "[object Uint8Array]")
			throw new TypeError("activeState must be an Uint8Array.");

		this._out.activeState = activeState;
	}

	/**
	* defaultState
	* @getter
	* This function is a getter for the member defaultState.
	* @return  {Uint8Array} The default state. 
	*/
	get defaultState()
	{
		return this._out.defaultState;
	}

	/**
	* defaultState
	* @setter
	* This function is a setter for the member defaultState.
	* @param  {Uint8Array}  defaultState  The default state. 
	*/
	set defaultState(defaultState)
	{
		if (Object.prototype.toString.call(defaultState) !== "[object Uint8Array]")
			throw new TypeError("defaultState must be an Uint8Array.");

		this._out.defaultState = defaultState;
	}

	/**
	 * pop
	 * This function is used in order to pop a state out.
	 */
	pop()
	{
		this._out.pop();
	}
	
	/**
	 * push
	 * This function is used in order to push a new active state.
	 */
	push()
	{
		this._out.push();
	}
	
	/**
	 * resetAttributes
	 * This function is used in order to disable all the vaos in use.
	 */
	resetAttributes()
	{
		this._out.resetAttributes();
	}
	
	/**
	 * resetToDefault
	 * This function is used in order to reset all the logic and disables the vaos.
	 */
	resetToDefault()
	{
		this._out.resetToDefault();
	}
	
	/**
	 * enableBlend
	 * This function is used in order to enable/disable blending.
	 * @param {Boolean} value Turn on or off webgl blending.
	 */
	enableBlend(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a Boolean.");

		this._out.setBlend(value);
	}

	/**
	 * enableCullFace
	 * This function is used in order to enable/disable cull face.
	 * @param {Boolean} value Turn on or off cull face.
	 */
	enableCullFace(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a Boolean.");

		this._out.setCullFace(value);
	}

	/**
	 * enableDepthTest
	 * This function is used in order to enable/disable depth test.
	 * @param {Boolean} value Turn on or off webgl depth testing.
	 */
	enableDepthTest(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a Boolean.");

		this._out.setDepthTest(value);
	}

	/**
	 * setFrontFace
	 * This function is used in order to set the gl front face.
	 * @param {Boolean} value  True is clockwise and false is counter-clockwise.
	 */
	setFrontFace(value)
	{
		if ({}.toString.call(value) !== "[object Boolean]")
			throw new TypeError("value must be a Boolean.");

		this._out.setFrontFace(value);
	}
}

module.exports = {
	WebGLConfiguration: WebGLConfiguration,
}