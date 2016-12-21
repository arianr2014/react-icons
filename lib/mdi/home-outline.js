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

var MdiHomeOutline = function (_React$Component) {
    _inherits(MdiHomeOutline, _React$Component);

    function MdiHomeOutline() {
        _classCallCheck(this, MdiHomeOutline);

        return _possibleConstructorReturn(this, (MdiHomeOutline.__proto__ || Object.getPrototypeOf(MdiHomeOutline)).apply(this, arguments));
    }

    _createClass(MdiHomeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9,19L 9,13L 11,13L 13,13L 15,13L 15,19L 18,19L 18,10.9142L 12,4.91422L 6,10.9142L 6,19L 9,19 Z M 12,2.0858L 21.9142,12L 20,12L 20,21L 13,21L 13,15L 11,15L 11,21L 4,21L 4.00001,12L 2.08579,12L 12,2.0858 Z ' })
                )
            );
        }
    }]);

    return MdiHomeOutline;
}(React.Component);

exports.default = MdiHomeOutline;
module.exports = exports['default'];