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

var MdiScanner = function (_React$Component) {
    _inherits(MdiScanner, _React$Component);

    function MdiScanner() {
        _classCallCheck(this, MdiScanner);

        return _possibleConstructorReturn(this, (MdiScanner.__proto__ || Object.getPrototypeOf(MdiScanner)).apply(this, arguments));
    }

    _createClass(MdiScanner, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19.8,10.7L 4.2,5L 3.5,6.9L 17.6,12L 5,12C 3.9,12 3,12.9 3,14L 3,18C 3,19.1 3.9,20 5,20L 19,20C 20.1,20 21,19.1 21,18L 21,12.5C 21,11.7 20.5,10.9 19.8,10.7 Z M 7,17L 5,17L 5,15L 7,15L 7,17 Z M 19,17L 9,17L 9,15L 19,15L 19,17 Z ' })
                )
            );
        }
    }]);

    return MdiScanner;
}(React.Component);

exports.default = MdiScanner;
module.exports = exports['default'];