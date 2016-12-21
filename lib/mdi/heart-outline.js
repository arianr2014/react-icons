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

var MdiHeartOutline = function (_React$Component) {
    _inherits(MdiHeartOutline, _React$Component);

    function MdiHeartOutline() {
        _classCallCheck(this, MdiHeartOutline);

        return _possibleConstructorReturn(this, (MdiHeartOutline.__proto__ || Object.getPrototypeOf(MdiHeartOutline)).apply(this, arguments));
    }

    _createClass(MdiHeartOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.1044,18.5522L 11.9994,18.6472L 11.8944,18.5522C 7.14038,14.2372 3.99939,11.3873 3.99939,8.49823C 3.99939,6.50323 5.50439,4.99823 7.49939,4.99823C 9.03738,4.99823 10.5384,5.99023 11.0664,7.35925L 12.9324,7.35925C 13.4604,5.99023 14.9614,4.99823 16.4994,4.99823C 18.4944,4.99823 19.9994,6.50323 19.9994,8.49823C 19.9994,11.3873 16.8584,14.2372 12.1044,18.5522 Z M 16.4994,2.99823C 14.7584,2.99823 13.0904,3.80524 11.9994,5.08423C 10.9084,3.80524 9.24039,2.99823 7.49939,2.99823C 4.41537,2.99823 1.99939,5.41425 1.99939,8.49823C 1.99939,12.2733 5.4014,15.3602 10.5504,20.0333L 11.9994,21.3492L 13.4484,20.0333C 18.5974,15.3602 21.9994,12.2733 21.9994,8.49823C 21.9994,5.41425 19.5834,2.99823 16.4994,2.99823 Z ' })
                )
            );
        }
    }]);

    return MdiHeartOutline;
}(React.Component);

exports.default = MdiHeartOutline;
module.exports = exports['default'];