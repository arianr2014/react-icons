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

var MdiDictionary = function (_React$Component) {
    _inherits(MdiDictionary, _React$Component);

    function MdiDictionary() {
        _classCallCheck(this, MdiDictionary);

        return _possibleConstructorReturn(this, (MdiDictionary.__proto__ || Object.getPrototypeOf(MdiDictionary)).apply(this, arguments));
    }

    _createClass(MdiDictionary, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 5.8125,2C 4.8293,2.0926 3.99565,3.0125 4,4L 4,20C 4,21.0472 4.9528,22 6,22L 18,22C 19.0472,22 20,21.0472 20,20L 20,4C 20,2.89 19.1,2 18,2L 12,2L 12,9L 9.5,7.5L 7,9L 7,2L 6,2C 5.93755,1.9971 5.87495,1.9971 5.8125,2 Z M 12,13L 13,13C 13.554,13 14,13.446 14,14L 14,18L 13,18L 13,16L 12,16L 12,18L 11,18L 11,14C 11,13.446 11.446,13 12,13 Z M 12,14L 12,15L 13,15L 13,14L 12,14 Z M 15,15L 18,15L 18,16L 16,19L 18,19L 18,20L 15,20L 15,19L 17,16L 15,16L 15,15 Z ' })
                )
            );
        }
    }]);

    return MdiDictionary;
}(React.Component);

exports.default = MdiDictionary;
module.exports = exports['default'];