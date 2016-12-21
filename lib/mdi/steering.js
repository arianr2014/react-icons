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

var MdiSteering = function (_React$Component) {
    _inherits(MdiSteering, _React$Component);

    function MdiSteering() {
        _classCallCheck(this, MdiSteering);

        return _possibleConstructorReturn(this, (MdiSteering.__proto__ || Object.getPrototypeOf(MdiSteering)).apply(this, arguments));
    }

    _createClass(MdiSteering, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2C 6.5,2 2,6.5 2,12C 2,17.5 6.5,22 12,22C 17.5,22 22,17.5 22,12C 22,6.5 17.5,2 12,2 Z M 12,4C 16.1,4 19.5,7.1 20,11L 17,11C 16.5,9.9 14.4,9 12,9C 9.6,9 7.5,9.9 7,11L 4,11C 4.5,7.1 7.9,4 12,4 Z M 4,13L 7,13C 7.2,14.3 8.2,16.6 11,17L 11,20C 7.4,19.6 4.4,16.6 4,13 Z M 13,20L 13,17C 15.8,16.6 16.7,14.3 17,13L 20,13C 19.6,16.6 16.6,19.6 13,20 Z ' })
                )
            );
        }
    }]);

    return MdiSteering;
}(React.Component);

exports.default = MdiSteering;
module.exports = exports['default'];