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

var MdiServerOff = function (_React$Component) {
    _inherits(MdiServerOff, _React$Component);

    function MdiServerOff() {
        _classCallCheck(this, MdiServerOff);

        return _possibleConstructorReturn(this, (MdiServerOff.__proto__ || Object.getPrototypeOf(MdiServerOff)).apply(this, arguments));
    }

    _createClass(MdiServerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,1L 20,1C 20.5523,1 21,1.44772 21,2L 21,6C 21,6.55229 20.5523,7 20,7L 8.82269,7L 6.8227,5.00001L 6.99999,5.00001L 6.99999,3.00001L 5,3.00001L 5,3.17731L 3.20979,1.3871C 3.39273,1.15156 3.67867,1 4,1 Z M 22,22.7229L 20.7315,24L 19.7315,23L 4,23C 3.44772,23 3,22.5523 3,22L 3,18C 3,17.4477 3.44772,17 4,17L 13.7315,17L 11.7315,15L 4,15C 3.44771,15 3,14.5523 3,14L 3,10C 3,9.44773 3.44771,9.00002 4,9.00002L 5.73152,9.00002L 3.67882,6.94731C 3.38489,6.84768 3.15232,6.61511 3.0527,6.32118L 0.999998,4.26851L 2.27711,3.00004L 22,22.7229 Z M 20,9.00002C 20.5523,9.00002 21,9.44773 21,10L 21,14C 21,14.5523 20.5523,15 20,15L 16.8227,15L 10.8227,9.00002L 20,9.00002 Z M 20,17C 20.5523,17 21,17.4477 21,18L 21,19.1773L 18.8227,17L 20,17 Z M 8.99999,5.00002L 9.99999,5.00002L 9.99999,3.00002L 8.99999,3.00002L 8.99999,5.00002 Z M 8.99999,13L 9.73152,13L 8.99999,12.2685L 8.99999,13 Z M 8.99999,21L 9.99999,21L 9.99999,19L 8.99999,19L 8.99999,21 Z M 5,11L 5,13L 7,13L 7,11L 5,11 Z M 5,19L 5,21L 7,21L 7,19L 5,19 Z ' })
                )
            );
        }
    }]);

    return MdiServerOff;
}(React.Component);

exports.default = MdiServerOff;
module.exports = exports['default'];