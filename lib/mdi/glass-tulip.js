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

var MdiGlassTulip = function (_React$Component) {
    _inherits(MdiGlassTulip, _React$Component);

    function MdiGlassTulip() {
        _classCallCheck(this, MdiGlassTulip);

        return _possibleConstructorReturn(this, (MdiGlassTulip.__proto__ || Object.getPrototypeOf(MdiGlassTulip)).apply(this, arguments));
    }

    _createClass(MdiGlassTulip, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8,1.99998L 16,1.99998C 15.6667,2.66666 15.3333,3.33332 15.5833,4.99999C 15.8333,6.66666 16.6667,9.33333 16.25,10.7361C 15.8333,12.1389 14.1667,12.2777 13.3333,13.8611C 12.5,15.4444 12.5,18.4722 13.0833,19.9028C 13.6667,21.3333 14.8333,21.1667 15.4167,21.25C 16,21.3333 16,21.6667 16,22L 8,22C 8,21.6667 8,21.3333 8.58333,21.25C 9.16667,21.1667 10.3333,21.3333 10.9167,19.9027C 11.5,18.4722 11.5,15.4444 10.6667,13.8611C 9.83333,12.2778 8.16667,12.1389 7.75,10.7361C 7.33333,9.33333 8.16667,6.66667 8.41667,4.99999C 8.66667,3.33332 8.33333,2.66666 8,1.99998 Z M 9.99999,4.00001C 9.99999,5.19104 9.82924,6.17192 9.64418,7L 14.2689,7C 14.1313,6.17192 14,5.19105 14,4.00002L 9.99999,4.00001 Z ' })
                )
            );
        }
    }]);

    return MdiGlassTulip;
}(React.Component);

exports.default = MdiGlassTulip;
module.exports = exports['default'];