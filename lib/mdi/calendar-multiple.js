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

var MdiCalendarMultiple = function (_React$Component) {
    _inherits(MdiCalendarMultiple, _React$Component);

    function MdiCalendarMultiple() {
        _classCallCheck(this, MdiCalendarMultiple);

        return _possibleConstructorReturn(this, (MdiCalendarMultiple.__proto__ || Object.getPrototypeOf(MdiCalendarMultiple)).apply(this, arguments));
    }

    _createClass(MdiCalendarMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,17L 21,8.00001L 7,8.00001L 7,17L 21,17 Z M 21,3.00002C 22.1,3.00002 23,3.90001 23,5.00002L 23,17C 23,18.1 22.1,19 21,19L 6.99999,19C 5.88999,19 5,18.1 5,17L 5.01,5.00002C 5.01,3.90001 5.88999,3.00002 6.99999,3.00002L 7.99999,3.00002L 7.99999,1.00002L 9.99999,1.00002L 9.99999,3.00002L 18,3.00002L 18,1.00002L 20,1.00002L 20,3.00002L 21,3.00002 Z M 3,21L 17,21L 17,23L 3,23C 1.89,23 1,22.1 1,21L 1.01,9L 3,9L 3,21 Z M 19,15L 15,15L 15,11L 19,11L 19,15 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarMultiple;
}(React.Component);

exports.default = MdiCalendarMultiple;
module.exports = exports['default'];