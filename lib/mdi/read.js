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

var MdiRead = function (_React$Component) {
    _inherits(MdiRead, _React$Component);

    function MdiRead() {
        _classCallCheck(this, MdiRead);

        return _possibleConstructorReturn(this, (MdiRead.__proto__ || Object.getPrototypeOf(MdiRead)).apply(this, arguments));
    }

    _createClass(MdiRead, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21.5898,11.59L 23,13L 13.51,22.5L 8.42,17.41L 9.83,16L 13.5,19.68L 21.5898,11.59 Z M 4,16L 4,3L 6,3L 8.99999,3.00001C 11.2091,3.00001 13,4.79087 13,7.00001C 13,8.54108 12.1285,9.8786 10.8515,10.5466L 14,16L 12,16L 9.11325,11L 6,11L 6,16L 4,16 Z M 6,9.00001L 9,9.00001C 10.1046,9.00001 11,8.10458 11,7.00001C 11,5.89544 10.1046,5.00001 9,5.00001L 6,5.00001L 6,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiRead;
}(React.Component);

exports.default = MdiRead;
module.exports = exports['default'];