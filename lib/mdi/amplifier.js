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

var MdiAmplifier = function (_React$Component) {
    _inherits(MdiAmplifier, _React$Component);

    function MdiAmplifier() {
        _classCallCheck(this, MdiAmplifier);

        return _possibleConstructorReturn(this, (MdiAmplifier.__proto__ || Object.getPrototypeOf(MdiAmplifier)).apply(this, arguments));
    }

    _createClass(MdiAmplifier, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9.99999,2.00002L 14,2.00002C 14.554,2.00002 15,2.44601 15,3.00001L 21,3.00001L 21,21L 19,21C 19,21.5523 18.5523,22 18,22C 17.4477,22 17,21.5523 17,21L 7,21C 7,21.5523 6.55228,22 6,22C 5.44772,22 5,21.5523 5,21L 3,21L 3,3.00001L 9,3.00001C 9,2.44601 9.44599,2.00002 9.99999,2.00002 Z M 5,5.00002L 5,9.00001L 19,9.00001L 19,5.00002L 5,5.00002 Z M 6.99999,6.00002C 7.55227,6.00002 7.99999,6.44772 7.99999,7.00002C 7.99999,7.55232 7.55227,8.00002 6.99999,8.00002C 6.44771,8.00002 5.99999,7.55232 5.99999,7.00002C 5.99999,6.44772 6.44771,6.00002 6.99999,6.00002 Z M 12,6.00001L 14,6.00002L 14,7.00002L 12,7.00001L 12,6.00001 Z M 15,6.00002L 16,6.00002L 16,8.00002L 15,8.00002L 15,6.00002 Z M 17,6.00002L 18,6.00002L 18,8.00002L 17,8.00002L 17,6.00002 Z M 12,11C 9.79086,11 8,12.7909 8,15C 8,17.2091 9.79086,19 12,19C 14.2091,19 16,17.2091 16,15C 16,12.7909 14.2091,11 12,11 Z M 10,6C 10.5523,6 11,6.44772 11,7C 11,7.55229 10.5523,8 10,8C 9.44771,8 9,7.55229 9,7C 9,6.44772 9.44771,6 10,6 Z ' })
                )
            );
        }
    }]);

    return MdiAmplifier;
}(React.Component);

exports.default = MdiAmplifier;
module.exports = exports['default'];