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

var MdiMagnify = function (_React$Component) {
    _inherits(MdiMagnify, _React$Component);

    function MdiMagnify() {
        _classCallCheck(this, MdiMagnify);

        return _possibleConstructorReturn(this, (MdiMagnify.__proto__ || Object.getPrototypeOf(MdiMagnify)).apply(this, arguments));
    }

    _createClass(MdiMagnify, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.5,3C 13.0899,3 16,5.91015 16,9.5C 16,11.1149 15.411,12.5923 14.4362,13.7291L 14.7071,14L 15.5,14L 20.5,19L 19,20.5L 14,15.5L 14,14.7071L 13.7291,14.4362C 12.5923,15.411 11.1149,16 9.5,16C 5.91015,16 3,13.0899 3,9.5C 3,5.91015 5.91015,3 9.5,3 Z M 9.5,5.00001C 7.01472,5.00001 5,7.01473 5,9.50001C 5,11.9853 7.01472,14 9.5,14C 11.9853,14 14,11.9853 14,9.50001C 14,7.01473 11.9853,5.00001 9.5,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiMagnify;
}(React.Component);

exports.default = MdiMagnify;
module.exports = exports['default'];