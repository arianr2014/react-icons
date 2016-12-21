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

var MdiCodeNotEqual = function (_React$Component) {
    _inherits(MdiCodeNotEqual, _React$Component);

    function MdiCodeNotEqual() {
        _classCallCheck(this, MdiCodeNotEqual);

        return _possibleConstructorReturn(this, (MdiCodeNotEqual.__proto__ || Object.getPrototypeOf(MdiCodeNotEqual)).apply(this, arguments));
    }

    _createClass(MdiCodeNotEqual, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,15.002L 8,15.002L 8,17.002L 6,17.002M 11,13L 18,13L 18,15L 11,15M 11,9.00195L 18,9.00195L 18,11.002L 11,11.002M 6,7.00195L 8,7.00195L 8,13.002L 6,13.002M 5,3C 3.894,3 3,3.896 3,5L 3,19C 3,20.104 3.894,21 5,21L 19,21C 20.103,21 21,20.104 21,19L 21,5C 21,3.896 20.103,3 19,3L 5,3 Z ' })
                )
            );
        }
    }]);

    return MdiCodeNotEqual;
}(React.Component);

exports.default = MdiCodeNotEqual;
module.exports = exports['default'];