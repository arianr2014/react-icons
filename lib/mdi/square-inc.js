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

var MdiSquareInc = function (_React$Component) {
    _inherits(MdiSquareInc, _React$Component);

    function MdiSquareInc() {
        _classCallCheck(this, MdiSquareInc);

        return _possibleConstructorReturn(this, (MdiSquareInc.__proto__ || Object.getPrototypeOf(MdiSquareInc)).apply(this, arguments));
    }

    _createClass(MdiSquareInc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,3L 18,3C 19.6569,3 21,4.34315 21,6L 21,18C 21,19.6569 19.6569,21 18,21L 6,21C 4.34314,21 3,19.6569 3,18L 3,6C 3,4.34315 4.34314,3 6,3 Z M 7,6.00001C 6.44771,6.00001 6,6.44772 6,7.00001L 6,17C 6,17.5523 6.44771,18 7,18L 17,18C 17.5523,18 18,17.5523 18,17L 18,7.00001C 18,6.44772 17.5523,6.00001 17,6.00001L 7,6.00001 Z M 9.5,9.00001L 14.5,9.00001C 14.7761,9.00001 15,9.22387 15,9.50001L 15,14.5C 15,14.7761 14.7761,15 14.5,15L 9.5,15C 9.22385,15 9,14.7761 9,14.5L 9,9.50001C 9,9.22387 9.22385,9.00001 9.5,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiSquareInc;
}(React.Component);

exports.default = MdiSquareInc;
module.exports = exports['default'];