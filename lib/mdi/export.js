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

var MdiExport = function (_React$Component) {
    _inherits(MdiExport, _React$Component);

    function MdiExport() {
        _classCallCheck(this, MdiExport);

        return _possibleConstructorReturn(this, (MdiExport.__proto__ || Object.getPrototypeOf(MdiExport)).apply(this, arguments));
    }

    _createClass(MdiExport, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 23,12L 19,8.00003L 19,11L 10,11L 10,13L 19,13L 19,16M 1.00001,18L 1.00001,6.00002C 1.00001,4.89002 1.9,4.00003 3,4.00003L 15,4.00001C 16.1,4.00001 17,4.89001 17,6.00001L 17,9L 15,9L 15,6.00001L 3,6.00002L 3,18L 15,18L 15,15L 17,15L 17,18C 17,19.1 16.1,20 15,20L 3,20C 1.9,20 1.00001,19.11 1.00001,18 Z ' })
                )
            );
        }
    }]);

    return MdiExport;
}(React.Component);

exports.default = MdiExport;
module.exports = exports['default'];