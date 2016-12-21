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

var MdiPiBox = function (_React$Component) {
    _inherits(MdiPiBox, _React$Component);

    function MdiPiBox() {
        _classCallCheck(this, MdiPiBox);

        return _possibleConstructorReturn(this, (MdiPiBox.__proto__ || Object.getPrototypeOf(MdiPiBox)).apply(this, arguments));
    }

    _createClass(MdiPiBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,2.9978C 3.89125,2.9978 2.9975,3.89624 2.9975,5L 2.9975,18.9988C 2.9975,20.1025 3.89125,20.9963 5,20.9963L 18.9988,20.9963C 20.1025,20.9963 21.0013,20.1025 21.0013,18.9988L 21.0013,5C 21.0013,3.89624 20.1025,2.9978 18.9988,2.9978M 6.00125,7.0025L 17.0025,7.0025L 17.0025,8.99875L 15,8.99875L 15,13.9987C 15,14.5513 15.4488,15 16.0012,15C 16.5525,15 17.0025,14.5513 17.0025,13.9987L 18.9988,13.9987C 18.9988,15.6588 17.6563,17.0025 16.0012,17.0025C 14.3413,17.0025 12.9975,15.6588 12.9975,13.9987L 12.9975,8.99875L 10,8.99875L 10,17.0025L 7.9975,17.0025L 7.9975,8.99875L 6.00125,8.99875' })
                )
            );
        }
    }]);

    return MdiPiBox;
}(React.Component);

exports.default = MdiPiBox;
module.exports = exports['default'];