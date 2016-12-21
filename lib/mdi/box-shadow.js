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

var MdiBoxShadow = function (_React$Component) {
    _inherits(MdiBoxShadow, _React$Component);

    function MdiBoxShadow() {
        _classCallCheck(this, MdiBoxShadow);

        return _possibleConstructorReturn(this, (MdiBoxShadow.__proto__ || Object.getPrototypeOf(MdiBoxShadow)).apply(this, arguments));
    }

    _createClass(MdiBoxShadow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 3,3.00001L 18,3.00001L 18,18L 3,18L 3,3.00001 Z M 19,19L 21,19L 21,21L 19,21L 19,19 Z M 19,16L 21,16L 21,18L 19,18L 19,16 Z M 19,13L 21,13L 21,15L 19,15L 19,13 Z M 19,10L 21,10L 21,12L 19,12L 19,10 Z M 19,7.00001L 21,7.00001L 21,9.00001L 19,9.00001L 19,7.00001 Z M 16,19L 18,19L 18,21L 16,21L 16,19 Z M 13,19L 15,19L 15,21L 13,21L 13,19 Z M 10,19L 12,19L 12,21L 10,21L 10,19 Z M 6.99999,19L 8.99999,19L 8.99999,21L 6.99999,21L 6.99999,19 Z ' })
                )
            );
        }
    }]);

    return MdiBoxShadow;
}(React.Component);

exports.default = MdiBoxShadow;
module.exports = exports['default'];