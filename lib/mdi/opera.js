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

var MdiOpera = function (_React$Component) {
    _inherits(MdiOpera, _React$Component);

    function MdiOpera() {
        _classCallCheck(this, MdiOpera);

        return _possibleConstructorReturn(this, (MdiOpera.__proto__ || Object.getPrototypeOf(MdiOpera)).apply(this, arguments));
    }

    _createClass(MdiOpera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 17.3261,3.5722C 15.8607,2.55918 14.0478,1.99999 12.0029,1.99999C 10.1327,1.99999 8.45659,2.46736 7.06285,3.32167C 4.37798,4.95013 2.72495,7.99848 2.72495,11.9046C 2.72495,17.1881 6.43439,22 11.9996,22C 17.5663,22 21.2751,17.1881 21.2751,11.9046C 21.2751,8.19063 19.781,5.25216 17.3261,3.5722 Z M 12.0027,3.76674C 14.9882,3.76674 15.5955,7.93292 15.5955,11.7159C 15.5955,15.2202 15.2578,19.9116 12.0393,19.9116C 8.82071,19.9116 8.40457,15.1743 8.40457,11.6702C 8.40457,7.88754 9.01657,3.76674 12.0027,3.76674 Z ' })
                )
            );
        }
    }]);

    return MdiOpera;
}(React.Component);

exports.default = MdiOpera;
module.exports = exports['default'];