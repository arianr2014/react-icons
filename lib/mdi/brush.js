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

var MdiBrush = function (_React$Component) {
    _inherits(MdiBrush, _React$Component);

    function MdiBrush() {
        _classCallCheck(this, MdiBrush);

        return _possibleConstructorReturn(this, (MdiBrush.__proto__ || Object.getPrototypeOf(MdiBrush)).apply(this, arguments));
    }

    _createClass(MdiBrush, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20.71,4.63L 19.37,3.29C 18.98,2.9 18.35,2.9 17.96,3.29L 9,12.25L 11.75,15L 20.71,6.04C 21.1,5.65 21.1,5.02 20.71,4.63 Z M 7,14C 5.34,14 4,15.34 4,17C 4,18.31 2.84,19 2,19C 2.92,20.22 4.49,21 6,21C 8.21,21 10,19.21 10,17C 10,15.34 8.66,14 7,14 Z ' })
                )
            );
        }
    }]);

    return MdiBrush;
}(React.Component);

exports.default = MdiBrush;
module.exports = exports['default'];