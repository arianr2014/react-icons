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

var MdiMouse = function (_React$Component) {
    _inherits(MdiMouse, _React$Component);

    function MdiMouse() {
        _classCallCheck(this, MdiMouse);

        return _possibleConstructorReturn(this, (MdiMouse.__proto__ || Object.getPrototypeOf(MdiMouse)).apply(this, arguments));
    }

    _createClass(MdiMouse, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10.9994,1.06737C 7.05438,1.56035 3.99939,4.91936 3.99939,8.99837L 10.9994,8.99837M 3.99939,14.9984C 3.99939,19.4164 7.58139,22.9984 11.9994,22.9984C 16.4174,22.9984 19.9994,19.4164 19.9994,14.9984L 19.9994,10.9984L 3.99939,10.9984M 12.9994,1.06737L 12.9994,8.99837L 19.9994,8.99837C 19.9994,4.91936 16.9444,1.56035 12.9994,1.06737 Z ' })
                )
            );
        }
    }]);

    return MdiMouse;
}(React.Component);

exports.default = MdiMouse;
module.exports = exports['default'];