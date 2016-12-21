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

var MdiData = function (_React$Component) {
    _inherits(MdiData, _React$Component);

    function MdiData() {
        _classCallCheck(this, MdiData);

        return _possibleConstructorReturn(this, (MdiData.__proto__ || Object.getPrototypeOf(MdiData)).apply(this, arguments));
    }

    _createClass(MdiData, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 13.0004,2.00054L 13.0004,5.02898C 16.3922,5.51567 19.0001,8.42412 19.0001,11.9498C 19.0001,12.8451 18.8248,13.6983 18.5182,14.4855L 21.1189,16.0195C 21.6764,14.7746 22.0001,13.402 22.0001,11.9498C 22.0001,6.76616 18.0543,2.5042 13.0004,2.00054M 11.0003,2.00005C 5.94204,2.49895 2.00002,6.76238 2.00002,11.9498C 2.00002,17.4727 6.46853,21.9497 11.9949,21.9497C 15.3054,21.9497 18.2315,20.3365 20.0521,17.8606L 17.4561,16.3295C 16.1737,17.9257 14.2083,18.9498 12.0001,18.9498C 8.13308,18.9498 5.00014,15.8154 5.00014,11.9498C 5.00014,8.42412 7.60805,5.51567 11.0003,5.02898L 11.0003,2.00005' })
                )
            );
        }
    }]);

    return MdiData;
}(React.Component);

exports.default = MdiData;
module.exports = exports['default'];