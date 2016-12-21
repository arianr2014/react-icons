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

var MdiBulletinBoard = function (_React$Component) {
    _inherits(MdiBulletinBoard, _React$Component);

    function MdiBulletinBoard() {
        _classCallCheck(this, MdiBulletinBoard);

        return _possibleConstructorReturn(this, (MdiBulletinBoard.__proto__ || Object.getPrototypeOf(MdiBulletinBoard)).apply(this, arguments));
    }

    _createClass(MdiBulletinBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12.039,2.49999L 9.52789,5L 14.5279,4.99999L 12.039,2.49999 Z M 4,7L 4,20L 20,20L 20,7L 4,7 Z M 12,0L 16.9999,5L 17,5L 20,5C 21.1,5 22,5.9 22,7L 22,20C 22,21.1 21.1,22 20,22L 4,22C 2.9,22 2,21.1 2,20L 2,7C 2,5.9 2.9,5 4,5L 6.9999,5L 7,5L 12,0 Z M 6.9999,18L 6.9999,14L 11.9999,14L 11.9999,18L 6.9999,18 Z M 13.9999,17L 13.9999,10L 17.9999,10L 17.9999,17L 13.9999,17 Z M 5.9999,12L 5.9999,9L 10.9999,9L 10.9999,12L 5.9999,12 Z ' })
                )
            );
        }
    }]);

    return MdiBulletinBoard;
}(React.Component);

exports.default = MdiBulletinBoard;
module.exports = exports['default'];