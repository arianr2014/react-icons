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

var MdiScreenRotationLock = function (_React$Component) {
    _inherits(MdiScreenRotationLock, _React$Component);

    function MdiScreenRotationLock() {
        _classCallCheck(this, MdiScreenRotationLock);

        return _possibleConstructorReturn(this, (MdiScreenRotationLock.__proto__ || Object.getPrototypeOf(MdiScreenRotationLock)).apply(this, arguments));
    }

    _createClass(MdiScreenRotationLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16.8,2.5C 16.8,1.56 17.56,0.800003 18.5,0.800003C 19.44,0.800003 20.2,1.56 20.2,2.5L 20.2,3L 16.8,3L 16.8,2.5 Z M 16,9L 21,9C 21.55,9 22,8.55 22,8L 22,4C 22,3.45 21.55,3 21,3L 21,2.5C 21,1.12 19.88,1.90735e-006 18.5,1.90735e-006C 17.12,1.90735e-006 16,1.12 16,2.5L 16,3C 15.45,3 15,3.45 15,4L 15,8C 15,8.55 15.45,9 16,9 Z M 8.47,20.48C 5.2,18.94 2.86,15.76 2.5,12L 1,12C 1.51,18.16 6.66,23 12.95,23L 13.61,22.97L 9.8,19.15L 8.47,20.48 Z M 23.25,12.77L 20.68,10.2L 19.27,11.61L 21.49,13.83L 15.83,19.49L 4.51,8.17L 10.17,2.51L 12.27,4.61L 13.68,3.2L 11.23,0.750002C 10.64,0.160004 9.69,0.160004 9.11,0.750002L 2.75,7.11C 2.16,7.7 2.16,8.65 2.75,9.23L 14.77,21.25C 15.36,21.84 16.31,21.84 16.89,21.25L 23.25,14.89C 23.84,14.3 23.84,13.35 23.25,12.77 Z ' })
                )
            );
        }
    }]);

    return MdiScreenRotationLock;
}(React.Component);

exports.default = MdiScreenRotationLock;
module.exports = exports['default'];