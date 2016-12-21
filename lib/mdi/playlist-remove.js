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

var MdiPlaylistRemove = function (_React$Component) {
    _inherits(MdiPlaylistRemove, _React$Component);

    function MdiPlaylistRemove() {
        _classCallCheck(this, MdiPlaylistRemove);

        return _possibleConstructorReturn(this, (MdiPlaylistRemove.__proto__ || Object.getPrototypeOf(MdiPlaylistRemove)).apply(this, arguments));
    }

    _createClass(MdiPlaylistRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,6L 2,8L 14,8L 14,6L 2,6 Z M 2,10L 2,12L 10,12L 10,10L 2,10 Z M 14.1719,10.7578L 12.7578,12.1719L 15.5859,15L 12.7578,17.8281L 14.1719,19.2422L 17,16.4141L 19.8281,19.2422L 21.2422,17.8281L 18.4141,15L 21.2422,12.1719L 19.8281,10.7578L 17,13.5859L 14.1719,10.7578 Z M 2,14L 2,16L 10,16L 10,14L 2,14 Z ' })
                )
            );
        }
    }]);

    return MdiPlaylistRemove;
}(React.Component);

exports.default = MdiPlaylistRemove;
module.exports = exports['default'];