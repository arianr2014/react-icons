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

var MdiVine = function (_React$Component) {
    _inherits(MdiVine, _React$Component);

    function MdiVine() {
        _classCallCheck(this, MdiVine);

        return _possibleConstructorReturn(this, (MdiVine.__proto__ || Object.getPrototypeOf(MdiVine)).apply(this, arguments));
    }

    _createClass(MdiVine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 19.8901,11.9485C 19.4264,12.0554 18.9779,12.1025 18.5742,12.1025C 16.3031,12.1025 14.5546,10.5164 14.5546,7.75846C 14.5546,6.40669 15.0772,5.7037 15.8163,5.7037C 16.5194,5.7037 16.9881,6.33455 16.9881,7.61435C 16.9881,8.34201 16.7932,9.13946 16.6493,9.61126C 16.6493,9.61126 17.3492,10.8321 19.2629,10.4574C 19.6693,9.55531 19.8901,8.38697 19.8901,7.36208C 19.8901,4.60417 18.4841,3 15.9064,3C 13.257,3 11.7067,5.03686 11.7067,7.72262C 11.7067,10.3833 12.9505,12.6671 15.0014,13.7077C 14.139,15.4329 13.0416,16.9525 11.8972,18.0975C 9.82074,15.5873 7.94357,12.2387 7.1733,5.7037L 4.10987,5.7037C 5.52521,16.5874 9.7431,20.0529 10.8583,20.7183C 11.4892,21.0969 12.0323,21.0789 12.6092,20.7543C 13.5147,20.2394 16.2337,17.5209 17.7407,14.3367C 18.3733,14.3349 19.1333,14.2623 19.8901,14.0913L 19.8901,11.9485 Z ' })
                )
            );
        }
    }]);

    return MdiVine;
}(React.Component);

exports.default = MdiVine;
module.exports = exports['default'];