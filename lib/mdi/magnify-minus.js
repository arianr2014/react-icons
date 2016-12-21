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

var MdiMagnifyMinus = function (_React$Component) {
    _inherits(MdiMagnifyMinus, _React$Component);

    function MdiMagnifyMinus() {
        _classCallCheck(this, MdiMagnifyMinus);

        return _possibleConstructorReturn(this, (MdiMagnifyMinus.__proto__ || Object.getPrototypeOf(MdiMagnifyMinus)).apply(this, arguments));
    }

    _createClass(MdiMagnifyMinus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9,2C 12.866,2 16,5.13401 16,9C 16,10.5723 15.4816,12.0236 14.6064,13.1922L 15.4142,14L 16,14L 22,20L 20,22L 14,16L 14,15.4142L 13.1922,14.6064C 12.0236,15.4816 10.5723,16 9,16C 5.13401,16 2,12.866 2,9C 2,5.13401 5.13401,2 9,2 Z M 5,8.00001L 5,10L 13,10L 13,8.00001L 5,8.00001 Z ' })
                )
            );
        }
    }]);

    return MdiMagnifyMinus;
}(React.Component);

exports.default = MdiMagnifyMinus;
module.exports = exports['default'];