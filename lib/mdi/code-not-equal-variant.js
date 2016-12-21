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

var MdiCodeNotEqualVariant = function (_React$Component) {
    _inherits(MdiCodeNotEqualVariant, _React$Component);

    function MdiCodeNotEqualVariant() {
        _classCallCheck(this, MdiCodeNotEqualVariant);

        return _possibleConstructorReturn(this, (MdiCodeNotEqualVariant.__proto__ || Object.getPrototypeOf(MdiCodeNotEqualVariant)).apply(this, arguments));
    }

    _createClass(MdiCodeNotEqualVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,6.50195L 11,9.33008L 8.3281,12.002L 11,14.6738L 11,17.502L 5.5,12.002M 13,6.43164L 18.5703,12.002L 13,17.5723L 13,14.7441L 15.7422,12.002L 13,9.25977M 5,3C 3.894,3 3,3.896 3,5L 3,19C 3,20.104 3.894,21 5,21L 19,21C 20.103,21 21,20.104 21,19L 21,5C 21,3.896 20.103,3 19,3L 5,3 Z ' })
                )
            );
        }
    }]);

    return MdiCodeNotEqualVariant;
}(React.Component);

exports.default = MdiCodeNotEqualVariant;
module.exports = exports['default'];