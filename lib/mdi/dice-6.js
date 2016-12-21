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

var MdiDice6 = function (_React$Component) {
    _inherits(MdiDice6, _React$Component);

    function MdiDice6() {
        _classCallCheck(this, MdiDice6);

        return _possibleConstructorReturn(this, (MdiDice6.__proto__ || Object.getPrototypeOf(MdiDice6)).apply(this, arguments));
    }

    _createClass(MdiDice6, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 5,3L 19,3C 20.1046,3 21,3.89543 21,5L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5C 3,3.89543 3.89543,3 5,3 Z M 6.99999,5.00001C 5.89543,5.00001 5,5.89544 5,7.00001C 5,8.10458 5.89543,9.00001 6.99999,9.00001C 8.10456,9.00001 9,8.10458 9,7.00001C 9,5.89544 8.10456,5.00001 6.99999,5.00001 Z M 17,15C 15.8954,15 15,15.8954 15,17C 15,18.1046 15.8954,19 17,19C 18.1046,19 19,18.1046 19,17C 19,15.8954 18.1046,15 17,15 Z M 17,10C 15.8954,10 15,10.8954 15,12C 15,13.1046 15.8954,14 17,14C 18.1046,14 19,13.1046 19,12C 19,10.8954 18.1046,10 17,10 Z M 17,5.00001C 15.8954,5.00001 15,5.89544 15,7.00001C 15,8.10458 15.8954,9 17,9C 18.1046,9 19,8.10458 19,7.00001C 19,5.89544 18.1046,5.00001 17,5.00001 Z M 7,10C 5.89543,10 5,10.8954 5,12C 5,13.1046 5.89543,14 7,14C 8.10457,14 9,13.1046 9,12C 9,10.8954 8.10457,10 7,10 Z M 7,15C 5.89543,15 5,15.8954 5,17C 5,18.1046 5.89543,19 7,19C 8.10457,19 9,18.1046 9,17C 9,15.8954 8.10457,15 7,15 Z ' })
                )
            );
        }
    }]);

    return MdiDice6;
}(React.Component);

exports.default = MdiDice6;
module.exports = exports['default'];