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

var MdiTexture = function (_React$Component) {
    _inherits(MdiTexture, _React$Component);

    function MdiTexture() {
        _classCallCheck(this, MdiTexture);

        return _possibleConstructorReturn(this, (MdiTexture.__proto__ || Object.getPrototypeOf(MdiTexture)).apply(this, arguments));
    }

    _createClass(MdiTexture, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9.29,21L 12.12,21L 21,12.12L 21,9.29M 19,21C 19.55,21 20.05,20.78 20.41,20.41C 20.78,20.05 21,19.55 21,19L 21,17L 17,21M 5,3C 3.9,3 3,3.9 3,5L 3,7L 7,3M 11.88,3L 3,11.88L 3,14.71L 14.71,3M 19.51,3.08L 3.08,19.51C 3.17,19.85 3.35,20.16 3.59,20.41C 3.84,20.65 4.15,20.83 4.49,20.92L 20.93,4.49C 20.74,3.8 20.2,3.26 19.51,3.08 Z ' })
                )
            );
        }
    }]);

    return MdiTexture;
}(React.Component);

exports.default = MdiTexture;
module.exports = exports['default'];