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

var MdiDeveloperBoard = function (_React$Component) {
    _inherits(MdiDeveloperBoard, _React$Component);

    function MdiDeveloperBoard() {
        _classCallCheck(this, MdiDeveloperBoard);

        return _possibleConstructorReturn(this, (MdiDeveloperBoard.__proto__ || Object.getPrototypeOf(MdiDeveloperBoard)).apply(this, arguments));
    }

    _createClass(MdiDeveloperBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 22,9L 22,7L 20,7L 20,5C 20,3.9 19.1,3 18,3L 4,3C 2.9,3 2,3.9 2,5L 2,19C 2,20.1 2.9,21 4,21L 18,21C 19.1,21 20,20.1 20,19L 20,17L 22,17L 22,15L 20,15L 20,13L 22,13L 22,11L 20,11L 20,9L 22,9 Z M 18,19L 4,19L 4,5L 18,5L 18,19 Z M 6,13L 11,13L 11,17L 6,17L 6,13 Z M 12,7L 16,7L 16,10L 12,10L 12,7 Z M 6,7L 11,7L 11,12L 6,12L 6,7 Z M 12,11L 16,11L 16,17L 12,17L 12,11 Z ' })
                )
            );
        }
    }]);

    return MdiDeveloperBoard;
}(React.Component);

exports.default = MdiDeveloperBoard;
module.exports = exports['default'];