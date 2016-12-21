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

var MdiWebcam = function (_React$Component) {
    _inherits(MdiWebcam, _React$Component);

    function MdiWebcam() {
        _classCallCheck(this, MdiWebcam);

        return _possibleConstructorReturn(this, (MdiWebcam.__proto__ || Object.getPrototypeOf(MdiWebcam)).apply(this, arguments));
    }

    _createClass(MdiWebcam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,2C 15.866,2 19,5.13401 19,9C 19,12.866 15.866,16 12,16C 8.13401,16 5,12.866 5,9C 5,5.13401 8.13401,2 12,2 Z M 12,4.00003C 9.23856,4.00003 6.99999,6.23861 6.99999,9.00003C 6.99999,11.7615 9.23856,14 12,14C 14.7614,14 17,11.7615 17,9.00003C 17,6.23861 14.7614,4.00003 12,4.00003 Z M 12,6C 13.6568,6 15,7.34315 15,9C 15,10.6569 13.6568,12 12,12C 10.3431,12 9,10.6569 9,9C 9,7.34315 10.3431,6 12,6 Z M 6,22C 4.89543,22 4,21.1046 4,20C 4,19.6231 4.10428,19.2705 4.28556,18.9695L 6.11248,15.8073C 7.69067,17.1735 9.74881,18 12,18C 14.2512,18 16.3093,17.1735 17.8875,15.8073L 19.7144,18.9695C 19.8957,19.2705 20,19.6231 20,20C 20,21.1046 19.1046,22 18,22L 6,22 Z ' })
                )
            );
        }
    }]);

    return MdiWebcam;
}(React.Component);

exports.default = MdiWebcam;
module.exports = exports['default'];