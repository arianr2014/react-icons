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

var MdiLaptop = function (_React$Component) {
    _inherits(MdiLaptop, _React$Component);

    function MdiLaptop() {
        _classCallCheck(this, MdiLaptop);

        return _possibleConstructorReturn(this, (MdiLaptop.__proto__ || Object.getPrototypeOf(MdiLaptop)).apply(this, arguments));
    }

    _createClass(MdiLaptop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.9997,5.99807L 19.9997,5.99807L 19.9997,15.9981L 3.9997,15.9981M 19.9997,17.9981C 21.1037,17.9981 21.9897,17.1021 21.9897,15.9981L 21.9997,5.99807C 21.9997,4.89406 21.1037,3.99807 19.9997,3.99807L 3.9997,3.99807C 2.8947,3.99807 1.9997,4.89406 1.9997,5.99807L 1.9997,15.9981C 1.9997,17.1021 2.8947,17.9981 3.9997,17.9981L -0.00030009,17.9981L -0.00030009,19.9981L 23.9997,19.9981L 23.9997,17.9981L 19.9997,17.9981 Z ' })
                )
            );
        }
    }]);

    return MdiLaptop;
}(React.Component);

exports.default = MdiLaptop;
module.exports = exports['default'];