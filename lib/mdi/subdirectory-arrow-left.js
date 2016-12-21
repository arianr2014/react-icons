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

var MdiSubdirectoryArrowLeft = function (_React$Component) {
    _inherits(MdiSubdirectoryArrowLeft, _React$Component);

    function MdiSubdirectoryArrowLeft() {
        _classCallCheck(this, MdiSubdirectoryArrowLeft);

        return _possibleConstructorReturn(this, (MdiSubdirectoryArrowLeft.__proto__ || Object.getPrototypeOf(MdiSubdirectoryArrowLeft)).apply(this, arguments));
    }

    _createClass(MdiSubdirectoryArrowLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11,9L 12.42,10.42L 8.83,14L 18,14L 18,4L 20,4L 20,16L 8.83,16L 12.42,19.58L 11,21L 5,15L 11,9 Z ' })
                )
            );
        }
    }]);

    return MdiSubdirectoryArrowLeft;
}(React.Component);

exports.default = MdiSubdirectoryArrowLeft;
module.exports = exports['default'];