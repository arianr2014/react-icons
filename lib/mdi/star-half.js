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

var MdiStarHalf = function (_React$Component) {
    _inherits(MdiStarHalf, _React$Component);

    function MdiStarHalf() {
        _classCallCheck(this, MdiStarHalf);

        return _possibleConstructorReturn(this, (MdiStarHalf.__proto__ || Object.getPrototypeOf(MdiStarHalf)).apply(this, arguments));
    }

    _createClass(MdiStarHalf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,15.8944L 11.9994,6.59337L 13.7094,10.6294L 18.0894,11.0054L 14.7674,13.8834L 15.7624,18.1644M 21.9994,9.74237L 14.8084,9.12537L 11.9994,2.49837L 9.1904,9.12537L 1.9994,9.74237L 7.4544,14.4684L 5.8194,21.4984L 11.9994,17.7704L 18.1794,21.4984L 16.5444,14.4684L 21.9994,9.74237 Z ' })
                )
            );
        }
    }]);

    return MdiStarHalf;
}(React.Component);

exports.default = MdiStarHalf;
module.exports = exports['default'];