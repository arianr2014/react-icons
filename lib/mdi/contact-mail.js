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

var MdiContactMail = function (_React$Component) {
    _inherits(MdiContactMail, _React$Component);

    function MdiContactMail() {
        _classCallCheck(this, MdiContactMail);

        return _possibleConstructorReturn(this, (MdiContactMail.__proto__ || Object.getPrototypeOf(MdiContactMail)).apply(this, arguments));
    }

    _createClass(MdiContactMail, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.0013,7.9975L 21.0013,7.0025L 17.9975,8.99875L 15,7.0025L 15,7.9975L 17.9975,10M 22.0025,2.9978L 2.0025,2.9978C 0.898752,2.9978 0,3.90125 0,5L 0,18.9988C 0,20.0975 0.898752,21.0012 2.0025,21.0012L 22.0025,21.0012C 23.1,21.0012 23.9893,20.0975 23.9893,18.9988L 23.9987,5C 23.9987,3.90125 23.1,2.9978 22.0025,2.9978 Z M 7.9975,6.00125C 9.65875,6.00125 11.0013,7.33875 11.0013,8.99875C 11.0013,10.6587 9.65875,12.0025 7.9975,12.0025C 6.3375,12.0025 5,10.6587 5,8.99875C 5,7.33875 6.3375,6.00125 7.9975,6.00125 Z M 13.9987,17.9975L 2.0025,17.9975L 2.0025,17.0025C 2.0025,15 6.00125,13.9012 7.9975,13.9012C 10,13.9012 13.9987,15 13.9987,17.0025M 22.0025,12.0025L 13.9987,12.0025L 13.9987,6.00125L 22.0025,6.00125' })
                )
            );
        }
    }]);

    return MdiContactMail;
}(React.Component);

exports.default = MdiContactMail;
module.exports = exports['default'];