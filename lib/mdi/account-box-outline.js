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

var MdiAccountBoxOutline = function (_React$Component) {
    _inherits(MdiAccountBoxOutline, _React$Component);

    function MdiAccountBoxOutline() {
        _classCallCheck(this, MdiAccountBoxOutline);

        return _possibleConstructorReturn(this, (MdiAccountBoxOutline.__proto__ || Object.getPrototypeOf(MdiAccountBoxOutline)).apply(this, arguments));
    }

    _createClass(MdiAccountBoxOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9993,18.9981L 4.9993,18.9991L 4.9993,4.99807L 18.9993,4.99807M 18.9993,2.99807L 4.9993,2.99807C 3.89529,2.99807 2.9993,3.89406 2.9993,4.99807L 2.9993,18.9981C 2.9993,20.1031 3.89529,20.9981 4.9993,20.9981L 18.9993,20.9981C 20.1033,20.9981 20.9993,20.1031 20.9993,18.9981L 20.9993,4.99807C 20.9993,3.89406 20.1033,2.99807 18.9993,2.99807 Z M 16.4993,16.2481C 16.4993,14.7481 13.4993,13.9981 11.9993,13.9981C 10.4993,13.9981 7.4993,14.7481 7.4993,16.2481L 7.4993,16.9981L 16.4993,16.9981M 11.9993,12.2481C 13.2413,12.2481 14.2493,11.2421 14.2493,9.99807C 14.2493,8.75606 13.2413,7.74807 11.9993,7.74807C 10.7573,7.74807 9.74927,8.75606 9.74927,9.99807C 9.74927,11.2421 10.7573,12.2481 11.9993,12.2481 Z ' })
                )
            );
        }
    }]);

    return MdiAccountBoxOutline;
}(React.Component);

exports.default = MdiAccountBoxOutline;
module.exports = exports['default'];