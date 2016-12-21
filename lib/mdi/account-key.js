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

var MdiAccountKey = function (_React$Component) {
    _inherits(MdiAccountKey, _React$Component);

    function MdiAccountKey() {
        _classCallCheck(this, MdiAccountKey);

        return _possibleConstructorReturn(this, (MdiAccountKey.__proto__ || Object.getPrototypeOf(MdiAccountKey)).apply(this, arguments));
    }

    _createClass(MdiAccountKey, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11,10L 11,12L 9.99999,12L 9.99999,14L 7.99999,14L 7.99999,12L 5.82929,12C 5.41745,13.1652 4.30622,14 3,14C 1.34315,14 0,12.6569 0,11C 0,9.34315 1.34314,8 3,8C 4.30622,8 5.41746,8.83481 5.82929,10L 11,10 Z M 3,10C 2.44771,10 2,10.4477 2,11C 2,11.5523 2.44771,12 3,12C 3.55228,12 4,11.5523 4,11C 4,10.4477 3.55228,10 3,10 Z M 16,14C 18.667,14 24,15.335 24,18L 24,20L 8,20L 8,18C 8,15.335 13.333,14 16,14 Z M 16,12C 13.792,12 12,10.207 12,8C 12,5.792 13.792,4 16,4C 18.208,4 20,5.792 20,8C 20,10.207 18.208,12 16,12 Z ' })
                )
            );
        }
    }]);

    return MdiAccountKey;
}(React.Component);

exports.default = MdiAccountKey;
module.exports = exports['default'];