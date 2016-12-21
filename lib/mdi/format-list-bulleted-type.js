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

var MdiFormatListBulletedType = function (_React$Component) {
    _inherits(MdiFormatListBulletedType, _React$Component);

    function MdiFormatListBulletedType() {
        _classCallCheck(this, MdiFormatListBulletedType);

        return _possibleConstructorReturn(this, (MdiFormatListBulletedType.__proto__ || Object.getPrototypeOf(MdiFormatListBulletedType)).apply(this, arguments));
    }

    _createClass(MdiFormatListBulletedType, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 5,9.5L 7.5,14L 2.5,14L 5,9.5 Z M 3,4L 7,4L 7,8L 3,8L 3,4 Z M 5,20C 6.1,20 7,19.1 7,18C 7,16.9 6.1,16 5,16C 3.9,16 3,16.9 3,18C 3,19.1 3.9,20 5,20 Z M 9,5L 9,7L 21,7L 21,5L 9,5 Z M 9,19L 21,19L 21,17L 9,17L 9,19 Z M 9,13L 21,13L 21,11L 9,11L 9,13 Z ' })
                )
            );
        }
    }]);

    return MdiFormatListBulletedType;
}(React.Component);

exports.default = MdiFormatListBulletedType;
module.exports = exports['default'];