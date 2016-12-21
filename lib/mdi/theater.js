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

var MdiTheater = function (_React$Component) {
    _inherits(MdiTheater, _React$Component);

    function MdiTheater() {
        _classCallCheck(this, MdiTheater);

        return _possibleConstructorReturn(this, (MdiTheater.__proto__ || Object.getPrototypeOf(MdiTheater)).apply(this, arguments));
    }

    _createClass(MdiTheater, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,15L 6,15C 7.10457,15 8,15.8954 8,17L 8,19L 9,19L 9,17C 9,15.8954 9.89543,15 11,15L 13,15C 14.1046,15 15,15.8954 15,17L 15,19L 16,19L 16,17C 16,15.8954 16.8954,15 18,15L 20,15C 21.1046,15 22,15.8954 22,17L 22,19L 23,19L 23,22L 1,22L 1,19L 2,19L 2,17C 2,15.8954 2.89543,15 4,15 Z M 11,7L 15,10L 11,13L 11,7 Z M 4,2.00001L 20,2.00001C 21.1046,2.00001 22,2.89544 22,4.00001L 22,13.5351C 21.4116,13.1948 20.7286,13 20,13L 20,4L 4,4L 4,13C 3.27142,13 2.58835,13.1948 2,13.5351L 2,4.00001C 2,2.89544 2.89543,2.00001 4,2.00001 Z ' })
                )
            );
        }
    }]);

    return MdiTheater;
}(React.Component);

exports.default = MdiTheater;
module.exports = exports['default'];