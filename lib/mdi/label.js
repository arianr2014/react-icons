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

var MdiLabel = function (_React$Component) {
    _inherits(MdiLabel, _React$Component);

    function MdiLabel() {
        _classCallCheck(this, MdiLabel);

        return _possibleConstructorReturn(this, (MdiLabel.__proto__ || Object.getPrototypeOf(MdiLabel)).apply(this, arguments));
    }

    _createClass(MdiLabel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.6323,5.84277C 17.2703,5.33173 16.6733,4.99774 15.9993,4.99774L 4.9993,5.00775C 3.8953,5.00775 2.9993,5.89374 2.9993,6.99774L 2.9993,16.9977C 2.9993,18.1027 3.8953,18.9877 4.9993,18.9877L 15.9993,18.9977C 16.6733,18.9977 17.2703,18.6647 17.6323,18.1537L 21.9993,11.9977L 17.6323,5.84277 Z ' })
                )
            );
        }
    }]);

    return MdiLabel;
}(React.Component);

exports.default = MdiLabel;
module.exports = exports['default'];