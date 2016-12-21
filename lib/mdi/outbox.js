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

var MdiOutbox = function (_React$Component) {
    _inherits(MdiOutbox, _React$Component);

    function MdiOutbox() {
        _classCallCheck(this, MdiOutbox);

        return _possibleConstructorReturn(this, (MdiOutbox.__proto__ || Object.getPrototypeOf(MdiOutbox)).apply(this, arguments));
    }

    _createClass(MdiOutbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 14,13.9996L 9.99997,13.9996L 9.99997,10.9996L 7.99995,10.9998L 11.9999,6.99977L 15.9998,10.9996L 14,10.9996L 14,13.9996M 15.9998,10.9996M 4.99005,15.0001L 4.99005,4.99988L 18.9998,4.99988L 18.9998,15.0001L 14.9998,15.0001C 14.9998,16.6568 13.6572,18.0001 11.9998,18.0001C 10.3431,18.0001 8.9999,16.6568 8.9999,15.0001L 4.99005,15.0001M 18.9998,2.99999L 4.99005,2.99999C 3.88555,2.99999 3.01024,3.89538 3.01024,4.99988L 2.99998,19.0001C 2.99998,20.1046 3.88555,21 4.99005,21L 18.9998,21C 20.1043,21 21,20.1046 21,19.0001L 21,4.99988C 21,3.89538 20.1043,2.99999 18.9998,2.99999' })
                )
            );
        }
    }]);

    return MdiOutbox;
}(React.Component);

exports.default = MdiOutbox;
module.exports = exports['default'];