"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Container
|--------------------------------------------------------------------------
|
| This file defines the Container Object.
| This object build a PIXI.Container for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./../../support/geometry/Matrix.js"),
    Matrix = _require.Matrix,
    TransformBase = _require.TransformBase;

var _require2 = require("./../../support/geometry/AbstractPoint.js"),
    AbstractPoint = _require2.AbstractPoint;

var _require3 = require("./../../support/geometry/ObservablePoint.js"),
    ObservablePoint = _require3.ObservablePoint;

var _require4 = require("./../../support/geometry/Point.js"),
    Point = _require4.Point;

var _require5 = require("./../bounds/Bounds.js"),
    Bounds = _require5.Bounds;

var Container = function () {
	/**
 * constructor
 * This function is used in order to build a Container.
 * @param {PIXI.Container}  pixiObj  The Pixi object to build the HandyPixi object.
 */
	function Container() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Container);

		if (pixiObj === null && this.constructor !== Container) return;

		if (pixiObj instanceof PIXI.Container) {
			this._out = pixiObj;
		} else {
			this._out = new PIXI.Container();
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Container} The PIXI Object used by this object. 
 */


	_createClass(Container, [{
		key: "cacheAsBitmap",


		/**
   * cacheAsBitmap
   * This function is used in order to cache this object as a bitmap. It takes a snap shot when the method is called.
   * Make sure that all your textures are preloaded before setting this to true !
   * @param {Boolean}  value  If the object must to be cached or not.
   */
		value: function cacheAsBitmap() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.cacheAsBitmap = value;
		}

		/**
  * renderable
  * This function is used in order to make renderable this object.
  * If not, the object will not be drawn but the updateTransform methods will still be called.
  * @param {Boolean}  value  If the object can be rendered or not.
  */

	}, {
		key: "renderable",
		value: function renderable() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.renderable = value;
		}

		/**
  * visible
  * This function is used in order to make visible this object.
  * If false the object will not be drawn, and the updateTransform function will not be called.
  * @param {Boolean}  value  If the object must be visible or not.
  */

	}, {
		key: "visible",
		value: function visible() {
			var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if ({}.toString.call(value) !== "[object Boolean]") throw new TypeError("value must be a boolean.");

			this._out.visible = value;
		}

		/**
   * destroy
   * This function is used in order to destroy the object and its listeners.
   * @param {Object}  options  Options parameter to destroy dependencies. 
   * @param {Boolean}  options  A boolean will act as if all options have been set to that value.
   */

	}, {
		key: "destroy",
		value: function destroy(options) {
			if (!((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && {}.toString.call(options) === "[object Object]") && {}.toString.call(options) !== "[object Boolean]") throw new TypeError("options must be an object or a boolean.");

			this._out.destroy(options);
		}

		/**
   * updateTransform
   * This function is used in order to update the object transform for rendering.
   */

	}, {
		key: "updateTransform",
		value: function updateTransform() {
			this._out.updateTransform();
		}

		/**
   * toGlobal
   * This function is used in order to calculate the global position of this object
   * @param {Point}  position  The world origin to calculate from.
   * @param {Boolean}  skipUpdate  Should we skip the update transform. 
   * @return {Point} A point object representing the position of this object.
   */

	}, {
		key: "toGlobal",
		value: function toGlobal(position) {
			var skipUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if (!(position instanceof Point)) throw new TypeError("position must be a Point.");

			if ({}.toString.call(skipUpdate) !== "[object Boolean]") throw new TypeError("skipUpdate must be a boolean.");

			return new Point(this._out.toGlobal(position.out, undefined, skipUpdate));
		}

		/**
   * toLocal
   * This function is used in order to calculate the local position of this object.
   * @param {Point}  position  The world origin to calculate from.
   * @param {Container}  from  The object to calculate the global position from.
   * @param {Boolean}  skipUpdate  Should we skip the update transform. 
   * @return {Point} A point object representing the position of this object.
   */

	}, {
		key: "toLocal",
		value: function toLocal(position) {
			var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var skipUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var point = void 0;

			if (!(position instanceof Point)) throw new TypeError("position must be a Point.");

			if ({}.toString.call(skipUpdate) !== "[object Boolean]") throw new TypeError("skipUpdate must be a boolean.");

			if (from === null) {
				point = new Point(this._out.toLocal(position.out, undefined, undefined, skipUpdate));
			} else {
				if (!(from instanceof Container)) throw new TypeError("from must be a Container.");

				point = new Point(this._out.toLocal(position.out, from.out, undefined, skipUpdate));
			}

			return point;
		}

		/**
   * setTransform
   * This function is used in order to set all transform properties at once.
   * @param {Object}  transform Store the properties to change. A missing property will be reset by default.
   */

	}, {
		key: "setTransform",
		value: function setTransform(transform) {
			if (!((typeof transform === "undefined" ? "undefined" : _typeof(transform)) === "object" && {}.toString.call(transform) === "[object Object]")) throw new TypeError("transform must be an object.");

			this._out.setTransform(transform.x, transform.y, transform.scaleX, transform.scaleY, transform.rotation, transform.skewX, transform.skewY, transform.pivotX, transform.pivotY);
		}

		/**
   * calculateBounds
   * This function is used in order to recalculate the bounds of the container.
   */

	}, {
		key: "calculateBounds",
		value: function calculateBounds() {
			this._out.calculateBounds();
		}

		/**
   * getBounds
   * This function is used in order to retrieve the bounds of this object.
   * @param {Boolean}  skipUpdate  Stop the transforms of the scene from being updated or not.
   * This means the calculation returned MAY be out of date BUT will give you a nice performance boost.
   * @return {Bounds} The resulting area.
   */

	}, {
		key: "getBounds",
		value: function getBounds() {
			var skipUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			if ({}.toString.call(skipUpdate) !== "[object Boolean]") throw new TypeError("skipUpdate must be a boolean.");

			return new Bounds(this._out.getBounds(skipUpdate));
		}

		/**
  * getLocalBounds
  * This function is used in order to retrieve the local bounds of this object.
  * @return {Bounds} The resulting area.
  */

	}, {
		key: "getLocalBounds",
		value: function getLocalBounds() {
			return new Bounds(this._out.getLocalBounds());
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * alpha
   * @getter
   * This function is a getter for the member alpha.
   * @return {Number} The opacity of the object.
   */

	}, {
		key: "alpha",
		get: function get() {
			return this._out.alpha;
		}

		/**
   * alpha
   * @setter
   * This function is a setter for the member alpha.
   * @param {Number}  alpha  The opacity of the object.
   */
		,
		set: function set(alpha) {
			if ({}.toString.call(alpha) !== "[object Number]") throw new TypeError("alpha must be a number.");

			this._out.alpha = alpha;
		}

		/**
   * filterArea
   * @getter
   * This function is a getter for the member filterArea.
   * @return {Bounds} The area the filter is applied to. 
   * This is used as more of an optimisation rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
   * Also works as an interaction mask.
   */

	}, {
		key: "filterArea",
		get: function get() {
			return new Bounds(this._out.filterArea);
		}

		/**
   * filterArea
   * @setter
   * This function is a setter for the member filterArea.
   * @param {Bounds}  filterArea  The area the filter is applied to. 
   * This is used as more of an optimisation rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
   * Also works as an interaction mask.
   */
		,
		set: function set(filterArea) {
			if (!(filterArea instanceof Bounds)) throw new TypeError("filterArea must be a Bounds.");

			this._out.filterArea = filterArea.out;
		}

		/**
   * localTransform
   * @getter
   * This function is a getter for the member localTransform.
   * @return {Matrix} Current transform of the object based on local factors: position, scale, other stuff...
   */

	}, {
		key: "localTransform",
		get: function get() {
			return new Matrix(this._out.localTransform);
		}

		/**
   * pivot
   * @getter
   * This function is a getter for the member pivot.
   * @return {AbstractPoint} The pivot point of the displayObject that it rotates around.
   */

	}, {
		key: "pivot",
		get: function get() {
			var pivot = null;

			if (this._out.pivot.constructor === PIXI.Point) {
				pivot = new Point(this._out.pivot);
			} else if (this._out.pivot.constructor === PIXI.ObservablePoint) {
				pivot = new ObservablePoint(this._out.pivot);
			}

			return pivot;
		}

		/**
   * pivot
   * @setter
   * This function is a setter for the member pivot.
   * @param {AbstractPoint}  pivot  The pivot point of the displayObject that it rotates around.
   */
		,
		set: function set(pivot) {
			if (!(pivot instanceof AbstractPoint)) throw new TypeError("pivot must be an AbstractPoint.");

			this._out.pivot = pivot.out;
		}

		/**
   * position
   * @getter
   * This function is a getter for the member position.
   * @return {AbstractPoint} The coordinate of the object relative to the local coordinates of the parent.
   */

	}, {
		key: "position",
		get: function get() {
			var position = null;

			if (this._out.position.constructor === PIXI.Point) {
				position = new Point(this._out.position);
			} else if (this._out.position.constructor === PIXI.ObservablePoint) {
				position = new ObservablePoint(this._out.position);
			}

			return position;
		}

		/**
   * position
   * @setter
   * This function is a setter for the member position.
   * @param {AbstractPoint}  position  The coordinate of the object relative to the local coordinates of the parent.
   */
		,
		set: function set(position) {
			if (!(position instanceof AbstractPoint)) throw new TypeError("position must be a AbstractPoint.");

			this._out.position = position.out;
		}

		/**
   * scale
   * @getter
   * This function is a getter for the member scale.
   * @return {AbstractPoint} The scale factor of the object.
   */

	}, {
		key: "scale",
		get: function get() {
			var scale = null;

			if (this._out.scale.constructor === PIXI.Point) {
				scale = new Point(this._out.scale);
			} else if (this._out.scale.constructor === PIXI.ObservablePoint) {
				scale = new ObservablePoint(this._out.scale);
			}

			return scale;
		}

		/**
   * scale
   * @setter
   * This function is a setter for the member scale.
   * @param {AbstractPoint}  scale  The scale factor of the object.
   */
		,
		set: function set(scale) {
			if (!(scale instanceof AbstractPoint)) throw new TypeError("scale must be a AbstractPoint.");

			this._out.scale = scale.out;
		}

		/**
   * skew
   * @getter
   * This function is a getter for the member skew.
   * @return {ObservablePoint} The skew factor for the object in radians.
   */

	}, {
		key: "skew",
		get: function get() {
			return new ObservablePoint(this._out.skew);
		}

		/**
   * skew
   * @setter
   * This function is a setter for the member skew.
   * @param {ObservablePoint}  skew  The skew factor for the object in radians.
   */
		,
		set: function set(skew) {
			if (!(skew instanceof ObservablePoint)) throw new TypeError("skew must be a ObservablePoint.");

			this._out.skew = skew.out;
		}

		/**
   * rotation
   * @getter
   * This function is a getter for the member rotation.
   * @return {Number} The rotation of the object in radians.
   */

	}, {
		key: "rotation",
		get: function get() {
			return this._out.rotation;
		}

		/**
   * rotation
   * @setter
   * This function is a setter for the member rotation.
   * @param {Number}  rotation  The rotation of the object in radians.
   */
		,
		set: function set(rotation) {
			if ({}.toString.call(rotation) !== "[object Number]") throw new TypeError("rotation must be a number.");

			this._out.rotation = rotation;
		}

		/**
   * transform
   * @getter
   * This function is a getter for the member transform.
   * @return {TransformBase} World transform and local transform of this object.
   */

	}, {
		key: "transform",
		get: function get() {
			return new TransformBase(this._out.transform);
		}

		/**
   * worldAlpha
   * @getter
   * This function is a getter for the member worldAlpha.
   * @return {Number} The multiplied alpha of the object.
   */

	}, {
		key: "worldAlpha",
		get: function get() {
			return this._out.worldAlpha;
		}

		/**
   * worldTransform
   * @getter
   * This function is a getter for the member worldTransform.
   * @return {Matrix} Current transform of the object based on world (parent) factors.
   */

	}, {
		key: "worldTransform",
		get: function get() {
			return new Matrix(this._out.worldTransform);
		}

		/**
   * worldVisible
   * @getter
   * This function is a getter for the member worldVisible.
   * @return {Boolean} If the object is globally visible.
   */

	}, {
		key: "worldVisible",
		get: function get() {
			return this._out.worldVisible;
		}

		/**
   * height
   * @getter
   * This function is a getter for the member height.
   * @return {Number} The height of the Container.
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
   * @param {Number}  height  The height of the Container, setting this will modify the scale to achieve the value set.
   */
		,
		set: function set(height) {
			if ({}.toString.call(height) !== "[object Number]") throw new TypeError("height must be a number.");

			this._out.height = height;
		}

		/**
   * width
   * @getter
   * This function is a getter for the member width.
   * @return {Number} The width of the Container.
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
   * @param {Number}  width  The width of the Container, setting this will modify the scale to achieve the value set.
   */
		,
		set: function set(width) {
			if ({}.toString.call(width) !== "[object Number]") throw new TypeError("width must be a number.");

			this._out.width = width;
		}
	}]);

	return Container;
}();

;

module.exports = {
	Container: Container
};