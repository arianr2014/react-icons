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

var MdiPackageVariant = function (_React$Component) {
    _inherits(MdiPackageVariant, _React$Component);

    function MdiPackageVariant() {
        _classCallCheck(this, MdiPackageVariant);

        return _possibleConstructorReturn(this, (MdiPackageVariant.__proto__ || Object.getPrototypeOf(MdiPackageVariant)).apply(this, arguments));
    }

    _createClass(MdiPackageVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.99715,10.9591C 1.51886,10.683 1.35498,10.0714 1.63112,9.5931L 3.13112,6.99503C 3.24358,6.80025 3.41166,6.65762 3.60373,6.57561L 11.4336,2.17575C 11.5946,2.0649 11.7897,2.00001 12,2.00001C 12.2103,2.00001 12.4053,2.06489 12.5664,2.17574L 20.473,6.61872C 20.6624,6.72057 20.8151,6.88165 20.9065,7.07717L 22.3618,9.59782C 22.6379,10.0761 22.474,10.6877 21.9957,10.9638L 21,11.5387L 21,16.5C 21,16.8812 20.7867,17.2125 20.473,17.3813L 12.5664,21.8243C 12.4054,21.9351 12.2103,22 12,22C 11.7897,22 11.5946,21.9351 11.4336,21.8243L 3.52716,17.3814C 3.21335,17.2127 3,16.8812 3,16.5L 3,10.9577C 2.7004,11.1315 2.31866,11.1448 1.99715,10.9591 Z M 12.0009,4.15094L 12,4.15145L 12,10.8486L 12.0009,10.8491L 17.9591,7.50001L 12.0009,4.15094 Z M 5,15.9149L 11,19.2866L 11,12.5806L 5,9.20901L 5,15.9149 Z M 19,15.9149L 19,12.6934L 13.985,15.5888C 13.67,15.7707 13.2971,15.7617 13,15.5971L 13,19.2875L 19,15.9149 Z M 13.851,13.3568L 20.1297,9.7318L 19.546,8.7207L 13.2673,12.3457L 13.851,13.3568 Z ' })
                )
            );
        }
    }]);

    return MdiPackageVariant;
}(React.Component);

exports.default = MdiPackageVariant;
module.exports = exports['default'];