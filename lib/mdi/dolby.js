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

var MdiDolby = function (_React$Component) {
    _inherits(MdiDolby, _React$Component);

    function MdiDolby() {
        _classCallCheck(this, MdiDolby);

        return _possibleConstructorReturn(this, (MdiDolby.__proto__ || Object.getPrototypeOf(MdiDolby)).apply(this, arguments));
    }

    _createClass(MdiDolby, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,5L 2,19L 22,19L 22,5L 2,5 Z M 6,17.0027L 4,17.0027L 4,6.99733L 6,6.99733C 8.85913,7.09356 11.0956,9.33123 11,12C 11.0956,14.6688 8.85913,16.9064 6,17.0027 Z M 20,17.0027L 18,17.0027C 15.1409,16.9064 12.9044,14.6688 13,12C 12.9044,9.33123 15.1409,7.09356 18,6.99733L 20,6.99733L 20,17.0027 Z ' })
                )
            );
        }
    }]);

    return MdiDolby;
}(React.Component);

exports.default = MdiDolby;
module.exports = exports['default'];