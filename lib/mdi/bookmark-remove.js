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

var MdiBookmarkRemove = function (_React$Component) {
    _inherits(MdiBookmarkRemove, _React$Component);

    function MdiBookmarkRemove() {
        _classCallCheck(this, MdiBookmarkRemove);

        return _possibleConstructorReturn(this, (MdiBookmarkRemove.__proto__ || Object.getPrototypeOf(MdiBookmarkRemove)).apply(this, arguments));
    }

    _createClass(MdiBookmarkRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,2.99805C 18.1044,2.99805 18.9994,3.89404 18.9994,4.99805L 18.9994,20.998L 11.9994,17.998L 4.9994,20.998L 5.0104,4.99805C 5.0104,3.89404 5.89541,2.99805 6.9994,2.99805L 16.9994,2.99805 Z M 8.17097,8.58385L 10.5852,10.9981L 8.17097,13.4123L 9.58518,14.8265L 11.9994,12.4123L 14.4136,14.8265L 15.8278,13.4123L 13.4136,10.998L 15.8278,8.58384L 14.4136,7.16963L 11.9994,9.58384L 9.58518,7.16964L 8.17097,8.58385 Z ' })
                )
            );
        }
    }]);

    return MdiBookmarkRemove;
}(React.Component);

exports.default = MdiBookmarkRemove;
module.exports = exports['default'];