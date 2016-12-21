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

var MdiAccessPointNetwork = function (_React$Component) {
    _inherits(MdiAccessPointNetwork, _React$Component);

    function MdiAccessPointNetwork() {
        _classCallCheck(this, MdiAccessPointNetwork);

        return _possibleConstructorReturn(this, (MdiAccessPointNetwork.__proto__ || Object.getPrototypeOf(MdiAccessPointNetwork)).apply(this, arguments));
    }

    _createClass(MdiAccessPointNetwork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4.93359,2.9336C 3.12247,4.7447 2,7.2445 2,10C 2,12.7555 3.12247,15.2553 4.93359,17.0664L 6.33789,15.6621C 4.89166,14.2159 4,12.2151 4,10C 4,7.785 4.89166,5.7841 6.33789,4.3379L 4.93359,2.9336 Z M 19.0664,2.9336L 17.6621,4.3379C 19.1083,5.7841 20,7.785 20,10C 20,12.2151 19.1083,14.2159 17.6621,15.6621L 19.0664,17.0664C 20.8775,15.2553 22,12.7555 22,10C 22,7.2445 20.8775,4.7447 19.0664,2.9336 Z M 7.76172,5.7617C 6.67445,6.849 6,8.3491 6,10C 6,11.651 6.67445,13.151 7.76172,14.2383L 9.16797,12.832C 8.44559,12.1097 8,11.1105 8,10C 8,8.8895 8.44559,7.8903 9.16797,7.168L 7.76172,5.7617 Z M 16.2383,5.7617L 14.832,7.168C 15.5544,7.8903 16,8.8895 16,10C 16,11.1105 15.5544,12.1097 14.832,12.832L 16.2383,14.2383C 17.3255,13.151 18,11.651 18,10C 18,8.3491 17.3255,6.849 16.2383,5.7617 Z M 12,8C 10.8954,8 10,8.8954 10,10C 10,11.1046 10.8954,12 12,12C 13.1046,12 14,11.1046 14,10C 14,8.8954 13.1046,8 12,8 Z M 11,14L 11,18L 10,18C 9.44772,18 9,18.4477 9,19L 2,19L 2,21L 9,21C 9,21.5523 9.44772,22 10,22L 14,22C 14.5523,22 15,21.5523 15,21L 22,21L 22,19L 15,19C 15,18.4477 14.5523,18 14,18L 13,18L 13,14L 11,14 Z ' })
                )
            );
        }
    }]);

    return MdiAccessPointNetwork;
}(React.Component);

exports.default = MdiAccessPointNetwork;
module.exports = exports['default'];