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

var MdiVectorCurve = function (_React$Component) {
    _inherits(MdiVectorCurve, _React$Component);

    function MdiVectorCurve() {
        _classCallCheck(this, MdiVectorCurve);

        return _possibleConstructorReturn(this, (MdiVectorCurve.__proto__ || Object.getPrototypeOf(MdiVectorCurve)).apply(this, arguments));
    }

    _createClass(MdiVectorCurve, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.5,2C 19.3284,2 20,2.67157 20,3.5C 20,4.32843 19.3284,5 18.5,5C 18.2684,5 18.0491,4.94752 17.8533,4.85381L 14.1599,8.54718L 14.4765,9.02033C 16.6881,7.73565 19.2582,7 22,7L 23,7.0328L 23,9.03791L 22,9.00001C 19.4226,9.00001 17.0204,9.75006 14.9998,11.0438C 14.9764,13.2182 13.2182,14.9764 11.0438,14.9998C 9.75004,17.0204 8.99999,19.4226 8.99999,22L 9.03788,23L 7.0328,23L 7,22C 7,19.2582 7.73565,16.6881 9.02033,14.4765L 8.54718,14.1599L 4.85381,17.8533C 4.94752,18.0491 5,18.2684 5,18.5C 5,19.3284 4.32843,20 3.5,20C 2.67157,20 2,19.3284 2,18.5C 2,17.6716 2.67157,17 3.5,17C 3.73157,17 3.95089,17.0525 4.1467,17.1462L 7.84007,13.4528C 7.31354,12.7755 7,11.9244 7,11C 7,8.79086 8.79086,7 11,7C 11.9244,7 12.7755,7.31353 13.4528,7.84007L 17.1462,4.14671C 17.0525,3.95089 17,3.73157 17,3.5C 17,2.67157 17.6716,2 18.5,2 Z M 11,9.00001C 9.89542,9.00001 8.99999,9.89544 8.99999,11C 8.99999,12.1046 9.89542,13 11,13C 12.1046,13 13,12.1046 13,11C 13,9.89544 12.1046,9.00001 11,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiVectorCurve;
}(React.Component);

exports.default = MdiVectorCurve;
module.exports = exports['default'];