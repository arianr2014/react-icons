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

var MdiWiiu = function (_React$Component) {
    _inherits(MdiWiiu, _React$Component);

    function MdiWiiu() {
        _classCallCheck(this, MdiWiiu);

        return _possibleConstructorReturn(this, (MdiWiiu.__proto__ || Object.getPrototypeOf(MdiWiiu)).apply(this, arguments));
    }

    _createClass(MdiWiiu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2,15.9645C 2,18.19 3.53715,19.5148 5.78698,19.5148L 18.568,19.5148C 20.4663,19.5148 22,18.2041 22,16.3195L 22,6.9704C 22,5.8347 21.1535,4.6036 20.1065,4.6036L 17.1479,4.6036L 17.1479,12.2959C 17.1479,18.1383 6.97042,18.0933 6.97042,12.4142L 6.97042,4.4852L 4.72189,4.4852C 3.25801,4.4852 2,5.4127 2,6.8521L 2,15.9645 Z M 9.3372,11.2308C 9.3372,15.7351 14.6626,15.0908 14.6626,11.9408L 14.6626,4.4852L 9.3372,4.4852L 9.3372,11.2308 Z ' })
                )
            );
        }
    }]);

    return MdiWiiu;
}(React.Component);

exports.default = MdiWiiu;
module.exports = exports['default'];