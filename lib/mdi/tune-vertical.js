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

var MdiTuneVertical = function (_React$Component) {
    _inherits(MdiTuneVertical, _React$Component);

    function MdiTuneVertical() {
        _classCallCheck(this, MdiTuneVertical);

        return _possibleConstructorReturn(this, (MdiTuneVertical.__proto__ || Object.getPrototypeOf(MdiTuneVertical)).apply(this, arguments));
    }

    _createClass(MdiTuneVertical, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,2.9978L 5,12.0025L 2.9975,12.0025L 2.9975,13.9987L 5,13.9987L 5,21.0012L 7.0025,21.0012L 7.0025,13.9987L 8.99875,13.9987L 8.99875,12.0025L 7.0025,12.0025L 7.0025,2.9978M 11.0013,2.9978L 11.0013,7.9975L 8.99875,7.9975L 8.99875,10L 11.0013,10L 11.0013,21.0012L 12.9975,21.0012L 12.9975,10L 15,10L 15,7.9975L 12.9975,7.9975L 12.9975,2.9978M 17.0025,2.9978L 17.0025,13.9987L 15,13.9987L 15,16.0012L 17.0025,16.0012L 17.0025,21.0012L 18.9988,21.0012L 18.9988,16.0012L 21.0013,16.0012L 21.0013,13.9987L 18.9988,13.9987L 18.9988,2.9978' })
                )
            );
        }
    }]);

    return MdiTuneVertical;
}(React.Component);

exports.default = MdiTuneVertical;
module.exports = exports['default'];