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

class ContainerRenderer extends PIXI.ObjectRenderer
{
	/**
	 * constructor
	 * This function is used in order to build a ContainerRenderer.
	 * @param {PIXI.WebGLRenderer}  renderer  WebGL renderer the ContainerRenderer is working for.
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