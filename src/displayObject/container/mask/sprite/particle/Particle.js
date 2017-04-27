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

	/**
	 * acceleration
	 * @setter
	 * This function is a setter for the member acceleration.
	 * @param {Point}  acceleration  The acceleration to apply to the particle.
	 */
	
	/**
	 * age
	 * @getter
	 * This function is a getter for the member age.
	 * @return {Number} The current age of the particle, in seconds.
	 */

	/**
	 * age
	 * @setter
	 * This function is a setter for the member age.
	 * @param {Number}  age  The current age of the particle, in seconds.
	 */
	
	/**
	 * ease
	 * @getter
	 * This function is a getter for the member ease.
	 * @return {Function} A simple easing function to be applied to all properties that are being interpolated.
	 */

	/**
	 * ease
	 * @setter
	 * This function is a setter for the member ease.
	 * @param {Function}  ease  A simple easing function to be applied to all properties that are being interpolated.
	 */
	
	/**
	 * emitter
	 * @getter
	 * This function is a getter for the member emitter.
	 * @return {Emitter} The emitter that controls this particle.
	 */

	/**
	 * emitter
	 * @setter
	 * This function is a setter for the member emitter.
	 * @param {Emitter}  emitter  The emitter that controls this particle.
	 */
	
	/**
	 * endAlpha
	 * @getter
	 * This function is a getter for the member endAlpha.
	 * @return {Number} The alpha of the particle at the end of its life.
	 */

	/**
	 * endAlpha
	 * @setter
	 * This function is a setter for the member endAlpha.
	 * @param {Number}  endAlpha  The alpha of the particle at the end of its life.
	 */
	
	/**
	 * endColor
	 * @getter
	 * This function is a getter for the member endColor.
	 * @return {Number[3]} The tint of the particle at the start of its life.
	 */

	/**
	 * endColor
	 * @setter
	 * This function is a setter for the member endColor.
	 * @param {Number[3]}  endColor  The tint of the particle at the start of its life.
	 */
	
	/**
	 * endScale
	 * @getter
	 * This function is a getter for the member endScale.
	 * @return {Number} The scale of the particle at the start of its life.
	 */

	/**
	 * endScale
	 * @setter
	 * This function is a setter for the member endScale.
	 * @param {Number}  endScale  The scale of the particle at the start of its life.
	 */
	
	/**
	 * endSpeed
	 * @getter
	 * This function is a getter for the member endSpeed.
	 * @return {Number} The speed of the particle at the end of its life.
	 */

	/**
	 * endSpeed
	 * @setter
	 * This function is a setter for the member endSpeed.
	 * @param {Number}  endSpeed  The speed of the particle at the end of its life.
	 */
	
	/**
	 * extraData
	 * @getter
	 * This function is a getter for the member extraData.
	 * @return {Object} Extra data that the emitter passes along for custom particles.
	 */

	/**
	 * extraData
	 * @setter
	 * This function is a setter for the member extraData.
	 * @param {Object}  extraData  Extra data that the emitter passes along for custom particles.
	 */
	
	/**
	 * maxLife
	 * @getter
	 * This function is a getter for the member maxLife.
	 * @return {Number} The maximum lifetime of this particle, in seconds.
	 */

	/**
	 * maxLife
	 * @setter
	 * This function is a setter for the member maxLife.
	 * @param {Number}  maxLife  The maximum lifetime of this particle, in seconds.
	 */
	
	/**
	 * maxSpeed
	 * @getter
	 * This function is a getter for the member maxSpeed.
	 * @return {Number} The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */

	/**
	 * maxSpeed
	 * @setter
	 * This function is a setter for the member maxSpeed.
	 * @param {Number}  maxSpeed  The maximum speed allowed for accelerating particles. Negative values, values of 0 or NaN will disable the maximum speed.
	 */
	
	/**
	 * startAlpha
	 * @getter
	 * This function is a getter for the member startAlpha.
	 * @return {Number} The alpha of the particle at the start of its life.
	 */

	/**
	 * startAlpha
	 * @setter
	 * This function is a setter for the member startAlpha.
	 * @param {Number}  startAlpha  The alpha of the particle at the start of its life.
	 */
	
	/**
	 * startColor
	 * @getter
	 * This function is a getter for the member startColor.
	 * @return {Number[3]} The tint of the particle at the start of its life.
	 */

	/**
	 * startColor
	 * @setter
	 * This function is a setter for the member startColor.
	 * @param {Number[3]}  startColor  The tint of the particle at the start of its life.
	 */
	
	/**
	 * startScale
	 * @getter
	 * This function is a getter for the member startScale.
	 * @return {Number} The scale of the particle at the start of its life.
	 */

	/**
	 * startScale
	 * @setter
	 * This function is a setter for the member startScale.
	 * @param {Number}  startScale  The scale of the particle at the start of its life.
	 */
	
	/**
	 * startSpeed
	 * @getter
	 * This function is a getter for the member startSpeed.
	 * @return {Number} The speed of the particle at the start of its life.
	 */

	/**
	 * startSpeed
	 * @setter
	 * This function is a setter for the member startSpeed.
	 * @param {Number}  startSpeed  The speed of the particle at the start of its life.
	 */
	
	/**
	 * velocity
	 * @getter
	 * This function is a getter for the member velocity.
	 * @return {Point} The velocity of the particle. Speed may change, but the angle also contained in velocity is constant.
	 */

	/**
	 * velocity
	 * @setter
	 * This function is a setter for the member velocity.
	 * @param {Point}  velocity  The velocity of the particle. Speed may change, but the angle also contained in velocity is constant.
	 */
	
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
};

module.exports = {
	Particle: Particle,
	Emitter: Emitter,
};