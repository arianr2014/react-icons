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

var MdiCloseNetwork = function (_React$Component) {
    _inherits(MdiCloseNetwork, _React$Component);

    function MdiCloseNetwork() {
        _classCallCheck(this, MdiCloseNetwork);

        return _possibleConstructorReturn(this, (MdiCloseNetwork.__proto__ || Object.getPrototypeOf(MdiCloseNetwork)).apply(this, arguments));
    }

    _createClass(MdiCloseNetwork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.5853,6L 12,8.5853L 9.41468,6L 8,7.41374L 10.5858,9.99951L 8,12.5853L 9.41373,14L 12,11.4137L 14.5863,14L 16,12.5853L 13.4142,9.99952L 16,7.41373L 14.5853,6 Z M 17,3.00001C 18.103,3.00001 19,3.896 19,5.00001L 19,15C 19,16.104 18.103,17 17,17L 13,17L 13,19L 14,19C 14.5523,19 15,19.4477 15,20L 22,20L 22,22L 15,22C 15,22.5523 14.5523,23 14,23L 10,23C 9.44772,23 9,22.5523 9,22L 2,22L 2,20L 9,20C 9,19.4477 9.44772,19 10,19L 11,19L 11,17L 7,17C 5.894,17 5,16.104 5,15L 5,5.00001C 5,3.896 5.894,3.00001 7,3.00001L 17,3.00001 Z ' })
                )
            );
        }
    }]);

    return MdiCloseNetwork;
}(React.Component);

exports.default = MdiCloseNetwork;
module.exports = exports['default'];