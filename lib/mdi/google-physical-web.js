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

var MdiGooglePhysicalWeb = function (_React$Component) {
    _inherits(MdiGooglePhysicalWeb, _React$Component);

    function MdiGooglePhysicalWeb() {
        _classCallCheck(this, MdiGooglePhysicalWeb);

        return _possibleConstructorReturn(this, (MdiGooglePhysicalWeb.__proto__ || Object.getPrototypeOf(MdiGooglePhysicalWeb)).apply(this, arguments));
    }

    _createClass(MdiGooglePhysicalWeb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 12,1.5C 16.9706,1.5 21,5.52944 21,10.5C 21,13.1125 19.8869,15.465 18.1091,17.1091L 17.0474,16.0474C 18.5542,14.6756 19.5,12.6983 19.5,10.5C 19.5,6.35787 16.1421,3.00001 12,3.00001C 7.85786,3.00001 4.5,6.35787 4.5,10.5C 4.5,12.6987 5.44616,14.6765 6.95354,16.0483L 5.8921,17.1102C 4.1136,15.466 3,13.113 3,10.5C 3,5.52944 7.02944,1.5 12,1.5 Z M 12,4.50001C 15.3137,4.50001 18,7.1863 18,10.5C 18,12.2841 17.2213,13.8863 15.9853,14.9853L 14.9222,13.9222C 15.8879,13.0968 16.5,11.8699 16.5,10.5C 16.5,8.01472 14.4853,6.00001 12,6.00001C 9.51472,6.00001 7.5,8.01472 7.5,10.5C 7.5,11.8702 8.11238,13.0973 9.07838,13.9227L 8.01546,14.986C 6.77899,13.887 6,12.2845 6,10.5C 6,7.1863 8.68629,4.50001 12,4.50001 Z M 8.11091,17.6465L 11.2929,14.4645C 11.6834,14.074 12.3166,14.074 12.7071,14.4645L 15.8891,17.6465C 16.2796,18.037 16.2796,18.6701 15.8891,19.0607L 12.7071,22.2427C 12.3166,22.6332 11.6834,22.6332 11.2929,22.2427L 8.11091,19.0607C 7.72038,18.6701 7.72038,18.037 8.11091,17.6465 Z ' })
                )
            );
        }
    }]);

    return MdiGooglePhysicalWeb;
}(React.Component);

exports.default = MdiGooglePhysicalWeb;
module.exports = exports['default'];