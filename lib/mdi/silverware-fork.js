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

var MdiSilverwareFork = function (_React$Component) {
    _inherits(MdiSilverwareFork, _React$Component);

    function MdiSilverwareFork() {
        _classCallCheck(this, MdiSilverwareFork);

        return _possibleConstructorReturn(this, (MdiSilverwareFork.__proto__ || Object.getPrototypeOf(MdiSilverwareFork)).apply(this, arguments));
    }

    _createClass(MdiSilverwareFork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.121,21.2913L 3.70701,19.8773L 13.3627,10.2206L 13.1568,10.0147C 12.3758,9.23369 12.3758,7.96736 13.1568,7.18631L 17.5208,2.82237L 18.435,3.73657L 15.1924,6.97921L 16.1495,7.93632L 19.3921,4.69367L 20.3063,5.60789L 17.0637,8.85053L 18.0208,9.80764L 21.2634,6.56499L 22.1776,7.47921L 17.8137,11.8432C 17.0326,12.6242 15.7663,12.6242 14.9853,11.8432L 14.7771,11.635L 5.121,21.2913 Z ' })
                )
            );
        }
    }]);

    return MdiSilverwareFork;
}(React.Component);

exports.default = MdiSilverwareFork;
module.exports = exports['default'];