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

var MdiMinusNetwork = function (_React$Component) {
    _inherits(MdiMinusNetwork, _React$Component);

    function MdiMinusNetwork() {
        _classCallCheck(this, MdiMinusNetwork);

        return _possibleConstructorReturn(this, (MdiMinusNetwork.__proto__ || Object.getPrototypeOf(MdiMinusNetwork)).apply(this, arguments));
    }

    _createClass(MdiMinusNetwork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,10.9995L 16,8.99951L 8.00001,8.99951L 8.00001,10.9995L 16,10.9995 Z M 17,3C 18.103,3 19,3.896 19,5L 19,15C 19,16.104 18.103,17 17,17L 13,17L 13,19L 14,19C 14.5523,19 15,19.4477 15,20L 22,20L 22,22L 15,22C 15,22.5523 14.5523,23 14,23L 10,23C 9.44772,23 9.00001,22.5523 9.00001,22L 2,22L 2,20L 9.00001,20C 9.00001,19.4477 9.44772,19 10,19L 11,19L 11,17L 7,17C 5.894,17 5,16.104 5,15L 5,5C 5,3.896 5.894,3 7,3L 17,3 Z ' })
                )
            );
        }
    }]);

    return MdiMinusNetwork;
}(React.Component);

exports.default = MdiMinusNetwork;
module.exports = exports['default'];