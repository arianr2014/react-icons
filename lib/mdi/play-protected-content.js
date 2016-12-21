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

var MdiPlayProtectedContent = function (_React$Component) {
    _inherits(MdiPlayProtectedContent, _React$Component);

    function MdiPlayProtectedContent() {
        _classCallCheck(this, MdiPlayProtectedContent);

        return _possibleConstructorReturn(this, (MdiPlayProtectedContent.__proto__ || Object.getPrototypeOf(MdiPlayProtectedContent)).apply(this, arguments));
    }

    _createClass(MdiPlayProtectedContent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,5L 2,18L 11,18L 11,16L 4,16L 4,7L 17,7L 17,11L 19,11L 19,5L 2,5 Z M 9,9L 9,14L 12.5,11.5L 9,9 Z M 21.0352,11.6719L 16.0859,16.6211L 13.9648,14.5L 12.5508,15.9141L 16.0859,19.4492L 22.4492,13.0859L 21.0352,11.6719 Z ' })
                )
            );
        }
    }]);

    return MdiPlayProtectedContent;
}(React.Component);

exports.default = MdiPlayProtectedContent;
module.exports = exports['default'];