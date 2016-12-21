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

var MdiGlassMug = function (_React$Component) {
    _inherits(MdiGlassMug, _React$Component);

    function MdiGlassMug() {
        _classCallCheck(this, MdiGlassMug);

        return _possibleConstructorReturn(this, (MdiGlassMug.__proto__ || Object.getPrototypeOf(MdiGlassMug)).apply(this, arguments));
    }

    _createClass(MdiGlassMug, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10,4L 10,7L 18,7L 18,4L 10,4 Z M 8,2.00001L 20,2.00001L 21,2L 21,3L 20,4L 20,20L 21,21L 21,22L 20,22L 8,22L 7,22L 7,21L 8,20L 8,18.5995L 4.19828,16.8328C 3.49283,16.5238 2.99999,15.8195 2.99999,15L 3,8C 3,6.89543 3.89543,6 5,6L 8,6L 8,4L 7,3L 7,2.00001L 8,2.00001 Z M 5,15L 8,16.3941L 8,8.00001L 5,8.00001L 5,15 Z ' })
                )
            );
        }
    }]);

    return MdiGlassMug;
}(React.Component);

exports.default = MdiGlassMug;
module.exports = exports['default'];