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

var MdiImageFilterVintage = function (_React$Component) {
    _inherits(MdiImageFilterVintage, _React$Component);

    function MdiImageFilterVintage() {
        _classCallCheck(this, MdiImageFilterVintage);

        return _possibleConstructorReturn(this, (MdiImageFilterVintage.__proto__ || Object.getPrototypeOf(MdiImageFilterVintage)).apply(this, arguments));
    }

    _createClass(MdiImageFilterVintage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,16C 9.79,16 8,14.21 8,12C 8,9.79 9.79,8 12,8C 14.21,8 16,9.79 16,12C 16,14.21 14.21,16 12,16 Z M 18.7,12.4C 18.42,12.24 18.13,12.11 17.84,12C 18.13,11.89 18.42,11.76 18.7,11.6C 20.62,10.49 21.69,8.48 21.7,6.41C 19.91,5.38 17.63,5.3 15.7,6.41C 15.42,6.57 15.16,6.76 14.92,6.95C 14.97,6.64 15,6.32 15,6C 15,3.78 13.79,1.85 12,0.810003C 10.21,1.85 9,3.78 9,6C 9,6.32 9.03,6.64 9.08,6.95C 8.84,6.75 8.58,6.56 8.3,6.4C 6.38,5.29 4.1,5.37 2.3,6.4C 2.3,8.47 3.37,10.48 5.3,11.59C 5.58,11.75 5.87,11.88 6.16,11.99C 5.87,12.1 5.58,12.23 5.3,12.39C 3.38,13.5 2.31,15.51 2.3,17.58C 4.09,18.61 6.37,18.69 8.3,17.58C 8.58,17.42 8.84,17.23 9.08,17.04C 9.03,17.36 9,17.68 9,18C 9,20.22 10.21,22.15 12,23.19C 13.79,22.15 15,20.22 15,18C 15,17.68 14.97,17.36 14.92,17.05C 15.16,17.25 15.42,17.43 15.7,17.59C 17.62,18.7 19.9,18.62 21.7,17.59C 21.69,15.52 20.62,13.51 18.7,12.4 Z ' })
                )
            );
        }
    }]);

    return MdiImageFilterVintage;
}(React.Component);

exports.default = MdiImageFilterVintage;
module.exports = exports['default'];