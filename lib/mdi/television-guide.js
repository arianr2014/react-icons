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

var MdiTelevisionGuide = function (_React$Component) {
    _inherits(MdiTelevisionGuide, _React$Component);

    function MdiTelevisionGuide() {
        _classCallCheck(this, MdiTelevisionGuide);

        return _possibleConstructorReturn(this, (MdiTelevisionGuide.__proto__ || Object.getPrototypeOf(MdiTelevisionGuide)).apply(this, arguments));
    }

    _createClass(MdiTelevisionGuide, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'round', d: 'M 21,17L 21,5L 3,5L 3,17L 21,17 Z M 21,3.00001C 22.1,3.00001 23,3.90001 23,5.00001L 22.99,17C 22.99,18.1 22.1,19 21,19L 16,19L 16,21L 8,21L 8,19L 3,19C 1.9,19 1,18.1 1,17L 1,5.00001C 1,3.90001 1.9,3.00001 3,3.00001L 21,3.00001 Z M 5,7.00001L 11,7.00001L 11,11L 5,11L 5,7.00001 Z M 5,13L 11,13L 11,15L 5,15L 5,13 Z M 13,7.00001L 19,7.00001L 19,9.00001L 13,9.00001L 13,7.00001 Z M 13,11L 19,11L 19,15L 13,15L 13,11 Z ' })
                )
            );
        }
    }]);

    return MdiTelevisionGuide;
}(React.Component);

exports.default = MdiTelevisionGuide;
module.exports = exports['default'];