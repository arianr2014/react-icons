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

var MdiLeaf = function (_React$Component) {
    _inherits(MdiLeaf, _React$Component);

    function MdiLeaf() {
        _classCallCheck(this, MdiLeaf);

        return _possibleConstructorReturn(this, (MdiLeaf.__proto__ || Object.getPrototypeOf(MdiLeaf)).apply(this, arguments));
    }

    _createClass(MdiLeaf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17,8C 8,10 5.90114,16.1657 3.81613,21.3427L 5.70716,21.9938L 6.66062,19.7009C 7.14321,19.8685 7.63736,20 8,20C 19,20 22,3 22,3C 21,5 14,5.25001 9,6.25001C 4,7.25001 2,11.5 2,13.5C 2,15.5 3.75,17.25 3.75,17.25C 7,8 17,8 17,8 Z ' })
                )
            );
        }
    }]);

    return MdiLeaf;
}(React.Component);

exports.default = MdiLeaf;
module.exports = exports['default'];