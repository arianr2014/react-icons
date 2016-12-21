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

var MdiHouzzBox = function (_React$Component) {
    _inherits(MdiHouzzBox, _React$Component);

    function MdiHouzzBox() {
        _classCallCheck(this, MdiHouzzBox);

        return _possibleConstructorReturn(this, (MdiHouzzBox.__proto__ || Object.getPrototypeOf(MdiHouzzBox)).apply(this, arguments));
    }

    _createClass(MdiHouzzBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,3.98965L 7.41035,6.68965L 7.41035,11.9998L 12,9.3L 12,3.98965 Z M 12,9.3L 12,14.7L 12,20.0104L 16.5896,17.3104L 16.5896,12L 16.5896,6.6L 12,9.3 Z M 12,14.7L 7.41035,12.0002L 7.41035,17.4L 12,14.7 Z M 4.9793,3L 19.0207,3C 20.1007,3 21,3.8993 21,4.9793L 21,19.0207C 21,20.1007 20.1007,21 19.0207,21L 4.9793,21C 3.8993,21 3,20.1007 3,19.0207L 3,4.9793C 3,3.8993 3.8993,3 4.9793,3 Z ' })
                )
            );
        }
    }]);

    return MdiHouzzBox;
}(React.Component);

exports.default = MdiHouzzBox;
module.exports = exports['default'];