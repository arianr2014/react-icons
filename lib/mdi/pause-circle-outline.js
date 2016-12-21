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

var MdiPauseCircleOutline = function (_React$Component) {
    _inherits(MdiPauseCircleOutline, _React$Component);

    function MdiPauseCircleOutline() {
        _classCallCheck(this, MdiPauseCircleOutline);

        return _possibleConstructorReturn(this, (MdiPauseCircleOutline.__proto__ || Object.getPrototypeOf(MdiPauseCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiPauseCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,16L 13,8L 15,8L 15,16L 13,16 Z M 8.99994,16L 8.99994,8.00004L 10.9999,8.00004L 10.9999,16L 8.99994,16 Z M 12,2C 17.5228,2 22,6.47716 22,12C 22,17.5229 17.5228,22 12,22C 6.47715,22 2,17.5229 2,12C 2,6.47716 6.47715,2 12,2 Z M 12,4C 7.58172,4 4,7.58173 4,12C 4,16.4183 7.58172,20 12,20C 16.4183,20 20,16.4183 20,12C 20,7.58173 16.4183,4 12,4 Z ' })
                )
            );
        }
    }]);

    return MdiPauseCircleOutline;
}(React.Component);

exports.default = MdiPauseCircleOutline;
module.exports = exports['default'];