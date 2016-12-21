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

var MdiRadioHandheld = function (_React$Component) {
    _inherits(MdiRadioHandheld, _React$Component);

    function MdiRadioHandheld() {
        _classCallCheck(this, MdiRadioHandheld);

        return _possibleConstructorReturn(this, (MdiRadioHandheld.__proto__ || Object.getPrototypeOf(MdiRadioHandheld)).apply(this, arguments));
    }

    _createClass(MdiRadioHandheld, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9,2C 8.446,2 8,2.446 8,3C 8,8.6667 8,14.3333 8,20C 8,21.108 8.89199,22 10,22L 15,22C 16.108,22 17,21.108 17,20L 17,9C 17,7.892 16.108,7 15,7L 10,7L 10,3C 10,2.446 9.554,2 9,2 Z M 10,9L 15,9L 15,13L 10,13L 10,9 Z ' })
                )
            );
        }
    }]);

    return MdiRadioHandheld;
}(React.Component);

exports.default = MdiRadioHandheld;
module.exports = exports['default'];