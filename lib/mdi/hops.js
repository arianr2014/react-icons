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

var MdiHops = function (_React$Component) {
    _inherits(MdiHops, _React$Component);

    function MdiHops() {
        _classCallCheck(this, MdiHops);

        return _possibleConstructorReturn(this, (MdiHops.__proto__ || Object.getPrototypeOf(MdiHops)).apply(this, arguments));
    }

    _createClass(MdiHops, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21,12C 21,12 12.5,10 12.5,2C 12.5,2 21,2.00001 21,12 Z M 3,12C 3,2.00001 11.5,2 11.5,2C 11.5,10 3,12 3,12 Z M 12,6.50001C 12,6.50001 12.995,8.65593 14.9851,10.4845C 14.7577,14.1615 12,16 12,16C 12,16 9.24225,14.1615 9.01487,10.4845C 11.005,8.65593 12,6.50001 12,6.50001 Z M 20.75,13.25C 20.75,13.25 20,17 18,19C 18,19 15.5341,17.3561 14.3284,14.8134C 15.0494,13.5785 15.5029,12.1167 15.7528,11.1307C 17.1253,12.1842 18.75,13 20.75,13.25 Z M 15.5,18.25C 14.5,20.25 12,21.75 12,21.75C 12,21.75 9.5,20.25 8.5,18.25C 8.5,18.25 9.59361,17.3387 10.3528,15.7954C 10.8184,16.3517 11.3643,16.7881 12,17C 12.6357,16.7881 13.1816,16.3517 13.6472,15.7954C 14.4064,17.3387 15.5,18.25 15.5,18.25 Z M 3.25,13.25C 5.25,13 6.87465,12.1842 8.24722,11.1307C 8.49705,12.1167 8.95056,13.5785 9.67162,14.8134C 8.46588,17.3561 6,19 6,19C 4,17 3.25,13.25 3.25,13.25 Z ' })
                )
            );
        }
    }]);

    return MdiHops;
}(React.Component);

exports.default = MdiHops;
module.exports = exports['default'];