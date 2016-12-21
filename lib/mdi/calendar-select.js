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

var MdiCalendarSelect = function (_React$Component) {
    _inherits(MdiCalendarSelect, _React$Component);

    function MdiCalendarSelect() {
        _classCallCheck(this, MdiCalendarSelect);

        return _possibleConstructorReturn(this, (MdiCalendarSelect.__proto__ || Object.getPrototypeOf(MdiCalendarSelect)).apply(this, arguments));
    }

    _createClass(MdiCalendarSelect, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11,12L 17,12L 17,18L 11,18L 11,12 Z M 5,4L 6,4L 6,2.00001L 8,2.00001L 8,4L 16,4L 16,2.00001L 18,2.00001L 18,4L 19,4C 20.1046,4 21,4.89543 21,6L 21,20C 21,21.1046 20.1046,22 19,22L 5,22C 3.89543,22 3,21.1046 3,20L 3,6C 3,4.89543 3.89543,4 5,4 Z M 5,9L 5,20L 19,20L 19,9L 5,9 Z M 13,14L 13,16L 15,16L 15,14L 13,14 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarSelect;
}(React.Component);

exports.default = MdiCalendarSelect;
module.exports = exports['default'];