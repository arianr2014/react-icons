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

var MdiVolumeHigh = function (_React$Component) {
    _inherits(MdiVolumeHigh, _React$Component);

    function MdiVolumeHigh() {
        _classCallCheck(this, MdiVolumeHigh);

        return _possibleConstructorReturn(this, (MdiVolumeHigh.__proto__ || Object.getPrototypeOf(MdiVolumeHigh)).apply(this, arguments));
    }

    _createClass(MdiVolumeHigh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9994,3.22858L 13.9994,5.29156C 16.8904,6.15253 18.9994,8.82855 18.9994,11.9976C 18.9994,15.1675 16.8904,17.8436 13.9994,18.7045L 13.9994,20.7675C 18.0064,19.8566 20.9994,16.2805 20.9994,11.9976C 20.9994,7.71558 18.0064,4.13855 13.9994,3.22858 Z M 16.4994,11.9976C 16.4994,10.2325 15.4794,8.70752 13.9994,7.97052L 13.9994,16.0256C 15.4794,15.2875 16.4994,13.7635 16.4994,11.9976 Z M 2.9994,8.99756L 2.9994,14.9976L 6.9994,14.9976L 11.9994,19.9976L 11.9994,3.99756L 6.9994,8.99756L 2.9994,8.99756 Z ' })
                )
            );
        }
    }]);

    return MdiVolumeHigh;
}(React.Component);

exports.default = MdiVolumeHigh;
module.exports = exports['default'];