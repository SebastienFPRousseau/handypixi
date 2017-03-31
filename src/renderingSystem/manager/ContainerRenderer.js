/*
|--------------------------------------------------------------------------
| ContainerRenderer
|--------------------------------------------------------------------------
|
| This file defines the ContainerRenderer Object.
| This object extends a PIXI.ObjectRenderer for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

/**
* Note: This class inherits from PIXI.ObjectRenderer because this class is internaly used by PIXI.WebGLRenderer and should not be instancied.
* @see http://pixijs.download/release/docs/PIXI.ObjectRenderer.html
*/

class ContainerRenderer extends PIXI.ObjectRenderer
{
	/**
	 * constructor
	 * This function is used in order to build a ContainerRenderer.
	 * @param {PIXI.WebGLRenderer}  renderer  The WebGLRenderer the ContainerRenderer is working for.
	 */
	constructor(renderer)
	{
		if (!(renderer instanceof PIXI.WebGLRenderer))
			throw new TypeError("renderer must be a PIXI.WebGLRenderer.");
		
		super(renderer);
	}
};

module.exports = {
	ContainerRenderer: ContainerRenderer,
};