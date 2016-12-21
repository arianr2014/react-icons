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

var MdiSatelliteVariant = function (_React$Component) {
    _inherits(MdiSatelliteVariant, _React$Component);

    function MdiSatelliteVariant() {
        _classCallCheck(this, MdiSatelliteVariant);

        return _possibleConstructorReturn(this, (MdiSatelliteVariant.__proto__ || Object.getPrototypeOf(MdiSatelliteVariant)).apply(this, arguments));
    }

    _createClass(MdiSatelliteVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '3', 'stroke-linejoin': 'round', d: 'M 11.6213,1.01472L 17.2782,6.67157L 15.1569,8.79289L 13.0355,6.67157L 11.6213,8.08579L 13.9497,10.4142L 12.7855,11.5784L 13.2448,12.0377C 14.1706,11.6052 15.3067,11.7712 16.0711,12.5355L 12.5355,16.0711C 11.7712,15.3067 11.6052,14.1706 12.0377,13.2448L 11.5784,12.7855L 10.4142,13.9497L 8.08579,11.6213L 6.67158,13.0355L 8.7929,15.1569L 6.67158,17.2782L 1.01472,11.6213L 3.13604,9.5L 5.25736,11.6213L 6.67158,10.2071L 3.84314,7.37868C 3.06209,6.59763 3.0621,5.3313 3.84314,4.55025L 4.55025,3.84315C 5.3313,3.0621 6.59763,3.0621 7.37867,3.84315L 10.2071,6.67157L 11.6213,5.25736L 9.5,3.13604L 11.6213,1.01472 Z M 18,14C 18,16.2091 16.2091,18 14,18L 14,16C 15.1046,16 16,15.1046 16,14L 18,14 Z M 22,14C 22,18.4183 18.4183,22 14,22L 14,20C 17.3137,20 20,17.3137 20,14L 22,14 Z ' })
                )
            );
        }
    }]);

    return MdiSatelliteVariant;
}(React.Component);

exports.default = MdiSatelliteVariant;
module.exports = exports['default'];