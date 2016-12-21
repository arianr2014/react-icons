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

var MdiTabletAndroid = function (_React$Component) {
    _inherits(MdiTabletAndroid, _React$Component);

    function MdiTabletAndroid() {
        _classCallCheck(this, MdiTabletAndroid);

        return _possibleConstructorReturn(this, (MdiTabletAndroid.__proto__ || Object.getPrototypeOf(MdiTabletAndroid)).apply(this, arguments));
    }

    _createClass(MdiTabletAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.2494,18.999L 4.74939,18.999L 4.74939,2.99904L 19.2494,2.99904M 13.9994,21.999L 9.99939,21.999L 9.99939,20.999L 13.9994,20.999M 17.9994,-0.000955582L 5.99939,-0.000955582C 4.34238,-0.000955582 2.99939,1.34203 2.99939,2.99904L 2.99939,20.999C 2.99939,22.6561 4.34238,23.999 5.99939,23.999L 17.9994,23.999C 19.6564,23.999 20.9994,22.6561 20.9994,20.999L 20.9994,2.99904C 20.9994,1.34203 19.6564,-0.000955582 17.9994,-0.000955582 Z ' })
                )
            );
        }
    }]);

    return MdiTabletAndroid;
}(React.Component);

exports.default = MdiTabletAndroid;
module.exports = exports['default'];