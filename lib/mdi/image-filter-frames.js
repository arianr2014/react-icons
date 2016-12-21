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

var MdiImageFilterFrames = function (_React$Component) {
    _inherits(MdiImageFilterFrames, _React$Component);

    function MdiImageFilterFrames() {
        _classCallCheck(this, MdiImageFilterFrames);

        return _possibleConstructorReturn(this, (MdiImageFilterFrames.__proto__ || Object.getPrototypeOf(MdiImageFilterFrames)).apply(this, arguments));
    }

    _createClass(MdiImageFilterFrames, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 18,8L 6,8L 6,18L 18,18M 20,20L 4,20L 4,6L 8.52,6L 12.04,2.5L 15.52,6L 20,6M 20,4L 16,4L 12,1.90735e-006L 8,4L 4,4C 2.9,4 2,4.9 2,6L 2,20C 2,21.1 2.9,22 4,22L 20,22C 21.1,22 22,21.1 22,20L 22,6C 22,4.9 21.1,4 20,4 Z ' })
                )
            );
        }
    }]);

    return MdiImageFilterFrames;
}(React.Component);

exports.default = MdiImageFilterFrames;
module.exports = exports['default'];