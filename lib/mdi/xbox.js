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

var MdiXbox = function (_React$Component) {
    _inherits(MdiXbox, _React$Component);

    function MdiXbox() {
        _classCallCheck(this, MdiXbox);

        return _possibleConstructorReturn(this, (MdiXbox.__proto__ || Object.getPrototypeOf(MdiXbox)).apply(this, arguments));
    }

    _createClass(MdiXbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.4262,3.72253C 6.48353,3.66229 6.5671,3.5972 6.61957,3.5632C 8.18404,2.546 9.99436,2 12.0019,2C 13.8774,2 15.6391,2.51977 17.1385,3.41941C 17.2483,3.48353 17.5437,3.68853 17.6962,3.87506C 16.2493,2.27689 11.9913,5.70349 11.9913,5.70349C 10.5181,4.56874 9.16646,3.7954 8.15684,3.52142C 7.31435,3.2902 6.73035,3.47965 6.45632,3.6963 Z M 19.3394,5.20703C 19.2938,5.15749 19.2442,5.11182 19.1995,5.06227C 18.8351,4.66006 18.3832,4.56194 17.981,4.58817C 17.6088,4.70572 15.9044,5.3207 13.8016,7.30555C 13.8016,7.30555 16.1667,9.60517 17.6166,11.9582C 19.0664,14.3113 19.9312,16.1591 19.4006,18.725C 21.0137,16.949 22,14.5921 22,12C 22,9.37783 20.9904,6.99077 19.3394,5.20703 Z M 15.7256,12.9638C 15.0804,12.2429 14.1281,11.2101 12.8639,9.95395C 12.5908,9.68095 12.2983,9.39629 11.9913,9.09997C 11.9913,9.09997 11.5316,9.55951 10.9321,10.1667C 10.1615,10.941 9.16646,11.9543 8.61257,12.5421C 7.62919,13.5933 4.80925,16.8917 4.64989,18.7395C 4.64989,18.7395 4.02313,17.2754 5.40103,13.8935C 6.30085,11.6813 9.01875,8.36063 10.1537,7.27835C 10.1537,7.27835 9.11787,6.13679 7.81576,5.35082L 7.77009,5.3207C 7.14333,4.94861 6.46021,4.66006 5.80332,4.62217C 5.13186,4.66783 4.70722,5.16137 4.70722,5.16137C 3.02517,6.949 2,9.35451 2,12C 2,17.5212 6.47964,22 12.0019,22C 14.9327,22 17.5709,20.736 19.4006,18.7288C 19.4006,18.725 19.1917,17.4037 17.8439,15.514C 17.5291,15.07 16.3708,13.6885 15.7256,12.9638 Z ' })
                )
            );
        }
    }]);

    return MdiXbox;
}(React.Component);

exports.default = MdiXbox;
module.exports = exports['default'];