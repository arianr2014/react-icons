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

var MdiTicketAccount = function (_React$Component) {
    _inherits(MdiTicketAccount, _React$Component);

    function MdiTicketAccount() {
        _classCallCheck(this, MdiTicketAccount);

        return _possibleConstructorReturn(this, (MdiTicketAccount.__proto__ || Object.getPrototypeOf(MdiTicketAccount)).apply(this, arguments));
    }

    _createClass(MdiTicketAccount, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.999,11.9979C 19.999,13.1029 20.895,13.9979 21.999,13.9979L 21.999,17.9979C 21.999,19.1029 21.104,19.9979 19.999,19.9979L 3.999,19.9979C 2.895,19.9979 1.999,19.1029 1.999,17.9979L 2.003,13.9979C 3.106,13.9959 3.999,13.1019 3.999,11.9979C 3.999,10.8959 3.107,10.0029 2.006,9.99886L 2.01,5.99786C 2.01,4.89386 2.895,3.99786 3.999,3.99786L 19.999,3.99786C 21.104,3.99786 21.999,4.89386 21.999,5.99786L 21.999,9.99786C 20.895,9.99786 19.999,10.8939 19.999,11.9979 Z M 16.5,16.25C 16.5,14.75 13.5,14 12,14C 10.5,14 7.50004,14.75 7.50004,16.25L 7.50004,17L 16.5,17L 16.5,16.25 Z M 12,12.25C 13.242,12.25 14.25,11.244 14.25,10C 14.25,8.758 13.242,7.75 12,7.75C 10.758,7.75 9.75,8.758 9.75,10C 9.75,11.244 10.758,12.25 12,12.25 Z ' })
                )
            );
        }
    }]);

    return MdiTicketAccount;
}(React.Component);

exports.default = MdiTicketAccount;
module.exports = exports['default'];