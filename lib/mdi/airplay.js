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

var MdiAirplay = function (_React$Component) {
    _inherits(MdiAirplay, _React$Component);

    function MdiAirplay() {
        _classCallCheck(this, MdiAirplay);

        return _possibleConstructorReturn(this, (MdiAirplay.__proto__ || Object.getPrototypeOf(MdiAirplay)).apply(this, arguments));
    }

    _createClass(MdiAirplay, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,22.005L 17.9963,22.005L 12.0012,16.0038M 21,3L 2.99625,3C 1.89874,3 1,3.90375 1,5.0025L 1,17.005C 1,18.1025 1.89874,19.0013 2.99625,19.0013L 7.00124,19.0013L 7.00124,17.005L 2.99625,17.005L 2.99625,5.0025L 21,5.0025L 21,17.005L 17.0012,17.005L 17.0012,19.0013L 21,19.0013C 22.0987,19.0013 22.9962,18.1025 22.9962,17.005L 22.9962,5.0025C 22.9962,3.90375 22.0987,3 21,3 Z ' })
                )
            );
        }
    }]);

    return MdiAirplay;
}(React.Component);

exports.default = MdiAirplay;
module.exports = exports['default'];