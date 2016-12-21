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

var MdiCamcorderOff = function (_React$Component) {
    _inherits(MdiCamcorderOff, _React$Component);

    function MdiCamcorderOff() {
        _classCallCheck(this, MdiCamcorderOff);

        return _possibleConstructorReturn(this, (MdiCamcorderOff.__proto__ || Object.getPrototypeOf(MdiCamcorderOff)).apply(this, arguments));
    }

    _createClass(MdiCamcorderOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.27227,1.99805L 1.99926,3.27106L 4.72726,5.99805L 3.99926,5.99805C 3.44726,5.99805 2.99926,6.44604 2.99926,6.99805L 2.99926,16.998C 2.99926,17.55 3.44726,17.998 3.99926,17.998L 15.9993,17.998C 16.2043,17.998 16.3853,17.921 16.5433,17.8151L 19.7273,20.998L 20.9993,19.725M 20.9993,6.49805L 16.9993,10.498L 16.9993,6.99805C 16.9993,6.44604 16.5513,5.99805 15.9993,5.99805L 9.81826,5.99805L 20.9993,17.1791L 20.9993,6.49805 Z ' })
                )
            );
        }
    }]);

    return MdiCamcorderOff;
}(React.Component);

exports.default = MdiCamcorderOff;
module.exports = exports['default'];