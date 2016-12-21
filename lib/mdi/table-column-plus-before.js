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

var MdiTableColumnPlusBefore = function (_React$Component) {
    _inherits(MdiTableColumnPlusBefore, _React$Component);

    function MdiTableColumnPlusBefore() {
        _classCallCheck(this, MdiTableColumnPlusBefore);

        return _possibleConstructorReturn(this, (MdiTableColumnPlusBefore.__proto__ || Object.getPrototypeOf(MdiTableColumnPlusBefore)).apply(this, arguments));
    }

    _createClass(MdiTableColumnPlusBefore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,2.00001C 11.8954,2.00001 11,2.89544 11,4.00001L 11,20C 11,21.1045 11.8954,22 13,22L 22,22L 22,2L 13,2.00001 Z M 20,10L 20,14L 13,14L 13,10L 20,10 Z M 20,16L 20,20L 13,20L 13,16L 20,16 Z M 20,4L 20,8L 13,7.99999L 13,4L 20,4 Z M 9.00002,11L 6.00001,11L 6.00001,8L 4.00001,8L 4.00001,11L 1.00002,11L 1.00002,13L 4.00001,13L 4.00001,16L 6.00001,16L 6.00001,13L 9.00002,13L 9.00002,11 Z ' })
                )
            );
        }
    }]);

    return MdiTableColumnPlusBefore;
}(React.Component);

exports.default = MdiTableColumnPlusBefore;
module.exports = exports['default'];