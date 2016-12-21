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

var MdiCameraRear = function (_React$Component) {
    _inherits(MdiCameraRear, _React$Component);

    function MdiCameraRear() {
        _classCallCheck(this, MdiCameraRear);

        return _possibleConstructorReturn(this, (MdiCameraRear.__proto__ || Object.getPrototypeOf(MdiCameraRear)).apply(this, arguments));
    }

    _createClass(MdiCameraRear, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,6C 10.89,6 10,5.1 10,4C 10,2.9 10.89,2 11.99,2C 13.09,2 13.99,2.9 13.99,4C 14,5.1 13.1,6 12,6 Z M 17,1.90735e-006L 7,1.90735e-006C 5.9,1.90735e-006 5,0.900002 5,2L 5,16C 5,17.1 5.9,18 7,18L 17,18C 18.1,18 19,17.1 19,16L 19,2C 19,0.900002 18.1,1.90735e-006 17,1.90735e-006 Z M 14,20L 14,22L 19,22L 19,20M 10,20L 5,20L 5,22L 10,22L 10,24L 13,21L 10,18L 10,20 Z ' })
                )
            );
        }
    }]);

    return MdiCameraRear;
}(React.Component);

exports.default = MdiCameraRear;
module.exports = exports['default'];