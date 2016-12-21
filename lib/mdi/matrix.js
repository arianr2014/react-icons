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

var MdiMatrix = function (_React$Component) {
    _inherits(MdiMatrix, _React$Component);

    function MdiMatrix() {
        _classCallCheck(this, MdiMatrix);

        return _possibleConstructorReturn(this, (MdiMatrix.__proto__ || Object.getPrototypeOf(MdiMatrix)).apply(this, arguments));
    }

    _createClass(MdiMatrix, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,2L 6,2L 6,4L 4,4L 4,20L 6,20L 6,22L 2,22L 2,2 Z M 20,4.00001L 18,4.00001L 18,2.00003L 22,2.00002L 22,22L 18,22L 18,20L 20,20L 20,4.00001 Z M 9,5.00001L 10,5.00001L 10,10L 11,10L 11,11L 8,11L 8,10L 9,10L 9,6L 8,6.50001L 8,5.50001L 9,5.00001 Z M 15,13L 16,13L 16,18L 17,18L 17,19L 14,19L 14,18L 15,18L 15,14L 14,14.5L 14,13.5L 15,13 Z M 9,13C 10.1046,13 11,14.3432 11,16C 11,17.6569 10.1046,19 9,19C 7.89543,19 7,17.6569 7,16C 7,14.3432 7.89543,13 9,13 Z M 9,14C 8.44771,14 8,14.8954 8,16C 8,17.1046 8.44771,18 9,18C 9.55228,18 10,17.1046 10,16C 10,14.8954 9.55228,14 9,14 Z M 15,5.00001C 16.1046,5.00001 17,6.34315 17,8C 17,9.65686 16.1046,11 15,11C 13.8954,11 13,9.65686 13,8C 13,6.34315 13.8954,5.00001 15,5.00001 Z M 15,6.00001C 14.4477,6.00001 14,6.89544 14,8.00001C 14,9.10458 14.4477,10 15,10C 15.5523,10 16,9.10458 16,8.00001C 16,6.89544 15.5523,6.00001 15,6.00001 Z ' })
                )
            );
        }
    }]);

    return MdiMatrix;
}(React.Component);

exports.default = MdiMatrix;
module.exports = exports['default'];