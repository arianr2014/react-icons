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

var MdiCursorMove = function (_React$Component) {
    _inherits(MdiCursorMove, _React$Component);

    function MdiCursorMove() {
        _classCallCheck(this, MdiCursorMove);

        return _possibleConstructorReturn(this, (MdiCursorMove.__proto__ || Object.getPrototypeOf(MdiCursorMove)).apply(this, arguments));
    }

    _createClass(MdiCursorMove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,6L 13,11L 18,11L 18,7.75L 22.25,12L 18,16.25L 18,13L 13,13L 13,18L 16.25,18L 12,22.25L 7.75,18L 11,18L 11,13L 6,13L 6,16.25L 1.75,12L 6,7.75L 6,11L 11,11L 11,6L 7.75,6L 12,1.75001L 16.25,6.00001L 13,6 Z ' })
                )
            );
        }
    }]);

    return MdiCursorMove;
}(React.Component);

exports.default = MdiCursorMove;
module.exports = exports['default'];