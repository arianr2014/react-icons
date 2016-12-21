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

var MdiChartPie = function (_React$Component) {
    _inherits(MdiChartPie, _React$Component);

    function MdiChartPie() {
        _classCallCheck(this, MdiChartPie);

        return _possibleConstructorReturn(this, (MdiChartPie.__proto__ || Object.getPrototypeOf(MdiChartPie)).apply(this, arguments));
    }

    _createClass(MdiChartPie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,11L 13,11L 13,3C 17.4183,3 21,6.58172 21,11 Z M 19,13C 19,15.7818 17.5802,18.232 15.4256,19.6654L 11.5773,13L 19,13 Z M 11,21C 8.21819,21 5.768,19.5802 4.33459,17.4256L 10.817,13.683L 14.56,20.1662C 13.4879,20.6999 12.279,21 11,21 Z M 3,13C 3,8.58173 6.58172,5 11,5L 11,12.4227L 3.83381,16.5601C 3.30013,15.4879 3,14.279 3,13 Z ' })
                )
            );
        }
    }]);

    return MdiChartPie;
}(React.Component);

exports.default = MdiChartPie;
module.exports = exports['default'];