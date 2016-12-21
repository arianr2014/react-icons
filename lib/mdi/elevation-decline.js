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

var MdiElevationDecline = function (_React$Component) {
    _inherits(MdiElevationDecline, _React$Component);

    function MdiElevationDecline() {
        _classCallCheck(this, MdiElevationDecline);

        return _possibleConstructorReturn(this, (MdiElevationDecline.__proto__ || Object.getPrototypeOf(MdiElevationDecline)).apply(this, arguments));
    }

    _createClass(MdiElevationDecline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21,21L 2.99999,21L 3,11.25L 9.45454,14.9765L 13.2225,12.8011L 21,17.2915L 21,21 Z M 3,8.94061L 3,6.75L 9.45454,10.4765L 13.2225,8.30111L 21,12.7915L 21,14.9821L 13.2225,10.4917L 9.45455,12.6671L 3,8.94061 Z ' })
                )
            );
        }
    }]);

    return MdiElevationDecline;
}(React.Component);

exports.default = MdiElevationDecline;
module.exports = exports['default'];