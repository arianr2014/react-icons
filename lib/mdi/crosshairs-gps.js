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

var MdiCrosshairsGps = function (_React$Component) {
    _inherits(MdiCrosshairsGps, _React$Component);

    function MdiCrosshairsGps() {
        _classCallCheck(this, MdiCrosshairsGps);

        return _possibleConstructorReturn(this, (MdiCrosshairsGps.__proto__ || Object.getPrototypeOf(MdiCrosshairsGps)).apply(this, arguments));
    }

    _createClass(MdiCrosshairsGps, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,8C 14.2091,8 16,9.79086 16,12C 16,14.2091 14.2091,16 12,16C 9.79086,16 8,14.2091 8,12C 8,9.79086 9.79086,8 12,8 Z M 3.05493,13L 1,13L 1,11L 3.05493,11C 3.51608,6.82839 6.82838,3.51608 11,3.05494L 11,1.00001L 13,1.00001L 13,3.05494C 17.1716,3.51609 20.4839,6.82839 20.9451,11L 23,11L 23,13L 20.9451,13C 20.4839,17.1716 17.1716,20.4839 13,20.9451L 13,23L 11,23L 11,20.9451C 6.82838,20.4839 3.51607,17.1716 3.05493,13 Z M 12,5.00001C 8.134,5.00001 5,8.13402 5,12C 5,15.866 8.134,19 12,19C 15.866,19 19,15.866 19,12C 19,8.13402 15.866,5.00001 12,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiCrosshairsGps;
}(React.Component);

exports.default = MdiCrosshairsGps;
module.exports = exports['default'];