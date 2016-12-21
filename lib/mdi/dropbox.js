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

var MdiDropbox = function (_React$Component) {
    _inherits(MdiDropbox, _React$Component);

    function MdiDropbox() {
        _classCallCheck(this, MdiDropbox);

        return _possibleConstructorReturn(this, (MdiDropbox.__proto__ || Object.getPrototypeOf(MdiDropbox)).apply(this, arguments));
    }

    _createClass(MdiDropbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0127,14.5599L 16.3479,18.1573L 18.203,16.9462L 18.203,18.304L 12.0127,22.0162L 5.82229,18.304L 5.82229,16.9462L 7.6774,18.1573L 12.0127,14.5599 Z M 7.6774,2.48385L 11.9999,6.09166L 16.3226,2.48385L 22.5,6.51721L 18.2286,9.9377L 22.5,13.3584L 16.3226,17.3917L 11.9999,13.7837L 7.6774,17.3917L 1.5,13.3584L 5.77139,9.9377L 1.5,6.51721L 7.6774,2.48385 Z M 11.9999,13.6837L 18.1286,9.93771L 11.9999,6.19167L 5.87139,9.93771L 11.9999,13.6837 Z ' })
                )
            );
        }
    }]);

    return MdiDropbox;
}(React.Component);

exports.default = MdiDropbox;
module.exports = exports['default'];