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

var MdiTestTube = function (_React$Component) {
    _inherits(MdiTestTube, _React$Component);

    function MdiTestTube() {
        _classCallCheck(this, MdiTestTube);

        return _possibleConstructorReturn(this, (MdiTestTube.__proto__ || Object.getPrototypeOf(MdiTestTube)).apply(this, arguments));
    }

    _createClass(MdiTestTube, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7,2L 7,4L 8,4L 8,18C 8,20.2 9.8,22 12,22C 14.2,22 16,20.2 16,18L 16,4L 17,4L 17,2L 7,2 Z M 11,16C 10.4,16 10,15.6 10,15C 10,14.4 10.4,14 11,14C 11.6,14 12,14.4 12,15C 12,15.6 11.6,16 11,16 Z M 13,12C 12.4,12 12,11.6 12,11C 12,10.4 12.4,10 13,10C 13.6,10 14,10.4 14,11C 14,11.6 13.6,12 13,12 Z M 14,7L 10,7L 10,4L 14,4L 14,7 Z ' })
                )
            );
        }
    }]);

    return MdiTestTube;
}(React.Component);

exports.default = MdiTestTube;
module.exports = exports['default'];