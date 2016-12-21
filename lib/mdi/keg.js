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

var MdiKeg = function (_React$Component) {
    _inherits(MdiKeg, _React$Component);

    function MdiKeg() {
        _classCallCheck(this, MdiKeg);

        return _possibleConstructorReturn(this, (MdiKeg.__proto__ || Object.getPrototypeOf(MdiKeg)).apply(this, arguments));
    }

    _createClass(MdiKeg, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 5,22L 5,20L 6,20L 5.99792,16L 5,16L 5,14L 5.99688,14L 5.99532,11L 5,11L 5,7L 11,7L 11,3L 10,3L 10,2L 11,2L 13,2L 14,2L 14,3L 13,3L 13,7L 19,7L 19,11L 17.9953,11L 17.9969,14L 19,14L 19,16L 17.9979,16L 18,20L 19,20L 19,22L 5,22 Z M 17,9.00001C 17,8.44772 16.5523,8 16,8L 14,7.99999C 13.4477,7.99999 13,8.44771 13,9C 13,9.55229 13.4477,10 14,10L 16,10C 16.5523,10 17,9.55229 17,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiKeg;
}(React.Component);

exports.default = MdiKeg;
module.exports = exports['default'];