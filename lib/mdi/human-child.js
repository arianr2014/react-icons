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

var MdiHumanChild = function (_React$Component) {
    _inherits(MdiHumanChild, _React$Component);

    function MdiHumanChild() {
        _classCallCheck(this, MdiHumanChild);

        return _possibleConstructorReturn(this, (MdiHumanChild.__proto__ || Object.getPrototypeOf(MdiHumanChild)).apply(this, arguments));
    }

    _createClass(MdiHumanChild, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,2C 13.6568,2 15,3.34315 15,5C 15,6.65686 13.6569,8 12,8C 10.3431,8 9,6.65686 9,5C 9,3.34315 10.3431,2 12,2 Z M 11,22L 8,22L 8,16L 6,16L 6,9L 18,9L 18,16L 16,16L 16,22L 13,22L 13,18L 11,18L 11,22 Z ' })
                )
            );
        }
    }]);

    return MdiHumanChild;
}(React.Component);

exports.default = MdiHumanChild;
module.exports = exports['default'];