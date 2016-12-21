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

var MdiFlattr = function (_React$Component) {
    _inherits(MdiFlattr, _React$Component);

    function MdiFlattr() {
        _classCallCheck(this, MdiFlattr);

        return _possibleConstructorReturn(this, (MdiFlattr.__proto__ || Object.getPrototypeOf(MdiFlattr)).apply(this, arguments));
    }

    _createClass(MdiFlattr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21,9.00001L 21,15C 21,18.3137 18.3137,21 15,21L 4.41484,21L 11.0669,14.3479C 11.3779,14.0369 11.689,13.7259 11.8445,13.7508C 12,13.7757 12,14.1366 12,14.4974L 12,17L 14,17C 15.6569,17 17,15.6569 17,14L 17,8.41484L 21,4.41485L 21,9.00001 Z M 3,15L 3,9C 3,5.68629 5.68629,3 9,3L 19.5851,3L 12.9331,9.65208C 12.6221,9.9631 12.311,10.2741 12.1555,10.2492C 12,10.2243 12,9.86343 12,9.50256L 12,7L 9.99999,7C 8.34314,7 6.99999,8.34315 6.99999,10L 6.99999,15.5852L 3,19.5852L 3,15 Z ' })
                )
            );
        }
    }]);

    return MdiFlattr;
}(React.Component);

exports.default = MdiFlattr;
module.exports = exports['default'];