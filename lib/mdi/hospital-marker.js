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

var MdiHospitalMarker = function (_React$Component) {
    _inherits(MdiHospitalMarker, _React$Component);

    function MdiHospitalMarker() {
        _classCallCheck(this, MdiHospitalMarker);

        return _possibleConstructorReturn(this, (MdiHospitalMarker.__proto__ || Object.getPrototypeOf(MdiHospitalMarker)).apply(this, arguments));
    }

    _createClass(MdiHospitalMarker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9993,1.99813C 15.8643,1.99813 18.9993,5.13208 18.9993,8.99813C 18.9993,14.2481 11.9993,21.9981 11.9993,21.9981C 11.9993,21.9981 4.99931,14.2481 4.99931,8.99813C 4.99931,5.13208 8.13432,1.99813 11.9993,1.99813 Z M 9,6L 9,12L 11,12L 11,10L 13,10L 13,12L 15,12L 15,6L 13,6L 13,8L 11,8L 11,6L 9,6 Z ' })
                )
            );
        }
    }]);

    return MdiHospitalMarker;
}(React.Component);

exports.default = MdiHospitalMarker;
module.exports = exports['default'];