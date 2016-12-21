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

var MdiSofa = function (_React$Component) {
    _inherits(MdiSofa, _React$Component);

    function MdiSofa() {
        _classCallCheck(this, MdiSofa);

        return _possibleConstructorReturn(this, (MdiSofa.__proto__ || Object.getPrototypeOf(MdiSofa)).apply(this, arguments));
    }

    _createClass(MdiSofa, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,6L 9,6C 10.1046,6 11,6.89543 11,8L 11,12L 5,12L 5,8C 5,6.89543 5.89543,6 7,6 Z M 15,6L 17,6C 18.1046,6 19,6.89543 19,8L 19,12L 13,12L 13,8C 13,6.89543 13.8954,6 15,6 Z M 1,9.00001L 2,9.00001C 2.55228,9.00001 3,9.44772 3,10L 3,12C 3,13.1046 3.89543,14 5,14L 19,14C 20.1046,14 21,13.1046 21,12L 21,11L 21,10C 21,9.44772 21.4477,9.00001 22,9.00001L 23,9.00001C 23.5523,9.00001 24,9.44772 24,10L 24,19L 21,19L 21,17L 3,17L 3,19L 0,19L 0,10C 0,9.44772 0.447715,9.00001 1,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiSofa;
}(React.Component);

exports.default = MdiSofa;
module.exports = exports['default'];