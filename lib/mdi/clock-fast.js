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

var MdiClockFast = function (_React$Component) {
    _inherits(MdiClockFast, _React$Component);

    function MdiClockFast() {
        _classCallCheck(this, MdiClockFast);

        return _possibleConstructorReturn(this, (MdiClockFast.__proto__ || Object.getPrototypeOf(MdiClockFast)).apply(this, arguments));
    }

    _createClass(MdiClockFast, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,4C 19.4183,4 23,7.58172 23,12C 23,16.4183 19.4183,20 15,20C 10.5817,20 7,16.4183 7,12C 7,7.58172 10.5817,4 15,4 Z M 15,6.00001C 11.6863,6.00001 9,8.6863 9,12C 9,15.3137 11.6863,18 15,18C 18.3137,18 21,15.3137 21,12C 21,8.6863 18.3137,6.00001 15,6.00001 Z M 14,8.00001L 15.5,8.00001L 15.5,11.7818L 17.8311,14.1129L 16.7704,15.1736L 14,12.4031L 14,8.00001 Z M 2,18C 1.44771,18 1,17.5523 1,17C 1,16.4477 1.44771,16 2,16L 5.83209,16C 6.14405,16.714 6.53698,17.3845 6.99927,18L 2,18 Z M 2.99999,13C 2.44771,13 2,12.5523 2,12C 2,11.4477 2.44771,11 2.99999,11L 5.04937,11L 5,12L 5.04938,13L 2.99999,13 Z M 3.99999,8.00004C 3.44771,8.00004 2.99999,7.55232 2.99999,7.00004C 2.99999,6.44775 3.44771,6.00004 3.99999,6.00004L 6.99925,6.00002C 6.53697,6.61548 6.14404,7.28602 5.83208,8.00003L 3.99999,8.00004 Z ' })
                )
            );
        }
    }]);

    return MdiClockFast;
}(React.Component);

exports.default = MdiClockFast;
module.exports = exports['default'];