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

var MdiPauseCircle = function (_React$Component) {
    _inherits(MdiPauseCircle, _React$Component);

    function MdiPauseCircle() {
        _classCallCheck(this, MdiPauseCircle);

        return _possibleConstructorReturn(this, (MdiPauseCircle.__proto__ || Object.getPrototypeOf(MdiPauseCircle)).apply(this, arguments));
    }

    _createClass(MdiPauseCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,16L 13,16L 13,7.99999L 15,7.99999M 11,16L 9,16L 9,7.99999L 11,7.99999M 12,1.99999C 6.47699,1.99999 2,6.47698 2,12C 2,17.524 6.47699,22 12,22C 17.523,22 22,17.524 22,12C 22,6.47698 17.523,1.99999 12,1.99999 Z ' })
                )
            );
        }
    }]);

    return MdiPauseCircle;
}(React.Component);

exports.default = MdiPauseCircle;
module.exports = exports['default'];