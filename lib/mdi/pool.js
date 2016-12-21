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

var MdiPool = function (_React$Component) {
    _inherits(MdiPool, _React$Component);

    function MdiPool() {
        _classCallCheck(this, MdiPool);

        return _possibleConstructorReturn(this, (MdiPool.__proto__ || Object.getPrototypeOf(MdiPool)).apply(this, arguments));
    }

    _createClass(MdiPool, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,15C 3.66667,14.25 5.33333,13.5 7,13.1719L 7,5.00001C 7,3.34315 8.34315,2.00001 10,2.00001C 11.3062,2.00001 12.4175,2.83481 12.8293,4L 10,4C 9.44772,4 9,4.44772 9,5L 9,6L 14,6L 14,5C 14,3.34315 15.3431,2 17,2C 18.3062,2 19.4175,2.83481 19.8293,3.99999L 17,4C 16.4477,4 16,4.44771 16,5L 16,14.944C 18,14.62 20,13 22,13L 22,15C 19.7778,15 17.5555,17 15.3333,17C 13.1111,17 10.8889,15 8.66666,15C 6.44444,15 4.22222,16 2,17L 2,15 Z M 14,8L 9,8L 9,10L 14,10L 14,8 Z M 14,12L 9,12L 9,13.0145C 10.6667,13.157 12.3333,14.312 14,14.792L 14,12 Z M 2.00002,19C 4.22224,18 6.44446,17 8.66668,17C 10.8889,17 13.1111,19 15.3333,19C 17.5556,19 19.7778,17 22,17L 22,19C 19.7778,19 17.5556,21 15.3333,21C 13.1111,21 10.8889,19 8.66668,19C 6.44446,19 4.22224,20 2.00002,21L 2.00002,19 Z ' })
                )
            );
        }
    }]);

    return MdiPool;
}(React.Component);

exports.default = MdiPool;
module.exports = exports['default'];