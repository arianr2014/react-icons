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

var MdiCameraEnhance = function (_React$Component) {
    _inherits(MdiCameraEnhance, _React$Component);

    function MdiCameraEnhance() {
        _classCallCheck(this, MdiCameraEnhance);

        return _possibleConstructorReturn(this, (MdiCameraEnhance.__proto__ || Object.getPrototypeOf(MdiCameraEnhance)).apply(this, arguments));
    }

    _createClass(MdiCameraEnhance, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.99875,2.9978L 7.1675,5L 3.99875,5C 2.9,5 2.0025,5.89875 2.0025,7.0025L 2.0025,18.9988C 2.0025,20.0975 2.9,21.0012 3.99875,21.0012L 20,21.0012C 21.0987,21.0012 22.0025,20.0975 22.0025,18.9988L 22.0025,7.0025C 22.0025,5.89875 21.0987,5 20,5L 16.8313,5L 15,2.9978M 12.0025,17.9975C 9.23875,17.9975 7.0025,15.7612 7.0025,12.9975C 7.0025,10.2387 9.23875,7.9975 12.0025,7.9975C 14.7612,7.9975 17.0025,10.2387 17.0025,12.9975C 17.0025,15.7612 14.7612,17.9975 12.0025,17.9975 Z M 12.0025,17.0025L 13.2525,14.2475L 16.0012,12.9975L 13.2525,11.7475L 12.0025,8.99875L 10.7525,11.7475L 7.9975,12.9975L 10.7525,14.2475' })
                )
            );
        }
    }]);

    return MdiCameraEnhance;
}(React.Component);

exports.default = MdiCameraEnhance;
module.exports = exports['default'];