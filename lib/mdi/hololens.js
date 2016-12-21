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

var MdiHololens = function (_React$Component) {
    _inherits(MdiHololens, _React$Component);

    function MdiHololens() {
        _classCallCheck(this, MdiHololens);

        return _possibleConstructorReturn(this, (MdiHololens.__proto__ || Object.getPrototypeOf(MdiHololens)).apply(this, arguments));
    }

    _createClass(MdiHololens, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,8C 12,8 22,8 22,11C 22,11 22.0854,14.3618 21.75,14.25C 21,11 12,11 12,11C 12,11 3,11 2.25001,14.25C 1.91459,14.3618 2,11 1.99999,11C 1.99999,8 12,8 12,8 Z M 12,12C 20,12 20.75,14.25 20.75,14.25C 19.75,17.25 19,18 15,18C 12,18 13,16.5 12,16.5C 11,16.5 12,18 8.99999,18C 5,18 4.24999,17.25 3.25,14.25C 3.25,14.25 4,12 12,12 Z ' })
                )
            );
        }
    }]);

    return MdiHololens;
}(React.Component);

exports.default = MdiHololens;
module.exports = exports['default'];