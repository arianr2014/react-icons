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

var MdiCalculator = function (_React$Component) {
    _inherits(MdiCalculator, _React$Component);

    function MdiCalculator() {
        _classCallCheck(this, MdiCalculator);

        return _possibleConstructorReturn(this, (MdiCalculator.__proto__ || Object.getPrototypeOf(MdiCalculator)).apply(this, arguments));
    }

    _createClass(MdiCalculator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6.99999,2.00002L 17,2.00002C 18.1046,2.00002 19,2.89545 19,4.00002L 19,20C 19,21.1046 18.1046,22 17,22L 6.99999,22C 5.89543,22 5,21.1046 5,20L 5,4.00002C 5,2.89545 5.89543,2.00002 6.99999,2.00002 Z M 6.99999,4.00002L 6.99999,8.00003L 17,8.00003L 17,4.00002L 6.99999,4.00002 Z M 6.99999,10L 6.99999,12L 8.99999,12L 8.99999,10L 6.99999,10 Z M 11,10L 11,12L 13,12L 13,10L 11,10 Z M 15,10L 15,12L 17,12L 17,10L 15,10 Z M 6.99999,14L 6.99999,16L 9,16L 9,14L 6.99999,14 Z M 11,14L 11,16L 13,16L 13,14L 11,14 Z M 15,14L 15,16L 17,16L 17,14L 15,14 Z M 7,18L 7,20L 9,20L 9,18L 7,18 Z M 11,18L 11,20L 13,20L 13,18L 11,18 Z M 15,18L 15,20L 17,20L 17,18L 15,18 Z ' })
                )
            );
        }
    }]);

    return MdiCalculator;
}(React.Component);

exports.default = MdiCalculator;
module.exports = exports['default'];