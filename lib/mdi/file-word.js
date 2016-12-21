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

var MdiFileWord = function (_React$Component) {
    _inherits(MdiFileWord, _React$Component);

    function MdiFileWord() {
        _classCallCheck(this, MdiFileWord);

        return _possibleConstructorReturn(this, (MdiFileWord.__proto__ || Object.getPrototypeOf(MdiFileWord)).apply(this, arguments));
    }

    _createClass(MdiFileWord, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,2L 14,2.00001L 20,8L 20,20C 20,21.1046 19.1046,22 18,22L 6,22C 4.89543,22 4,21.1046 4,20L 4,4C 4,2.89543 4.89543,2 6,2 Z M 13,3.50002L 13,9.00002L 18.5,9.00002L 13,3.50002 Z M 7,13L 8.49999,20L 10.5,20L 12,17L 13.5,20L 15.5,20L 17,13L 18,13L 18,11L 14,11L 14,13L 15,13L 14.1,17.2L 13,15L 13,15L 11,15L 11,15L 9.89999,17.2L 9,13L 10,13L 10,11L 6,11L 6,13L 7,13 Z ' })
                )
            );
        }
    }]);

    return MdiFileWord;
}(React.Component);

exports.default = MdiFileWord;
module.exports = exports['default'];