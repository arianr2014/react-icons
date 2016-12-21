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

var MdiLanguageC = function (_React$Component) {
    _inherits(MdiLanguageC, _React$Component);

    function MdiLanguageC() {
        _classCallCheck(this, MdiLanguageC);

        return _possibleConstructorReturn(this, (MdiLanguageC.__proto__ || Object.getPrototypeOf(MdiLanguageC)).apply(this, arguments));
    }

    _createClass(MdiLanguageC, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.4546,15.9733L 15.8709,18.4089C 15.6075,18.5495 15.1928,18.6811 14.6266,18.8038C 14.0604,18.9265 13.3901,18.9919 12.6157,19C 10.4116,18.9561 8.75165,18.3022 7.63576,17.0384C 6.51987,15.7746 5.96086,14.1646 5.95873,12.2082C 6.00663,9.90327 6.68083,8.12917 7.98133,6.88589C 9.28184,5.64261 10.9213,5.01398 12.8996,5C 13.6527,5.00705 14.2993,5.07051 14.8395,5.19038C 15.3796,5.31025 15.7802,5.44422 16.0413,5.5923L 15.4356,8.0845L 14.4018,7.738C 13.9969,7.64109 13.534,7.59033 13.0131,7.58574C 11.8508,7.58411 10.8919,7.95111 10.1364,8.68675C 9.38096,9.42238 8.98983,10.5364 8.96302,12.0289C 8.97287,13.3881 9.33168,14.4547 10.0394,15.2287C 10.7472,16.0028 11.7447,16.397 13.0321,16.4116L 14.3569,16.2895C 14.7866,16.2103 15.1525,16.1048 15.4546,15.9733 Z ' })
                )
            );
        }
    }]);

    return MdiLanguageC;
}(React.Component);

exports.default = MdiLanguageC;
module.exports = exports['default'];