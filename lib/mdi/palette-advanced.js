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

var MdiPaletteAdvanced = function (_React$Component) {
    _inherits(MdiPaletteAdvanced, _React$Component);

    function MdiPaletteAdvanced() {
        _classCallCheck(this, MdiPaletteAdvanced);

        return _possibleConstructorReturn(this, (MdiPaletteAdvanced.__proto__ || Object.getPrototypeOf(MdiPaletteAdvanced)).apply(this, arguments));
    }

    _createClass(MdiPaletteAdvanced, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,22L 9.99995,22L 9.99995,20L 22,20L 22,22 Z M 2.00002,22L 2.00002,20L 8.99995,20L 8.99995,22L 2.00002,22 Z M 18,18L 18,10L 22,10L 22,18L 18,18 Z M 18,3.00001L 22,3.00001L 22,9.00002L 18,9.00002L 18,3.00001 Z M 2.00001,18L 2.00001,3L 16,3L 16,18L 2.00001,18 Z M 9.00001,14.5625C 10.655,14.5625 12,13.2175 12,11.5625C 12,9.5625 9.00001,6.1875 9.00001,6.1875C 9.00001,6.1875 6.00001,9.5625 6.00001,11.5625C 6.00001,13.2175 7.34501,14.5625 9.00001,14.5625 Z ' })
                )
            );
        }
    }]);

    return MdiPaletteAdvanced;
}(React.Component);

exports.default = MdiPaletteAdvanced;
module.exports = exports['default'];