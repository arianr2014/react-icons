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

var MdiProfessionalHexagon = function (_React$Component) {
    _inherits(MdiProfessionalHexagon, _React$Component);

    function MdiProfessionalHexagon() {
        _classCallCheck(this, MdiProfessionalHexagon);

        return _possibleConstructorReturn(this, (MdiProfessionalHexagon.__proto__ || Object.getPrototypeOf(MdiProfessionalHexagon)).apply(this, arguments));
    }

    _createClass(MdiProfessionalHexagon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,16.5C 21,16.8812 20.7867,17.2125 20.473,17.3813L 12.5664,21.8243C 12.4054,21.9351 12.2103,22 12,22C 11.7897,22 11.5946,21.9351 11.4336,21.8243L 3.52716,17.3814C 3.21335,17.2127 3,16.8812 3,16.5L 3,7.5C 3,7.11876 3.21334,6.78735 3.52716,6.61864L 11.4336,2.17575C 11.5946,2.0649 11.7897,2.00001 12,2.00001C 12.2103,2.00001 12.4053,2.06489 12.5664,2.17574L 20.473,6.61872C 20.7867,6.78746 21,7.11883 21,7.5L 21,16.5 Z M 5,9L 5,15L 6.25,15L 6.25,13L 7,13C 8.10457,13 9,12.1046 9,11C 9,9.89544 8.10457,9.00001 7,9.00001L 5,9 Z M 6.25,12L 6.25,10L 6.74999,10C 7.30228,10 7.74999,10.4477 7.74999,11C 7.74999,11.5523 7.30228,12 6.74999,12L 6.25,12 Z M 9.75,9L 9.75,15L 11,15L 11,13L 11.75,13L 12.4142,15L 13.7313,15L 12.9374,12.6095C 13.4304,12.2452 13.75,11.66 13.75,11C 13.75,9.89544 12.8546,9.00001 11.75,9.00001L 9.75,9 Z M 11,12L 11,10L 11.5,10C 12.0523,10 12.5,10.4477 12.5,11C 12.5,11.5523 12.0523,12 11.5,12L 11,12 Z M 17,9C 15.6193,9 14.5,10.3431 14.5,12C 14.5,13.6569 15.6193,15 17,15C 18.3807,15 19.5,13.6569 19.5,12C 19.5,10.3431 18.3807,9 17,9 Z M 17,10.25C 17.7594,10.25 18.375,11.0335 18.375,12C 18.375,12.9665 17.7594,13.75 17,13.75C 16.2406,13.75 15.625,12.9665 15.625,12C 15.625,11.0335 16.2406,10.25 17,10.25 Z ' })
                )
            );
        }
    }]);

    return MdiProfessionalHexagon;
}(React.Component);

exports.default = MdiProfessionalHexagon;
module.exports = exports['default'];