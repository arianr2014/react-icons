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

var MdiImageFilterTiltShift = function (_React$Component) {
    _inherits(MdiImageFilterTiltShift, _React$Component);

    function MdiImageFilterTiltShift() {
        _classCallCheck(this, MdiImageFilterTiltShift);

        return _possibleConstructorReturn(this, (MdiImageFilterTiltShift.__proto__ || Object.getPrototypeOf(MdiImageFilterTiltShift)).apply(this, arguments));
    }

    _createClass(MdiImageFilterTiltShift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 5.68,19.74C 7.16,20.95 9,21.75 11,21.95L 11,19.93C 9.54,19.75 8.21,19.17 7.1,18.31M 13,19.93L 13,21.95C 15.01,21.75 16.84,20.95 18.32,19.74L 16.89,18.31C 15.79,19.17 14.46,19.75 13,19.93 Z M 18.31,16.9L 19.74,18.33C 20.95,16.85 21.75,15.01 21.95,13.01L 19.93,13.01C 19.75,14.46 19.17,15.79 18.31,16.9 Z M 15,12C 15,10.34 13.66,9 12,9C 10.34,9 9,10.34 9,12C 9,13.66 10.34,15 12,15C 13.66,15 15,13.66 15,12 Z M 4.07,13L 2.05,13C 2.25,15.01 3.05,16.84 4.26,18.32L 5.69,16.89C 4.83,15.79 4.25,14.46 4.07,13 Z M 5.69,7.1L 4.26,5.68C 3.05,7.16 2.25,8.99 2.05,11L 4.07,11C 4.25,9.54 4.83,8.21 5.69,7.1 Z M 19.93,11L 21.95,11C 21.75,8.99 20.95,7.16 19.74,5.68L 18.31,7.1C 19.17,8.21 19.75,9.54 19.93,11 Z M 18.32,4.26C 16.84,3.05 15.01,2.25 13,2.05L 13,4.07C 14.46,4.25 15.79,4.83 16.9,5.69M 11,4.07L 11,2.05C 8.99,2.25 7.16,3.05 5.68,4.26L 7.1,5.69C 8.21,4.83 9.54,4.25 11,4.07 Z ' })
                )
            );
        }
    }]);

    return MdiImageFilterTiltShift;
}(React.Component);

exports.default = MdiImageFilterTiltShift;
module.exports = exports['default'];