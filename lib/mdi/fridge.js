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

var MdiFridge = function (_React$Component) {
    _inherits(MdiFridge, _React$Component);

    function MdiFridge() {
        _classCallCheck(this, MdiFridge);

        return _possibleConstructorReturn(this, (MdiFridge.__proto__ || Object.getPrototypeOf(MdiFridge)).apply(this, arguments));
    }

    _createClass(MdiFridge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9,21L 9,22L 7,22L 7,21C 5.89543,21 5,20.1046 5,19L 5,4.00001C 5,2.89544 5.89543,2.00002 7,2.00002L 17,2.00002C 18.1046,2.00002 19,2.89544 19,4.00001L 19,19C 19,20.1046 18.1046,21 17,21L 17,22L 15,22L 15,21L 9,21 Z M 6.99999,4.00001L 7,9L 17,9L 17,4.00001L 6.99999,4.00001 Z M 6.99999,19L 17,19L 17,11L 7,11L 6.99999,19 Z M 8,12L 10,12L 10,15L 8,15L 8,12 Z M 8,6L 10,6L 10,8L 8,8L 8,6 Z ' })
                )
            );
        }
    }]);

    return MdiFridge;
}(React.Component);

exports.default = MdiFridge;
module.exports = exports['default'];