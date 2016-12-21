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

var MdiCalendarCheckMultiple = function (_React$Component) {
    _inherits(MdiCalendarCheckMultiple, _React$Component);

    function MdiCalendarCheckMultiple() {
        _classCallCheck(this, MdiCalendarCheckMultiple);

        return _possibleConstructorReturn(this, (MdiCalendarCheckMultiple.__proto__ || Object.getPrototypeOf(MdiCalendarCheckMultiple)).apply(this, arguments));
    }

    _createClass(MdiCalendarCheckMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,17L 21,8.00001L 7,8.00001L 7,17L 21,17 Z M 21,3.00001C 22.1,3.00001 23,3.90001 23,5.00001L 23,17C 23,18.1 22.1,19 21,19L 7,19C 5.89,19 5,18.1 5,17L 5.01,5.00001C 5.01,3.90001 5.89,3.00001 7,3.00001L 8,3.00001L 8,1.00001L 9.99999,1.00001L 9.99999,3.00001L 18,3.00001L 18,1.00001L 20,1.00001L 20,3.00001L 21,3.00001 Z M 17.53,11.06L 13.09,15.5L 10.41,12.82L 11.47,11.76L 13.09,13.38L 16.47,10L 17.53,11.06 Z M 3,21L 17,21L 17,23L 3,23C 1.89,23 1,22.1 1,21L 1.01,9L 3,9L 3,21 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarCheckMultiple;
}(React.Component);

exports.default = MdiCalendarCheckMultiple;
module.exports = exports['default'];