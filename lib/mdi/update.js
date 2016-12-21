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

var MdiUpdate = function (_React$Component) {
	_inherits(MdiUpdate, _React$Component);

	function MdiUpdate() {
		_classCallCheck(this, MdiUpdate);

		return _possibleConstructorReturn(this, (MdiUpdate.__proto__ || Object.getPrototypeOf(MdiUpdate)).apply(this, arguments));
	}

	_createClass(MdiUpdate, [{
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
							React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 21,10.12L 14.22,10.12L 16.96,7.3C 14.23,4.6 9.81,4.5 7.08,7.2C 4.35,9.91 4.35,14.28 7.08,16.99C 9.81,19.7 14.23,19.7 16.96,16.99C 18.32,15.65 19,14.08 19,12.1L 21,12.1C 21,14.08 20.12,16.65 18.36,18.39C 14.85,21.87 9.15,21.87 5.64,18.39C 2.14,14.92 2.11,9.28 5.62,5.81C 9.13,2.34 14.76,2.34 18.27,5.81L 21,3L 21,10.12 Z M 12.5,8L 12.5,12.25L 16,14.33L 15.28,15.54L 11,13L 11,8L 12.5,8 Z ' })
						)
					)
				)
			);
		}
	}]);

	return MdiUpdate;
}(React.Component);

exports.default = MdiUpdate;
module.exports = exports['default'];