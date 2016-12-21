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

var MdiLanguageCpp = function (_React$Component) {
    _inherits(MdiLanguageCpp, _React$Component);

    function MdiLanguageCpp() {
        _classCallCheck(this, MdiLanguageCpp);

        return _possibleConstructorReturn(this, (MdiLanguageCpp.__proto__ || Object.getPrototypeOf(MdiLanguageCpp)).apply(this, arguments));
    }

    _createClass(MdiLanguageCpp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10.4958,15.9733L 10.9122,18.4089C 10.6488,18.5495 10.234,18.6811 9.66783,18.8038C 9.10163,18.9265 8.43134,18.9919 7.65696,19C 5.45289,18.9561 3.79291,18.3022 2.67703,17.0384C 1.56114,15.7746 1.00213,14.1646 1,12.2082C 1.0479,9.90327 1.7221,8.12917 3.0226,6.88589C 4.32311,5.64261 5.96252,5.01398 7.94085,5C 8.69394,5.00705 9.34057,5.07051 9.88074,5.19038C 10.4209,5.31025 10.8215,5.44422 11.0825,5.59229L 10.4769,8.0845L 9.44309,7.738C 9.03815,7.64109 8.57526,7.59033 8.05441,7.58574C 6.89205,7.5841 5.93314,7.95111 5.17769,8.68674C 4.42223,9.42238 4.0311,10.5364 4.00429,12.0289C 4.01414,13.3881 4.37294,14.4547 5.08069,15.2287C 5.78843,16.0028 6.78598,16.397 8.07333,16.4116L 9.39814,16.2895C 9.82791,16.2103 10.1938,16.1048 10.4958,15.9733 Z M 11,11L 13,11L 13,9L 15,9L 15,11L 17,11L 17,13L 15,13L 15,15L 13,15L 13,13L 11,13L 11,11 Z M 18,11L 20,11L 20,9L 22,9L 22,11L 24,11L 24,13L 22,13L 22,15L 20,15L 20,13L 18,13L 18,11 Z ' })
                )
            );
        }
    }]);

    return MdiLanguageCpp;
}(React.Component);

exports.default = MdiLanguageCpp;
module.exports = exports['default'];