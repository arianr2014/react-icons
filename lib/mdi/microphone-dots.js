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

var MdiMicrophoneDots = function (_React$Component) {
    _inherits(MdiMicrophoneDots, _React$Component);

    function MdiMicrophoneDots() {
        _classCallCheck(this, MdiMicrophoneDots);

        return _possibleConstructorReturn(this, (MdiMicrophoneDots.__proto__ || Object.getPrototypeOf(MdiMicrophoneDots)).apply(this, arguments));
    }

    _createClass(MdiMicrophoneDots, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,9.99805L 17.2984,9.99805C 17.2984,12.998 14.7614,15.098 11.9994,15.098C 9.23738,15.098 6.69938,12.998 6.69938,9.99805L 4.99938,9.99805C 4.99938,13.413 7.71838,16.231 10.9994,16.7161L 10.9994,19.998L 12.9994,19.998L 12.9994,16.7161C 16.2784,16.231 18.9994,13.413 18.9994,9.99805 Z M 14.9994,23.998L 16.9994,23.998L 16.9994,21.998L 14.9994,21.998M 10.9994,23.998L 12.9994,23.998L 12.9994,21.998L 10.9994,21.998M 11.9994,12.998C 13.6564,12.998 14.9894,11.6541 14.9894,9.99805L 14.9984,3.99805C 14.9984,2.34003 13.6564,0.998047 11.9994,0.998047C 10.3434,0.998047 8.99938,2.34003 8.99938,3.99805L 8.99938,9.99805C 8.99938,11.6541 10.3434,12.998 11.9994,12.998 Z M 6.99938,23.998L 8.99938,23.998L 8.99938,21.998L 6.99938,21.998L 6.99938,23.998 Z ' })
                )
            );
        }
    }]);

    return MdiMicrophoneDots;
}(React.Component);

exports.default = MdiMicrophoneDots;
module.exports = exports['default'];