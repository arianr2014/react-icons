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

var MdiHomeMapMarker = function (_React$Component) {
    _inherits(MdiHomeMapMarker, _React$Component);

    function MdiHomeMapMarker() {
        _classCallCheck(this, MdiHomeMapMarker);

        return _possibleConstructorReturn(this, (MdiHomeMapMarker.__proto__ || Object.getPrototypeOf(MdiHomeMapMarker)).apply(this, arguments));
    }

    _createClass(MdiHomeMapMarker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2.998L 2,11.998L 5,11.998L 5,19.998L 19,19.998L 19,11.998L 22,11.998L 12,2.998 Z M 12,7.6973C 14.098,7.6973 15.7988,9.399 15.7988,11.498C 15.7988,14.498 12,17.998 12,17.998C 12,17.998 8.19922,14.498 8.19922,11.498C 8.19922,9.399 9.90198,7.6973 12,7.6973 Z M 12,9.998C 11.172,9.998 10.5,10.669 10.5,11.498C 10.5,12.326 11.172,12.998 12,12.998C 12.829,12.998 13.5,12.326 13.5,11.498C 13.5,10.669 12.829,9.998 12,9.998 Z ' })
                )
            );
        }
    }]);

    return MdiHomeMapMarker;
}(React.Component);

exports.default = MdiHomeMapMarker;
module.exports = exports['default'];