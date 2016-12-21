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

var MdiRssBox = function (_React$Component) {
    _inherits(MdiRssBox, _React$Component);

    function MdiRssBox() {
        _classCallCheck(this, MdiRssBox);

        return _possibleConstructorReturn(this, (MdiRssBox.__proto__ || Object.getPrototypeOf(MdiRssBox)).apply(this, arguments));
    }

    _createClass(MdiRssBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,3L 19,3C 20.1046,3 21,3.89543 21,5L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5C 3,3.89543 3.89543,3 5,3 Z M 7.5,15C 6.67157,15 6,15.6716 6,16.5C 6,17.3284 6.67157,18 7.5,18C 8.32843,18 9,17.3284 9,16.5C 9,15.6716 8.32843,15 7.5,15 Z M 6,10L 6,12C 9.3137,12 12,14.6863 12,18L 14,18C 14,13.5817 10.4183,10 6,10 Z M 6,6.00001L 5.99999,8.00001C 11.5228,8.00001 16,12.4772 16,18L 18,18C 18,11.3726 12.6274,6.00001 6,6.00001 Z ' })
                )
            );
        }
    }]);

    return MdiRssBox;
}(React.Component);

exports.default = MdiRssBox;
module.exports = exports['default'];