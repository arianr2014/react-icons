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

var MdiAccountOff = function (_React$Component) {
    _inherits(MdiAccountOff, _React$Component);

    function MdiAccountOff() {
        _classCallCheck(this, MdiAccountOff);

        return _possibleConstructorReturn(this, (MdiAccountOff.__proto__ || Object.getPrototypeOf(MdiAccountOff)).apply(this, arguments));
    }

    _createClass(MdiAccountOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,4C 14.2091,4 16,5.79086 16,8C 16,9.95192 14.6019,11.5773 12.7525,11.9293L 8.07079,7.24691C 8.42307,5.39779 10.0483,4 12,4 Z M 12.2799,14.0024L 18.2775,20L 20,21.7225L 18.73,23.0025L 15.7286,20L 4,20L 4,18C 4,16.159 6.48748,14.6085 9.87364,14.1428L 2.78094,7.04749L 4.05296,5.77547L 12.2799,14.0024 Z M 20,18L 20,19.178L 15.1434,14.3206C 17.999,14.9313 20,16.3488 20,18 Z ' })
                )
            );
        }
    }]);

    return MdiAccountOff;
}(React.Component);

exports.default = MdiAccountOff;
module.exports = exports['default'];