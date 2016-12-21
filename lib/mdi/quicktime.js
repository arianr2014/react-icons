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

var MdiQuicktime = function (_React$Component) {
    _inherits(MdiQuicktime, _React$Component);

    function MdiQuicktime() {
        _classCallCheck(this, MdiQuicktime);

        return _possibleConstructorReturn(this, (MdiQuicktime.__proto__ || Object.getPrototypeOf(MdiQuicktime)).apply(this, arguments));
    }

    _createClass(MdiQuicktime, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,3C 16.9706,3 21,7.02944 21,12C 21,13.76 20.4948,15.4019 19.6216,16.7888L 21,18.1673L 21,20C 21,20.5523 20.5523,21 20,21L 18.1759,21L 16.7941,19.6182C 15.4061,20.4935 13.7622,21 12,21C 7.02944,21 3,16.9706 3,12C 3,7.02944 7.02944,3 12,3 Z M 12,7C 9.23857,7 7,9.23858 7,12C 7,14.7614 9.23857,17 12,17C 12.646,17 13.2635,16.8775 13.8303,16.6544L 10.9467,13.7708C 10.1657,12.9898 10.1657,11.7234 10.9467,10.9424C 11.7278,10.1613 12.9941,10.1613 13.7751,10.9424L 16.6568,13.8241C 16.8784,13.259 17,12.6437 17,12C 17,9.23858 14.7614,7 12,7 Z ' })
                )
            );
        }
    }]);

    return MdiQuicktime;
}(React.Component);

exports.default = MdiQuicktime;
module.exports = exports['default'];