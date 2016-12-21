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

var MdiVimeo = function (_React$Component) {
    _inherits(MdiVimeo, _React$Component);

    function MdiVimeo() {
        _classCallCheck(this, MdiVimeo);

        return _possibleConstructorReturn(this, (MdiVimeo.__proto__ || Object.getPrototypeOf(MdiVimeo)).apply(this, arguments));
    }

    _createClass(MdiVimeo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22,7.42026C 21.9109,9.37179 20.5505,12.0441 17.9191,15.4358C 15.1986,18.9786 12.8969,20.75 11.014,20.75C 9.84797,20.75 8.86057,19.6716 8.05452,17.5136C 7.51598,15.5357 6.97783,13.5579 6.43927,11.58C 5.84056,9.4232 5.19844,8.34347 4.51177,8.34347C 4.3621,8.34347 3.8384,8.65914 2.94148,9.28777L 2,8.07262C 2.98758,7.20325 3.9617,6.33399 4.92019,5.46345C 6.23723,4.32324 7.22599,3.72353 7.88491,3.66294C 9.44232,3.51307 10.4008,4.57961 10.7605,6.86257C 11.1492,9.32587 11.4183,10.858 11.5695,11.4576C 12.0184,13.5012 12.5122,14.5218 13.0519,14.5218C 13.4706,14.5218 14.0997,13.8589 14.9385,12.5335C 15.7764,11.2077 16.2253,10.199 16.2859,9.50614C 16.4053,8.36202 15.9562,7.7885 14.9385,7.7885C 14.4594,7.7885 13.9656,7.89891 13.4576,8.11728C 14.4408,4.88992 16.3199,3.32246 19.0931,3.41186C 21.1492,3.47243 22.1184,4.80834 22,7.42026 Z ' })
                )
            );
        }
    }]);

    return MdiVimeo;
}(React.Component);

exports.default = MdiVimeo;
module.exports = exports['default'];