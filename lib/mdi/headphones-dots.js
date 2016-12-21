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

var MdiHeadphonesDots = function (_React$Component) {
    _inherits(MdiHeadphonesDots, _React$Component);

    function MdiHeadphonesDots() {
        _classCallCheck(this, MdiHeadphonesDots);

        return _possibleConstructorReturn(this, (MdiHeadphonesDots.__proto__ || Object.getPrototypeOf(MdiHeadphonesDots)).apply(this, arguments));
    }

    _createClass(MdiHeadphonesDots, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,0.998068C 16.9704,0.998068 20.9994,5.02706 20.9994,9.99807L 20.9994,16.9981C 20.9994,18.6551 19.6564,19.9981 17.9994,19.9981L 14.9994,19.9981L 14.9994,11.9981L 18.9994,11.9981L 18.9994,9.99807C 18.9994,6.13206 15.8654,2.99807 11.9994,2.99807C 8.13339,2.99807 4.9994,6.13206 4.9994,9.99807L 4.9994,11.9981L 8.9994,11.9981L 8.9994,19.9981L 5.9994,19.9981C 4.3424,19.9981 2.9994,18.6551 2.9994,16.9981L 2.9994,9.99807C 2.9994,5.02706 7.02841,0.998068 11.9994,0.998068 Z M 15,24L 15,22L 17,22L 17,24L 15,24 Z M 11,24L 11,22L 13,22L 13,24L 11,24 Z M 7,24L 7,22L 9,22L 9,24L 7,24 Z ' })
                )
            );
        }
    }]);

    return MdiHeadphonesDots;
}(React.Component);

exports.default = MdiHeadphonesDots;
module.exports = exports['default'];