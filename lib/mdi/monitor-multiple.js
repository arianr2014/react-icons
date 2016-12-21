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

var MdiMonitorMultiple = function (_React$Component) {
    _inherits(MdiMonitorMultiple, _React$Component);

    function MdiMonitorMultiple() {
        _classCallCheck(this, MdiMonitorMultiple);

        return _possibleConstructorReturn(this, (MdiMonitorMultiple.__proto__ || Object.getPrototypeOf(MdiMonitorMultiple)).apply(this, arguments));
    }

    _createClass(MdiMonitorMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.9991,17.0001L 21.9991,7.00012L 5.99915,7.00012L 5.99915,17.0001L 21.9991,17.0001 Z M 21.9991,5.00012C 23.1031,5.00012 23.9991,5.89612 23.9991,7.00012L 23.9991,17.0001C 23.9991,18.1051 23.1031,19.0001 21.9991,19.0001L 15.9993,19L 15.9993,21L 17.9993,21L 17.9993,23L 9.99927,23L 9.99927,21L 11.9993,21L 11.9993,19L 5.99915,19.0001C 4.89412,19.0001 3.99915,18.1051 3.99915,17.0001L 3.99915,7.00012C 3.99915,5.89612 4.89412,5.00012 5.99915,5.00012L 21.9991,5.00012 Z M 2,3.00183L 2,15.0018L -3.17891e-007,15.0018L -3.17891e-007,3.00183C -3.17891e-007,1.89783 0.894978,1.00183 2,1.00183L 20,1.00183L 20,3.00182L 2,3.00183 Z ' })
                )
            );
        }
    }]);

    return MdiMonitorMultiple;
}(React.Component);

exports.default = MdiMonitorMultiple;
module.exports = exports['default'];