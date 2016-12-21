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

var MdiArrowRightBoldCircleOutline = function (_React$Component) {
    _inherits(MdiArrowRightBoldCircleOutline, _React$Component);

    function MdiArrowRightBoldCircleOutline() {
        _classCallCheck(this, MdiArrowRightBoldCircleOutline);

        return _possibleConstructorReturn(this, (MdiArrowRightBoldCircleOutline.__proto__ || Object.getPrototypeOf(MdiArrowRightBoldCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiArrowRightBoldCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17,12L 12,17L 12,14L 7.99998,14L 7.99998,9.99996L 12,9.99996L 12,6.99996L 17,12 Z M 1.99999,12C 1.99999,6.47716 6.47715,2.00001 12,2.00001C 17.5228,2.00001 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 1.99999,17.5228 1.99999,12 Z M 4,12C 4,16.4183 7.58172,20 12,20C 16.4183,20 20,16.4183 20,12C 20,7.58173 16.4183,4.00001 12,4.00001C 7.58172,4.00001 4,7.58173 4,12 Z ' })
                )
            );
        }
    }]);

    return MdiArrowRightBoldCircleOutline;
}(React.Component);

exports.default = MdiArrowRightBoldCircleOutline;
module.exports = exports['default'];