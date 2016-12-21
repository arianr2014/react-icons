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

var MdiDragVertical = function (_React$Component) {
    _inherits(MdiDragVertical, _React$Component);

    function MdiDragVertical() {
        _classCallCheck(this, MdiDragVertical);

        return _possibleConstructorReturn(this, (MdiDragVertical.__proto__ || Object.getPrototypeOf(MdiDragVertical)).apply(this, arguments));
    }

    _createClass(MdiDragVertical, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9,3L 11,3L 11,5L 9,5L 9,3 Z M 13,3.00001L 15,3.00001L 15,5.00001L 13,5.00001L 13,3.00001 Z M 9,7.00001L 11,7.00001L 11,9.00001L 9,9.00001L 9,7.00001 Z M 13,7.00001L 15,7.00001L 15,9.00001L 13,9.00001L 13,7.00001 Z M 9,11L 11,11L 11,13L 9,13L 9,11 Z M 13,11L 15,11L 15,13L 13,13L 13,11 Z M 9,15L 11,15L 11,17L 9,17L 9,15 Z M 13,15L 15,15L 15,17L 13,17L 13,15 Z M 9,19L 11,19L 11,21L 9,21L 9,19 Z M 13,19L 15,19L 15,21L 13,21L 13,19 Z ' })
                )
            );
        }
    }]);

    return MdiDragVertical;
}(React.Component);

exports.default = MdiDragVertical;
module.exports = exports['default'];