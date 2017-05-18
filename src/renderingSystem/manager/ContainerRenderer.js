"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var ContainerRenderer = function (_PIXI$ObjectRenderer) {
	_inherits(ContainerRenderer, _PIXI$ObjectRenderer);

	/**
  * constructor
  * This function is used in order to build a ContainerRenderer.
  * @param {PIXI.WebGLRenderer}  renderer  The WebGLRenderer the ContainerRenderer is working for.
  */
	function ContainerRenderer(renderer) {
		_classCallCheck(this, ContainerRenderer);

		if (!(renderer instanceof PIXI.WebGLRenderer)) throw new TypeError("renderer must be a PIXI.WebGLRenderer.");

		return _possibleConstructorReturn(this, (ContainerRenderer.__proto__ || Object.getPrototypeOf(ContainerRenderer)).call(this, renderer));
	}

	return ContainerRenderer;
}(PIXI.ObjectRenderer);

;

module.exports = {
	ContainerRenderer: ContainerRenderer
};