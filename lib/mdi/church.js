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

var MdiChurch = function (_React$Component) {
    _inherits(MdiChurch, _React$Component);

    function MdiChurch() {
        _classCallCheck(this, MdiChurch);

        return _possibleConstructorReturn(this, (MdiChurch.__proto__ || Object.getPrototypeOf(MdiChurch)).apply(this, arguments));
    }

    _createClass(MdiChurch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,2L 13,2L 13,4L 15,4L 15,6L 13,6L 13,9.4L 22,13L 22,15L 20,14.2L 20,22L 14,22L 14,17C 14,15.8954 13.1046,15 12,15C 10.8954,15 10,15.8954 10,17L 10,22L 4,22L 4,14.2L 2,15L 2,13L 11,9.4L 11,6L 9,6L 9,4L 11,4L 11,2 Z M 6,20L 8,20L 8,15L 6.99999,14L 6,15L 6,20 Z M 16,20L 18,20L 18,15L 17,14L 16,15L 16,20 Z ' })
                )
            );
        }
    }]);

    return MdiChurch;
}(React.Component);

exports.default = MdiChurch;
module.exports = exports['default'];