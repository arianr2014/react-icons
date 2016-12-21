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

var MdiLogoutVariant = function (_React$Component) {
    _inherits(MdiLogoutVariant, _React$Component);

    function MdiLogoutVariant() {
        _classCallCheck(this, MdiLogoutVariant);

        return _possibleConstructorReturn(this, (MdiLogoutVariant.__proto__ || Object.getPrototypeOf(MdiLogoutVariant)).apply(this, arguments));
    }

    _createClass(MdiLogoutVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.0841,15.585L 16.6701,12.999L 6.99998,13.0001L 6.99998,11.0001L 16.6701,10.999L 14.0841,8.413L 15.4991,6.99902L 20.4991,11.999L 15.4991,16.999L 14.0841,15.585 Z M 18.9994,2.99805C 20.1034,2.99805 20.9994,3.89404 20.9994,4.99805L 20.9994,9.67097L 18.9994,7.67097L 18.9994,4.99805L 4.99939,4.99805L 4.99939,18.998L 18.9994,18.998L 18.9994,16.329L 20.9994,14.329L 20.9994,18.998C 20.9994,20.1021 20.1034,20.998 18.9994,20.998L 4.99939,20.998C 3.89439,20.998 2.99939,20.1021 2.99939,18.998L 2.99939,4.99805C 2.99939,3.89404 3.89439,2.99805 4.99939,2.99805L 18.9994,2.99805 Z ' })
                )
            );
        }
    }]);

    return MdiLogoutVariant;
}(React.Component);

exports.default = MdiLogoutVariant;
module.exports = exports['default'];