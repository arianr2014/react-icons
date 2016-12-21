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

var MdiControllerXbox = function (_React$Component) {
    _inherits(MdiControllerXbox, _React$Component);

    function MdiControllerXbox() {
        _classCallCheck(this, MdiControllerXbox);

        return _possibleConstructorReturn(this, (MdiControllerXbox.__proto__ || Object.getPrototypeOf(MdiControllerXbox)).apply(this, arguments));
    }

    _createClass(MdiControllerXbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', stroke: '#FFFFFF', 'stroke-opacity': '1', d: 'M 12,6.05882C 13.7255,6.05882 18.6863,1.7451 21.2745,6.92157C 23.8627,12.098 23.2157,19 21.4902,19C 17.1765,19 19.7647,14.6863 12,14.6863C 4.23529,14.6863 6.82353,19 2.5098,19C 0.784311,19 0.137256,12.098 2.72549,6.92157C 5.31373,1.7451 10.2745,6.05882 12,6.05882 Z M 12,7.5C 11.1716,7.5 10.5,8.17157 10.5,9C 10.5,9.82843 11.1716,10.5 12,10.5C 12.8284,10.5 13.5,9.82843 13.5,9C 13.5,8.17157 12.8284,7.5 12,7.5 Z ' })
                )
            );
        }
    }]);

    return MdiControllerXbox;
}(React.Component);

exports.default = MdiControllerXbox;
module.exports = exports['default'];