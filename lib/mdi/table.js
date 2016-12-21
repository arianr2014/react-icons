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

var MdiTable = function (_React$Component) {
    _inherits(MdiTable, _React$Component);

    function MdiTable() {
        _classCallCheck(this, MdiTable);

        return _possibleConstructorReturn(this, (MdiTable.__proto__ || Object.getPrototypeOf(MdiTable)).apply(this, arguments));
    }

    _createClass(MdiTable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'round', d: 'M 5,4L 19,4C 20.1046,4 21,4.89543 21,6L 21,18C 21,19.1046 20.1046,20 19,20L 5,20C 3.89543,20 3,19.1046 3,18L 3,6C 3,4.89543 3.89543,4 5,4 Z M 5,8L 5,12L 11,12L 11,8L 5,8 Z M 13,8L 13,12L 19,12L 19,8L 13,8 Z M 5,14L 5,18L 11,18L 11,14L 5,14 Z M 13,14L 13,18L 19,18L 19,14L 13,14 Z ' })
                )
            );
        }
    }]);

    return MdiTable;
}(React.Component);

exports.default = MdiTable;
module.exports = exports['default'];