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

var MdiEmoticonTongue = function (_React$Component) {
    _inherits(MdiEmoticonTongue, _React$Component);

    function MdiEmoticonTongue() {
        _classCallCheck(this, MdiEmoticonTongue);

        return _possibleConstructorReturn(this, (MdiEmoticonTongue.__proto__ || Object.getPrototypeOf(MdiEmoticonTongue)).apply(this, arguments));
    }

    _createClass(MdiEmoticonTongue, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9,8C 10.1046,8 11,8.89543 11,10C 11,10.3643 10.9026,10.7058 10.7324,11C 10.3866,10.4022 9.74028,10 9,10C 8.25972,10 7.61337,10.4022 7.26756,11C 7.09739,10.7058 7,10.3643 7,10C 7,8.89543 7.89543,8 9,8 Z M 15,8C 16.1046,8 17,8.89543 17,10C 17,10.3643 16.9026,10.7058 16.7324,11C 16.3866,10.4022 15.7403,10 15,10C 14.2597,10 13.6134,10.4022 13.2676,11C 13.0974,10.7058 13,10.3643 13,10C 13,8.89543 13.8954,8 15,8 Z M 11.9994,19.9981C 16.4194,19.9981 19.9994,16.4161 19.9994,11.9981C 19.9994,7.58008 16.4194,3.99808 11.9994,3.99808C 7.57938,3.99808 3.99937,7.58008 3.99937,11.9981C 3.99937,16.4161 7.57938,19.9981 11.9994,19.9981 Z M 11.9944,1.99809C 17.5204,1.99809 21.9994,6.47508 21.9994,11.9981C 21.9994,17.5211 17.5204,21.9981 11.9944,21.9981C 6.46736,21.9981 1.99937,17.5211 1.99937,11.9981C 1.99937,6.47508 6.46736,1.99809 11.9944,1.99809 Z M 8.99999,13L 15,13C 15.5523,13 16,13.4477 16,14C 16,14.5523 15.5523,15 15,15C 15,17 14.1046,18 13,18C 11.8954,18 11,17 11,15L 8.99999,15C 8.44771,15 7.99999,14.5523 7.99999,14C 7.99999,13.4477 8.44771,13 8.99999,13 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonTongue;
}(React.Component);

exports.default = MdiEmoticonTongue;
module.exports = exports['default'];