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

var MdiMap = function (_React$Component) {
    _inherits(MdiMap, _React$Component);

    function MdiMap() {
        _classCallCheck(this, MdiMap);

        return _possibleConstructorReturn(this, (MdiMap.__proto__ || Object.getPrototypeOf(MdiMap)).apply(this, arguments));
    }

    _createClass(MdiMap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,18.9981L 8.99939,16.8911L 8.99939,4.99807L 14.9994,7.10506M 20.4994,2.99807C 20.4444,2.99807 20.3924,3.00406 20.3434,3.02306L 14.9994,5.09807L 8.99939,2.99807L 3.3624,4.89606C 3.1524,4.96607 2.99939,5.14707 2.99939,5.37607L 2.99939,20.4981C 2.99939,20.7741 3.22339,20.9981 3.49939,20.9981C 3.55438,20.9981 3.60638,20.9921 3.6564,20.9731L 8.99939,18.8981L 14.9994,20.9981L 20.6374,19.1001C 20.8474,19.0271 20.9994,18.8491 20.9994,18.6191L 20.9994,3.49807C 20.9994,3.22108 20.7764,2.99807 20.4994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiMap;
}(React.Component);

exports.default = MdiMap;
module.exports = exports['default'];