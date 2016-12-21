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

var MdiFormatHeader1 = function (_React$Component) {
    _inherits(MdiFormatHeader1, _React$Component);

    function MdiFormatHeader1() {
        _classCallCheck(this, MdiFormatHeader1);

        return _possibleConstructorReturn(this, (MdiFormatHeader1.__proto__ || Object.getPrototypeOf(MdiFormatHeader1)).apply(this, arguments));
    }

    _createClass(MdiFormatHeader1, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,4L 5,4L 5,10L 9,10L 9,4L 11,4L 11,18L 9,18L 9,12L 5,12L 5,18L 3,18L 3,4 Z M 14,18L 14,16L 16,16L 16,6.3094L 13.5,7.75278L 13.5,5.44337L 16,4L 18,4L 18,16L 20,16L 20,18L 14,18 Z ' })
                )
            );
        }
    }]);

    return MdiFormatHeader1;
}(React.Component);

exports.default = MdiFormatHeader1;
module.exports = exports['default'];