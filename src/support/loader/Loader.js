"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
|--------------------------------------------------------------------------
| Loader
|--------------------------------------------------------------------------
|
| This file defines the Loader Object.
| This object build a PIXI.loaders.Loader for HandyPixi.
| This package is based on Pixi.js and should not be externalized.
| http://www.pixijs.com/
|
*/

/**
* Note: This class inherits from Pixi.loaders.Loader because this base class itself depends on an external library we should not reinclude.
* @see http://pixijs.download/release/docs/PIXI.loaders.Loader.html
* @see https://github.com/englercj/resource-loader
*/

var Loader = function (_PIXI$loaders$Loader) {
	_inherits(Loader, _PIXI$loaders$Loader);

	/**
  * constructor
  * This function is used in order to build a Loader.
  * @param {String}  baseUrl  The base url for all resources loaded by this loader.
  * @param {Number}  concurrency  The number of resources to load concurrently.
  */
	function Loader() {
		var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
		var concurrency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

		_classCallCheck(this, Loader);

		if (!(typeof baseUrl === "string" && {}.toString.call(baseUrl) === "[object String]")) throw new TypeError("baseUrl must be a string.");

		if ({}.toString.call(concurrency) !== "[object Number]") throw new TypeError("concurrency must be a number.");

		return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, baseUrl, concurrency));
	}

	/**
  * getPremade
  * This function is used in order to get the premade instance of the loader.
  * @return {Loader}
  */


	_createClass(Loader, null, [{
		key: "getPremade",
		value: function getPremade() {
			return PIXI.loader;
		}
	}]);

	return Loader;
}(PIXI.loaders.Loader);

;

module.exports = {
	Loader: Loader
};