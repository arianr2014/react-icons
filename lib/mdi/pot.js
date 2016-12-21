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

var MdiPot = function (_React$Component) {
    _inherits(MdiPot, _React$Component);

    function MdiPot() {
        _classCallCheck(this, MdiPot);

        return _possibleConstructorReturn(this, (MdiPot.__proto__ || Object.getPrototypeOf(MdiPot)).apply(this, arguments));
    }

    _createClass(MdiPot, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,19C 19,20.1046 18.1046,21 17,21L 7,21C 5.89543,21 5,20.1046 5,19L 5,13L 3,13L 3,10L 21,10L 21,13L 19,13L 19,19 Z M 6,6.00001L 8,6.00001L 8,8.00001L 6,8.00001L 6,6.00001 Z M 11,6.00001L 13,6.00001L 13,8.00001L 11,8.00001L 11,6.00001 Z M 16,6.00001L 18,6.00001L 18,8L 16,8L 16,6.00001 Z M 18,3L 20,3L 20,5L 18,5L 18,3 Z M 13,3L 15,3L 15,5L 13,5L 13,3 Z M 8,3L 10,3L 10,5L 8,5L 8,3 Z ' })
                )
            );
        }
    }]);

    return MdiPot;
}(React.Component);

exports.default = MdiPot;
module.exports = exports['default'];