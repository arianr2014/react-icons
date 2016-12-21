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

var MdiYoutubePlay = function (_React$Component) {
    _inherits(MdiYoutubePlay, _React$Component);

    function MdiYoutubePlay() {
        _classCallCheck(this, MdiYoutubePlay);

        return _possibleConstructorReturn(this, (MdiYoutubePlay.__proto__ || Object.getPrototypeOf(MdiYoutubePlay)).apply(this, arguments));
    }

    _createClass(MdiYoutubePlay, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.9994,16.498L 9.9994,7.49805L 15.9994,11.998M 20.0014,4.39807C 19.3994,4.20105 15.7006,3.99805 11.9994,3.99805C 8.3004,3.99805 4.6014,4.18506 3.9994,4.38202C 2.4354,4.89807 1.9994,8.40204 1.9994,11.998C 1.9994,15.5941 2.4354,19.098 3.9994,19.6141C 4.6014,19.811 8.3004,19.998 11.9994,19.998C 15.7006,19.998 19.3994,19.811 20.0014,19.6141C 21.5634,19.098 21.9894,15.5941 21.9894,11.998C 21.9894,8.40204 21.5634,4.91406 20.0014,4.39807 Z ' })
                )
            );
        }
    }]);

    return MdiYoutubePlay;
}(React.Component);

exports.default = MdiYoutubePlay;
module.exports = exports['default'];