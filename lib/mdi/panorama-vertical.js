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

var MdiPanoramaVertical = function (_React$Component) {
    _inherits(MdiPanoramaVertical, _React$Component);

    function MdiPanoramaVertical() {
        _classCallCheck(this, MdiPanoramaVertical);

        return _possibleConstructorReturn(this, (MdiPanoramaVertical.__proto__ || Object.getPrototypeOf(MdiPanoramaVertical)).apply(this, arguments));
    }

    _createClass(MdiPanoramaVertical, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.54,20C 7.31,17.4 7.7,14.72 7.7,12C 7.7,9.28 7.31,6.6 6.54,4L 17.45,4C 16.68,6.6 16.29,9.28 16.29,12C 16.29,14.72 16.68,17.4 17.45,20M 19.94,21.12C 18.84,18.18 18.3,15.09 18.3,12C 18.3,8.91 18.85,5.82 19.94,2.88C 19.98,2.77 20,2.66 20,2.57C 20,2.23 19.77,2 19.37,2L 4.63,2C 4.23,2 4,2.23 4,2.57C 4,2.67 4.02,2.77 4.06,2.88C 5.16,5.82 5.71,8.91 5.71,12C 5.71,15.09 5.16,18.18 4.07,21.12C 4.02,21.23 4,21.34 4,21.43C 4,21.76 4.23,22 4.63,22L 19.38,22C 19.77,22 20.01,21.76 20.01,21.43C 20,21.33 19.98,21.23 19.94,21.12 Z ' })
                )
            );
        }
    }]);

    return MdiPanoramaVertical;
}(React.Component);

exports.default = MdiPanoramaVertical;
module.exports = exports['default'];