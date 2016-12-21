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

var MdiPhoneMissed = function (_React$Component) {
    _inherits(MdiPhoneMissed, _React$Component);

    function MdiPhoneMissed() {
        _classCallCheck(this, MdiPhoneMissed);

        return _possibleConstructorReturn(this, (MdiPhoneMissed.__proto__ || Object.getPrototypeOf(MdiPhoneMissed)).apply(this, arguments));
    }

    _createClass(MdiPhoneMissed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 23.7058,16.6695C 20.6578,13.7735 16.5358,11.9985 11.9998,11.9985C 7.46379,11.9985 3.34178,13.7735 0.293772,16.6695C 0.111766,16.8505 -0.000233968,17.1015 -0.000233968,17.3775C -0.000233968,17.6535 0.110789,17.9035 0.292765,18.0845L 2.76878,20.5625C 2.95079,20.7435 3.20079,20.8555 3.47679,20.8555C 3.74879,20.8555 3.99476,20.7465 4.17576,20.5715C 4.96778,19.8345 5.86378,19.2095 6.84077,18.7185C 7.17176,18.5565 7.39976,18.2155 7.39976,17.8205L 7.39976,14.7165C 8.84877,14.2495 10.3948,13.9985 11.9998,13.9985C 13.6038,13.9985 15.1498,14.2495 16.5988,14.7165L 16.5988,17.8205C 16.5988,18.2155 16.8278,18.5565 17.1588,18.7185C 18.1358,19.2095 19.0318,19.8345 19.8238,20.5715C 20.0048,20.7465 20.2508,20.8555 20.5218,20.8555C 20.7988,20.8555 21.0488,20.7435 21.2298,20.5625L 23.7068,18.0845C 23.8888,17.9035 23.9998,17.6535 23.9998,17.3775C 23.9998,17.1015 23.8878,16.8505 23.7058,16.6695 Z M 6.49977,5.4985L 11.9998,10.9985L 18.9998,3.9985L 17.9998,2.9985L 11.9998,8.9985L 7.49977,4.4985L 10.9998,4.4985L 10.9998,2.9985L 4.99977,2.9985L 4.99977,8.9985L 6.49977,8.9985L 6.49977,5.4985 Z ' })
                )
            );
        }
    }]);

    return MdiPhoneMissed;
}(React.Component);

exports.default = MdiPhoneMissed;
module.exports = exports['default'];