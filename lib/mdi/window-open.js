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

var MdiWindowOpen = function (_React$Component) {
    _inherits(MdiWindowOpen, _React$Component);

    function MdiWindowOpen() {
        _classCallCheck(this, MdiWindowOpen);

        return _possibleConstructorReturn(this, (MdiWindowOpen.__proto__ || Object.getPrototypeOf(MdiWindowOpen)).apply(this, arguments));
    }

    _createClass(MdiWindowOpen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6,8L 10,8L 10,6L 14,6L 14,8L 18,8L 18,4L 6,4.00001L 6,8 Z M 18,10L 6,10L 6,15L 18,15L 18,10 Z M 5.99999,20L 18,20L 18,17L 6,17L 5.99999,20 Z M 6,2.00002L 18,2.00001C 19.1046,2.00001 20,2.89543 20,4L 20,20C 20,21.1046 19.1046,22 18,22L 6,22C 4.89543,22 4,21.1046 4,20L 4,4.00001C 4,2.89544 4.89543,2.00002 6,2.00002 Z ' })
                )
            );
        }
    }]);

    return MdiWindowOpen;
}(React.Component);

exports.default = MdiWindowOpen;
module.exports = exports['default'];