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

var MdiEthernet = function (_React$Component) {
    _inherits(MdiEthernet, _React$Component);

    function MdiEthernet() {
        _classCallCheck(this, MdiEthernet);

        return _possibleConstructorReturn(this, (MdiEthernet.__proto__ || Object.getPrototypeOf(MdiEthernet)).apply(this, arguments));
    }

    _createClass(MdiEthernet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7,15L 9,15L 9,18L 11,18L 11,15L 13,15L 13,18L 15,18L 15,15L 17,15L 17,18L 19,18L 19,9L 15,9L 15,6L 9,6L 9,9L 5,9L 5,18L 7,18L 7,15 Z M 4.37502,3L 19.625,3C 20.9367,3 22,4.0634 22,5.375L 22,19.625C 22,20.9366 20.9367,22 19.625,22L 4.37502,22C 3.06333,22 2,20.9366 2,19.625L 2,5.375C 2,4.0634 3.06333,3 4.37502,3 Z ' })
                )
            );
        }
    }]);

    return MdiEthernet;
}(React.Component);

exports.default = MdiEthernet;
module.exports = exports['default'];