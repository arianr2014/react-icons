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

var MdiVectorPolyline = function (_React$Component) {
    _inherits(MdiVectorPolyline, _React$Component);

    function MdiVectorPolyline() {
        _classCallCheck(this, MdiVectorPolyline);

        return _possibleConstructorReturn(this, (MdiVectorPolyline.__proto__ || Object.getPrototypeOf(MdiVectorPolyline)).apply(this, arguments));
    }

    _createClass(MdiVectorPolyline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.0012,2.0025L 16.0012,7.9975L 17.075,7.9975L 14.9463,12.9975L 14.2625,12.9975L 12.0025,9.97125L 12.0025,5L 6.00125,5L 6.00125,11.0012L 6.91375,11.0012L 4.8775,16.0012L 2.0025,16.0012L 2.0025,22.0025L 7.9975,22.0025L 7.9975,16.0012L 7.03625,16.0012L 9.0725,11.0012L 10.2738,11.0012L 12.0025,13.315L 12.0025,18.9988L 17.9975,18.9988L 17.9975,12.9975L 17.1187,12.9975L 19.2475,7.9975L 22.0025,7.9975L 22.0025,2.0025M 17.9975,3.99875L 20,3.99875L 20,6.00125L 17.9975,6.00125M 7.9975,7.0025L 10,7.0025L 10,8.99875L 7.9975,8.99875M 13.9987,15L 16.0012,15L 16.0012,17.0025L 13.9987,17.0025M 3.99875,17.9975L 6.00125,17.9975L 6.00125,20L 3.99875,20' })
                )
            );
        }
    }]);

    return MdiVectorPolyline;
}(React.Component);

exports.default = MdiVectorPolyline;
module.exports = exports['default'];