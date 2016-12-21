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

var MdiDotsVertical = function (_React$Component) {
    _inherits(MdiDotsVertical, _React$Component);

    function MdiDotsVertical() {
        _classCallCheck(this, MdiDotsVertical);

        return _possibleConstructorReturn(this, (MdiDotsVertical.__proto__ || Object.getPrototypeOf(MdiDotsVertical)).apply(this, arguments));
    }

    _createClass(MdiDotsVertical, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,16C 13.1046,16 14,16.8954 14,18C 14,19.1046 13.1046,20 12,20C 10.8954,20 10,19.1046 10,18C 10,16.8954 10.8954,16 12,16 Z M 12,10C 13.1046,10 14,10.8954 14,12C 14,13.1046 13.1046,14 12,14C 10.8954,14 10,13.1046 10,12C 10,10.8954 10.8954,10 12,10 Z M 12,4C 13.1046,4 14,4.89544 14,6C 14,7.10457 13.1046,8 12,8C 10.8954,8 10,7.10457 10,6C 10,4.89543 10.8954,4 12,4 Z ' })
                )
            );
        }
    }]);

    return MdiDotsVertical;
}(React.Component);

exports.default = MdiDotsVertical;
module.exports = exports['default'];