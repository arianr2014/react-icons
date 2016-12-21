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

var MdiNeedle = function (_React$Component) {
    _inherits(MdiNeedle, _React$Component);

    function MdiNeedle() {
        _classCallCheck(this, MdiNeedle);

        return _possibleConstructorReturn(this, (MdiNeedle.__proto__ || Object.getPrototypeOf(MdiNeedle)).apply(this, arguments));
    }

    _createClass(MdiNeedle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.1464,15.182L 9.73223,13.7678L 11.1464,12.3536L 12.5607,13.7678L 13.9749,12.3536L 12.5607,10.9393L 13.9749,9.52512L 15.3891,10.9393L 16.8033,9.52513L 13.9749,6.6967L 6.9038,13.7678L 9.73223,16.5962L 11.1464,15.182 Z M 3.07538,19.0104L 6.1967,15.8891L 4.07538,13.7678L 13.9749,3.86827L 16.0962,5.98959L 17.5104,4.57538L 16.0962,3.16117L 17.5104,1.74695L 21.753,5.98959L 20.3388,7.4038L 18.9246,5.98959L 17.5104,7.4038L 19.6317,9.52512L 9.73223,19.4246L 7.61091,17.3033L 3.07538,21.8388L 3.07538,19.0104 Z ' })
                )
            );
        }
    }]);

    return MdiNeedle;
}(React.Component);

exports.default = MdiNeedle;
module.exports = exports['default'];