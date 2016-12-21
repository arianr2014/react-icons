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

var MdiEmoticonSad = function (_React$Component) {
    _inherits(MdiEmoticonSad, _React$Component);

    function MdiEmoticonSad() {
        _classCallCheck(this, MdiEmoticonSad);

        return _possibleConstructorReturn(this, (MdiEmoticonSad.__proto__ || Object.getPrototypeOf(MdiEmoticonSad)).apply(this, arguments));
    }

    _createClass(MdiEmoticonSad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonSad;
}(React.Component);

exports.default = MdiEmoticonSad;
module.exports = exports['default'];