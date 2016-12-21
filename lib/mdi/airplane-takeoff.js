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

var MdiAirplaneTakeoff = function (_React$Component) {
	_inherits(MdiAirplaneTakeoff, _React$Component);

	function MdiAirplaneTakeoff() {
		_classCallCheck(this, MdiAirplaneTakeoff);

		return _possibleConstructorReturn(this, (MdiAirplaneTakeoff.__proto__ || Object.getPrototypeOf(MdiAirplaneTakeoff)).apply(this, arguments));
	}

	_createClass(MdiAirplaneTakeoff, [{
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
							React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2.5,19L 21.5,19L 21.5,21L 2.5,21L 2.5,19 Z M 22.07,9.64C 21.86,8.84 21.03,8.36 20.23,8.58L 14.92,10L 8.02,3.57L 6.09,4.08L 10.23,11.25L 5.26,12.58L 3.29,11.04L 1.84,11.43L 3.66,14.59L 4.43,15.92L 6.03,15.49L 11.34,14.07L 15.69,12.91L 21,11.49C 21.81,11.26 22.28,10.44 22.07,9.64 Z ' })
						)
					),
					React.createElement(
						'g',
						null,
						React.createElement(
							'defs',
							null,
							React.createElement('rect', { id: 'SVG_CLIPPER3_', x: '1.27157e-006', y: '0', width: '24', height: '24' })
						),
						React.createElement(
							'clipPath',
							{ id: 'SVG_CLIPPER4_' },
							React.createElement('use', { overflow: 'visible' })
						),
						React.createElement('g', null)
					)
				)
			);
		}
	}]);

	return MdiAirplaneTakeoff;
}(React.Component);

exports.default = MdiAirplaneTakeoff;
module.exports = exports['default'];