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

var MdiPanoramaHorizontal = function (_React$Component) {
    _inherits(MdiPanoramaHorizontal, _React$Component);

    function MdiPanoramaHorizontal() {
        _classCallCheck(this, MdiPanoramaHorizontal);

        return _possibleConstructorReturn(this, (MdiPanoramaHorizontal.__proto__ || Object.getPrototypeOf(MdiPanoramaHorizontal)).apply(this, arguments));
    }

    _createClass(MdiPanoramaHorizontal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21.43,4C 21.33,4 21.23,4.02 21.12,4.06C 18.18,5.16 15.09,5.7 12,5.7C 8.91,5.7 5.82,5.15 2.88,4.06C 2.77,4.02 2.66,4 2.57,4C 2.23,4 2,4.23 2,4.63L 2,19.38C 2,19.77 2.23,20 2.57,20C 2.67,20 2.77,19.98 2.88,19.94C 5.82,18.84 8.91,18.3 12,18.3C 15.09,18.3 18.18,18.85 21.12,19.94C 21.23,19.98 21.33,20 21.43,20C 21.76,20 22,19.77 22,19.37L 22,4.63C 22,4.23 21.76,4 21.43,4 Z M 20,6.54L 20,17.45C 17.4,16.68 14.72,16.29 12,16.29C 9.28,16.29 6.6,16.68 4,17.45L 4,6.54C 6.6,7.31 9.28,7.7 12,7.7C 14.72,7.71 17.4,7.32 20,6.54 Z ' })
                )
            );
        }
    }]);

    return MdiPanoramaHorizontal;
}(React.Component);

exports.default = MdiPanoramaHorizontal;
module.exports = exports['default'];