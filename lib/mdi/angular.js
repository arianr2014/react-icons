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

var MdiAngular = function (_React$Component) {
    _inherits(MdiAngular, _React$Component);

    function MdiAngular() {
        _classCallCheck(this, MdiAngular);

        return _possibleConstructorReturn(this, (MdiAngular.__proto__ || Object.getPrototypeOf(MdiAngular)).apply(this, arguments));
    }

    _createClass(MdiAngular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2.5L 20.8445,5.654L 19.4955,17.3485L 12,21.5L 4.5045,17.3485L 3.1555,5.654L 12,2.5 Z M 12,4.5995L 6.471,16.997L 8.5325,16.997L 9.644,14.223L 14.337,14.223L 15.4485,16.997L 17.51,16.997L 12,4.5995 Z M 13.615,12.513L 10.385,12.513L 12,8.6275L 13.615,12.513 Z ' })
                )
            );
        }
    }]);

    return MdiAngular;
}(React.Component);

exports.default = MdiAngular;
module.exports = exports['default'];