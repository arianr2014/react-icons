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

var MdiBlinds = function (_React$Component) {
    _inherits(MdiBlinds, _React$Component);

    function MdiBlinds() {
        _classCallCheck(this, MdiBlinds);

        return _possibleConstructorReturn(this, (MdiBlinds.__proto__ || Object.getPrototypeOf(MdiBlinds)).apply(this, arguments));
    }

    _createClass(MdiBlinds, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,2L 21,2C 21.5523,2 22,2.44772 22,3L 22,5C 22,5.55229 21.5523,6 21,6L 20,6L 20,13C 20,13.5523 19.5523,14 19,14L 13,14L 13,16.1707C 14.1652,16.5825 15,17.6938 15,19C 15,20.6569 13.6569,22 12,22C 10.3431,22 9,20.6569 9,19C 9,17.6938 9.83481,16.5825 11,16.1707L 11,14L 5,14C 4.44771,14 4,13.5523 4,13L 4,6L 3,6C 2.44772,6 2,5.55229 2,5L 2,3C 2,2.44772 2.44772,2 3,2 Z M 12,18C 11.4477,18 11,18.4477 11,19C 11,19.5523 11.4477,20 12,20C 12.5523,20 13,19.5523 13,19C 13,18.4477 12.5523,18 12,18 Z ' })
                )
            );
        }
    }]);

    return MdiBlinds;
}(React.Component);

exports.default = MdiBlinds;
module.exports = exports['default'];