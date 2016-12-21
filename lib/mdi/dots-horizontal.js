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

var MdiDotsHorizontal = function (_React$Component) {
    _inherits(MdiDotsHorizontal, _React$Component);

    function MdiDotsHorizontal() {
        _classCallCheck(this, MdiDotsHorizontal);

        return _possibleConstructorReturn(this, (MdiDotsHorizontal.__proto__ || Object.getPrototypeOf(MdiDotsHorizontal)).apply(this, arguments));
    }

    _createClass(MdiDotsHorizontal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,12C 16,10.8954 16.8954,10 18,10C 19.1046,10 20,10.8954 20,12C 20,13.1046 19.1046,14 18,14C 16.8954,14 16,13.1046 16,12 Z M 10,12C 10,10.8954 10.8954,10 12,10C 13.1046,10 14,10.8954 14,12C 14,13.1046 13.1046,14 12,14C 10.8954,14 10,13.1046 10,12 Z M 4,12C 4,10.8954 4.89543,10 6,10C 7.10457,10 8,10.8954 8,12C 8,13.1046 7.10457,14 6,14C 4.89543,14 4,13.1046 4,12 Z ' })
                )
            );
        }
    }]);

    return MdiDotsHorizontal;
}(React.Component);

exports.default = MdiDotsHorizontal;
module.exports = exports['default'];