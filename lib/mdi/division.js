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

var MdiDivision = function (_React$Component) {
    _inherits(MdiDivision, _React$Component);

    function MdiDivision() {
        _classCallCheck(this, MdiDivision);

        return _possibleConstructorReturn(this, (MdiDivision.__proto__ || Object.getPrototypeOf(MdiDivision)).apply(this, arguments));
    }

    _createClass(MdiDivision, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,12.998L 4.99936,12.998L 4.99936,10.998L 18.9994,10.998L 18.9994,12.998 Z M 12,5C 13.1046,5 14,5.89543 14,7C 14,8.10457 13.1046,9 12,9C 10.8954,9 10,8.10457 10,7C 10,5.89543 10.8954,5 12,5 Z M 12,15C 13.1046,15 14,15.8954 14,17C 14,18.1046 13.1046,19 12,19C 10.8954,19 10,18.1046 10,17C 10,15.8954 10.8954,15 12,15 Z ' })
                )
            );
        }
    }]);

    return MdiDivision;
}(React.Component);

exports.default = MdiDivision;
module.exports = exports['default'];