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

var MdiFileSend = function (_React$Component) {
    _inherits(MdiFileSend, _React$Component);

    function MdiFileSend() {
        _classCallCheck(this, MdiFileSend);

        return _possibleConstructorReturn(this, (MdiFileSend.__proto__ || Object.getPrototypeOf(MdiFileSend)).apply(this, arguments));
    }

    _createClass(MdiFileSend, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 14,2L 6,2C 4.89,2 4,2.89 4,4L 4,20C 4,21.1 4.9,22 6,22L 18,22C 19.1,22 20,21.1 20,20L 20,8L 14,2 Z M 12.54,19.37L 12.54,17.37L 8.54,17.37L 8.54,15.38L 12.54,15.38L 12.54,13.38L 15.54,16.38L 12.54,19.37 Z M 13,9L 13,3.5L 18.5,9L 13,9 Z ' })
                )
            );
        }
    }]);

    return MdiFileSend;
}(React.Component);

exports.default = MdiFileSend;
module.exports = exports['default'];