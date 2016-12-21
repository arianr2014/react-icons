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

var MdiCalendarClock = function (_React$Component) {
    _inherits(MdiCalendarClock, _React$Component);

    function MdiCalendarClock() {
        _classCallCheck(this, MdiCalendarClock);

        return _possibleConstructorReturn(this, (MdiCalendarClock.__proto__ || Object.getPrototypeOf(MdiCalendarClock)).apply(this, arguments));
    }

    _createClass(MdiCalendarClock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,13L 16.5,13L 16.5,15.823L 18.9382,17.2307L 18.1882,18.5297L 15,16.689L 15,13 Z M 18.9994,7.99807L 4.9994,7.99807L 4.9994,18.9981L 9.67271,18.9981C 9.24135,18.0893 9,17.0728 9,16C 9,12.134 12.134,9 16,9C 17.0734,9 18.0903,9.24159 18.9994,9.67335L 18.9994,7.99807 Z M 4.99936,20.9981C 3.89336,20.9981 2.99936,20.1021 2.99936,18.9981L 3.00937,4.99808C 3.00937,3.89307 3.89336,2.99808 4.99936,2.99808L 5.99936,2.99808L 5.99936,0.998085L 7.99936,0.998085L 7.99936,2.99808L 15.9994,2.99808L 15.9994,0.998085L 17.9994,0.998085L 17.9994,2.99808L 18.9994,2.99808C 20.1024,2.99808 20.9994,3.89307 20.9994,4.99808L 20.9994,11.1004C 22.2369,12.363 23,14.0924 23,16C 23,19.866 19.866,23 16,23C 14.0917,23 12.3618,22.2364 11.0991,20.9981L 4.99936,20.9981 Z M 16,11.1539C 13.3235,11.1539 11.1538,13.3236 11.1538,16C 11.1538,18.6765 13.3235,20.8462 16,20.8462C 18.6765,20.8462 20.8462,18.6765 20.8462,16C 20.8462,13.3236 18.6765,11.1539 16,11.1539 Z ' })
                )
            );
        }
    }]);

    return MdiCalendarClock;
}(React.Component);

exports.default = MdiCalendarClock;
module.exports = exports['default'];