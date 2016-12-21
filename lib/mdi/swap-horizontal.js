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

var MdiSwapHorizontal = function (_React$Component) {
    _inherits(MdiSwapHorizontal, _React$Component);

    function MdiSwapHorizontal() {
        _classCallCheck(this, MdiSwapHorizontal);

        return _possibleConstructorReturn(this, (MdiSwapHorizontal.__proto__ || Object.getPrototypeOf(MdiSwapHorizontal)).apply(this, arguments));
    }

    _createClass(MdiSwapHorizontal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9994,8.99805L 17.0094,4.99805L 17.0094,7.99805L 9.99939,7.99805L 9.99939,9.99805L 17.0094,9.99805L 17.0094,12.998M 6.98938,10.998L 2.99939,14.998L 6.98938,18.998L 6.98938,15.998L 13.9994,15.998L 13.9994,13.998L 6.98938,13.998L 6.98938,10.998 Z ' })
                )
            );
        }
    }]);

    return MdiSwapHorizontal;
}(React.Component);

exports.default = MdiSwapHorizontal;
module.exports = exports['default'];