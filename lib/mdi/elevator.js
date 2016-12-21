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

var MdiElevator = function (_React$Component) {
    _inherits(MdiElevator, _React$Component);

    function MdiElevator() {
        _classCallCheck(this, MdiElevator);

        return _possibleConstructorReturn(this, (MdiElevator.__proto__ || Object.getPrototypeOf(MdiElevator)).apply(this, arguments));
    }

    _createClass(MdiElevator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7,2L 11,6L 8,6L 8,9.99999L 6,9.99999L 6,6L 3,6L 7,2 Z M 17,10L 13,6.00001L 16,6.00001L 16,2.00002L 18,2.00002L 18,6.00001L 21,6.00001L 17,10 Z M 7,12L 17,12C 18.1046,12 19,12.8954 19,14L 19,20C 19,21.1046 18.1046,22 17,22L 7,22C 5.89543,22 5,21.1046 5,20L 5,14C 5,12.8954 5.89543,12 7,12 Z M 7,14L 7,20L 17,20L 17,14L 7,14 Z ' })
                )
            );
        }
    }]);

    return MdiElevator;
}(React.Component);

exports.default = MdiElevator;
module.exports = exports['default'];