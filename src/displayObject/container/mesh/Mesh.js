"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Mesh
|--------------------------------------------------------------------------
|
| This file defines the Mesh Object.
| This object build a PIXI.mesh.Mesh for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../Container.js"),
    Container = _require.Container;

var _require2 = require("./../../../support/geometry/Point.js"),
    Point = _require2.Point;

/**
 * DRAW_MODES
 * Various webgl draw modes.
 * @type {Object} 
 * @property {Number} TRIANGLE_MESH
 * @property {Number} TRIANGLES
 */


var DRAW_MODES = PIXI.mesh.Mesh.DRAW_MODES;

var Mesh = function (_Container) {
	_inherits(Mesh, _Container);

	_createClass(Mesh, null, [{
		key: "DRAW_MODES",

		/**
   * DRAW_MODES
   * @getter
   */
		get: function get() {
			return DRAW_MODES;
		}

		/**
   * constructor
   * This function is used in order to build a Mesh.
   * @param {Object}  options  Options for the build ( vertices, uvs, indices, drawModes)
   * @param {PIXI.mesh.Mesh}  options  The Pixi object to build the HandyPixi object.
   */

	}]);

	function Mesh() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Mesh);

		var _this = _possibleConstructorReturn(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).call(this));

		if (_this.constructor !== Mesh) return _possibleConstructorReturn(_this);

		if (options instanceof PIXI.mesh.Mesh) {
			_this._out = options;
		} else {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]")) throw new TypeError("options must be an object.");

			_this._out = new PIXI.mesh.Mesh(PIXI.Texture.EMPTY, options.vertices, options.uvs, options.indices, options.drawMode);
		}
		return _this;
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.mesh.Mesh} The PIXI Object used by this object. 
 */


	_createClass(Mesh, [{
		key: "containsPoint",


		/**
   * containsPoint
   * This function is used in order to check if a point is inside this mesh.
   * @param {Point}  point  The point to check.
   * @return {Boolean} Whether or not the mesh contains the point.
   */
		value: function containsPoint(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return this._out.containsPoint(point.out);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * blendMode
   * @getter
   * This function is a getter for the member blendMode.
   * @return {Number} The blend mode to be applied to the Mesh.
   */

	}, {
		key: "blendMode",
		get: function get() {
			return this._out.blendMode;
		}

		/**
   * blendMode
   * @setter
   * This function is a setter for the member blendMode.
   * @param {Number}  mode  The blend mode to be applied to the Mesh.
   */
		,
		set: function set(mode) {
			if ({}.toString.call(mode) !== "[object Number]") throw new TypeError("mode must be a number.");

			this._out.blendMode = mode;
		}

		/**
   * tint
   * @getter
   * This function is a getter for the member tint.
   * @return {Number} The tint applied to the mesh. This is a hex value.
   */

	}, {
		key: "tint",
		get: function get() {
			return this._out.tint;
		}

		/**
   * tint
   * @setter
   * This function is a setter for the member tint.
   * @param {Number}  tint  The tint applied to the mesh. This is a hex value.
   */
		,
		set: function set(tint) {
			if ({}.toString.call(tint) !== "[object Number]") throw new TypeError("tint must be a number.");

			this._out.tint = tint;
		}

		/**
   * pluginName
   * @getter
   * This function is a getter for the member pluginName.
   * @return {String} Name of plugin renderer that is responsible for rendering this element.
   */

	}, {
		key: "pluginName",
		get: function get() {
			return this._out.pluginName;
		}

		/**
   * pluginName
   * @setter
   * This function is a setter for the member pluginName.
   * @param {String}  plugin  Name of plugin renderer that is responsible for rendering this element.
   */
		,
		set: function set(plugin) {
			if (!(typeof plugin === "string" && {}.toString.call(plugin) === "[object String]")) throw new TypeError("plugin must be a string.");

			this._out.pluginName = plugin;
		}

		/**
   * vertices
   * @getter
   * This function is a getter for the member vertices.
   * @return {Float32Array} An array of vertices.
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
   * @param {Float32Array}  vertices  An array of vertices.
   */
		,
		set: function set(vertices) {
			if (!(vertices instanceof Float32Array)) throw new TypeError("vertices must be a Float32Array.");

			this._out.vertices = vertices;
		}

		/**
   * uvs
   * @getter
   * This function is a getter for the member uvs.
   * @return {Float32Array} The Uvs of the Mesh.
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
   * @param {Float32Array}  uvs  The Uvs of the Mesh.
   */
		,
		set: function set(uvs) {
			if (!(uvs instanceof Float32Array)) throw new TypeError("uvs must be a Float32Array.");

			this._out.uvs = uvs;
		}

		/**
  * canvasPadding
  * @getter
  * This function is a getter for the member canvasPadding.
  * @return {Number} Triangles in canvas mode are automatically antialiased.
  * Use this value to force triangles to overlap a bit with each other.
  */

	}, {
		key: "canvasPadding",
		get: function get() {
			return this._out.canvasPadding;
		}

		/**
   * canvasPadding
   * @setter
   * This function is a setter for the member canvasPadding.
   * @param {Number}  canvasPadding  Triangles in canvas mode are automatically antialiased.
   * Use this value to force triangles to overlap a bit with each other.
   */
		,
		set: function set(canvasPadding) {
			if ({}.toString.call(canvasPadding) !== "[object Number]") throw new TypeError("canvasPadding must be a number.");

			this._out.canvasPadding = canvasPadding;
		}

		/**
   * drawMode
   * @getter
   * This function is a getter for the member drawMode.
   * @return {Number} The way the Mesh should be drawn, can be any of the Mesh.DRAW_MODES.
   */

	}, {
		key: "drawMode",
		get: function get() {
			return this._out.drawMode;
		}

		/**
   * drawMode
   * @setter
   * This function is a setter for the member drawMode.
   * @param {Number}  drawMode  The way the Mesh should be drawn, can be any of the Mesh.DRAW_MODES.
   */
		,
		set: function set(drawMode) {
			if ({}.toString.call(drawMode) !== "[object Number]") throw new TypeError("drawMode must be a number.");

			this._out.drawMode = drawMode;
		}

		/**
   * dirty
   * @getter
   * This function is a getter for the member dirty.
   * @return {Number} Version of mesh uvs are dirty or not.
   */

	}, {
		key: "dirty",
		get: function get() {
			return this._out.dirty;
		}

		/**
   * dirty
   * @setter
   * This function is a setter for the member dirty.
   * @param {Number}  dirty  Version of mesh uvs are dirty or not.
   */
		,
		set: function set(dirty) {
			if ({}.toString.call(dirty) !== "[object Number]") throw new TypeError("dirty must be a number.");

			this._out.dirty = dirty;
		}

		/**
   * indexDirty
   * @getter
   * This function is a getter for the member indexDirty.
   * @return {Number} Version of mesh uvs are indexDirty or not.
   */

	}, {
		key: "indexDirty",
		get: function get() {
			return this._out.indexDirty;
		}

		/**
   * indexDirty
   * @setter
   * This function is a setter for the member indexDirty.
   * @param {Number}  indexDirty  Version of mesh uvs are dirty or not.
   */
		,
		set: function set(indexDirty) {
			if ({}.toString.call(indexDirty) !== "[object Number]") throw new TypeError("indexDirty must be a number.");

			this._out.indexDirty = indexDirty;
		}
	}]);

	return Mesh;
}(Container);

;

module.exports = {
	Mesh: Mesh
};