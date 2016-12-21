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

var MdiClock = function (_React$Component) {
    _inherits(MdiClock, _React$Component);

    function MdiClock() {
        _classCallCheck(this, MdiClock);

        return _possibleConstructorReturn(this, (MdiClock.__proto__ || Object.getPrototypeOf(MdiClock)).apply(this, arguments));
    }

    _createClass(MdiClock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,19.998C 16.4194,19.998 19.9994,16.4161 19.9994,11.998C 19.9994,7.58 16.4194,3.99805 11.9994,3.99805C 7.57939,3.99805 3.99939,7.58 3.99939,11.998C 3.99939,16.4161 7.57939,19.998 11.9994,19.998 Z M 11.9944,1.99813C 17.5204,1.99813 21.9994,6.4751 21.9994,11.9981C 21.9994,17.5212 17.5204,21.9981 11.9944,21.9981C 6.46735,21.9981 1.99937,17.5212 1.99937,11.9981C 1.99937,6.4751 6.46735,1.99813 11.9944,1.99813 Z M 12.4994,6.99813L 12.4994,12.2481L 16.9994,14.9172L 16.2464,16.1482L 10.9994,12.9981L 10.9994,6.99813L 12.4994,6.99813 Z ' })
                )
            );
        }
    }]);

    return MdiClock;
}(React.Component);

exports.default = MdiClock;
module.exports = exports['default'];