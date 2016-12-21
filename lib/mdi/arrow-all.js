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

var MdiArrowAll = function (_React$Component) {
    _inherits(MdiArrowAll, _React$Component);

    function MdiArrowAll() {
        _classCallCheck(this, MdiArrowAll);

        return _possibleConstructorReturn(this, (MdiArrowAll.__proto__ || Object.getPrototypeOf(MdiArrowAll)).apply(this, arguments));
    }

    _createClass(MdiArrowAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,11L 18,11L 16.5,9.50001L 17.9194,8.08057L 21.8388,12L 17.9194,15.9194L 16.5,14.5L 18.0104,13L 13,13L 13,18L 14.5,16.5L 15.9194,17.9195L 12,21.8388L 8.08062,17.9194L 9.5,16.5L 11,18L 11,13L 6,13L 7.5,14.5L 6.08055,15.9194L 2.16116,12L 6.08056,8.08061L 7.5,9.50001L 6,11L 11,11L 11,6L 9.5,7.50001L 8.08056,6.08055L 12,2.16116L 15.9194,6.08055L 14.5,7.50001L 13,6L 13,11 Z ' })
                )
            );
        }
    }]);

    return MdiArrowAll;
}(React.Component);

exports.default = MdiArrowAll;
module.exports = exports['default'];