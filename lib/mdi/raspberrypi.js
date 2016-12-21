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

var MdiRaspberrypi = function (_React$Component) {
    _inherits(MdiRaspberrypi, _React$Component);

    function MdiRaspberrypi() {
        _classCallCheck(this, MdiRaspberrypi);

        return _possibleConstructorReturn(this, (MdiRaspberrypi.__proto__ || Object.getPrototypeOf(MdiRaspberrypi)).apply(this, arguments));
    }

    _createClass(MdiRaspberrypi, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,8L 22,8L 22,10L 20,10L 20,8 Z M 4,5L 20,5C 21.1046,5 22,5.89543 22,7L 19,7L 19,9L 5,9.00001L 5,13L 7.99999,13L 7.99999,16L 19,16L 19,17L 22,17C 22,18.1046 21.1046,19 20,19L 16,19L 16,20L 14,20L 14,19L 11,19L 11,20L 7,20L 7,19L 4,19C 2.89543,19 2,18.1046 2,17L 2,7C 2,5.89543 2.89543,5 4,5 Z M 19,15L 9,15L 9,10L 19,10L 19,11L 22,11L 22,13L 19,13L 19,15 Z M 13,12L 13,14L 15,14L 15,12L 13,12 Z M 5,6.00001L 5,8.00001L 5.99999,8.00001L 5.99999,6.00001L 5,6.00001 Z M 6.99999,6.00001L 6.99999,8.00001L 7.99999,8.00001L 7.99999,6.00001L 6.99999,6.00001 Z M 9,6.00001L 9,8.00001L 10,8.00001L 10,6.00001L 9,6.00001 Z M 11,6.00001L 11,8.00001L 12,8.00001L 12,6.00001L 11,6.00001 Z M 13,6.00001L 13,8.00001L 14,8.00001L 14,6.00001L 13,6.00001 Z M 15,6.00001L 15,8L 16,8L 16,6.00001L 15,6.00001 Z M 20,14L 22,14L 22,16L 20,16L 20,14 Z ' })
                )
            );
        }
    }]);

    return MdiRaspberrypi;
}(React.Component);

exports.default = MdiRaspberrypi;
module.exports = exports['default'];