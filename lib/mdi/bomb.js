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

var MdiBomb = function (_React$Component) {
    _inherits(MdiBomb, _React$Component);

    function MdiBomb() {
        _classCallCheck(this, MdiBomb);

        return _possibleConstructorReturn(this, (MdiBomb.__proto__ || Object.getPrototypeOf(MdiBomb)).apply(this, arguments));
    }

    _createClass(MdiBomb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 11.25,6C 11.25,4.2051 12.7051,2.75 14.5,2.75C 16.2947,2.75 17.75,4.2056 17.75,6C 17.75,6.4158 18.0842,6.75 18.5,6.75C 18.9158,6.75 19.25,6.4158 19.25,6L 19.25,5.25L 20.75,5.25L 20.75,6C 20.75,7.2442 19.7442,8.25 18.5,8.25C 17.2558,8.25 16.25,7.2442 16.25,6C 16.25,5.0339 15.4662,4.25 14.5,4.25C 13.5335,4.25 12.75,5.0335 12.75,6L 14,6L 14,7.2899C 16.8915,8.1504 19,10.829 19,14C 19,17.866 15.866,21 12,21C 8.13401,21 5,17.866 5,14C 5,10.829 7.10851,8.1504 10,7.2899L 10,6L 11.25,6 Z M 22,6L 24,6L 24,7L 22,7L 22,6 Z M 19,4L 19,2L 20,2L 20,4L 19,4 Z M 20.9142,4.3787L 22.3284,2.9645L 23.0355,3.6716L 21.6213,5.0858L 20.9142,4.3787 Z ' })
                )
            );
        }
    }]);

    return MdiBomb;
}(React.Component);

exports.default = MdiBomb;
module.exports = exports['default'];