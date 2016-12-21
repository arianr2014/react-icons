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

var MdiBookmarkOutlinePlus = function (_React$Component) {
    _inherits(MdiBookmarkOutlinePlus, _React$Component);

    function MdiBookmarkOutlinePlus() {
        _classCallCheck(this, MdiBookmarkOutlinePlus);

        return _possibleConstructorReturn(this, (MdiBookmarkOutlinePlus.__proto__ || Object.getPrototypeOf(MdiBookmarkOutlinePlus)).apply(this, arguments));
    }

    _createClass(MdiBookmarkOutlinePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,17.998L 16.9994,4.99805L 6.9994,4.99805L 6.9994,17.998L 11.9994,15.822L 16.9994,17.998 Z M 16.9994,2.99805C 18.1044,2.99805 18.9994,3.89404 18.9994,4.99805L 18.9994,20.998L 11.9994,17.998L 4.9994,20.998L 5.01041,4.99805C 5.01041,3.89404 5.8954,2.99805 6.9994,2.99805L 16.9994,2.99805 Z M 11,7.00001L 13,7.00001L 13,9L 15,9L 15,11L 13,11L 13,13L 11,13L 11,11L 9,11L 9,9L 11,9L 11,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiBookmarkOutlinePlus;
}(React.Component);

exports.default = MdiBookmarkOutlinePlus;
module.exports = exports['default'];