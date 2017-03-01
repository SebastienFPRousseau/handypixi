/*
|--------------------------------------------------------------------------
| Frame
|--------------------------------------------------------------------------
|
| This file defines the Frame Object.
| This object build a PIXI FrameObject for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

Frame = class Frame
{
	/**
	* constructor
	* This function is used in order to build a Frame.
	* @param   {Texture}   texture         The Texture of the frame.
	* @param   {Number}   time         The duration of the frame in ms.
	*/
	constructor(texture, time)
	{
		if (!(point instanceof Texture))
			throw new TypeError("texture must be a Texture.");

		if (typeof time != "number")
			throw new TypeError("time must be a number.");

		this._out = 
		{
			texture: texture,
			time: time,
		}
	}

	/**
	* getTexture
	* This function is a getter for the member texture.
	* @return  {Texture} The Texture of the frame. 
	*/
	getTexture()
	{
		return this._out.texture;
	}

	/**
	* setTexture
	* This function is a setter for the member texture.
	* @param  {Texture} 	texture 	 The Texture of the frame. 
	*/
	setTexture(texture)
	{
		if (!(point instanceof Texture))
			throw new TypeError("texture must be a Texture.");
		
		this._out.texture = texture;
	}

	/**
	* getTime
	* This function is a getter for the member time.
	* @return  {Number} The duration of the frame in ms. 
	*/
	getTime()
	{
		return this._out.time;
	}

	/**
	* setTime
	* This function is a setter for the member time.
	* @param  {Number}	time 	 The duration of the frame in ms. 
	*/
	setTime(time)
	{
		if (typeof time != "number")
			throw new TypeError("time must be a number.");

		this._out.time = time;
	}
}

module.exports = {
	Frame: Frame,
};