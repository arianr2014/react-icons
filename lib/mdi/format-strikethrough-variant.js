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

var MdiFormatStrikethroughVariant = function (_React$Component) {
    _inherits(MdiFormatStrikethroughVariant, _React$Component);

    function MdiFormatStrikethroughVariant() {
        _classCallCheck(this, MdiFormatStrikethroughVariant);

        return _possibleConstructorReturn(this, (MdiFormatStrikethroughVariant.__proto__ || Object.getPrototypeOf(MdiFormatStrikethroughVariant)).apply(this, arguments));
    }

    _createClass(MdiFormatStrikethroughVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 23,12L 23,14L 18.6073,14C 19.612,16.1408 19.5643,21.9887 12.3828,22.0156C 4.05469,22.0469 4.36719,15.5156 4.36719,15.5156L 8.33594,15.5469C 8.36719,18.9219 11.4766,18.9219 12.1172,18.875C 12.7578,18.8281 15.1484,18.8437 15.3359,16.5C 15.423,15.4116 14.3241,14.5794 13.1219,14L 1,14L 1,12L 23,12 Z M 19.4141,7.89063L 15.4297,7.85938C 15.4297,7.85938 15.6016,5.09375 12.1484,5.07813C 8.69531,5.06251 8.97656,7.28125 9.00781,7.5625C 9.03906,7.84375 9.33594,9.21875 12.0078,9.875L 5.71094,9.875C 5.71094,9.875 2.2231,3.14677 10.7422,1.98438C 19.4453,0.796883 19.4297,7.90625 19.4141,7.89063 Z ' })
                )
            );
        }
    }]);

    return MdiFormatStrikethroughVariant;
}(React.Component);

exports.default = MdiFormatStrikethroughVariant;
module.exports = exports['default'];