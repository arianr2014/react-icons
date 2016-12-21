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

var MdiSimOff = function (_React$Component) {
    _inherits(MdiSimOff, _React$Component);

    function MdiSimOff() {
        _classCallCheck(this, MdiSimOff);

        return _possibleConstructorReturn(this, (MdiSimOff.__proto__ || Object.getPrototypeOf(MdiSimOff)).apply(this, arguments));
    }

    _createClass(MdiSimOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18.99,5C 18.99,3.9 18.1,3 17,3L 10,3L 7.66,5.34L 19,16.68L 18.99,5 Z M 3.65,3.88L 2.38,5.15L 5,7.77L 5,19C 5,20.1 5.9,21 7,21L 17.01,21C 17.36,21 17.68,20.9 17.97,20.74L 19.85,22.62L 21.12,21.35L 3.65,3.88 Z ' })
                )
            );
        }
    }]);

    return MdiSimOff;
}(React.Component);

exports.default = MdiSimOff;
module.exports = exports['default'];