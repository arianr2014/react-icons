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

var MdiViewAgenda = function (_React$Component) {
    _inherits(MdiViewAgenda, _React$Component);

    function MdiViewAgenda() {
        _classCallCheck(this, MdiViewAgenda);

        return _possibleConstructorReturn(this, (MdiViewAgenda.__proto__ || Object.getPrototypeOf(MdiViewAgenda)).apply(this, arguments));
    }

    _createClass(MdiViewAgenda, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20,3L 3,3C 2.45,3 2,3.45 2,4L 2,10C 2,10.55 2.45,11 3,11L 20,11C 20.55,11 21,10.55 21,10L 21,4C 21,3.45 20.55,3 20,3 Z M 20,13L 3,13C 2.45,13 2,13.45 2,14L 2,20C 2,20.55 2.45,21 3,21L 20,21C 20.55,21 21,20.55 21,20L 21,14C 21,13.45 20.55,13 20,13 Z ' })
                )
            );
        }
    }]);

    return MdiViewAgenda;
}(React.Component);

exports.default = MdiViewAgenda;
module.exports = exports['default'];