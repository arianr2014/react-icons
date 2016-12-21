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

var MdiMarkdown = function (_React$Component) {
    _inherits(MdiMarkdown, _React$Component);

    function MdiMarkdown() {
        _classCallCheck(this, MdiMarkdown);

        return _possibleConstructorReturn(this, (MdiMarkdown.__proto__ || Object.getPrototypeOf(MdiMarkdown)).apply(this, arguments));
    }

    _createClass(MdiMarkdown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2,16L 2,8L 4,8L 7,11L 9.99999,8.00001L 12,8.00001L 12,16L 9.99999,16L 9.99999,10.8284L 7,13.8284L 4,10.8284L 4,16L 2,16 Z M 16,8.00002L 19,8.00002L 19,12L 21.5,12L 17.5,16.5L 13.5,12L 16,12L 16,8.00002 Z ' })
                )
            );
        }
    }]);

    return MdiMarkdown;
}(React.Component);

exports.default = MdiMarkdown;
module.exports = exports['default'];