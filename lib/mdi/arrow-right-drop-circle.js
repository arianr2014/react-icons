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

var MdiArrowRightDropCircle = function (_React$Component) {
    _inherits(MdiArrowRightDropCircle, _React$Component);

    function MdiArrowRightDropCircle() {
        _classCallCheck(this, MdiArrowRightDropCircle);

        return _possibleConstructorReturn(this, (MdiArrowRightDropCircle.__proto__ || Object.getPrototypeOf(MdiArrowRightDropCircle)).apply(this, arguments));
    }

    _createClass(MdiArrowRightDropCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 1.99999,12C 1.99999,6.47717 6.47719,1.99998 12,1.99998C 17.5228,1.99998 22,6.47717 22,12C 22,17.5228 17.5228,22 12,22C 6.47718,22 1.99999,17.5228 1.99999,12 Z M 9.99999,17L 15,12L 9.99999,6.99999L 9.99999,17 Z ' })
                )
            );
        }
    }]);

    return MdiArrowRightDropCircle;
}(React.Component);

exports.default = MdiArrowRightDropCircle;
module.exports = exports['default'];