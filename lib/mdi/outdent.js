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

var MdiOutdent = function (_React$Component) {
    _inherits(MdiOutdent, _React$Component);

    function MdiOutdent() {
        _classCallCheck(this, MdiOutdent);

        return _possibleConstructorReturn(this, (MdiOutdent.__proto__ || Object.getPrototypeOf(MdiOutdent)).apply(this, arguments));
    }

    _createClass(MdiOutdent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,3L 22,3L 22,6L 2,6L 2,3 Z M 9,8.00002L 22,8.00001L 22,11L 9,11L 9,8.00002 Z M 9,13L 22,13L 22,16L 9,16L 9,13 Z M 2,18L 22,18L 22,21L 2,21L 2,18 Z M 6,8L 2,12L 6,16L 7,16L 7,8L 6,8 Z ' })
                )
            );
        }
    }]);

    return MdiOutdent;
}(React.Component);

exports.default = MdiOutdent;
module.exports = exports['default'];