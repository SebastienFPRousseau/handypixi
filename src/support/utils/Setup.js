/*
|--------------------------------------------------------------------------
| Setup
|--------------------------------------------------------------------------
|
| This file defines the Setup static class.
| This class define many static method about the setup of HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

class Setup
{
	/**
	 * isMobile
	 * This function is used in order to detect the mobile device using the application. 
	 * @return {object} The mobile device detected.
	 */
	static isMobile()
	{
		return PIXI.utils.isMobile;
	}

	/**
	 * sayHello
	 * This function is used in order to log out the version and renderer information for this running instance of PIXI.
	 * @param {String}  type  The string renderer type to log.
	 */
	static sayHello(type = "")
	{
		if (!(typeof type === "string" && {}.toString.call(type) === "[object String]"))
			throw new TypeError("type must be a string.");

		PIXI.utils.sayHello(type);
	}
	
	/**
	 * skipHello
	 * This function is used in order to skip the hello message of renderers that are created after this is run.
	 */
	static skipHello()
	{
		PIXI.utils.skipHello();
	}

	/**
	 * isWebGLSupported
	 * This function is used in order to check the webgl support.
	 * @return {Boolean} Is webGL supported.
	 */
	static isWebGLSupported()
	{
		return PIXI.utils.isWebGLSupported();
	}
	
	/**
	 * getResolutionOfUrl
	 * This function is used in order to get the resolution / device pixel ratio of an asset.
	 * @param {String}  url  The image path.
	 * @param {Number}  defaultValue  The defaultValue if no filename prefix is set.
	 * @return {Number} Resolution / device pixel ratio of an asset
	 */
	static getResolutionOfUrl(url, defaultValue = 1)
	{
		if (!(typeof url === "string" && {}.toString.call(url) === "[object String]"))
			throw new TypeError("url must be a string.");

		if ({}.toString.call(defaultValue) !== "[object Number]")
			throw new TypeError("defaultValue must be a number.");

		return PIXI.utils.getResolutionOfUrl(url, defaultValue);
	}

	/**
	 * getUrlFileExtension
	 * This function is used in order to get type of the image by regexp for extension.
	 * @param {String}  url  The image path.
	 * @return {String} The image extension. Returns undefined for unknown extensions.
	 */
	static getUrlFileExtension(url)
	{
		if (!(typeof url === "string" && {}.toString.call(url) === "[object String]"))
			throw new TypeError("url must be a string.");

		return PIXI.utils.getUrlFileExtension(url);
	}
	
	/**
	 * decomposeDataUri
	 * This function is used in order to split a data URI into components.
	 * @param {String}  dataUri  The data URI to check.
	 * @return {DecomposedDataUri} The decomposed data uri. Returns undefined if dataUri is not a valid data URI.
	 */
	static decomposeDataUri(dataUri)
	{
		if (!(typeof dataUri === "string" && {}.toString.call(dataUri) === "[object String]"))
			throw new TypeError("dataUri must be a string.");

		return PIXI.utils.decomposeDataUri(dataUri);
	}	

	/**
	 * pluginTarget
	 * This function is used to get the mixin Object 
	 * @return {mixin} The mixin object
	 */
	static pluginTarget()
	{
		return PIXI.utils.pluginTarget;
	}
}

module.exports = {
	Setup: Setup,
};