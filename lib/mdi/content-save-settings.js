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

var MdiContentSaveSettings = function (_React$Component) {
    _inherits(MdiContentSaveSettings, _React$Component);

    function MdiContentSaveSettings() {
        _classCallCheck(this, MdiContentSaveSettings);

        return _possibleConstructorReturn(this, (MdiContentSaveSettings.__proto__ || Object.getPrototypeOf(MdiContentSaveSettings)).apply(this, arguments));
    }

    _createClass(MdiContentSaveSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,8L 15,4L 5,4L 5,8L 15,8 Z M 12,18C 13.66,18 15,16.66 15,15C 15,13.34 13.66,12 12,12C 10.34,12 9,13.34 9,15C 9,16.66 10.34,18 12,18 Z M 17,2.00001L 21,6.00001L 21,18C 21,19.1 20.1,20 19,20L 5,20C 3.89,20 3,19.1 3,18L 3,4.00001C 3,2.9 3.89,2.00001 5,2.00001L 17,2.00001 Z M 11,22L 13,22L 13,24L 11,24L 11,22 Z M 7,22L 9,22L 9,24L 7,24L 7,22 Z M 15,22L 17,22L 17,24L 15,24L 15,22 Z ' })
                )
            );
        }
    }]);

    return MdiContentSaveSettings;
}(React.Component);

exports.default = MdiContentSaveSettings;
module.exports = exports['default'];