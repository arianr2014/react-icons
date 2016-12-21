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

var MdiCubeUnfolded = function (_React$Component) {
    _inherits(MdiCubeUnfolded, _React$Component);

    function MdiCubeUnfolded() {
        _classCallCheck(this, MdiCubeUnfolded);

        return _possibleConstructorReturn(this, (MdiCubeUnfolded.__proto__ || Object.getPrototypeOf(MdiCubeUnfolded)).apply(this, arguments));
    }

    _createClass(MdiCubeUnfolded, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,9L 6,4L 13,4L 13,9L 23,9L 23,16L 18,16L 18,21L 11,21L 11,16L 1,16L 1,9L 6,9 Z M 16,16L 13,16L 13,19L 16,19L 16,16 Z M 8,9L 11,9L 11,6L 8,6L 8,9 Z M 6,14L 6,11L 3,11L 3,14L 6,14 Z M 18,11L 18,14L 21,14L 21,11L 18,11 Z M 13,11L 13,14L 16,14L 16,11L 13,11 Z M 8,11L 8,14L 11,14L 11,11L 8,11 Z ' })
                )
            );
        }
    }]);

    return MdiCubeUnfolded;
}(React.Component);

exports.default = MdiCubeUnfolded;
module.exports = exports['default'];