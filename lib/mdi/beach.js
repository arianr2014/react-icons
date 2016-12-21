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

var MdiBeach = function (_React$Component) {
    _inherits(MdiBeach, _React$Component);

    function MdiBeach() {
        _classCallCheck(this, MdiBeach);

        return _possibleConstructorReturn(this, (MdiBeach.__proto__ || Object.getPrototypeOf(MdiBeach)).apply(this, arguments));
    }

    _createClass(MdiBeach, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 14.9995,18.542C 17.1343,18.212 19.5044,18 22,18L 22,22L 5,22C 5,21.3521 8.19546,19.8644 12.9995,18.8973L 12.9995,12.395C 12.1555,12.6463 11.445,13.2073 10.9997,13.9462C 10.3873,12.9298 9.27289,12.25 7.99973,12.25C 6.72676,12.25 5.6125,12.9296 5,13.9458C 5.03491,10.3672 8.52224,7.42779 12.9995,7.04274L 12.9995,7C 12.9995,6.44772 13.4472,6 13.9995,6C 14.5517,6 14.9995,6.44772 14.9995,7L 14.9995,7.04269C 19.4769,7.42755 22.9646,10.3671 22.9995,13.9458C 22.387,12.9296 21.2727,12.25 19.9997,12.25C 18.7266,12.25 17.6122,12.9298 16.9997,13.9462C 16.5544,13.2071 15.8437,12.646 14.9995,12.3949L 14.9995,18.542 Z M 7,2C 7,4.76142 4.76142,7 2,7L 2,2L 7,2 Z ' })
                )
            );
        }
    }]);

    return MdiBeach;
}(React.Component);

exports.default = MdiBeach;
module.exports = exports['default'];