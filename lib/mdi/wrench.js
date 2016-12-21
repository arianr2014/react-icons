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

var MdiWrench = function (_React$Component) {
    _inherits(MdiWrench, _React$Component);

    function MdiWrench() {
        _classCallCheck(this, MdiWrench);

        return _possibleConstructorReturn(this, (MdiWrench.__proto__ || Object.getPrototypeOf(MdiWrench)).apply(this, arguments));
    }

    _createClass(MdiWrench, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 22.7,19L 13.6,9.9C 14.5,7.6 14,4.9 12.1,3C 10.1,1 7.1,0.599998 4.7,1.7L 9,6L 6,9L 1.6,4.7C 0.400001,7.1 0.900001,10.1 2.9,12.1C 4.8,14 7.5,14.5 9.8,13.6L 18.9,22.7C 19.3,23.1 19.9,23.1 20.3,22.7L 22.6,20.4C 23.1,20 23.1,19.3 22.7,19 Z ' })
                )
            );
        }
    }]);

    return MdiWrench;
}(React.Component);

exports.default = MdiWrench;
module.exports = exports['default'];