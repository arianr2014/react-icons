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

var MdiDebugStepOut = function (_React$Component) {
    _inherits(MdiDebugStepOut, _React$Component);

    function MdiDebugStepOut() {
        _classCallCheck(this, MdiDebugStepOut);

        return _possibleConstructorReturn(this, (MdiDebugStepOut.__proto__ || Object.getPrototypeOf(MdiDebugStepOut)).apply(this, arguments));
    }

    _createClass(MdiDebugStepOut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,22C 10.8954,22 10,21.1046 10,20C 10,18.8954 10.8954,18 12,18C 13.1046,18 14,18.8954 14,20C 14,21.1046 13.1046,22 12,22 Z M 13,16L 11,16L 11,5.98957L 6.49479,10.4948L 5.08058,9.08054L 12,2.16115L 18.9194,9.08054L 17.5052,10.4948L 13,5.98957L 13,16 Z ' })
                )
            );
        }
    }]);

    return MdiDebugStepOut;
}(React.Component);

exports.default = MdiDebugStepOut;
module.exports = exports['default'];