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

var MdiViewWeek = function (_React$Component) {
    _inherits(MdiViewWeek, _React$Component);

    function MdiViewWeek() {
        _classCallCheck(this, MdiViewWeek);

        return _possibleConstructorReturn(this, (MdiViewWeek.__proto__ || Object.getPrototypeOf(MdiViewWeek)).apply(this, arguments));
    }

    _createClass(MdiViewWeek, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 13,5L 10,5C 9.45,5 9,5.45 9,6L 9,18C 9,18.55 9.45,19 10,19L 13,19C 13.55,19 14,18.55 14,18L 14,6C 14,5.45 13.55,5 13,5 Z M 20,5L 17,5C 16.45,5 16,5.45 16,6L 16,18C 16,18.55 16.45,19 17,19L 20,19C 20.55,19 21,18.55 21,18L 21,6C 21,5.45 20.55,5 20,5 Z M 6,5L 3,5C 2.45,5 2,5.45 2,6L 2,18C 2,18.55 2.45,19 3,19L 6,19C 6.55,19 7,18.55 7,18L 7,6C 7,5.45 6.55,5 6,5 Z ' })
                )
            );
        }
    }]);

    return MdiViewWeek;
}(React.Component);

exports.default = MdiViewWeek;
module.exports = exports['default'];