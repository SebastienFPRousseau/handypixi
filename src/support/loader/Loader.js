/*
|--------------------------------------------------------------------------
| Loader
|--------------------------------------------------------------------------
|
| This file defines the Point Object.
| This object build a PIXI.loaders.Loader for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Loader extends PIXI.loaders.Loader
{
	/**
	 * constructor
	 * This function is used in order to build a Loader.
	 * @param {String}  baseUrl  The base url for all resources loaded by this loader.
	 * @param {Number}  concurrency  The number of resources to load concurrently.
	 */
	constructor(baseUrl = "", concurrency = 10)
	{
		if (!(typeof baseUrl === "string" && {}.toString.call(baseUrl) === "[object String]"))
			throw new TypeError("baseUrl must be a string.");

		if ({}.toString.call(concurrency) !== "[object Number]")
			throw new TypeError("concurrency must be a number.");

		super(baseUrl, concurrency);
	}

	/**
	 * getPremade
	 * This function is used in order to get the premade instance of the loader.
	 * @return {Loader}
	 */
	static getPremade()
	{
		return PIXI.loader;
	}
}

module.exports = {
	Loader: Loader,
};