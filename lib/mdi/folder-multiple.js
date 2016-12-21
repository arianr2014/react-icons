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

var MdiFolderMultiple = function (_React$Component) {
    _inherits(MdiFolderMultiple, _React$Component);

    function MdiFolderMultiple() {
        _classCallCheck(this, MdiFolderMultiple);

        return _possibleConstructorReturn(this, (MdiFolderMultiple.__proto__ || Object.getPrototypeOf(MdiFolderMultiple)).apply(this, arguments));
    }

    _createClass(MdiFolderMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,4L 14,4L 12,2L 6,2C 4.9,2 4.01,2.9 4.01,4L 4,16C 4,17.1 4.9,18 6,18L 22,18C 23.1,18 24,17.1 24,16L 24,6C 24,4.9 23.1,4 22,4 Z M 2,6L -2.98023e-008,6L -2.98023e-008,11L 0.0100021,11L -2.98023e-008,20C -2.98023e-008,21.1 0.900001,22 2,22L 20,22L 20,20L 2,20L 2,6 Z ' })
                )
            );
        }
    }]);

    return MdiFolderMultiple;
}(React.Component);

exports.default = MdiFolderMultiple;
module.exports = exports['default'];