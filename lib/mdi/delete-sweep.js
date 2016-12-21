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

var MdiDeleteSweep = function (_React$Component) {
    _inherits(MdiDeleteSweep, _React$Component);

    function MdiDeleteSweep() {
        _classCallCheck(this, MdiDeleteSweep);

        return _possibleConstructorReturn(this, (MdiDeleteSweep.__proto__ || Object.getPrototypeOf(MdiDeleteSweep)).apply(this, arguments));
    }

    _createClass(MdiDeleteSweep, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 15,16L 19,16L 19,18L 15,18L 15,16 Z M 15,8L 22,8L 22,10L 15,10L 15,8 Z M 15,12L 21,12L 21,14L 15,14L 15,12 Z M 3,18C 3,19.1 3.9,20 5,20L 11,20C 12.1,20 13,19.1 13,18L 13,8L 3,8L 3,18 Z M 14,5L 11,5L 10,4L 6,4L 5,5L 2,5L 2,7L 14,7L 14,5 Z ' })
                )
            );
        }
    }]);

    return MdiDeleteSweep;
}(React.Component);

exports.default = MdiDeleteSweep;
module.exports = exports['default'];