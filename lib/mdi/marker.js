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

var MdiMarker = function (_React$Component) {
    _inherits(MdiMarker, _React$Component);

    function MdiMarker() {
        _classCallCheck(this, MdiMarker);

        return _possibleConstructorReturn(this, (MdiMarker.__proto__ || Object.getPrototypeOf(MdiMarker)).apply(this, arguments));
    }

    _createClass(MdiMarker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.4813,1.1475C 17.9688,1.1475 17.4563,1.3425 17.065,1.73375L 11.255,7.54875L 16.9088,13.2025L 22.725,7.3925C 23.5063,6.60625 23.5063,5.34625 22.725,4.56L 19.8925,1.73375C 19.5025,1.3425 18.9937,1.1475 18.4813,1.1475 Z M 10.2975,8.50625L 4.33625,14.4625C 3.555,15.2438 3.555,16.5037 4.355,17.31C 3.135,18.54 1.9,19.77 0.673752,21.0012L 6.32875,21.0012L 7.1875,20.1362C 7.97375,20.8987 9.21875,20.8937 9.995,20.1175L 15.9525,14.16' })
                )
            );
        }
    }]);

    return MdiMarker;
}(React.Component);

exports.default = MdiMarker;
module.exports = exports['default'];