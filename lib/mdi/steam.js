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

var MdiSteam = function (_React$Component) {
    _inherits(MdiSteam, _React$Component);

    function MdiSteam() {
        _classCallCheck(this, MdiSteam);

        return _possibleConstructorReturn(this, (MdiSteam.__proto__ || Object.getPrototypeOf(MdiSteam)).apply(this, arguments));
    }

    _createClass(MdiSteam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.1429,7.78571C 21.3263,7.78571 22.2857,8.7451 22.2857,9.92857C 22.2857,11.112 21.3263,12.0714 20.1429,12.0714C 18.9594,12.0714 18,11.112 18,9.92857C 18,8.7451 18.9594,7.78571 20.1429,7.78571 Z M 3,6.92857C 4.65685,6.92857 6,8.27172 6,9.92857L 5.98369,10.2433L 12.3329,13.5359C 12.836,13.1547 13.463,12.9286 14.1429,12.9286L 16.2857,9.92857C 16.2857,7.79833 18.0126,6.07143 20.1429,6.07143C 22.2731,6.07143 24,7.79833 24,9.92857C 24,12.0588 22.2731,13.7857 20.1429,13.7857L 17.1429,15.9286C 17.1429,17.5854 15.7997,18.9286 14.1429,18.9286C 12.486,18.9286 11.1429,17.5854 11.1429,15.9286C 11.1429,15.891 11.1435,15.8536 11.1449,15.8164L 4.63833,12.4421C 4.16733,12.7498 3.60454,12.9286 3,12.9286C 1.34314,12.9286 -1.39645e-006,11.5854 -1.39645e-006,9.92857C -1.39645e-006,8.27172 1.34314,6.92857 3,6.92857 Z M 15.0331,14.9362C 15.6657,15.2586 15.9173,16.0328 15.5949,16.6655C 15.2726,17.2982 14.4983,17.5497 13.8657,17.2274L 12.0277,16.2742C 12.193,17.2933 13.0771,18.0714 14.1429,18.0714C 15.3263,18.0714 16.2857,17.112 16.2857,15.9286C 16.2857,14.7451 15.3263,13.7857 14.1429,13.7857C 13.8117,13.7857 13.4981,13.8608 13.2181,13.995L 15.0331,14.9362 Z M 3,7.78572C 1.81653,7.78572 0.857139,8.74511 0.857139,9.92858C 0.857139,11.112 1.81653,12.0714 3,12.0714C 3.24468,12.0714 3.47979,12.0304 3.69882,11.9549L 2.27616,11.2171C 1.64348,10.8947 1.39191,10.1205 1.71428,9.48784C 2.03665,8.85515 2.81088,8.60359 3.44356,8.92596L 5.13937,9.8054C 5.07555,8.67925 4.14212,7.78572 3,7.78572 Z M 20.1429,6.92858C 18.486,6.92858 17.1429,8.27172 17.1429,9.92858C 17.1429,11.5854 18.486,12.9286 20.1429,12.9286C 21.7997,12.9286 23.1429,11.5854 23.1429,9.92858C 23.1429,8.27172 21.7997,6.92858 20.1429,6.92858 Z ' })
                )
            );
        }
    }]);

    return MdiSteam;
}(React.Component);

exports.default = MdiSteam;
module.exports = exports['default'];