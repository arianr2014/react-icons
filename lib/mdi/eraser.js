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

var MdiEraser = function (_React$Component) {
    _inherits(MdiEraser, _React$Component);

    function MdiEraser() {
        _classCallCheck(this, MdiEraser);

        return _possibleConstructorReturn(this, (MdiEraser.__proto__ || Object.getPrototypeOf(MdiEraser)).apply(this, arguments));
    }

    _createClass(MdiEraser, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16.2426,3.55762L 21.1924,8.50737C 21.9734,9.28841 21.9734,10.5547 21.1924,11.3358L 12,20.5282C 10.4379,22.0903 7.90525,22.0903 6.34316,20.5282L 2.80761,16.9926C 2.02657,16.2116 2.02657,14.9453 2.80761,14.1642L 13.4142,3.55761C 14.1953,2.77657 15.4616,2.77657 16.2426,3.55762 Z M 4.22183,15.5784L 7.75736,19.114C 8.53841,19.895 9.80474,19.895 10.5858,19.114L 14.1213,15.5784L 9.17157,10.6287L 4.22183,15.5784 Z ' })
                )
            );
        }
    }]);

    return MdiEraser;
}(React.Component);

exports.default = MdiEraser;
module.exports = exports['default'];