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

var MdiScaleBathroom = function (_React$Component) {
    _inherits(MdiScaleBathroom, _React$Component);

    function MdiScaleBathroom() {
        _classCallCheck(this, MdiScaleBathroom);

        return _possibleConstructorReturn(this, (MdiScaleBathroom.__proto__ || Object.getPrototypeOf(MdiScaleBathroom)).apply(this, arguments));
    }

    _createClass(MdiScaleBathroom, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,2L 19,2C 20.1046,2 21,2.89543 21,4L 21,20C 21,21.1046 20.1046,22 19,22L 5,22C 3.89543,22 3,21.1046 3,20L 3,4C 3,2.89543 3.89543,2 5,2 Z M 12,4C 9.79086,4 8,5.79086 8,8L 11.2613,8L 10.8487,5.22801L 12.9027,8L 16,8C 16,5.79086 14.2091,4 12,4 Z M 5,10L 5,20L 19,20L 19,10L 5,10 Z ' })
                )
            );
        }
    }]);

    return MdiScaleBathroom;
}(React.Component);

exports.default = MdiScaleBathroom;
module.exports = exports['default'];