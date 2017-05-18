"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Quad
|--------------------------------------------------------------------------
|
| This file defines the Quad Object.
| This object build a PIXI.Quad for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../../renderingSystem/system/WebGLEnvironment.js"),
    WebGLEnvironment = _require.WebGLEnvironment;

var _require2 = require("./../../graphic/shader/Shader.js"),
    Shader = _require2.Shader;

var _require3 = require("./../../displayObject/bounds/Bounds.js"),
    Bounds = _require3.Bounds;

var Quad = function () {
	/**
 * constructor
 * This function is used in order to build a Quad.
 * @param   {WebGLEnvironment}   environment         The gl environment for this quad to use.
 * @param   {PIXI.Quad}   environment         The Pixi object to build the HandyPixi object.
 */
	function Quad(environment) {
		_classCallCheck(this, Quad);

		if (environment instanceof PIXI.Quad) {
			this._out = environment;
		} else if (!(environment instanceof WebGLEnvironment)) {
			throw new TypeError("environment must be an WebGLEnvironment.");
		} else {
			this._out = new PIXI.Quad(environment.config.gl, {});
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Quad} The PIXI Object used by this object. 
 */


	_createClass(Quad, [{
		key: "initVao",


		/**
   * initVao
   * This function is used in order to initialize the vaos and use the shader.
   * @param {Shader}  shader  The shader to use.
   */
		value: function initVao(shader) {
			if (!(shader instanceof Shader)) throw new TypeError("shader must be a Shader.");

			this._out.initVao(shader.out);
		}

		/**
   * map
   * This function is used in order to map two Rectangle to the quad.
   * @param {Bounds} target  The target rectangle texture frame.
   * @param {Bounds} destination  The destination rectangle frame.
   */

	}, {
		key: "map",
		value: function map(target, destination) {
			if (!(target instanceof Bounds)) throw new TypeError("target must be a Bounds.");

			if (!(destination instanceof Bounds)) throw new TypeError("destination must be a Bounds.");

			this._out.map(target.out, destination.out);
		}

		/**
   * upload
   * This function is used in order to bind the buffer and upload data.
   */

	}, {
		key: "upload",
		value: function upload() {
			this._out.upload();
		}

		/**
   * destroy
   * This function is used in order to remove this Quad from WebGL.
   */

	}, {
		key: "destroy",
		value: function destroy() {
			this._out.destroy();
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
  * vertices
  * @getter
  * This function is a getter for the member vertices.
  * @return  {Number} An array of vertices. 
  */

	}, {
		key: "vertices",
		get: function get() {
			return this._out.vertices;
		}

		/**
  * vertices
  * @setter
  * This function is a setter for the member vertices.
  * @param  {Float32Array[8]} 	vertices 	 An array of vertices. 
  */
		,
		set: function set(vertices) {
			if (!(vertices instanceof Float32Array) || vertices.length != 8) throw new TypeError("vertices must be a Float32Array, its length must be eight.");

			this._out.vertices = vertices;
		}

		/**
  * uvs
  * @getter
  * This function is a getter for the member uvs.
  * @return  {Number} The Uvs of the quad. 
  */

	}, {
		key: "uvs",
		get: function get() {
			return this._out.uvs;
		}

		/**
  * uvs
  * @setter
  * This function is a setter for the member uvs.
  * @param  {Float32Array}	uvs 	 The Uvs of the quad. 
  */
		,
		set: function set(uvs) {
			if (!(uvs instanceof Float32Array) || uvs.length != 8) throw new TypeError("uvs must be an Float32Array, its length must be eight.");

			this._out.uvs = uvs;
		}
	}]);

	return Quad;
}();

;

module.exports = {
	Quad: Quad
};