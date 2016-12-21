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

var MdiTranscribeClose = function (_React$Component) {
    _inherits(MdiTranscribeClose, _React$Component);

    function MdiTranscribeClose() {
        _classCallCheck(this, MdiTranscribeClose);

        return _possibleConstructorReturn(this, (MdiTranscribeClose.__proto__ || Object.getPrototypeOf(MdiTranscribeClose)).apply(this, arguments));
    }

    _createClass(MdiTranscribeClose, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,22.9981L 7.99939,18.9981L 15.9994,18.9981L 11.9994,22.9981 Z M 20,3C 21.104,3 22,3.896 22,5L 22,15C 22,16.104 21.104,17 20,17L 4,17C 2.895,17 2,16.104 2,15L 2.00999,5C 2.00999,3.896 2.895,3 4,3L 20,3 Z M 18.0006,15.0019L 18.0006,13.0019L 12.5006,13.0019L 10.5006,15.0019L 18.0006,15.0019 Z M 6.00059,15.0019L 8.47561,15.0019L 15.3536,8.12295C 15.5496,7.92792 15.5496,7.61092 15.3536,7.41594L 13.5866,5.64793C 13.3906,5.45294 13.0746,5.45294 12.8786,5.64793L 6.00059,12.5269L 6.00059,15.0019 Z ' })
                )
            );
        }
    }]);

    return MdiTranscribeClose;
}(React.Component);

exports.default = MdiTranscribeClose;
module.exports = exports['default'];