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

var MdiMinusBox = function (_React$Component) {
    _inherits(MdiMinusBox, _React$Component);

    function MdiMinusBox() {
        _classCallCheck(this, MdiMinusBox);

        return _possibleConstructorReturn(this, (MdiMinusBox.__proto__ || Object.getPrototypeOf(MdiMinusBox)).apply(this, arguments));
    }

    _createClass(MdiMinusBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,12.998L 6.99936,12.998L 6.99936,10.998L 16.9994,10.998M 18.9994,2.99805L 4.99936,2.99805C 3.89336,2.99805 2.99936,3.89404 2.99936,4.99805L 2.99936,18.998C 2.99936,20.1021 3.89336,20.998 4.99936,20.998L 18.9994,20.998C 20.1024,20.998 20.9994,20.1021 20.9994,18.998L 20.9994,4.99805C 20.9994,3.89404 20.1024,2.99805 18.9994,2.99805 Z ' })
                )
            );
        }
    }]);

    return MdiMinusBox;
}(React.Component);

exports.default = MdiMinusBox;
module.exports = exports['default'];