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

var MdiEyedropper = function (_React$Component) {
    _inherits(MdiEyedropper, _React$Component);

    function MdiEyedropper() {
        _classCallCheck(this, MdiEyedropper);

        return _possibleConstructorReturn(this, (MdiEyedropper.__proto__ || Object.getPrototypeOf(MdiEyedropper)).apply(this, arguments));
    }

    _createClass(MdiEyedropper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19.3462,11.7249L 17.2249,13.8462L 15.8107,12.432L 8.1005,20.1421L 3.5,22L 2,20.5L 3.85789,15.8995L 11.568,8.18937L 10.1538,6.77513L 12.2751,4.65381L 19.3462,11.7249 Z M 16.7574,3.00004C 17.9289,1.82848 19.8284,1.82847 21,3.00004C 22.1716,4.17161 22.1716,6.07109 21,7.24266L 19.0784,9.16423L 14.8358,4.92161L 16.7574,3.00004 Z M 5.55761,17.0282L 4.5,19.5L 6.97182,18.4424L 14.3964,11.0178L 12.9822,9.60356L 5.55761,17.0282 Z ' })
                )
            );
        }
    }]);

    return MdiEyedropper;
}(React.Component);

exports.default = MdiEyedropper;
module.exports = exports['default'];