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

var MdiSelectAll = function (_React$Component) {
    _inherits(MdiSelectAll, _React$Component);

    function MdiSelectAll() {
        _classCallCheck(this, MdiSelectAll);

        return _possibleConstructorReturn(this, (MdiSelectAll.__proto__ || Object.getPrototypeOf(MdiSelectAll)).apply(this, arguments));
    }

    _createClass(MdiSelectAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9,9L 15,9L 15,15L 9,15M 7,17L 17,17L 17,7L 7,7M 15,5L 17,5L 17,3L 15,3M 15,21L 17,21L 17,19L 15,19M 19,17L 21,17L 21,15L 19,15M 19,9L 21,9L 21,7L 19,7M 19,21C 20.1,21 21,20.1 21,19L 19,19M 19,13L 21,13L 21,11L 19,11M 11,21L 13,21L 13,19L 11,19M 9,3L 7,3L 7,5L 9,5M 3,17L 5,17L 5,15L 3,15M 5,21L 5,19L 3,19C 3,20.1 3.9,21 5,21 Z M 19,3L 19,5L 21,5C 21,3.9 20.1,3 19,3 Z M 13,3L 11,3L 11,5L 13,5M 3,9L 5,9L 5,7L 3,7M 7,21L 9,21L 9,19L 7,19M 3,13L 5,13L 5,11L 3,11M 3,5L 5,5L 5,3C 3.9,3 3,3.9 3,5 Z ' })
                )
            );
        }
    }]);

    return MdiSelectAll;
}(React.Component);

exports.default = MdiSelectAll;
module.exports = exports['default'];