'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiRoundedCorner = function (_React$Component) {
	_inherits(MdiRoundedCorner, _React$Component);

	function MdiRoundedCorner() {
		_classCallCheck(this, MdiRoundedCorner);

		return _possibleConstructorReturn(this, (MdiRoundedCorner.__proto__ || Object.getPrototypeOf(MdiRoundedCorner)).apply(this, arguments));
	}

	_createClass(MdiRoundedCorner, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				IconBase,
				_extends({ viewBox: '0 0 24.00 24.00' }, this.props),
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement(
							'defs',
							null,
							React.createElement('rect', { id: 'SVG_CLIPPER1_', x: '1.27157e-006', y: '0', width: '24', height: '24' })
						),
						React.createElement(
							'clipPath',
							{ id: 'SVG_CLIPPER2_' },
							React.createElement('use', { overflow: 'visible' })
						),
						React.createElement(
							'g',
							null,
							React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19,19L 21,19L 21,21L 19,21L 19,19 Z M 19,17L 21,17L 21,15L 19,15L 19,17 Z M 3,13L 5,13L 5,11L 3,11L 3,13 Z M 3,17L 5,17L 5,15L 3,15L 3,17 Z M 3,9L 5,9L 5,7L 3,7L 3,9 Z M 3,5L 5,5L 5,3L 3,3L 3,5 Z M 7,5L 9,5L 9,3L 7,3L 7,5 Z M 15,21L 17,21L 17,19L 15,19L 15,21 Z M 11,21L 13,21L 13,19L 11,19L 11,21 Z M 15,21L 17,21L 17,19L 15,19L 15,21 Z M 7,21L 9,21L 9,19L 7,19L 7,21 Z M 3,21L 5,21L 5,19L 3,19L 3,21 Z M 21,8C 21,5.24 18.76,3 16,3L 11,3L 11,5L 16,5C 17.65,5 19,6.35 19,8L 19,13L 21,13L 21,8 Z ' })
						)
					)
				)
			);
		}
	}]);

	return MdiRoundedCorner;
}(React.Component);

exports.default = MdiRoundedCorner;
module.exports = exports['default'];