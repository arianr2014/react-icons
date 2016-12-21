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

var MdiVectorPolygon = function (_React$Component) {
    _inherits(MdiVectorPolygon, _React$Component);

    function MdiVectorPolygon() {
        _classCallCheck(this, MdiVectorPolygon);

        return _possibleConstructorReturn(this, (MdiVectorPolygon.__proto__ || Object.getPrototypeOf(MdiVectorPolygon)).apply(this, arguments));
    }

    _createClass(MdiVectorPolygon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.0025,2.0025L 2.0025,7.9975L 4.2775,7.9975L 5.56625,16.0012L 3.99875,16.0012L 3.99875,22.0025L 10,22.0025L 10,20.0637L 15,20.0538L 15,22.0025L 21.0013,22.0025L 21.0013,16.0012L 19.17,16.0012L 20,8.99875L 22.0025,8.99875L 22.0025,2.9978L 16.0012,2.9978L 16.0012,6.53375L 14.8,7.9975L 9.59,7.9975L 7.9975,5.82L 7.9975,2.0025M 3.99875,3.99875L 6.00125,3.99875L 6.00125,6.00125L 3.99875,6.00125M 17.9975,5L 20,5L 20,7.0025L 17.9975,7.0025M 6.30875,7.9975L 7.11375,7.9975L 8.99875,10.5862L 8.99875,13.9987L 15,13.9987L 15,10.9125L 16.5675,8.99875L 17.9887,8.99875L 17.1587,16.0012L 15,16.0012L 15,18.0563L 10,18.0613L 10,16.0012L 7.5975,16.0012M 11.0013,10L 12.9975,10L 12.9975,12.0025L 11.0013,12.0025M 6.00125,17.9975L 7.9975,17.9975L 7.9975,20L 6.00125,20M 17.0025,17.9975L 18.9988,17.9975L 18.9988,20L 17.0025,20' })
                )
            );
        }
    }]);

    return MdiVectorPolygon;
}(React.Component);

exports.default = MdiVectorPolygon;
module.exports = exports['default'];