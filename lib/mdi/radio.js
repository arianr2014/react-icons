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

var MdiRadio = function (_React$Component) {
    _inherits(MdiRadio, _React$Component);

    function MdiRadio() {
        _classCallCheck(this, MdiRadio);

        return _possibleConstructorReturn(this, (MdiRadio.__proto__ || Object.getPrototypeOf(MdiRadio)).apply(this, arguments));
    }

    _createClass(MdiRadio, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,6C 21.1046,6 22,6.89543 22,8L 22,20C 22,21.1046 21.1046,22 20,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,8C 2,7.15034 2.52983,6.42443 3.27712,6.13463L 15.707,0.986006L 16.4724,2.83377L 8.82842,6L 20,6 Z M 20,8.00001L 4,8.00001L 4,12L 16,12L 16,10L 18,10L 18,12L 20,12L 20,8.00001 Z M 7,14C 5.34314,14 4,15.3431 4,17C 4,18.6569 5.34314,20 7,20C 8.65685,20 10,18.6569 10,17C 10,15.3431 8.65685,14 7,14 Z ' })
                )
            );
        }
    }]);

    return MdiRadio;
}(React.Component);

exports.default = MdiRadio;
module.exports = exports['default'];