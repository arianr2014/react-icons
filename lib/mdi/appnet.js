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

var MdiAppnet = function (_React$Component) {
    _inherits(MdiAppnet, _React$Component);

    function MdiAppnet() {
        _classCallCheck(this, MdiAppnet);

        return _possibleConstructorReturn(this, (MdiAppnet.__proto__ || Object.getPrototypeOf(MdiAppnet)).apply(this, arguments));
    }

    _createClass(MdiAppnet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.4739,9.14218C 15.0711,7.69194 16.1801,4.27962 16.3507,3.68246C 16.5213,3.0853 16.9479,3 17.2038,3L 19.2512,3C 19.5924,3 19.7844,3.25593 19.6991,3.68247C 17.545,11.2749 16.0948,13.4929 16.0948,14.0047C 16.0948,15.2844 17.4597,17.673 18.7393,17.673C 19.5071,17.673 19.3365,16.564 20.1896,16.564L 21.8104,16.564C 22.0664,16.564 22.3223,16.8199 22.3223,17.2464C 22.3223,17.673 21.8478,21 18.606,21C 15.3643,21 14.154,17.0812 14.154,17.0812C 13.7275,17.9343 11.2322,21 8.16114,21C 2.70142,21 1.67773,15.1991 1.67773,11.7867C 1.67773,8.3744 3.29858,3 7.90521,3C 12.5119,3 14.4739,9.14218 14.4739,9.14218 Z M 4.49289,11.5308C 4.49289,13.4929 4.40758,17.5877 8.00116,17.673C 10.0379,17.7583 11.9147,15.1991 12.8051,13.1517C 11.5735,8.88626 10.7204,6.32701 7.99052,6.32701C 4.32228,6.41232 4.49289,11.5308 4.49289,11.5308 Z ' })
                )
            );
        }
    }]);

    return MdiAppnet;
}(React.Component);

exports.default = MdiAppnet;
module.exports = exports['default'];