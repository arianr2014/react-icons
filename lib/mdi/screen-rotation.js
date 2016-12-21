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

var MdiScreenRotation = function (_React$Component) {
    _inherits(MdiScreenRotation, _React$Component);

    function MdiScreenRotation() {
        _classCallCheck(this, MdiScreenRotation);

        return _possibleConstructorReturn(this, (MdiScreenRotation.__proto__ || Object.getPrototypeOf(MdiScreenRotation)).apply(this, arguments));
    }

    _createClass(MdiScreenRotation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7.52,21.48C 4.25,19.94 1.91,16.76 1.55,13L 0.05,13C 0.56,19.16 5.71,24 12,24L 12.66,23.97L 8.85,20.16M 14.83,21.19L 2.81,9.17L 9.17,2.81L 21.19,14.83M 10.23,1.75C 9.64,1.16 8.69,1.16 8.11,1.75L 1.75,8.11C 1.16,8.7 1.16,9.65 1.75,10.23L 13.77,22.25C 14.36,22.84 15.31,22.84 15.89,22.25L 22.25,15.89C 22.84,15.3 22.84,14.35 22.25,13.77L 10.23,1.75 Z M 16.48,2.52C 19.75,4.07 22.09,7.24 22.45,11L 23.95,11C 23.44,4.84 18.29,1.90735e-006 12,1.90735e-006L 11.34,0.0300045L 15.15,3.84L 16.48,2.52 Z ' })
                )
            );
        }
    }]);

    return MdiScreenRotation;
}(React.Component);

exports.default = MdiScreenRotation;
module.exports = exports['default'];