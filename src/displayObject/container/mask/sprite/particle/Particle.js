/*
|--------------------------------------------------------------------------
| Particle
|--------------------------------------------------------------------------
|
| This file defines the Particle Object.
| This object build a PIXI.particles.Particle for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

const { Sprite } = require("./../Sprite.js");
const { Point } = require("./../../../../../support/geometry/Point.js");
const { Container } = require("./../../../Container.js");
const { Texture } = require("./../../../../../graphic/texture/Texture.js");

class Particle extends Sprite
{
	/**
	 * constructor
	 * This function is used in order to build a Particle.
	 * @param {Emitter}  emitter  The emitter that controls this particle.
	 * @param {PIXI.particles.Particle}  emitter  The Pixi object to build the HandyPixi object.
	 */
	constructor(emitter)
	{
		super();

		if (emitter instanceof PIXI.particles.Particle)
		{
			this._out = emitter;
		}
		else 
		{
			if (!(emitter instanceof Emitter))
				throw new TypeError("emitter must be an Emitter.");

			this._out = new PIXI.particles.Particle(emitter.out);
		}
	}

	/**
	 * acceleration
	 * @getter
	 * This function is a getter for the member acceleration.
	 * @return {Point} The acceleration to apply to the particle.
	 */
	get acceleration()
	{
		return new Point(this._out.acceleration);
	}

	/**
	 * acceleration
	 * @setter
	 * This function is a setter for the member acceleration.
	 * @param {Point}  acceleration  The acceleration to apply to the particle.
	 */
	set acceleration(acceleration)
	{
		if (!(acceleration instanceof Point))
			throw new TypeError("acceleration must be a Point.");

		this._out.acceleration = acceleration.out;
	}

	/**
	 * age
	 * @getter
	 * This function is a getter for the member age.
	 * @return {Number} The current age of the particle, in seconds.
	 */
	get age()
	{
		return this._out.age;
	}

	/**
	 * age
	 * @setter
	 * This function is a setter for the member age.
	 * @param {Number}  age  The current age of the particle, in seconds.
	 */
	set age(age)
	{
		if ({}.toString.call(age) !== "[object Number]")
			throw new TypeError("age must be a number.");

		this._out.age = age;
	}

	/**
	 * ease
	 * @getter
	 * This function is a getter for the member ease.
	 * @return {Function} A simple easing function to be applied to all properties that are being interpolated.
	 */
	get ease()
	{
		return this._out.ease;
	}

	/**
	 * ease
	 * @setter
	 * This function is a setter for the member ease.
	 * @param {Function}  ease  A simple easing function to be applied to all properties that are being interpolated.
	 */
	set ease(ease)
	{
		if ({}.toString.call(ease) !== "[object Function]")
			throw new TypeError("ease must be a function.");

		this._out.ease = ease;
	}

	/**
	 * emitter
	 * @getter
	 * This function is a getter for the member emitter.
	 * @return {Emitter} The emitter that controls this particle.
	 */
	get emitter()
	{
		return new Emitter(this._out.emitter);
	}

	/**
	 * emitter
	 * @setter
	 * This function is a setter for the member emitter.
	 * @param {Emitter}  emitter  The emitter that controls this particle.
	 */
	set emitter(emitter)
	{
		if (!(emitter instanceof Emitter))
			throw new TypeError("emitter must be a Emitter.");

		this._out.emitter = emitter.out;
	}

	/**
	 * endAlpha
	 * @getter
	 * This function is a getter for the member endAlpha.
	 * @return {Number} The alpha of the particle at the end of its life.
	 */
	get endAlpha()
	{
		return this._out.endAlpha;
	}

	/**
	 * endAlpha
	 * @setter
	 * This function is a setter for the member endAlpha.
	 * @param {Number}  endAlpha  The alpha of the particle at the end of its life.
	 */
	set endAlpha(endAlpha)
	{
		if ({}.toString.call(endAlpha) !== "[object Number]")
			throw new TypeError("endAlpha must be a number.");

		this._out.endAlpha = endAlpha;
	}

	/**
	 * endColor
	 * @getter
	 * This function is a getter for the member endColor.
	 * @return {Number[3]} The tint of the particle at the start of its life.
	 */
	get endColor()
	{
		return this._out.endColor;
	}

	/**
	 * endColor
	 * @setter
	 * This function is a setter for the member endColor.
	 * @param {Number[3]}  endColor  The tint of the particle at the start of its life.
	 */
	set endColor(endColor)
	{
		if (!Array.isArray(endColor) || endColor.length != 3)
			throw new TypeError("endColor must be an Array, its length must be three.");

		for (let i = 0, l = endColor.length; i < l; i++)
		{
			if ({}.toString.call(endColor[i]) !== "[object Number]")
				throw new TypeError("endColor must be an Array of Numbers.");
		}

		this._out.endColor = endColor;
	}

	/**
	 * endScale
	 * @getter
	 * This function is a getter for the member endScale.
	 * @return {Number} The scale of the particle at the start of its life.
	 */
	get endScale()
	{
		return this._out.endScale;
	}

	/**
	 * endScale
	 * @setter
	 * This function is a setter for the member endScale.
	 * @param {Number}  endScale  The scale of the particle at the start of its life.
	 */
	set endScale(endScale)
	{
		if ({}.toString.call(endScale) !== "[object Number]")
			throw new TypeError("endScale must be a number.");

		this._out.endScale = endScale;
	}

	/**
	 * endSpeed
	 * @getter
	 * This function is a getter for the member endSpeed.
	 * @return {Number} The speed of the particle at the end of its life.
	 */
	get endSpeed()
	{
		return this._out.endSpeed;
	}

	/**
	 * endSpeed
	 * @setter
	 * This function is a setter for the member endSpeed.
	 * @param {Number}  endSpeed  The speed of the particle at the end of its life.
	 */
	set endSpeed(endSpeed)
	{
		if ({}.toString.call(endSpeed) !== "[object Number]")
			throw new TypeError("endSpeed must be a number.");

		this._out.endSpeed = endSpeed;
	}

	/**
	 * extraData
	 * @getter
	 * This function is a getter for the member extraData.
	 * @return {Object} Extra data that the emitter passes along for custom particles.
	 */
	get extraData()
	{
		return this._out.extraData;
	}

	/**
	 * extraData
	 * @setter
	 * This function is a setter for the member extraData.
	 * @param {Object}  extraData  Extra data that the emitter passes along for custom particles.
	 */
	set extraData(extraData)
	{
		if (!(typeof extraData === "object" && {}.toString.call(extraData) === "[object Object]"))
			throw new TypeError("extraData must be an object.");

		this._out.extraData = extraData;
	}

	/**
	 * maxLife
	 * @getter
	 * This function is a getter for the member maxLife.
	 * @return {Number} The maximum lifetime of this particle, in seconds.
	 */
	get maxLife()
	{
		return this._out.maxLife;
	}

	/**
	 * maxLife
	 * @setter
	 * This function is a setter for the member maxLife.
	 * @param {Number}  maxLife  The maximum lifetime of this particle, in seconds.
	 */
	set maxLife(maxLife)
	{
		if ({}.toString.call(maxLife) !== "[object Number]")
			throw new TypeError("maxLife must be a number.");

		this._out.maxLife = maxLife;
	}

	/**
	 * maxSpeed
	 * @getter
	 * This function is a getter for the member maxSpeed.
	 * @return {Number} The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */
	get maxSpeed()
	{
		return this._out.maxSpeed;
	}

	/**
	 * maxSpeed
	 * @setter
	 * This function is a setter for the member maxSpeed.
	 * @param {Number}  maxSpeed  The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */
	set maxSpeed(maxSpeed)
	{
		if ({}.toString.call(maxSpeed) !== "[object Number]")
			throw new TypeError("maxSpeed must be a number.");

		this._out.maxSpeed = maxSpeed;
	}

	/**
	 * startAlpha
	 * @getter
	 * This function is a getter for the member startAlpha.
	 * @return {Number} The alpha of the particle at the start of its life.
	 */
	get startAlpha()
	{
		return this._out.startAlpha;
	}

	/**
	 * startAlpha
	 * @setter
	 * This function is a setter for the member startAlpha.
	 * @param {Number}  startAlpha  The alpha of the particle at the start of its life.
	 */
	set startAlpha(startAlpha)
	{
		if ({}.toString.call(startAlpha) !== "[object Number]")
			throw new TypeError("startAlpha must be a number.");

		this._out.startAlpha = startAlpha;
	}

	/**
	 * startColor
	 * @getter
	 * This function is a getter for the member startColor.
	 * @return {Number[3]} The tint of the particle at the start of its life.
	 */
	get startColor()
	{
		return this._out.startColor;
	}

	/**
	 * startColor
	 * @setter
	 * This function is a setter for the member startColor.
	 * @param {Number[3]}  startColor  The tint of the particle at the start of its life.
	 */
	set startColor(startColor)
	{
		if (!Array.isArray(startColor) || startColor.length != 3)
			throw new TypeError("startColor must be an Array, its length must be three.");

		for (let i = 0, l = startColor.length; i < l; i++)
		{
			if ({}.toString.call(startColor[i]) !== "[object Number]")
				throw new TypeError("startColor must be an Array of Numbers.");
		}

		this._out.startColor = startColor;
	}

	/**
	 * startScale
	 * @getter
	 * This function is a getter for the member startScale.
	 * @return {Number} The scale of the particle at the start of its life.
	 */
	get startScale()
	{
		return this._out.startScale;
	}

	/**
	 * startScale
	 * @setter
	 * This function is a setter for the member startScale.
	 * @param {Number}  startScale  The scale of the particle at the start of its life.
	 */
	set startScale(startScale)
	{
		if ({}.toString.call(startScale) !== "[object Number]")
			throw new TypeError("startScale must be a number.");

		this._out.startScale = startScale;
	}

	/**
	 * startSpeed
	 * @getter
	 * This function is a getter for the member startSpeed.
	 * @return {Number} The speed of the particle at the start of its life.
	 */
	get startSpeed()
	{
		return this._out.startSpeed;
	}

	/**
	 * startSpeed
	 * @setter
	 * This function is a setter for the member startSpeed.
	 * @param {Number}  startSpeed  The speed of the particle at the start of its life.
	 */
	set startSpeed(startSpeed)
	{
		if ({}.toString.call(startSpeed) !== "[object Number]")
			throw new TypeError("startSpeed must be a number.");

		this._out.startSpeed = startSpeed;
	}

	/**
	 * velocity
	 * @getter
	 * This function is a getter for the member velocity.
	 * @return {Point} The velocity of the particle. Speed may change, but the angle also contained in velocity is constant.
	 */
	get velocity()
	{
		return new Point(this._out.velocity);
	}

	/**
	 * velocity
	 * @setter
	 * This function is a setter for the member velocity.
	 * @param {Point}  velocity  The velocity of the particle. Speed may change, but the angle also contained in velocity is constant.
	 */
	set velocity(velocity)
	{
		if (!(velocity instanceof Point))
			throw new TypeError("velocity must be a Point.");

		this._out.velocity = velocity.out;
	}

	/**
	 * destroy
	 * This function is used in order to destroy the particle, removing references and preventing future use.
	 */
	destroy()
	{
		this._out.destroy();
	}

	/**
	 * init
	 * This function is used in order to initialize the particle for use, based on the properties that have to have been set already on the particle.
	 */
	init()
	{
		this._out.init();
	}

	/**
	 * kill
	 * This function is used in order to kill the particle, removing it from the display list and telling the emitter to recycle it. 
	 */
	kill()
	{
		this._out.kill();
	}

	/**
	 * update
	 * This function is used in order to update the particle.
	 * @param {Number}  delta  Time elapsed since the previous frame, in seconds.
	 * @return {Number} The standard interpolation multiplier (0-1) used for all relevant particle properties. 
	 * A value of -1 means the particle died of old age instead.
	 */
	update(delta)
	{
		if ({}.toString.call(delta) !== "[object Number]")
			throw new TypeError("delta must be a number.");

		return this._out.update(delta);
	}
};

/*
|--------------------------------------------------------------------------
| Emitter
|--------------------------------------------------------------------------
|
| This file defines the Emitter Object.
| This object build a PIXI.particles.Emitter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Emitter
{
	/**
	 * constructor
	 * This function is used in order to build an Emitter.
	 * @param {Container}  parent  The parent of all emitted particles.
	 * @param {Texture[]}  textures  An array of textures to use for the particles.
	 * @param {Object}  config  A configuration object containing settings for the emitter.
	 * @param {PIXI.particles.Emitter}  parent  The Pixi object to build the HandyPixi object.
	 */
	constructor(parent, textures = undefined, config = undefined)
	{
		if (parent instanceof PIXI.particles.Emitter)
		{
			this._out = parent;
		}
		else 
		{
			if (!(parent instanceof Container))
				throw new TypeError("parent must be a Container.");

			if (!(typeof config === "object" && {}.toString.call(config) === "[object Object]" || config === undefined))
				throw new TypeError("config must be an object.");

			let outTextures = undefined;

			if(textures !== undefined)
			{			
				if (!Array.isArray(textures))
				{
					throw new TypeError("textures must be an array.");
				}
				else
				{
					outTextures = [];

					for(let i = 0, l = textures.length; i < l; i++)
					{
						if (!(textures[i] instanceof Texture))
							throw new TypeError("Can't apply the "+ i +" element, it must be a Texture");

						outTextures = textures[i].out;
					}
				}
			}

			this._out = new PIXI.particles.Emitter(parent.out, outTextures, config);
		}
	}

	/**
	 * out
	 * @getter
	 * This function is a getter for the member _out.
	 * @return  {PIXI.particles.Emitter} The PIXI Object used by this object. 
	 */
	get out()
	{
		return this._out;
	}
};

module.exports = {
	Particle: Particle,
	Emitter: Emitter,
};