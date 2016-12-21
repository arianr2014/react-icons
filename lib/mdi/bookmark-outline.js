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

var MdiBookmarkOutline = function (_React$Component) {
    _inherits(MdiBookmarkOutline, _React$Component);

    function MdiBookmarkOutline() {
        _classCallCheck(this, MdiBookmarkOutline);

        return _possibleConstructorReturn(this, (MdiBookmarkOutline.__proto__ || Object.getPrototypeOf(MdiBookmarkOutline)).apply(this, arguments));
    }

    _createClass(MdiBookmarkOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,17.998L 11.9994,15.822L 6.9994,17.998L 6.9994,4.99805L 16.9994,4.99805M 16.9994,2.99805L 6.9994,2.99805C 5.8954,2.99805 5.0104,3.89404 5.0104,4.99805L 4.9994,20.998L 11.9994,17.998L 18.9994,20.998L 18.9994,4.99805C 18.9994,3.89404 18.1044,2.99805 16.9994,2.99805 Z ' })
                )
            );
        }
    }]);

    return MdiBookmarkOutline;
}(React.Component);

exports.default = MdiBookmarkOutline;
module.exports = exports['default'];