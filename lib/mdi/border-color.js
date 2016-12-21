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

var MdiBorderColor = function (_React$Component) {
    _inherits(MdiBorderColor, _React$Component);

    function MdiBorderColor() {
        _classCallCheck(this, MdiBorderColor);

        return _possibleConstructorReturn(this, (MdiBorderColor.__proto__ || Object.getPrototypeOf(MdiBorderColor)).apply(this, arguments));
    }

    _createClass(MdiBorderColor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.7062,4.04105C 21.0972,3.65005 21.0972,3.01804 20.7062,2.62704L 18.3702,0.291046C 17.9802,-0.0999451 17.3472,-0.0999451 16.9562,0.291046L 14.9992,2.24805L 18.7492,5.99805M 17.7492,6.99805L 13.9992,3.24805L 3.99919,13.248L 3.99919,16.998L 7.74919,16.998L 17.7492,6.99805 Z ' })
                )
            );
        }
    }]);

    return MdiBorderColor;
}(React.Component);

exports.default = MdiBorderColor;
module.exports = exports['default'];