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

var MdiTumblrReblog = function (_React$Component) {
    _inherits(MdiTumblrReblog, _React$Component);

    function MdiTumblrReblog() {
        _classCallCheck(this, MdiTumblrReblog);

        return _possibleConstructorReturn(this, (MdiTumblrReblog.__proto__ || Object.getPrototypeOf(MdiTumblrReblog)).apply(this, arguments));
    }

    _createClass(MdiTumblrReblog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 3.74999,17L 7.99999,12.75L 8,16L 18,16L 18,11.5L 20,9.5L 20,16C 20,17.1046 19.1046,18 18,18L 8,18L 7.99999,21.25L 3.74999,17 Z M 20.25,7L 16,11.25L 16,8L 6,7.99998L 6,12.5L 4,14.5L 3.99999,7.99998C 3.99999,6.89541 4.89543,5.99998 6,5.99998L 16,6L 16,2.75002L 20.25,7 Z ' })
                )
            );
        }
    }]);

    return MdiTumblrReblog;
}(React.Component);

exports.default = MdiTumblrReblog;
module.exports = exports['default'];