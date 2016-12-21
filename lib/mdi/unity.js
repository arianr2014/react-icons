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

var MdiUnity = function (_React$Component) {
    _inherits(MdiUnity, _React$Component);

    function MdiUnity() {
        _classCallCheck(this, MdiUnity);

        return _possibleConstructorReturn(this, (MdiUnity.__proto__ || Object.getPrototypeOf(MdiUnity)).apply(this, arguments));
    }

    _createClass(MdiUnity, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9.1132,17L 6.5,17L 1.5858,12L 6.5,7L 9.1132,7L 10.42,4.737L 17.207,2.981L 19.08,9.737L 17.7736,12L 19.0802,14.263L 17.2072,21.019L 10.4202,19.263L 9.1132,17 Z M 9.2548,16.7548L 14.384,18.1292L 11.4226,13L 5.5,13L 9.2548,16.7548 Z M 16.116,17.1292L 17.4904,12L 16.116,6.8708L 13.1547,12L 16.116,17.1292 Z M 9.2548,7.2452L 5.5,11L 11.4226,11L 14.384,5.8708L 9.2548,7.2452 Z ' })
                )
            );
        }
    }]);

    return MdiUnity;
}(React.Component);

exports.default = MdiUnity;
module.exports = exports['default'];