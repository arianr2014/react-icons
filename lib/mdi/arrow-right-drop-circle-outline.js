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

var MdiArrowRightDropCircleOutline = function (_React$Component) {
    _inherits(MdiArrowRightDropCircleOutline, _React$Component);

    function MdiArrowRightDropCircleOutline() {
        _classCallCheck(this, MdiArrowRightDropCircleOutline);

        return _possibleConstructorReturn(this, (MdiArrowRightDropCircleOutline.__proto__ || Object.getPrototypeOf(MdiArrowRightDropCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiArrowRightDropCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 2,12C 2,17.5229 6.4772,22 12,22C 17.5228,22 22,17.5229 22,12C 22,6.4772 17.5228,2 12,2C 6.4772,2 2,6.4772 2,12 Z M 4,12C 4,7.5817 7.5817,4 12,4C 16.4183,4 20,7.5817 20,12C 20,16.4183 16.4183,20 12,20C 7.5817,20 4,16.4183 4,12 Z M 10,17L 15,12L 10,7.00001L 10,17 Z ' })
                )
            );
        }
    }]);

    return MdiArrowRightDropCircleOutline;
}(React.Component);

exports.default = MdiArrowRightDropCircleOutline;
module.exports = exports['default'];