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

var MdiEngineOutline = function (_React$Component) {
    _inherits(MdiEngineOutline, _React$Component);

    function MdiEngineOutline() {
        _classCallCheck(this, MdiEngineOutline);

        return _possibleConstructorReturn(this, (MdiEngineOutline.__proto__ || Object.getPrototypeOf(MdiEngineOutline)).apply(this, arguments));
    }

    _createClass(MdiEngineOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8,10L 16,10L 16,18L 11,18L 9,16L 7,16L 7,11M 7,4L 7,6L 10,6L 10,8L 7,8L 5,10L 5,13L 3,13L 3,10L 1,10L 1,18L 3,18L 3,15L 5,15L 5,18L 8,18L 10,20L 18,20L 18,16L 20,16L 20,19L 23,19L 23,9L 20,9L 20,12L 18,12L 18,8L 12,8L 12,6L 15,6L 15,4L 7,4 Z ' })
                )
            );
        }
    }]);

    return MdiEngineOutline;
}(React.Component);

exports.default = MdiEngineOutline;
module.exports = exports['default'];