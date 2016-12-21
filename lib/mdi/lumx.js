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

var MdiLumx = function (_React$Component) {
    _inherits(MdiLumx, _React$Component);

    function MdiLumx() {
        _classCallCheck(this, MdiLumx);

        return _possibleConstructorReturn(this, (MdiLumx.__proto__ || Object.getPrototypeOf(MdiLumx)).apply(this, arguments));
    }

    _createClass(MdiLumx, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12.3536,1.74695L 20.1317,9.52513L 13.7678,15.8891L 12.3536,14.4749L 17.3033,9.52513L 10.9393,3.16117L 12.3536,1.74695 Z M 15.8891,9.52513L 14.4749,10.9393L 10.2322,6.69671L 5.28249,11.6465L 3.86827,10.2322L 10.2322,3.86828L 15.8891,9.52513 Z M 10.2322,8.11092L 11.6464,9.52513L 6.6967,14.4749L 13.0607,20.8388L 11.6464,22.253L 3.86827,14.4749L 10.2322,8.11092 Z M 8.11091,14.4749L 9.52513,13.0607L 13.7678,17.3033L 18.7175,12.3536L 20.1317,13.7678L 13.7678,20.1317L 8.11091,14.4749 Z ' })
                )
            );
        }
    }]);

    return MdiLumx;
}(React.Component);

exports.default = MdiLumx;
module.exports = exports['default'];