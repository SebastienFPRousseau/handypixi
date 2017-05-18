"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| CanvasElement
|--------------------------------------------------------------------------
|
| This file defines the CanvasElement Object.
| This object build a PIXI.CanvasRenderTarget for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var CanvasElement = function () {
	/**
 * constructor
 * This function is used in order to build a CanvasElement.
 * @param {Number}  width  The width for the newly created canvas.
 * @param {Number}  height  The height for the newly created canvas.
 * @param {Number}  resolution  The resolution / device pixel ratio of the canvas.
 * @param {PIXI.CanvasRenderTarget}   width  The Pixi object to build the HandyPixi object.
 */
	function CanvasElement(width, height) {
		var resolution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		_classCallCheck(this, CanvasElement);

		if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

		if ({}.toString.call(resolution) !== "[object Number]") throw new TypeError("resolution must be a number.");

		if (width instanceof PIXI.CanvasRenderTarget) {
			this._out = width;
		} else {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			this._out = new PIXI.CanvasRenderTarget(width, height, resolution);
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.CanvasRenderTarget} The PIXI Object used by this object. 
 */


	_createClass(CanvasElement, [{
		key: "destroy",


		/**
   * destroy
   * This function is used in order to destroy this canvas.
   */
		value: function destroy() {
			this._out.destroy();
		}

		/**
   * resize
   * This function is used in order to resize the canvas to the specified width and height.
   * @param {Number}  width  The new width of the canvas.
   * @param {Number}  height  The new height of the canvas.
   */

	}, {
		key: "resize",
		value: function resize(width, height) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this._out.resize(width, height);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * canvas
   * @getter
   * This function is a getter for the member canvas.
   * @return {HTMLCanvasElement} The Canvas object that belongs to this CanvasElement.
   */

	}, {
		key: "canvas",
		get: function get() {
			return this._out.canvas;
		}

		/**
   * context
   * @getter
   * This function is a getter for the member context.
   * @return {CanvasRenderingContext2D} A CanvasRenderingContext2D object representing a two-dimensional rendering context.
   */

	}, {
		key: "context",
		get: function get() {
			return this._out.context;
		}

		/**
   * height
   * @getter
   * This function is a getter for the member height.
   * @return {Number} The height of the canvas buffer in pixels.
   */

	}, {
		key: "height",
		get: function get() {
			return this._out.height;
		}

		/**
   * height
   * @setter
   * This function is a setter for the member height.
   * @param {Number}  height  The height of the canvas buffer in pixels.
   */
		,
		set: function set(height) {
			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this.resize(this.width, height);
			this._out.height = height;
		}

		/**
   * width
   * @getter
   * This function is a getter for the member width.
   * @return {Number} The width of the canvas buffer in pixels.
   */

	}, {
		key: "width",
		get: function get() {
			return this._out.width;
		}

		/**
   * width
   * @setter
   * This function is a setter for the member width.
   * @param {Number}  width  The width of the canvas buffer in pixels.
   */
		,
		set: function set(width) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			this.resize(width, this.height);
			this._out.width = width;
		}
	}]);

	return CanvasElement;
}();

;

module.exports = {
	CanvasElement: CanvasElement
};