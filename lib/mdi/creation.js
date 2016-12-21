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

var MdiCreation = function (_React$Component) {
    _inherits(MdiCreation, _React$Component);

    function MdiCreation() {
        _classCallCheck(this, MdiCreation);

        return _possibleConstructorReturn(this, (MdiCreation.__proto__ || Object.getPrototypeOf(MdiCreation)).apply(this, arguments));
    }

    _createClass(MdiCreation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9988,1.00073L 17.7437,3.745L 15,5L 17.7437,6.255L 18.9988,8.99875L 20.2537,6.255L 22.9975,5L 20.2537,3.745M 8.99875,3.99875L 6.49375,9.4925L 1.00125,12.0025L 6.49375,14.5062L 8.99875,20L 11.5038,14.5062L 17.0025,12.0025L 11.5038,9.4925M 18.9988,15L 17.7437,17.7438L 15,18.9988L 17.7437,20.2537L 18.9988,22.9975L 20.2537,20.2537L 22.9975,18.9988L 20.2537,17.7438' })
                )
            );
        }
    }]);

    return MdiCreation;
}(React.Component);

exports.default = MdiCreation;
module.exports = exports['default'];