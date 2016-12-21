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

var MdiFolderUpload = function (_React$Component) {
    _inherits(MdiFolderUpload, _React$Component);

    function MdiFolderUpload() {
        _classCallCheck(this, MdiFolderUpload);

        return _possibleConstructorReturn(this, (MdiFolderUpload.__proto__ || Object.getPrototypeOf(MdiFolderUpload)).apply(this, arguments));
    }

    _createClass(MdiFolderUpload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,6C 21.1035,6 22,6.896 22,8L 22,18C 22,19.104 21.1035,20 20,20L 4,20C 2.895,20 2,19.104 2,18L 2.00977,6C 2.00977,4.896 2.895,4 4,4L 10,4L 12,6L 20,6 Z M 10.75,13L 14,13L 14,17L 16,17L 16,13L 19.25,13L 15,8.75' })
                )
            );
        }
    }]);

    return MdiFolderUpload;
}(React.Component);

exports.default = MdiFolderUpload;
module.exports = exports['default'];