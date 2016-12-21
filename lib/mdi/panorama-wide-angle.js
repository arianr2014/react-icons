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

var MdiPanoramaWideAngle = function (_React$Component) {
    _inherits(MdiPanoramaWideAngle, _React$Component);

    function MdiPanoramaWideAngle() {
        _classCallCheck(this, MdiPanoramaWideAngle);

        return _possibleConstructorReturn(this, (MdiPanoramaWideAngle.__proto__ || Object.getPrototypeOf(MdiPanoramaWideAngle)).apply(this, arguments));
    }

    _createClass(MdiPanoramaWideAngle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,4C 9.27,4 6.78,4.24 4.05,4.72L 3.12,4.88L 2.87,5.78C 2.29,7.85 2,9.93 2,12C 2,14.07 2.29,16.15 2.87,18.22L 3.12,19.11L 4.05,19.27C 6.78,19.76 9.27,20 12,20C 14.73,20 17.22,19.76 19.95,19.28L 20.88,19.12L 21.13,18.23C 21.71,16.15 22,14.07 22,12C 22,9.93 21.71,7.85 21.13,5.78L 20.88,4.89L 19.95,4.73C 17.22,4.24 14.73,4 12,4 Z M 12,6C 14.45,6 16.71,6.2 19.29,6.64C 19.76,8.42 20,10.22 20,12C 20,13.78 19.76,15.58 19.29,17.36C 16.71,17.8 14.45,18 12,18C 9.55,18 7.29,17.8 4.71,17.36C 4.24,15.58 4,13.78 4,12C 4,10.22 4.24,8.42 4.71,6.64C 7.29,6.2 9.55,6 12,6 Z ' })
                )
            );
        }
    }]);

    return MdiPanoramaWideAngle;
}(React.Component);

exports.default = MdiPanoramaWideAngle;
module.exports = exports['default'];