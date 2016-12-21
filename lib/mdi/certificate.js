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

var MdiCertificate = function (_React$Component) {
    _inherits(MdiCertificate, _React$Component);

    function MdiCertificate() {
        _classCallCheck(this, MdiCertificate);

        return _possibleConstructorReturn(this, (MdiCertificate.__proto__ || Object.getPrototypeOf(MdiCertificate)).apply(this, arguments));
    }

    _createClass(MdiCertificate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,2.998C 2.89498,2.998 2.00977,3.894 2.00977,4.998L 2,14.998C 2,16.102 2.88623,16.998 3.99023,16.998L 12,16.998L 12,22L 15,19L 18,22L 18,16.998L 20,16.998C 21.104,16.998 22,16.102 22,14.998L 22,8L 22,5.998L 22,5C 22,3.8954 21.096,3.1371 20,3L 16.002,3L 16,2.998L 4,2.998 Z M 12,5L 15,7L 18,5L 18,8.5L 21,10L 18,11.5L 18,15L 15,13L 12,15L 12,11.5L 9,10L 12,8.5L 12,5 Z M 4,5L 9,5L 9,7L 4,7L 4,5 Z M 4,9L 7,9L 7,11L 4,11L 4,9 Z M 4,13L 9,13L 9,15L 4,15L 4,13 Z ' })
                )
            );
        }
    }]);

    return MdiCertificate;
}(React.Component);

exports.default = MdiCertificate;
module.exports = exports['default'];