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

var MdiBoombox = function (_React$Component) {
    _inherits(MdiBoombox, _React$Component);

    function MdiBoombox() {
        _classCallCheck(this, MdiBoombox);

        return _possibleConstructorReturn(this, (MdiBoombox.__proto__ || Object.getPrototypeOf(MdiBoombox)).apply(this, arguments));
    }

    _createClass(MdiBoombox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 7,5L 5,7L 5,8L 3,8C 2.446,8 2,8.446 2,9L 2,17C 2,17.554 2.446,18 3,18L 21,18C 21.554,18 22,17.554 22,17L 22,9C 22,8.446 21.554,8 21,8L 19,8L 19,7L 17,5L 7,5 Z M 7,7L 17,7L 17,8L 7,8L 7,7 Z M 11,9L 13,9C 13.277,9 13.5,9.223 13.5,9.5C 13.5,9.777 13.277,10 13,10L 11,10C 10.723,10 10.5,9.777 10.5,9.5C 10.5,9.223 10.723,9 11,9 Z M 7.5,10.5C 9.15685,10.5 10.5,11.8431 10.5,13.5C 10.5,15.1569 9.15685,16.5 7.5,16.5C 5.84315,16.5 4.5,15.1569 4.5,13.5C 4.5,11.8431 5.84315,10.5 7.5,10.5 Z M 16.5,10.5C 18.1569,10.5 19.5,11.8431 19.5,13.5C 19.5,15.1569 18.1569,16.5 16.5,16.5C 14.8431,16.5 13.5,15.1569 13.5,13.5C 13.5,11.8431 14.8431,10.5 16.5,10.5 Z M 7.5,12C 6.67157,12 6,12.6716 6,13.5C 6,14.3284 6.67157,15 7.5,15C 8.32843,15 9,14.3284 9,13.5C 9,12.6716 8.32843,12 7.5,12 Z M 16.5,12C 15.6716,12 15,12.6716 15,13.5C 15,14.3284 15.6716,15 16.5,15C 17.3284,15 18,14.3284 18,13.5C 18,12.6716 17.3284,12 16.5,12 Z ' })
                )
            );
        }
    }]);

    return MdiBoombox;
}(React.Component);

exports.default = MdiBoombox;
module.exports = exports['default'];