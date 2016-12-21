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

var MdiKeyVariant = function (_React$Component) {
    _inherits(MdiKeyVariant, _React$Component);

    function MdiKeyVariant() {
        _classCallCheck(this, MdiKeyVariant);

        return _possibleConstructorReturn(this, (MdiKeyVariant.__proto__ || Object.getPrototypeOf(MdiKeyVariant)).apply(this, arguments));
    }

    _createClass(MdiKeyVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22,18L 22,22L 18,22L 18,19L 15,19L 15,16L 12,16L 9.74293,13.7429C 9.19135,13.9101 8.60617,14 8,14C 4.68629,14 2,11.3137 2,8C 2,4.68629 4.68629,2 8,2C 11.3137,2 14,4.68629 14,8C 14,8.60617 13.9101,9.19135 13.7429,9.74293L 22,18 Z M 7,5C 5.89543,5 5,5.89543 5,7C 5,8.10457 5.89543,9 7,9C 8.10457,9 9,8.10457 9,7C 9,5.89543 8.10457,5 7,5 Z ' })
                )
            );
        }
    }]);

    return MdiKeyVariant;
}(React.Component);

exports.default = MdiKeyVariant;
module.exports = exports['default'];