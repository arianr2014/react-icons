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

var MdiFormatLineWeight = function (_React$Component) {
	_inherits(MdiFormatLineWeight, _React$Component);

	function MdiFormatLineWeight() {
		_classCallCheck(this, MdiFormatLineWeight);

		return _possibleConstructorReturn(this, (MdiFormatLineWeight.__proto__ || Object.getPrototypeOf(MdiFormatLineWeight)).apply(this, arguments));
	}

	_createClass(MdiFormatLineWeight, [{
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
							React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,17L 21,17L 21,15L 3,15L 3,17 Z M 3,20L 21,20L 21,19L 3,19L 3,20 Z M 3,13L 21,13L 21,10L 3,10L 3,13 Z M 3,4L 3,8L 21,8L 21,4L 3,4 Z ' })
						)
					)
				)
			);
		}
	}]);

	return MdiFormatLineWeight;
}(React.Component);

exports.default = MdiFormatLineWeight;
module.exports = exports['default'];