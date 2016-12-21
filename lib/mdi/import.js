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

var MdiImport = function (_React$Component) {
    _inherits(MdiImport, _React$Component);

    function MdiImport() {
        _classCallCheck(this, MdiImport);

        return _possibleConstructorReturn(this, (MdiImport.__proto__ || Object.getPrototypeOf(MdiImport)).apply(this, arguments));
    }

    _createClass(MdiImport, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14,12L 10,8L 10,11L 2.00001,11L 2.00001,13L 10,13L 10,16M 20,18L 20,6.00002C 20,4.89002 19.1,4.00002 18,4.00002L 6,4.00001C 4.9,4.00001 4,4.89001 4,6.00001L 4,9L 6,9L 6,6.00001L 18,6.00002L 18,18L 6,18L 6,15L 4,15L 4,18C 4,19.1 4.9,20 6,20L 18,20C 19.1,20 20,19.11 20,18 Z ' })
                )
            );
        }
    }]);

    return MdiImport;
}(React.Component);

exports.default = MdiImport;
module.exports = exports['default'];