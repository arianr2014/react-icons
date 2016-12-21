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

var MdiHuman = function (_React$Component) {
    _inherits(MdiHuman, _React$Component);

    function MdiHuman() {
        _classCallCheck(this, MdiHuman);

        return _possibleConstructorReturn(this, (MdiHuman.__proto__ || Object.getPrototypeOf(MdiHuman)).apply(this, arguments));
    }

    _createClass(MdiHuman, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9994,8.99817L 14.9994,8.99817L 14.9994,21.9982L 12.9994,21.9982L 12.9994,15.9982L 10.9994,15.9982L 10.9994,21.9982L 8.99939,21.9982L 8.99939,8.99817L 2.99939,8.99817L 2.99939,6.99817L 20.9994,6.99817M 11.9994,1.99817C 13.1034,1.99817 13.9994,2.89313 13.9994,3.99817C 13.9994,5.10217 13.1034,5.99817 11.9994,5.99817C 10.8944,5.99817 9.99939,5.10217 9.99939,3.99817C 9.99939,2.89313 10.8944,1.99817 11.9994,1.99817 Z ' })
                )
            );
        }
    }]);

    return MdiHuman;
}(React.Component);

exports.default = MdiHuman;
module.exports = exports['default'];