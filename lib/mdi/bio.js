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

var MdiBio = function (_React$Component) {
    _inherits(MdiBio, _React$Component);

    function MdiBio() {
        _classCallCheck(this, MdiBio);

        return _possibleConstructorReturn(this, (MdiBio.__proto__ || Object.getPrototypeOf(MdiBio)).apply(this, arguments));
    }

    _createClass(MdiBio, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17,12L 20,12C 21.1046,12 22,12.8954 22,14L 22,17C 22,18.1046 21.1046,19 20,19L 17,19C 15.8954,19 15,18.1046 15,17L 15,14C 15,12.8954 15.8954,12 17,12 Z M 17,14L 17,17L 20,17L 20,14L 17,14 Z M 2,7.00001L 7,7.00001C 8.10457,7.00001 9,7.89544 9,9L 9,11C 9,12.1046 8.10457,13 7,13C 8.10457,13 9,13.8954 9,15L 9,17C 9,18.1046 8.10457,19 7,19L 2,19L 2,13L 2,7.00001 Z M 4,9.00001L 4,12L 7,12L 7,9.00001L 4,9.00001 Z M 4,17L 7,17L 7,14L 4,14L 4,17 Z M 11,13L 13,13L 13,19L 11,19L 11,13 Z M 11,9L 13,9L 13,11L 11,11L 11,9 Z ' })
                )
            );
        }
    }]);

    return MdiBio;
}(React.Component);

exports.default = MdiBio;
module.exports = exports['default'];