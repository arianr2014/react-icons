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

var MdiFolderMultipleImage = function (_React$Component) {
    _inherits(MdiFolderMultipleImage, _React$Component);

    function MdiFolderMultipleImage() {
        _classCallCheck(this, MdiFolderMultipleImage);

        return _possibleConstructorReturn(this, (MdiFolderMultipleImage.__proto__ || Object.getPrototypeOf(MdiFolderMultipleImage)).apply(this, arguments));
    }

    _createClass(MdiFolderMultipleImage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,15L 11.5,9L 15,13.51L 17.5,10.5L 21,15M 22,4L 14,4L 12,2L 6,2C 4.9,2 4.01,2.9 4.01,4L 4,16C 4,17.1 4.9,18 6,18L 22,18C 23.1,18 24,17.1 24,16L 24,6C 24,4.9 23.1,4 22,4 Z M 2,6L 0,6L 0,11L 0.00999999,11L 0,20C 0,21.1 0.9,22 2,22L 20,22L 20,20L 2,20L 2,6 Z ' })
                )
            );
        }
    }]);

    return MdiFolderMultipleImage;
}(React.Component);

exports.default = MdiFolderMultipleImage;
module.exports = exports['default'];