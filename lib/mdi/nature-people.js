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

var MdiNaturePeople = function (_React$Component) {
    _inherits(MdiNaturePeople, _React$Component);

    function MdiNaturePeople() {
        _classCallCheck(this, MdiNaturePeople);

        return _possibleConstructorReturn(this, (MdiNaturePeople.__proto__ || Object.getPrototypeOf(MdiNaturePeople)).apply(this, arguments));
    }

    _createClass(MdiNaturePeople, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 4.5,11C 5.33,11 6,10.33 6,9.5C 6,8.67 5.33,8 4.5,8C 3.67,8 3,8.67 3,9.5C 3,10.33 3.67,11 4.5,11 Z M 22.17,9.17C 22.17,5.3 19.04,2.17 15.17,2.17C 11.3,2.17 8.17,5.3 8.17,9.17C 8.17,12.64 10.69,15.51 14,16.06L 14,20L 6,20L 6,17L 7,17L 7,13C 7,12.45 6.55,12 6,12L 3,12C 2.45,12 2,12.45 2,13L 2,17L 3,17L 3,22L 19,22L 19,20L 16,20L 16,16.12C 19.47,15.71 22.17,12.76 22.17,9.17 Z ' })
                )
            );
        }
    }]);

    return MdiNaturePeople;
}(React.Component);

exports.default = MdiNaturePeople;
module.exports = exports['default'];