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

var MdiFormatBold = function (_React$Component) {
    _inherits(MdiFormatBold, _React$Component);

    function MdiFormatBold() {
        _classCallCheck(this, MdiFormatBold);

        return _possibleConstructorReturn(this, (MdiFormatBold.__proto__ || Object.getPrototypeOf(MdiFormatBold)).apply(this, arguments));
    }

    _createClass(MdiFormatBold, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.4994,15.498L 9.99937,15.498L 9.99937,12.498L 13.4994,12.498C 14.3274,12.498 14.9994,13.17 14.9994,13.998C 14.9994,14.826 14.3274,15.498 13.4994,15.498 Z M 9.99937,6.49805L 12.9994,6.49805C 13.8274,6.49805 14.4994,7.17004 14.4994,7.99805C 14.4994,8.82605 13.8274,9.49805 12.9994,9.49805L 9.99937,9.49805M 15.5994,10.786C 16.5654,10.1121 17.2494,9.01904 17.2494,7.99805C 17.2494,5.74304 15.5044,3.99805 13.2494,3.99805L 6.99937,3.99805L 6.99937,17.998L 14.0414,17.998C 16.1354,17.998 17.7494,16.3 17.7494,14.2061C 17.7494,12.69 16.8864,11.3921 15.5994,10.786 Z ' })
                )
            );
        }
    }]);

    return MdiFormatBold;
}(React.Component);

exports.default = MdiFormatBold;
module.exports = exports['default'];