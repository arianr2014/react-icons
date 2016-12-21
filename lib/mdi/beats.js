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

var MdiBeats = function (_React$Component) {
    _inherits(MdiBeats, _React$Component);

    function MdiBeats() {
        _classCallCheck(this, MdiBeats);

        return _possibleConstructorReturn(this, (MdiBeats.__proto__ || Object.getPrototypeOf(MdiBeats)).apply(this, arguments));
    }

    _createClass(MdiBeats, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,12C 7,14.7614 9.23857,17 12,17C 14.7614,17 17,14.7614 17,12C 17,9.23858 14.7614,7 12,7C 10.8744,7 9.83566,7.37195 9,7.99963L 9,2.4578C 9.94704,2.16035 10.9548,2 12,2C 17.5228,2 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,8.29859 4.01099,5.06687 7,3.33782L 7,12 Z M 14.5,12C 14.5,12.3651 14.3044,12.6844 14.0123,12.859L 12.1097,14.2927C 11.9409,14.4227 11.7295,14.5 11.5,14.5C 10.9477,14.5 10.5,14.0523 10.5,13.5L 10.5,10.5C 10.5,9.94772 10.9477,9.5 11.5,9.5C 11.7296,9.5 11.941,9.57735 12.1098,9.70741L 14.0123,11.141C 14.3044,11.3156 14.5,11.6349 14.5,12 Z ' })
                )
            );
        }
    }]);

    return MdiBeats;
}(React.Component);

exports.default = MdiBeats;
module.exports = exports['default'];