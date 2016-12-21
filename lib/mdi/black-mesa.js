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

var MdiBlackMesa = function (_React$Component) {
    _inherits(MdiBlackMesa, _React$Component);

    function MdiBlackMesa() {
        _classCallCheck(this, MdiBlackMesa);

        return _possibleConstructorReturn(this, (MdiBlackMesa.__proto__ || Object.getPrototypeOf(MdiBlackMesa)).apply(this, arguments));
    }

    _createClass(MdiBlackMesa, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,2C 17.5228,2 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47716 6.47715,2 12,2 Z M 12,4.00001C 7.58172,4.00001 4,7.58173 4,12C 4,14.3894 5.04751,16.5341 6.70835,18L 9,18L 9,12L 17,12L 19.1525,15.5875C 19.6947,14.5085 20,13.2899 20,12C 20,7.58173 16.4183,4.00001 12,4.00001 Z ' })
                )
            );
        }
    }]);

    return MdiBlackMesa;
}(React.Component);

exports.default = MdiBlackMesa;
module.exports = exports['default'];