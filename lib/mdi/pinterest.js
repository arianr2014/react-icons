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

var MdiPinterest = function (_React$Component) {
    _inherits(MdiPinterest, _React$Component);

    function MdiPinterest() {
        _classCallCheck(this, MdiPinterest);

        return _possibleConstructorReturn(this, (MdiPinterest.__proto__ || Object.getPrototypeOf(MdiPinterest)).apply(this, arguments));
    }

    _createClass(MdiPinterest, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.2494,17.2483C 12.2469,17.2483 11.2894,16.8245 10.6044,16.0983L 9.4144,20.0983L 9.3294,20.357L 9.2894,20.3433C 9.0444,20.7483 8.6094,20.9983 8.1244,20.9983C 7.3669,20.9983 6.7494,20.382 6.7494,19.622C 6.7494,19.5583 6.7569,19.4983 6.7669,19.4408L 6.74565,19.432L 6.81315,19.2095L 9.1244,12.257C 9.1244,12.257 8.8744,11.4908 8.8744,10.4158C 8.8744,8.26702 10.0269,7.62326 10.9544,7.62326C 11.8819,7.62326 12.7257,7.95452 12.7257,9.26326C 12.7257,10.9433 11.6144,11.8033 11.6144,13.017C 11.6144,13.942 12.3681,14.6945 13.2933,14.6945C 16.2106,14.6945 17.2494,12.4945 17.2494,10.4358C 17.2494,7.71327 14.8944,5.49827 11.9994,5.49827C 9.1044,5.49827 6.7494,7.71327 6.7494,10.4358C 6.75065,11.2783 6.9844,12.1158 7.4269,12.8545C 7.54315,13.0495 7.6044,13.2695 7.6044,13.4983C 7.6044,14.1883 7.04334,14.7483 6.3544,14.7483C 5.9094,14.7483 5.49315,14.5108 5.27065,14.1295C 4.60316,13.0095 4.2494,11.732 4.2494,10.4358C 4.2494,6.33451 7.72565,2.99827 11.9994,2.99827C 16.2731,2.99827 19.7494,6.33451 19.7494,10.4358C 19.7494,13.717 17.7144,17.2483 13.2494,17.2483 Z ' })
                )
            );
        }
    }]);

    return MdiPinterest;
}(React.Component);

exports.default = MdiPinterest;
module.exports = exports['default'];