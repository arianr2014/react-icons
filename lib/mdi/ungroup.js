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

var MdiUngroup = function (_React$Component) {
    _inherits(MdiUngroup, _React$Component);

    function MdiUngroup() {
        _classCallCheck(this, MdiUngroup);

        return _possibleConstructorReturn(this, (MdiUngroup.__proto__ || Object.getPrototypeOf(MdiUngroup)).apply(this, arguments));
    }

    _createClass(MdiUngroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2,2L 6,2L 6,3L 13,3.00001L 13,2.00002L 17,2.00002L 17,6.00001L 16,6.00001L 16,9L 18,9L 18,8L 22,8L 22,12L 21,12L 21,18L 22,18L 22,22L 18,22L 18,21L 12,21L 12,22L 8,22L 8,18L 8.99999,18L 8.99999,16L 6,16L 6,17L 2,17L 2,13L 3,13L 3,6L 2,6L 2,2 Z M 18,12L 18,11L 16,11L 16,13L 17,13L 17,17L 13,17L 13,16L 11,16L 11,18L 12,18L 12,19L 18,19L 18,18L 19,18L 19,12L 18,12 Z M 13,6.00001L 13,5.00002L 6,5.00001L 6,6.00001L 5,6.00001L 5,13L 6,13L 6,14L 8.99999,14L 9,12L 7.99999,12L 7.99999,8.00002L 12,8.00002L 12,9L 14,9L 14,6.00001L 13,6.00001 Z M 12,12L 11,12L 11,14L 13,14L 13,13L 14,13L 14,11L 12,11L 12,12 Z ' })
                )
            );
        }
    }]);

    return MdiUngroup;
}(React.Component);

exports.default = MdiUngroup;
module.exports = exports['default'];