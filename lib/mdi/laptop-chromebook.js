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

var MdiLaptopChromebook = function (_React$Component) {
    _inherits(MdiLaptopChromebook, _React$Component);

    function MdiLaptopChromebook() {
        _classCallCheck(this, MdiLaptopChromebook);

        return _possibleConstructorReturn(this, (MdiLaptopChromebook.__proto__ || Object.getPrototypeOf(MdiLaptopChromebook)).apply(this, arguments));
    }

    _createClass(MdiLaptopChromebook, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9997,14.9981L 3.99969,14.9981L 3.99969,4.99807L 19.9997,4.99807M 13.9997,17.9981L 9.99969,17.9981L 9.99969,16.9981L 13.9997,16.9981M 21.9997,17.9981L 21.9997,2.99807L 1.99969,2.99807L 1.99969,17.9981L -0.000305176,17.9981L -0.000305176,19.9981L 23.9997,19.9981L 23.9997,17.9981L 21.9997,17.9981 Z ' })
                )
            );
        }
    }]);

    return MdiLaptopChromebook;
}(React.Component);

exports.default = MdiLaptopChromebook;
module.exports = exports['default'];