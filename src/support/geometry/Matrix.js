"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
|--------------------------------------------------------------------------
| Matrix
|--------------------------------------------------------------------------
|
| This file defines the Matrix Object.
| This object build a PIXI.Matrix for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var _require = require("./Point.js"),
    Point = _require.Point;

var _require2 = require("./ObservablePoint.js"),
    ObservablePoint = _require2.ObservablePoint;

var Matrix = function () {
	/**
 * constructor
 * This function is used in order to build a Matrix.
 * @param   {Number[4]}   params         X scale, y skew, x skew, y scale.
 * @param   {Number}   tx         X translation.
 * @param   {Number}   ty         Y translation.
 * @param   {PIXI.Matrix}   params         The Pixi object to build the HandyPixi object.
 */
	function Matrix() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 0, 0, 1];
		var tx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var ty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		_classCallCheck(this, Matrix);

		if ({}.toString.call(tx) !== "[object Number]") throw new TypeError("tx must be a number.");

		if ({}.toString.call(ty) !== "[object Number]") throw new TypeError("ty must be a number.");

		if (params instanceof PIXI.Matrix) {
			this._out = params;
		} else if (!Array.isArray(params) || params.length != 4) {
			throw new TypeError("params must be an array, its length must be four.");
		} else {
			for (var i = 0, l = params.length; i < l; i++) {
				if ({}.toString.call(params[i]) !== "[object Number]") throw new TypeError("params must be an array of numbers.");
			}

			this._out = new PIXI.Matrix(params[0], params[1], params[2], params[3], tx, ty);
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.Matrix} The PIXI Object used by this object. 
 */


	_createClass(Matrix, [{
		key: "append",


		/**
   * append
   * This function is used in order to append the given Matrix to this Matrix.
   * @param {Matrix}	matrix 	The matrix to append.
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */
		value: function append(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._out.append(matrix.out);
			return this;
		}

		/**
   * apply
   * This function is used in order to apply this Matrix to a point.
   * @param {Point}	point  The origin.
   * @return {Point} The new point, transformed through this matrix.
   */

	}, {
		key: "apply",
		value: function apply(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return new Point(this._out.apply(point.out));
		}

		/**
   * applyInverse
   * This function is used in order to inverse-apply this Matrix to a point.
   * @param {Point}	point  The origin.
   * @return {Point} The new point, inverse-transformed through this matrix.
   */

	}, {
		key: "applyInverse",
		value: function applyInverse(point) {
			if (!(point instanceof Point)) throw new TypeError("point must be a Point.");

			return new Point(this._out.applyInverse(point.out));
		}

		/**
  * clone
  * This function is used in order to clone this Matrix.
  * @return {Matrix} A copy of this Matrix. 
  */

	}, {
		key: "clone",
		value: function clone() {
			return new Matrix(this._out.clone());
		}

		/**
  * copy
  * This function is used in order to copy this matrix into the given Matrix.
  * @param {Matrix} 	point 	 The Matrix to change. 
  */

	}, {
		key: "copy",
		value: function copy(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._out.copy(matrix.out);
		}

		/**
   * decompose
   * This function is used in order to decompose the matrix into a transform. 
   * @param {Transform}  transform  The transform to apply the properties to.
   * @param {TransformStatic}  transform  The transform to apply the properties to.
   * @return {Transform|TransformStatic} The transform with the newly applied properties.
   * 
   */

	}, {
		key: "decompose",
		value: function decompose(transform) {
			if (transform instanceof Transform) {
				transform = new Transform(this._out.decompose(transform.out));
			} else if (transform instanceof TransformStatic) {
				transform = new TransformStatic(this._out.decompose(transform.out));
			} else {
				throw new TypeError("transform must be a Transform or a TransformStatic.");
			}

			return transform;
		}

		/**
   * fromArray
   * This function is used in order to build a matrix from an array. Care of the order :
   * | array[0] | array[1] | array[2]|
   * | array[3] | array[4] | array[5]|
   * | 0        | 0        | 1       |
   * @param {Number[6]} [varname] [description]
   */

	}, {
		key: "fromArray",
		value: function fromArray(array) {
			if (!Array.isArray(array) || array.length != 6) {
				throw new TypeError("array must be an Array, its length must be six.");
			} else {
				for (var i = 0, l = array.length; i < l; i++) {
					if ({}.toString.call(array[i]) !== "[object Number]") throw new TypeError("array must be an Array of Numbers.");
				}

				this._out.fromArray(array);
			}
		}

		/**
   * identity
   * This function is used in order to reset this Matrix to an identity matrix.
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "identity",
		value: function identity() {
			this._out.identity();
			return this;
		}

		/**
   * invert
   * This function is used in order to invert this Matrix
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "invert",
		value: function invert() {
			this._out.invert();
			return this;
		}

		/**
   * prepend
   * This function is used in order to prepend the given Matrix to this Matrix.
   * @param {Matrix}	matrix 	The matrix to prepend.
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "prepend",
		value: function prepend(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._out.prepend(matrix.out);
			return this;
		}

		/**
   * rotate
   * This function is used in order to apply a rotation transformation to this matrix.
   * @param {Number} angle The angle in radians.
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "rotate",
		value: function rotate(angle) {
			if ({}.toString.call(angle) !== "[object Number]") throw new TypeError("angle must be a number.");

			this._out.rotate(angle);
			return this;
		}

		/**
   * scale
   * This function is used in order to apply a scale transformation to this matrix.
   * @param {Number} x The amount to scale horizontally
   * @param {Number} y The amount to scale vertically 
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "scale",
		value: function scale(x, y) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._out.scale(x, y);
			return this;
		}

		/**
   * set
   * This function is used in order to set matrix properties. 
   * @param   {Number[4]}   params         X scale, y skew, x skew, y scale.
   * @param   {Number}   tx         X translation.
   * @param   {Number}   ty         Y translation.
   * @param   {PIXI.Matrix}   params         The Pixi object to build the HandyPixi object.
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "set",
		value: function set() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 0, 0, 1];
			var tx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var ty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			if ({}.toString.call(tx) !== "[object Number]") throw new TypeError("tx must be a number.");

			if ({}.toString.call(ty) !== "[object Number]") throw new TypeError("ty must be a number.");

			if (!Array.isArray(params) || params.length != 4) throw new TypeError("params must be an array, its length must be four.");

			for (var i = 0, l = params.length; i < l; i++) {
				if ({}.toString.call(params[i]) !== "[object Number]") throw new TypeError("params must be an array of numbers.");
			}

			this._out.set(params[0], params[1], params[2], params[3], tx, ty);

			return this;
		}

		/**
   * setTransform
   * This function is used in order to sets the matrix based on all available properties.
   * @param {Object} transform Contains properties x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY to set the matrix.
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "setTransform",
		value: function setTransform(transform) {
			if ((typeof transform === "undefined" ? "undefined" : _typeof(transform)) !== "object" && {}.toString.call(transform) !== "[object Object]") throw new TypeError("transform must be an Object.");

			if ({}.toString.call(transform.x) !== "[object Number]") throw new TypeError("transform.x must exist and be a number.");

			if ({}.toString.call(transform.y) !== "[object Number]") throw new TypeError("transform.y must exist and be a number.");

			if ({}.toString.call(transform.pivotX) !== "[object Number]") throw new TypeError("transform.pivotX must exist and be a number.");

			if ({}.toString.call(transform.pivotY) !== "[object Number]") throw new TypeError("transform.pivotY must exist and be a number.");

			if ({}.toString.call(transform.scaleX) !== "[object Number]") throw new TypeError("transform.scaleX must exist and be a number.");

			if ({}.toString.call(transform.scaleY) !== "[object Number]") throw new TypeError("transform.scaleY must exist and be a number.");

			if ({}.toString.call(transform.skewX) !== "[object Number]") throw new TypeError("transform.skewX must exist and be a number.");

			if ({}.toString.call(transform.skewY) !== "[object Number]") throw new TypeError("transform.skewY must exist and be a number.");

			if ({}.toString.call(transform.rotation) !== "[object Number]") throw new TypeError("transform.rotation must exist and be a number.");

			this._out.setTransform(transform.x, transform.y, transform.pivotX, transform.pivotY, transform.scaleX, transform.scaleY, transform.rotation, transform.skewX, transform.skewY);
			return this;
		}

		/**
   * toArray
   * This function is used in order to create an array from this Matrix.
   * @param {Boolean} transpose Whether we need to transpose the matrix or not.
   * @param {Float32Array[9]} out If provided the array will be assigned to out.
   * @return {Number[9]} The newly created array which contains the matrix.
   */

	}, {
		key: "toArray",
		value: function toArray(transpose) {
			var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			if ({}.toString.call(transpose) !== "[object Boolean]") throw new TypeError("transpose must be a Boolean.");

			out = this._out.toArray(transpose);
			return out;
		}

		/**
   * translate
   * This function is used in order to apply a translate transformation to this matrix.
   * @param {Number} x How much to translate horizontally
   * @param {Number} y How much to translate vertically 
   * @return {Matrix} This Matrix. Good for chaining method calls.
   */

	}, {
		key: "translate",
		value: function translate(x, y) {
			if ({}.toString.call(x) !== "[object Number]") throw new TypeError("x must be a number.");

			if ({}.toString.call(y) !== "[object Number]") throw new TypeError("y must be a number.");

			this._out.translate(x, y);
			return this;
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}
	}]);

	return Matrix;
}();

;

/*
|--------------------------------------------------------------------------
| TransformBase
|--------------------------------------------------------------------------
|
| This file defines the TransformBase Object.
| This object build a PIXI.TransformBase for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var TransformBase = function () {
	/**
  * constructor
  * This function is used in order to build a TransformBase.
  * @param   {PIXI.TransformBase}   pixiObj     The Pixi object to build the HandyPixi object.
  */
	function TransformBase() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, TransformBase);

		if (this.constructor !== TransformBase) return;

		if (pixiObj instanceof PIXI.TransformBase) {
			this._out = pixiObj;
		} else {
			this._out = new PIXI.TransformBase();
		}
	}

	/**
 * out
 * @getter
 * This function is a getter for the member _out.
 * @return  {PIXI.TransformBase} The PIXI Object used by this object. 
 */


	_createClass(TransformBase, [{
		key: "updateLocalTransform",


		/**
   * updateLocalTransform
   * TransformBase does not have decomposition, so this function wont do anything.
   */
		value: function updateLocalTransform() {
			this._out.updateLocalTransform();
		}

		/**
   * updateTransform
   * This function is used in order to apply the parent's transform.
   * @param {TransformBase}  parent  The transform of the parent of this object.
   */

	}, {
		key: "updateTransform",
		value: function updateTransform(parent) {
			if (!(parent instanceof TransformBase)) throw new TypeError("parent must be a TransformBase.");

			this._out.updateTransform(parent.out);
		}
	}, {
		key: "out",
		get: function get() {
			return this._out;
		}

		/**
   * localTransform
   * @getter
   * This function is a getter for the member localTransform.
   * @return {Matrix} The local matrix transform.
   */

	}, {
		key: "localTransform",
		get: function get() {
			return new Matrix(this._out.localTransform);
		}

		/**
   * localTransform
   * @setter
   * This function is a setter for the member localTransform.
   * @param {Matrix}  matrix  The local matrix transform.
   */
		,
		set: function set(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._out.localTransform = matrix.out;
		}

		/**
   * worldTransform
   * @getter
   * This function is a getter for the member worldTransform.
   * @return {Matrix} The global matrix transform.
   */

	}, {
		key: "worldTransform",
		get: function get() {
			return new Matrix(this._out.worldTransform);
		}

		/**
   * worldTransform
   * @setter
   * This function is a setter for the member worldTransform.
   * @param {Matrix}  matrix  The global matrix transform.
   */
		,
		set: function set(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._out.worldTransform = matrix.out;
		}
	}]);

	return TransformBase;
}();

;

/*
|--------------------------------------------------------------------------
| Transform
|--------------------------------------------------------------------------
|
| This file defines the Transform Object.
| This object build a PIXI.Transform for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var Transform = function (_TransformBase) {
	_inherits(Transform, _TransformBase);

	/**
  * constructor
  * This function is used in order to build a Transform.
  * @param   {PIXI.Transform}   pixiObj     The Pixi object to build the HandyPixi object.
  */
	function Transform() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Transform);

		var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this));

		if (pixiObj instanceof PIXI.Transform) {
			_this._out = pixiObj;
		} else {
			_this._out = new PIXI.Transform();
		}
		return _this;
	}

	/**
  * pivot
  * @getter
  * This function is a getter for the member pivot.
  * @return {Point} The pivot point of the displayObject that it rotates around.
  */


	_createClass(Transform, [{
		key: "setFromMatrix",


		/**
   * setFromMatrix
   * This function is used in order to sets the transforms properties based on a matrix.
   * @param {Matrix}  matrix  The matrix to decompose.
   */
		value: function setFromMatrix(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._out.setFromMatrix(matrix.out);
		}

		/**
   * updateTransform
   * This function is used in order to apply the parent's transform.
   * @param {Transform}  parent  The transform of the parent of this object.
   */

	}, {
		key: "updateTransform",
		value: function updateTransform(parent) {
			if (!(parent instanceof Transform)) throw new TypeError("parent must be a Transform.");

			this._out.updateTransform(parent.out);
		}
	}, {
		key: "pivot",
		get: function get() {
			return new Point(this._out.pivot);
		}

		/**
   * pivot
   * @setter
   * This function is a setter for the member pivot.
   * @param {Point}  pivot  The pivot point of the displayObject that it rotates around.
   */
		,
		set: function set(pivot) {
			if (!(pivot instanceof Point)) throw new TypeError("pivot must be a Point.");

			this._out.pivot = pivot.out;
		}

		/**
   * position
   * @getter
   * This function is a getter for the member position.
   * @return {Point} The coordinate of the object relative to the local coordinates of the parent.
   */

	}, {
		key: "position",
		get: function get() {
			return new Point(this._out.position);
		}

		/**
   * position
   * @setter
   * This function is a setter for the member position.
   * @param {Point}  position  The coordinate of the object relative to the local coordinates of the parent.
   */
		,
		set: function set(position) {
			if (!(position instanceof Point)) throw new TypeError("position must be a Point.");

			this._out.position = position.out;
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
   * scale
   * @getter
   * This function is a getter for the member scale.
   * @return {Point} The scale factor of the object.
   */

	}, {
		key: "scale",
		get: function get() {
			return new Point(this._out.scale);
		}

		/**
   * scale
   * @setter
   * This function is a setter for the member scale.
   * @param {Point}  scale  The scale factor of the object.
   */
		,
		set: function set(scale) {
			if (!(scale instanceof Point)) throw new TypeError("scale must be a Point.");

			this._out.scale = scale.out;
		}

		/**
   * skew
   * @getter
   * This function is a getter for the member skew.
   * @return {ObservablePoint} The skew amount, on the x and y axis.
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
   * @param {ObservablePoint}  skew   The skew amount, on the x and y axis.
   */
		,
		set: function set(skew) {
			if (!(skew instanceof ObservablePoint)) throw new TypeError("skew must be an ObservablePoint.");

			this._out.skew = skew.out;
		}
	}]);

	return Transform;
}(TransformBase);

;

/*
|--------------------------------------------------------------------------
| TransformStatic
|--------------------------------------------------------------------------
|
| This file defines the TransformStatic Object.
| This object build a PIXI.TransformStatic for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

var TransformStatic = function (_TransformBase2) {
	_inherits(TransformStatic, _TransformBase2);

	/**
  * constructor
  * This function is used in order to build a TransformStatic.
  * @param   {PIXI.TransformStatic}   pixiObj     The Pixi object to build the HandyPixi object.
  */
	function TransformStatic() {
		var pixiObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, TransformStatic);

		var _this2 = _possibleConstructorReturn(this, (TransformStatic.__proto__ || Object.getPrototypeOf(TransformStatic)).call(this));

		if (pixiObj instanceof PIXI.TransformStatic) {
			_this2._out = pixiObj;
		} else {
			_this2._out = new PIXI.TransformStatic();
		}
		return _this2;
	}

	/**
  * pivot
  * @getter
  * This function is a getter for the member pivot.
  * @return {ObservablePoint} The pivot point of the displayObject that it rotates around.
  */


	_createClass(TransformStatic, [{
		key: "setFromMatrix",


		/**
   * setFromMatrix
   * This function is used in order to sets the transforms properties based on a matrix.
   * @param {Matrix}  matrix  The matrix to decompose.
   */
		value: function setFromMatrix(matrix) {
			if (!(matrix instanceof Matrix)) throw new TypeError("matrix must be a Matrix.");

			this._out.setFromMatrix(matrix.out);
		}

		/**
   * updateTransform
   * This function is used in order to apply the parent's transform.
   * @param {Transform}  parent  The transform of the parent of this object.
   */

	}, {
		key: "updateTransform",
		value: function updateTransform(parent) {
			if (!(parent instanceof Transform)) throw new TypeError("parent must be a Transform.");

			this._out.updateTransform(parent.out);
		}
	}, {
		key: "pivot",
		get: function get() {
			return new ObservablePoint(this._out.pivot);
		}

		/**
   * pivot
   * @setter
   * This function is a setter for the member pivot.
   * @param {ObservablePoint}  pivot  The pivot point of the displayObject that it rotates around.
   */
		,
		set: function set(pivot) {
			if (!(pivot instanceof ObservablePoint)) throw new TypeError("pivot must be an ObservablePoint.");

			this._out.pivot = pivot.out;
		}

		/**
   * position
   * @getter
   * This function is a getter for the member position.
   * @return {ObservablePoint} The coordinate of the object relative to the local coordinates of the parent.
   */

	}, {
		key: "position",
		get: function get() {
			return new ObservablePoint(this._out.position);
		}

		/**
   * position
   * @setter
   * This function is a setter for the member position.
   * @param {ObservablePoint}  position  The coordinate of the object relative to the local coordinates of the parent.
   */
		,
		set: function set(position) {
			if (!(position instanceof ObservablePoint)) throw new TypeError("position must be an ObservablePoint.");

			this._out.position = position.out;
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
   * scale
   * @getter
   * This function is a getter for the member scale.
   * @return {ObservablePoint} The scale factor of the object.
   */

	}, {
		key: "scale",
		get: function get() {
			return new ObservablePoint(this._out.scale);
		}

		/**
   * scale
   * @setter
   * This function is a setter for the member scale.
   * @param {ObservablePoint}  scale  The scale factor of the object.
   */
		,
		set: function set(scale) {
			if (!(scale instanceof Point)) throw new TypeError("scale must be an ObservablePoint.");

			this._out.scale = scale.out;
		}

		/**
   * skew
   * @getter
   * This function is a getter for the member skew.
   * @return {ObservablePoint} The skew amount, on the x and y axis.
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
   * @param {ObservablePoint}  skew   The skew amount, on the x and y axis.
   */
		,
		set: function set(skew) {
			if (!(skew instanceof ObservablePoint)) throw new TypeError("skew must be an ObservablePoint.");

			this._out.skew = skew.out;
		}
	}]);

	return TransformStatic;
}(TransformBase);

;

module.exports = {
	TransformStatic: TransformStatic,
	Transform: Transform,
	TransformBase: TransformBase,
	Matrix: Matrix
};