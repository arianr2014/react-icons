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

var MdiVolumeOff = function (_React$Component) {
    _inherits(MdiVolumeOff, _React$Component);

    function MdiVolumeOff() {
        _classCallCheck(this, MdiVolumeOff);

        return _possibleConstructorReturn(this, (MdiVolumeOff.__proto__ || Object.getPrototypeOf(MdiVolumeOff)).apply(this, arguments));
    }

    _createClass(MdiVolumeOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,3.99805L 9.9084,6.08905L 11.9994,8.18005M 4.2724,2.99805L 2.9994,4.27106L 7.7264,8.99805L 2.9994,8.99805L 2.9994,14.998L 6.9994,14.998L 11.9994,19.998L 11.9994,13.2711L 16.2544,17.5261C 15.5844,18.043 14.8304,18.4561 13.9994,18.704L 13.9994,20.767C 15.3764,20.454 16.6284,19.8201 17.6844,18.9561L 19.7264,20.998L 20.9994,19.725L 11.9994,10.725M 18.9994,11.998C 18.9994,12.9371 18.7954,13.822 18.4604,14.6401L 19.9744,16.1541C 20.6244,14.91 20.9994,13.499 20.9994,11.998C 20.9994,7.71503 18.0064,4.13806 13.9994,3.22803L 13.9994,5.29205C 16.8904,6.15204 18.9994,8.82806 18.9994,11.998 Z M 16.4994,11.998C 16.4994,10.2321 15.4794,8.70807 13.9994,7.97003L 13.9994,10.1801L 16.4534,12.634C 16.4834,12.426 16.4994,12.2141 16.4994,11.998 Z ' })
                )
            );
        }
    }]);

    return MdiVolumeOff;
}(React.Component);

exports.default = MdiVolumeOff;
module.exports = exports['default'];