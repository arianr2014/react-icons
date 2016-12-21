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

var MdiCallSplit = function (_React$Component) {
    _inherits(MdiCallSplit, _React$Component);

    function MdiCallSplit() {
        _classCallCheck(this, MdiCallSplit);

        return _possibleConstructorReturn(this, (MdiCallSplit.__proto__ || Object.getPrototypeOf(MdiCallSplit)).apply(this, arguments));
    }

    _createClass(MdiCallSplit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9987,3.99875L 16.2887,6.28875L 13.4087,9.17L 14.8287,10.5913L 17.71,7.71L 20,10L 20,3.99875M 10,3.99875L 3.99875,3.99875L 3.99875,10L 6.28875,7.71L 11.0013,12.4125L 11.0013,20L 12.9975,20L 12.9975,11.5912L 7.71,6.28875' })
                )
            );
        }
    }]);

    return MdiCallSplit;
}(React.Component);

exports.default = MdiCallSplit;
module.exports = exports['default'];