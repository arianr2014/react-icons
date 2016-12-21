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

var MdiBible = function (_React$Component) {
    _inherits(MdiBible, _React$Component);

    function MdiBible() {
        _classCallCheck(this, MdiBible);

        return _possibleConstructorReturn(this, (MdiBible.__proto__ || Object.getPrototypeOf(MdiBible)).apply(this, arguments));
    }

    _createClass(MdiBible, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 5.8125,2L 7,2L 7,9L 9.5,7.5L 12,9L 12,2L 18,2C 19.1,2 20,2.89 20,4L 20,20C 20,21.0472 19.0472,22 18,22L 6,22C 4.9528,22 4,21.0472 4,20L 4,4C 3.99565,3.0125 4.8293,2.0926 5.8125,2 Z M 13,10L 13,13L 10,13L 10,15L 13,15L 13,20L 15,20L 15,15L 18,15L 18,13L 15,13L 15,10L 13,10 Z ' })
                )
            );
        }
    }]);

    return MdiBible;
}(React.Component);

exports.default = MdiBible;
module.exports = exports['default'];