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

var MdiMaxcdn = function (_React$Component) {
    _inherits(MdiMaxcdn, _React$Component);

    function MdiMaxcdn() {
        _classCallCheck(this, MdiMaxcdn);

        return _possibleConstructorReturn(this, (MdiMaxcdn.__proto__ || Object.getPrototypeOf(MdiMaxcdn)).apply(this, arguments));
    }

    _createClass(MdiMaxcdn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20.5962,6.68884C 19.7257,5.61378 18.3814,5.00001 16.9028,5.00001L 2.95403,5.00001L 4.62234,8.57447L 2.39276,19L 6.04739,19L 8.27844,8.57447L 11.4004,8.57308L 9.17165,19L 12.8262,19L 15.0551,8.57308L 16.9028,8.57308C 17.3026,8.57308 17.6277,8.70288 17.8156,8.93677C 18.0075,9.17067 18.066,9.51485 17.9815,9.90464L 16.0357,19L 19.6898,19L 21.4765,10.6519C 21.7847,9.20629 21.4631,7.76096 20.5962,6.68884 Z ' })
                )
            );
        }
    }]);

    return MdiMaxcdn;
}(React.Component);

exports.default = MdiMaxcdn;
module.exports = exports['default'];