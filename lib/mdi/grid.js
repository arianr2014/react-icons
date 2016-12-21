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

var MdiGrid = function (_React$Component) {
    _inherits(MdiGrid, _React$Component);

    function MdiGrid() {
        _classCallCheck(this, MdiGrid);

        return _possibleConstructorReturn(this, (MdiGrid.__proto__ || Object.getPrototypeOf(MdiGrid)).apply(this, arguments));
    }

    _createClass(MdiGrid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10,4L 10,8L 14,8L 14,3.99999L 10,4 Z M 16,3.99999L 16,8L 20.0059,8L 20,3.99999L 16,3.99999 Z M 16,10L 16,14L 20.0147,14L 20.0088,10L 16,10 Z M 16,16L 16,20L 20.0234,20L 20.0176,16L 16,16 Z M 14,20L 14,16L 10,16L 10,20L 14,20 Z M 8.00001,20L 8.00001,16L 4.01758,16L 4.02344,20L 8.00001,20 Z M 8,14L 8,10L 4.00879,10L 4.01465,14L 8,14 Z M 8,8L 8,4L 4,4L 4.00586,8L 8,8 Z M 10,14L 14,14L 14,10L 10,10L 10,14 Z M 4,2.00001L 20,1.99999C 21.1046,1.99999 22,2.89542 22,3.99999L 22.0235,20C 22.0235,21.1046 21.128,22 20.0235,22L 4.02345,22C 2.91888,22 2.02344,21.1046 2.02344,20L 2,4C 2,2.89543 2.89543,2.00001 4,2.00001 Z ' })
                )
            );
        }
    }]);

    return MdiGrid;
}(React.Component);

exports.default = MdiGrid;
module.exports = exports['default'];