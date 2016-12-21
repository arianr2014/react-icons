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

var MdiDisqusOutline = function (_React$Component) {
    _inherits(MdiDisqusOutline, _React$Component);

    function MdiDisqusOutline() {
        _classCallCheck(this, MdiDisqusOutline);

        return _possibleConstructorReturn(this, (MdiDisqusOutline.__proto__ || Object.getPrototypeOf(MdiDisqusOutline)).apply(this, arguments));
    }

    _createClass(MdiDisqusOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'round', d: 'M 11.9,14.5L 10.8,14.5L 10.8,9.5L 11.9,9.5C 13.5,9.5 14.6,10.4 14.6,12C 14.6,13.6 13.5,14.5 11.9,14.5 Z M 11.9,7L 8.1,7L 8.1,17L 11.8,17C 15.3,17 17.4,14.9 17.4,12L 17.4,12C 17.4,9.1 15.4,7 11.9,7 Z M 12,20C 10.1,20 8.3,19.3 6.9,18.1L 6.2,17.5L 4.5,17.7L 5.2,16.1L 4.9,15.3C 4.4,14.2 4.2,13.1 4.2,11.9C 4.2,7.5 7.8,3.9 12.1,3.9C 16.4,3.9 19.9,7.6 19.9,12C 19.9,16.4 16.3,20 12,20 Z M 12,2C 6.5,2 2.1,6.5 2.1,12C 2.1,13.5 2.4,14.9 3,16.2L 1.4,20.3L 5.7,19.7C 7.4,21.2 9.7,22.1 12.1,22.1C 17.6,22.1 22,17.6 22,12.1C 22,6.6 17.5,2 12,2 Z ' })
                )
            );
        }
    }]);

    return MdiDisqusOutline;
}(React.Component);

exports.default = MdiDisqusOutline;
module.exports = exports['default'];