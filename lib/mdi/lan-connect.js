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

var MdiLanConnect = function (_React$Component) {
    _inherits(MdiLanConnect, _React$Component);

    function MdiLanConnect() {
        _classCallCheck(this, MdiLanConnect);

        return _possibleConstructorReturn(this, (MdiLanConnect.__proto__ || Object.getPrototypeOf(MdiLanConnect)).apply(this, arguments));
    }

    _createClass(MdiLanConnect, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,1C 2.892,1 2,1.892 2,3L 2,7C 2,8.108 2.892,9 4,9L 1,9L 1,11L 13,11L 13,9L 10,9C 11.108,9 12,8.108 12,7L 12,3C 12,1.892 11.108,1 10,1L 4,1 Z M 4,3L 10,3L 10,7L 4,7L 4,3 Z M 3,13L 3,18L 3,20L 10,20L 10,18L 5,18L 5,13L 3,13 Z M 14,13C 12.892,13 12,13.892 12,15L 12,19C 12,20.108 12.892,21 14,21L 11,21L 11,23L 23,23L 23,21L 20,21C 21.108,21 22,20.108 22,19L 22,15C 22,13.892 21.108,13 20,13L 14,13 Z M 14,15L 20,15L 20,19L 14,19L 14,15 Z ' })
                )
            );
        }
    }]);

    return MdiLanConnect;
}(React.Component);

exports.default = MdiLanConnect;
module.exports = exports['default'];