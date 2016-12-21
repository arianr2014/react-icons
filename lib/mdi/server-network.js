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

var MdiServerNetwork = function (_React$Component) {
    _inherits(MdiServerNetwork, _React$Component);

    function MdiServerNetwork() {
        _classCallCheck(this, MdiServerNetwork);

        return _possibleConstructorReturn(this, (MdiServerNetwork.__proto__ || Object.getPrototypeOf(MdiServerNetwork)).apply(this, arguments));
    }

    _createClass(MdiServerNetwork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,18L 14,18C 14.5523,18 15,18.4477 15,19L 22,19L 22,21L 15,21C 15,21.5523 14.5523,22 14,22L 10,22C 9.44772,22 9.00001,21.5523 9.00001,21L 2,21L 2,19L 9.00001,19C 9.00001,18.4477 9.44772,18 10,18L 11,18L 11,16L 4,16C 3.44771,16 3,15.5523 3,15L 3,11C 3,10.4477 3.44771,10 4,10L 20,10C 20.5523,10 21,10.4477 21,11L 21,15C 21,15.5523 20.5523,16 20,16L 13,16L 13,18 Z M 4,2L 20,2C 20.5523,2 21,2.44771 21,3L 21,6.99999C 21,7.55228 20.5523,7.99999 20,7.99999L 4,7.99999C 3.44772,7.99999 3,7.55228 3,6.99999L 3,3C 3,2.44771 3.44772,2 4,2 Z M 8.99999,6.00001L 9.99999,6.00001L 9.99999,4.00001L 8.99999,4.00001L 8.99999,6.00001 Z M 8.99999,14L 9.99999,14L 9.99999,12L 8.99999,12L 8.99999,14 Z M 5,4.00001L 5,6.00001L 7,6.00001L 7,4.00001L 5,4.00001 Z M 5,12L 5,14L 7,14L 7,12L 5,12 Z ' })
                )
            );
        }
    }]);

    return MdiServerNetwork;
}(React.Component);

exports.default = MdiServerNetwork;
module.exports = exports['default'];