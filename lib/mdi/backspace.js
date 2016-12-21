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

var MdiBackspace = function (_React$Component) {
    _inherits(MdiBackspace, _React$Component);

    function MdiBackspace() {
        _classCallCheck(this, MdiBackspace);

        return _possibleConstructorReturn(this, (MdiBackspace.__proto__ || Object.getPrototypeOf(MdiBackspace)).apply(this, arguments));
    }

    _createClass(MdiBackspace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22.0025,2.9978L 7.0025,2.9978C 6.30875,2.9978 5.77125,3.35 5.41,3.88125L 0,12.0025L 5.41,20.1125C 5.77125,20.64 6.30875,21.0012 7.0025,21.0012L 22.0025,21.0012C 23.1,21.0012 23.9987,20.0975 23.9987,18.9988L 23.9987,5C 23.9987,3.90125 23.1,2.9978 22.0025,2.9978 Z M 18.9988,15.5913L 17.5875,17.0025L 13.9987,13.4088L 10.41,17.0025L 8.99875,15.5913L 12.5875,12.0025L 8.99875,8.40875L 10.41,7.0025L 13.9987,10.5913L 17.5875,7.0025L 18.9988,8.40875L 15.41,12.0025' })
                )
            );
        }
    }]);

    return MdiBackspace;
}(React.Component);

exports.default = MdiBackspace;
module.exports = exports['default'];