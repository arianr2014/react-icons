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

var MdiCardsPlayingOutline = function (_React$Component) {
    _inherits(MdiCardsPlayingOutline, _React$Component);

    function MdiCardsPlayingOutline() {
        _classCallCheck(this, MdiCardsPlayingOutline);

        return _possibleConstructorReturn(this, (MdiCardsPlayingOutline.__proto__ || Object.getPrototypeOf(MdiCardsPlayingOutline)).apply(this, arguments));
    }

    _createClass(MdiCardsPlayingOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.1913,2.25073C 11.9675,2.26125 12.71,2.725 13.0175,3.48125L 17.9788,15.4538C 18.0912,15.7125 18.14,15.9812 18.13,16.25C 18.11,17.0212 17.6462,17.7438 16.9,18.0512L 9.53125,21.1037C 9.2675,21.2163 8.99875,21.25 8.74,21.25C 7.96875,21.23 7.24125,20.7712 6.92875,20.025L 1.9675,8.05125C 1.5475,7.04125 2.04125,5.87375 3.05625,5.45375L 10.42,2.4021C 10.6688,2.305 10.9275,2.25073 11.1913,2.25073 Z M 14.6675,2.25073L 16.1187,2.25073C 17.2163,2.25073 18.12,3.15405 18.12,4.2525L 18.12,10.5963L 14.6675,2.25073 Z M 20.1275,3.79375L 21.47,4.355C 22.48,4.77501 22.9687,5.9425 22.5587,6.96251L 20.1275,12.8225L 20.1275,3.79375 Z M 11.1913,4.22375L 3.79875,7.285L 8.77499,19.2962L 16.1675,16.235L 11.1913,4.22375 Z M 8.6475,8.54L 11.875,10.9525L 11.435,14.9563L 8.2075,12.5438L 8.6475,8.54 Z ' })
                )
            );
        }
    }]);

    return MdiCardsPlayingOutline;
}(React.Component);

exports.default = MdiCardsPlayingOutline;
module.exports = exports['default'];