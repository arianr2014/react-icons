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

var MdiSpotlight = function (_React$Component) {
    _inherits(MdiSpotlight, _React$Component);

    function MdiSpotlight() {
        _classCallCheck(this, MdiSpotlight);

        return _possibleConstructorReturn(this, (MdiSpotlight.__proto__ || Object.getPrototypeOf(MdiSpotlight)).apply(this, arguments));
    }

    _createClass(MdiSpotlight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2,6L 7.09295,8.54647C 6.4044,9.52302 6,10.7143 6,12C 6,13.2857 6.4044,14.477 7.09295,15.4535L 2,18L 2,6 Z M 5.99999,3.00001L 18,3.00001L 15.4535,7.09295C 14.477,6.40441 13.2857,6 12,6C 10.7143,6 9.52302,6.40441 8.54647,7.09295L 5.99999,3.00001 Z M 22,6L 22,18L 16.907,15.4535C 17.5956,14.477 18,13.2857 18,12C 18,10.7143 17.5956,9.52303 16.907,8.54648L 22,6 Z M 18,21L 6,21L 8.54647,16.9071C 9.52302,17.5956 10.7143,18 12,18C 13.2857,18 14.477,17.5956 15.4535,16.9071L 18,21 Z M 12,8C 14.2091,8 16,9.79086 16,12C 16,14.2091 14.2091,16 12,16C 9.79086,16 8,14.2091 8,12C 8,9.79086 9.79086,8 12,8 Z M 12,10C 10.8954,10 10,10.8954 10,12C 10,13.1046 10.8954,14 12,14C 13.1046,14 14,13.1046 14,12C 14,10.8954 13.1046,10 12,10 Z ' })
                )
            );
        }
    }]);

    return MdiSpotlight;
}(React.Component);

exports.default = MdiSpotlight;
module.exports = exports['default'];