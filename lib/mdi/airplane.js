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

var MdiAirplane = function (_React$Component) {
    _inherits(MdiAirplane, _React$Component);

    function MdiAirplane() {
        _classCallCheck(this, MdiAirplane);

        return _possibleConstructorReturn(this, (MdiAirplane.__proto__ || Object.getPrototypeOf(MdiAirplane)).apply(this, arguments));
    }

    _createClass(MdiAirplane, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9994,15.998L 20.9994,13.998L 12.9994,8.99805L 12.9994,3.49805C 12.9994,2.66904 12.3274,1.99805 11.4994,1.99805C 10.6714,1.99805 9.9994,2.66904 9.9994,3.49805L 9.9994,8.99805L 1.9994,13.998L 1.9994,15.998L 9.9994,13.498L 9.9994,18.998L 7.9994,20.498L 7.9994,21.998L 11.4994,20.998L 14.9994,21.998L 14.9994,20.498L 12.9994,18.998L 12.9994,13.498L 20.9994,15.998 Z ' })
                )
            );
        }
    }]);

    return MdiAirplane;
}(React.Component);

exports.default = MdiAirplane;
module.exports = exports['default'];