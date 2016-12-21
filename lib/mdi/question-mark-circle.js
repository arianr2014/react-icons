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

var MdiQuestionMarkCircle = function (_React$Component) {
    _inherits(MdiQuestionMarkCircle, _React$Component);

    function MdiQuestionMarkCircle() {
        _classCallCheck(this, MdiQuestionMarkCircle);

        return _possibleConstructorReturn(this, (MdiQuestionMarkCircle.__proto__ || Object.getPrototypeOf(MdiQuestionMarkCircle)).apply(this, arguments));
    }

    _createClass(MdiQuestionMarkCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,2C 6.47711,2 2,6.4766 2,12C 2,17.5234 6.47711,22 12,22C 17.5234,22 22,17.5234 22,12C 22,6.4766 17.5234,2 12,2 Z M 13,19L 11,19L 11,17L 13,17L 13,19 Z M 15.0667,11.2537L 14.1716,12.1716C 13.4478,12.8955 13,13.5 13,15L 11,15L 11,14.5002C 11,13.3957 11.4478,12.3957 12.1714,11.6719L 13.4143,10.4141C 13.7761,10.0521 14,9.5522 14,9C 14,7.8954 13.1045,7 12,7C 10.8955,7 10,7.8954 10,9L 8,9C 8,6.7908 9.79099,5 12,5C 14.2092,5 16,6.7908 16,9C 16,9.8801 15.6433,10.6769 15.0667,11.2537 Z ' })
                )
            );
        }
    }]);

    return MdiQuestionMarkCircle;
}(React.Component);

exports.default = MdiQuestionMarkCircle;
module.exports = exports['default'];