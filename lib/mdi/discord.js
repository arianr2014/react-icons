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

var MdiDiscord = function (_React$Component) {
    _inherits(MdiDiscord, _React$Component);

    function MdiDiscord() {
        _classCallCheck(this, MdiDiscord);

        return _possibleConstructorReturn(this, (MdiDiscord.__proto__ || Object.getPrototypeOf(MdiDiscord)).apply(this, arguments));
    }

    _createClass(MdiDiscord, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 22,24L 16.75,19L 17.375,21L 4.5,21C 3.11929,21 2,19.8807 2,18.5L 2,3.5C 2,2.11929 3.11929,1 4.5,1L 19.5,1C 20.8807,1 22,2.11929 22,3.5L 22,24 Z M 12,6.8C 9.31508,6.8 7.4401,7.95052 7.4401,7.95052C 8.47135,7.02864 10.2682,6.48177 10.2682,6.48177L 10.0964,6.32552C 8.40885,6.35677 6.8776,7.52864 6.8776,7.52864C 5.15885,11.1224 5.26823,14.2161 5.26823,14.2161C 6.67448,16.0286 8.7526,15.9036 8.7526,15.9036L 9.45573,14.9974C 8.20572,14.7318 7.42448,13.6224 7.42448,13.6224C 7.42448,13.6224 9.29946,14.9 12,14.9C 14.7005,14.9 16.5755,13.6224 16.5755,13.6224C 16.5755,13.6224 15.7943,14.7318 14.5443,14.9974L 15.2474,15.9036C 15.2474,15.9036 17.3255,16.0286 18.7318,14.2161C 18.7318,14.2161 18.8411,11.1224 17.1224,7.52865C 17.1224,7.52865 15.5911,6.35677 13.9036,6.32552L 13.7318,6.48177C 13.7318,6.48177 15.5286,7.02865 16.5599,7.95052C 16.5599,7.95052 14.6849,6.80001 12,6.8 Z M 9.93143,10.5886C 10.5829,10.5886 11.1086,11.16 11.0971,11.8571C 11.0971,12.5543 10.5829,13.1257 9.93143,13.1257C 9.29143,13.1257 8.76571,12.5543 8.76571,11.8571C 8.76571,11.16 9.28,10.5886 9.93143,10.5886 Z M 14.1028,10.5886C 14.7543,10.5886 15.2686,11.16 15.2686,11.8572C 15.2686,12.5543 14.7543,13.1257 14.1028,13.1257C 13.4628,13.1257 12.9371,12.5543 12.9371,11.8572C 12.9371,11.16 13.4514,10.5886 14.1028,10.5886 Z ' })
                )
            );
        }
    }]);

    return MdiDiscord;
}(React.Component);

exports.default = MdiDiscord;
module.exports = exports['default'];