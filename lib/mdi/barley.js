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

var MdiBarley = function (_React$Component) {
    _inherits(MdiBarley, _React$Component);

    function MdiBarley() {
        _classCallCheck(this, MdiBarley);

        return _possibleConstructorReturn(this, (MdiBarley.__proto__ || Object.getPrototypeOf(MdiBarley)).apply(this, arguments));
    }

    _createClass(MdiBarley, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7.33333,18.3333C 6.5,17.1667 6.5,15.8333 6.5,14.5C 8.16667,15.5 9.83333,16.5 10.6667,17.6667L 11,18.2263L 11,15.9493C 9.5078,15.048 8.08319,14.1331 7.33333,13.0833C 6.5,11.9167 6.5,10.5833 6.5,9.25C 8.16667,10.25 9.83333,11.25 10.6667,12.4167L 11,12.9763L 11,10.6993C 9.5078,9.79799 8.08319,8.88314 7.33333,7.83333C 6.5,6.66667 6.5,5.33333 6.5,4C 8.16667,5 9.83333,6 10.6667,7.16667C 10.7718,7.31391 10.8637,7.46381 10.944,7.61603C 10.7678,7.02197 10.6557,6.42486 10.65,5.82267C 10.6357,4.30601 11.2964,2.75716 11.957,1.20831C 12.6464,2.6928 13.3357,4.17728 13.35,5.69395C 13.3559,6.32207 13.2461,6.95571 13.0684,7.59259C 13.1457,7.44842 13.2336,7.30635 13.3333,7.16667C 14.1667,6 15.8333,5 17.5,4C 17.5,5.33333 17.5,6.66667 16.6667,7.83333C 15.9168,8.88314 14.4922,9.79799 13,10.6993L 13,12.9763L 13.3333,12.4167C 14.1667,11.25 15.8333,10.25 17.5,9.25C 17.5,10.5833 17.5,11.9167 16.6667,13.0833C 15.9168,14.1331 14.4922,15.048 13,15.9493L 13,18.2263L 13.3333,17.6667C 14.1667,16.5 15.8333,15.5 17.5,14.5C 17.5,15.8333 17.5,17.1667 16.6667,18.3333C 15.9168,19.3831 14.4922,20.298 13,21.1993L 13,23L 11,23L 11,21.1993C 9.5078,20.298 8.08319,19.3831 7.33333,18.3333 Z ' })
                )
            );
        }
    }]);

    return MdiBarley;
}(React.Component);

exports.default = MdiBarley;
module.exports = exports['default'];