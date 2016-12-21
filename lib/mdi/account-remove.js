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

var MdiAccountRemove = function (_React$Component) {
    _inherits(MdiAccountRemove, _React$Component);

    function MdiAccountRemove() {
        _classCallCheck(this, MdiAccountRemove);

        return _possibleConstructorReturn(this, (MdiAccountRemove.__proto__ || Object.getPrototypeOf(MdiAccountRemove)).apply(this, arguments));
    }

    _createClass(MdiAccountRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,13.998C 17.6664,13.998 22.9994,15.333 22.9994,17.998L 22.9994,19.998L 6.99939,19.998L 6.99939,17.998C 6.99939,15.333 12.3324,13.998 14.9994,13.998 Z M 14.9993,11.998C 12.7913,11.998 10.9993,10.205 10.9993,7.99798C 10.9993,5.78998 12.7913,3.99798 14.9993,3.99798C 17.2074,3.99798 18.9993,5.78998 18.9993,7.99798C 18.9993,10.205 17.2074,11.998 14.9993,11.998 Z M 4.99995,9.58583L 7.12129,7.46449L 8.5355,8.8787L 6.41416,11L 8.53548,13.1214L 7.12128,14.5356L 4.99996,12.4142L 2.87864,14.5356L 1.46443,13.1213L 3.58574,11L 1.46442,8.87871L 2.87863,7.4645L 4.99995,9.58583 Z ' })
                )
            );
        }
    }]);

    return MdiAccountRemove;
}(React.Component);

exports.default = MdiAccountRemove;
module.exports = exports['default'];