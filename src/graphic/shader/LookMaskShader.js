"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| LookMaskShader
|--------------------------------------------------------------------------
|
| This file defines the LookMaskShader Object.
| This object build a PIXI.SpriteMaskFilter for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Shader.js"),
    Shader = _require.Shader;

var _require2 = require("./../look/Look.js"),
    Look = _require2.Look;

var LookMaskShader = function (_Shader) {
	_inherits(LookMaskShader, _Shader);

	/**
 * constructor
 * This function is used in order to build a LookMaskShader.
 * @param {Look}  look  The target for the shader.
 * @param {PIXI.SpriteMaskFilter}  look  The Pixi object to build the HandyPixi object.
 */
	function LookMaskShader(look) {
		_classCallCheck(this, LookMaskShader);

		var _this = _possibleConstructorReturn(this, (LookMaskShader.__proto__ || Object.getPrototypeOf(LookMaskShader)).call(this));

		if (look instanceof PIXI.SpriteMaskFilter) {
			_this._out = look;
		} else {
			if (!(look instanceof Look)) throw new TypeError("look must be a Look.");

			_this._out = new PIXI.SpriteMaskFilter(look.out);
		}
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.SpriteMaskFilter} The PIXI Object used by this object. 
 */


	_createClass(LookMaskShader, [{
		key: "clone",


		/**
   * clone
   * This function is used in order to clone this Shader
   * @return {Shader} A copy of this Shader.
   */
		value: function clone() {
			return new LookMaskShader(this._out);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}
	}]);

	return LookMaskShader;
}(Shader);

;

module.exports = {
	LookMaskShader: LookMaskShader
};