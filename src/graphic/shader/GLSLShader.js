"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| GLSLShader
|--------------------------------------------------------------------------
|
| This file defines the GLSLShader Object.
| This object build a PIXI.Filter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Shader.js"),
    Shader = _require.Shader;

var GLSLShader = function (_Shader) {
	_inherits(GLSLShader, _Shader);

	/**
 * constructor
 * This function is used in order to build a GLSLShader.
 * @param {String}  vertexSrc  The source of the certex shader.
 * @param {String}  fragmentSrc  The source of the fragment shader.
 * @param {Object}  uniforms  Custom uniforms to use to augment the built-in ones.
 * @param {PIXI.Filter}  vertexSrc  The Pixi object to build the HandyPixi object.
 */
	function GLSLShader(vertexSrc, fragmentSrc) {
		var uniforms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		_classCallCheck(this, GLSLShader);

		if (!(typeof fragmentSrc === "string" && {}.toString.call(fragmentSrc) === "[object String]")) throw new TypeError("fragmentSrc must be a string.");

		if (!((typeof uniforms === "undefined" ? "undefined" : _typeof(uniforms)) === "object" && {}.toString.call(uniforms) === "[object Object]")) throw new TypeError("uniforms must be an object.");

		var _this = _possibleConstructorReturn(this, (GLSLShader.__proto__ || Object.getPrototypeOf(GLSLShader)).call(this));

		if (vertexSrc instanceof PIXI.Filter) {
			_this._out = vertexSrc;
		} else {
			if (!(typeof vertexSrc === "string" && {}.toString.call(vertexSrc) === "[object String]")) throw new TypeError("vertexSrc must be a string.");

			_this._out = new PIXI.Filter(vertexSrc, fragmentSrc, uniforms);
		}
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Filter} The PIXI Object used by this object. 
 */


	_createClass(GLSLShader, [{
		key: "clone",


		/**
   * clone
   * This function is used in order to clone this Shader
   * @return {Shader} A copy of this Shader.
   */
		value: function clone() {
			return new GLSLShader(this._out);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}
	}]);

	return GLSLShader;
}(Shader);

;

module.exports = {
	GLSLShader: GLSLShader
};