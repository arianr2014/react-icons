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

var MdiSmokingOff = function (_React$Component) {
    _inherits(MdiSmokingOff, _React$Component);

    function MdiSmokingOff() {
        _classCallCheck(this, MdiSmokingOff);

        return _possibleConstructorReturn(this, (MdiSmokingOff.__proto__ || Object.getPrototypeOf(MdiSmokingOff)).apply(this, arguments));
    }

    _createClass(MdiSmokingOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 15.824,14L 19.824,18L 22,18L 22,14M 2,18L 5,18L 5,14L 2,14M 3.277,4L 2,5.268L 4.443,7.711C 2.931,8.611 2.003,10.24 2,12L 4,12C 4,10.756 4.767,9.641 5.929,9.197L 10.732,14L 7,14L 7,18L 14.732,18L 18.732,22L 20,20.723M 10,3L 10,4C 9.998,5.092 9.403,6.096 8.447,6.623L 9.894,8.07C 11.213,7.134 11.998,5.617 12,4L 12,3L 10,3 Z ' })
                )
            );
        }
    }]);

    return MdiSmokingOff;
}(React.Component);

exports.default = MdiSmokingOff;
module.exports = exports['default'];