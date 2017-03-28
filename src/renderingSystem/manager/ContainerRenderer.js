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

const { WebGLEnvironment } = require("./../system/WebGLEnvironment.js");

class ContainerRenderer extends PIXI.ObjectRenderer
{
	/**
	 * constructor
	 * This function is used in order to build a ContainerRenderer.
	 * @param {WebGLEnvironment}  env  Environment the ContainerRenderer is working for.
	 */
	constructor(env)
	{
		if (!(env instanceof WebGLEnvironment))
			throw new TypeError("env must be a WebGLEnvironment.");
		
		super(env.renderer);
	}
}

module.exports = {
	ContainerRenderer: ContainerRenderer,
};