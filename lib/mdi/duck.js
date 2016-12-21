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

var MdiDuck = function (_React$Component) {
    _inherits(MdiDuck, _React$Component);

    function MdiDuck() {
        _classCallCheck(this, MdiDuck);

        return _possibleConstructorReturn(this, (MdiDuck.__proto__ || Object.getPrototypeOf(MdiDuck)).apply(this, arguments));
    }

    _createClass(MdiDuck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8.5,5C 7.67157,5 7,5.67158 7,6.5C 7,7.32843 7.67157,8 8.5,8C 9.32843,8 10,7.32843 10,6.5C 10,5.67158 9.32843,5 8.5,5 Z M 10,2.00001C 12.7614,2.00001 15,4.23858 15,7.00001C 15,8.6969 14.1547,10.1964 12.8622,11.1003C 14.435,11.2471 16.2175,11.6088 18,12.5C 21,14 22,12 22,12C 22,12 21,21 15,21L 9,21C 9,21 4,21 4,16C 4,13.0007 6.99854,12.0005 6.00072,10.0015C 2,10 2,6.50001 2,6.50001C 3,7.00001 4.24326,6.98521 5.01213,6.64903C 5.19225,4.05137 7.35656,2.00001 10,2.00001 Z ' })
                )
            );
        }
    }]);

    return MdiDuck;
}(React.Component);

exports.default = MdiDuck;
module.exports = exports['default'];