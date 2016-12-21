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

var MdiSeatReclineExtra = function (_React$Component) {
    _inherits(MdiSeatReclineExtra, _React$Component);

    function MdiSeatReclineExtra() {
        _classCallCheck(this, MdiSeatReclineExtra);

        return _possibleConstructorReturn(this, (MdiSeatReclineExtra.__proto__ || Object.getPrototypeOf(MdiSeatReclineExtra)).apply(this, arguments));
    }

    _createClass(MdiSeatReclineExtra, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.35125,5.64C 4.44875,5 4.22875,3.76 4.85875,2.85125C 5.48875,1.94875 6.73875,1.72875 7.65125,2.35875C 8.55,2.9978 8.77,4.23875 8.14,5.15125C 7.5,6.05 6.26,6.27 5.35125,5.64 Z M 16.0012,18.9988L 8.93125,18.9988C 7.45125,18.9988 6.19125,17.92 5.97125,16.46L 3.99875,7.0025L 2.0025,7.0025L 3.98875,16.7575C 4.37,19.1987 6.47,21.0012 8.94,21.0012L 16.0012,21.0012M 16.23,15L 11.3475,15L 10.3225,10.8987C 11.9,11.7925 13.5988,12.4412 15.4688,12.1188L 15.4688,9.99C 13.8375,10.2975 12.0313,9.72125 10.7813,8.74L 9.14125,7.47125C 8.91125,7.29 8.6525,7.1675 8.37875,7.09C 8.06125,7.0025 7.72,6.9675 7.3875,7.03125L 7.36875,7.03125C 6.1375,7.25125 5.3225,8.4175 5.5325,9.63875L 6.88,15.5613C 7.15875,16.9825 8.38875,17.9975 9.82875,17.9975L 16.68,17.9975L 20.4975,21.0012L 22.0025,19.5025' })
                )
            );
        }
    }]);

    return MdiSeatReclineExtra;
}(React.Component);

exports.default = MdiSeatReclineExtra;
module.exports = exports['default'];