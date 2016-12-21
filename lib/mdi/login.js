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

var MdiLogin = function (_React$Component) {
    _inherits(MdiLogin, _React$Component);

    function MdiLogin() {
        _classCallCheck(this, MdiLogin);

        return _possibleConstructorReturn(this, (MdiLogin.__proto__ || Object.getPrototypeOf(MdiLogin)).apply(this, arguments));
    }

    _createClass(MdiLogin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10,17.25L 10,14L 3.00002,14L 3.00002,10L 10,10L 10,6.75L 15.25,12L 10,17.25 Z M 7.99999,2.00003L 17,2.00005C 18.1045,2.00005 19,2.89546 19,4.00003L 19,20C 19,21.1046 18.1045,22 17,22L 7.99999,22C 6.89542,22 5.99999,21.1046 5.99999,20L 6,16L 7.99999,16L 7.99999,20L 17,20L 17,4.00003L 7.99999,4.00002L 7.99999,8.00001L 6,8.00001L 5.99999,4.00002C 5.99999,2.89545 6.89542,2.00003 7.99999,2.00003 Z ' })
                )
            );
        }
    }]);

    return MdiLogin;
}(React.Component);

exports.default = MdiLogin;
module.exports = exports['default'];