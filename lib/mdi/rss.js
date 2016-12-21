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

var MdiRss = function (_React$Component) {
    _inherits(MdiRss, _React$Component);

    function MdiRss() {
        _classCallCheck(this, MdiRss);

        return _possibleConstructorReturn(this, (MdiRss.__proto__ || Object.getPrototypeOf(MdiRss)).apply(this, arguments));
    }

    _createClass(MdiRss, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 6.18,15.64C 7.38398,15.64 8.36,16.616 8.36,17.82C 8.36,19.024 7.38398,20 6.18,20C 4.97602,20 4,19.024 4,17.82C 4,16.616 4.97602,15.64 6.18,15.64 Z M 4,4.44C 12.59,4.44 19.56,11.41 19.56,20L 16.73,20C 16.73,12.97 11.03,7.27 4,7.27L 4,4.44 Z M 4,10.1C 9.47,10.1 13.9,14.53 13.9,20L 11.07,20C 11.07,16.1 7.9,12.93 4,12.93L 4,10.1 Z ' })
                )
            );
        }
    }]);

    return MdiRss;
}(React.Component);

exports.default = MdiRss;
module.exports = exports['default'];