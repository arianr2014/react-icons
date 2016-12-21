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

var MdiSmoking = function (_React$Component) {
    _inherits(MdiSmoking, _React$Component);

    function MdiSmoking() {
        _classCallCheck(this, MdiSmoking);

        return _possibleConstructorReturn(this, (MdiSmoking.__proto__ || Object.getPrototypeOf(MdiSmoking)).apply(this, arguments));
    }

    _createClass(MdiSmoking, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,19L 22,19L 22,15L 7,15M 2.00001,19L 5,19L 5,15L 2.00001,15M 10,4L 10,5C 10,6.657 8.657,8 7,8C 4.239,8 2.00001,10.239 2.00001,13L 4,13C 4,11.343 5.343,10 7,10C 9.761,10 12,7.761 12,5L 12,4L 10,4 Z ' })
                )
            );
        }
    }]);

    return MdiSmoking;
}(React.Component);

exports.default = MdiSmoking;
module.exports = exports['default'];