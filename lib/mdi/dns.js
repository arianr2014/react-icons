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

var MdiDns = function (_React$Component) {
    _inherits(MdiDns, _React$Component);

    function MdiDns() {
        _classCallCheck(this, MdiDns);

        return _possibleConstructorReturn(this, (MdiDns.__proto__ || Object.getPrototypeOf(MdiDns)).apply(this, arguments));
    }

    _createClass(MdiDns, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,9C 5.9,9 5,8.1 5,7C 5,5.9 5.9,5 7,5C 8.1,5 9,5.9 9,7C 9,8.1 8.1,9 7,9 Z M 20,3L 4,3C 3.45,3 3,3.45 3,4L 3,10C 3,10.55 3.45,11 4,11L 20,11C 20.55,11 21,10.55 21,10L 21,4C 21,3.45 20.55,3 20,3 Z M 7,19C 5.9,19 5,18.1 5,17C 5,15.9 5.9,15 7,15C 8.1,15 9,15.9 9,17C 9,18.1 8.1,19 7,19 Z M 20,13L 4,13C 3.45,13 3,13.45 3,14L 3,20C 3,20.55 3.45,21 4,21L 20,21C 20.55,21 21,20.55 21,20L 21,14C 21,13.45 20.55,13 20,13 Z ' })
                )
            );
        }
    }]);

    return MdiDns;
}(React.Component);

exports.default = MdiDns;
module.exports = exports['default'];