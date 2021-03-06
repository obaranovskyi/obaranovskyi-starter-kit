(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.StarterKidLib = factory(global.React));
}(this, (function (React) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	var StarterKit = function StarterKit() {
	  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello Starter kit");
	};

	return StarterKit;

})));