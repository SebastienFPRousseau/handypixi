"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| AbstractShaderFactory
|--------------------------------------------------------------------------
|
| This file defines the AbstractShaderFactory Object.
| This object is the abstract factory for Shader.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Shader.js"),
    Shader = _require.Shader;

var _require2 = require("./GLSLShader.js"),
    GLSLShader = _require2.GLSLShader;

var _require3 = require("./LookMaskShader.js"),
    LookMaskShader = _require3.LookMaskShader;

/**
 * SHADER_FACTORY
 * Identify the ShaderFactory 
 * @type {Number} 
 */


var SHADER_FACTORY = 0;

var AbstractShaderFactory = function () {
	/**
  * constructor
  * This function is used in order to forbidden the built of an AbstractShaderFactory
  */
	function AbstractShaderFactory() {
		_classCallCheck(this, AbstractShaderFactory);

		if (this.constructor === AbstractShaderFactory) throw new TypeError("Cannot construct Abstract instances like AbstractShaderFactory directly.");
	}

	/**
  * SHADER_FACTORY
  * @getter
  */


	_createClass(AbstractShaderFactory, null, [{
		key: "getFactory",


		/**
   * getFactory
   * This function is used in order to get the factory using its id.
   * @param {Number}  id  The shader factory id.
   * @return {AbstractShaderFactory} The factory needed.
   */
		value: function getFactory(id) {
			if ({}.toString.call(id) !== "[object Number]") throw new TypeError("id must be a number.");

			switch (id) {
				case SHADER_FACTORY:
					return new ShaderFactory();

				default:
					throw new Error("No factory found for this id: " + id + "!");
			}
		}
	}, {
		key: "SHADER_FACTORY",
		get: function get() {
			return SHADER_FACTORY;
		}
	}]);

	return AbstractShaderFactory;
}();

;

/*
|--------------------------------------------------------------------------
| ShaderFactory
|--------------------------------------------------------------------------
|
| This file defines the ShaderFactory Object.
| This object is a factory for Shader.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var ShaderFactory = function (_AbstractShaderFactor) {
	_inherits(ShaderFactory, _AbstractShaderFactor);

	/**
  * constructor
  * This function is used in order to build a ShaderFactory.
  */
	function ShaderFactory() {
		_classCallCheck(this, ShaderFactory);

		return _possibleConstructorReturn(this, (ShaderFactory.__proto__ || Object.getPrototypeOf(ShaderFactory)).call(this));
	}

	/**
  * createFromLook
  * This function is used in order to build a LookMaskShader from a Look.
  * @param {Look} look The target for the shader.
  * @return {LookMaskShader} The LookMaskShader built. 
  */


	_createClass(ShaderFactory, [{
		key: "createFromLook",
		value: function createFromLook(look) {
			return new LookMaskShader(look);
		}

		/**
   * createFromGLSL
   * This function is used in order to build a GLSLShader from a glsl shader.
   * @param {Object} shader The target for the shader.
   * @return {GLSLShader} The GLSLShader built. 
   */

	}, {
		key: "createFromGLSL",
		value: function createFromGLSL(shader) {
			if (!((typeof shader === "undefined" ? "undefined" : _typeof(shader)) === "object" && {}.toString.call(shader) === "[object Object]")) throw new TypeError("shader must be an object.");

			return new GLSLShader(shader.vertexSrc, shader.fragmentSrc, shader.uniforms);
		}
	}]);

	return ShaderFactory;
}(AbstractShaderFactory);

;

module.exports = {
	AbstractShaderFactory: AbstractShaderFactory,
	ShaderFactory: ShaderFactory
};