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

var MdiWatchImport = function (_React$Component) {
    _inherits(MdiWatchImport, _React$Component);

    function MdiWatchImport() {
        _classCallCheck(this, MdiWatchImport);

        return _possibleConstructorReturn(this, (MdiWatchImport.__proto__ || Object.getPrototypeOf(MdiWatchImport)).apply(this, arguments));
    }

    _createClass(MdiWatchImport, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,11L 7.01042,11L 4.50527,8.49479L 5.91949,7.08058L 10.8388,12L 5.9195,16.9194L 4.50527,15.5052L 7.01042,13L 2,13L 2,11 Z M 11.9994,17.999C 15.3124,17.999 17.9994,15.3131 17.9994,11.999C 17.9994,8.68504 15.3124,5.99904 11.9994,5.99904C 10.5971,5.99904 9.30731,6.47995 8.28584,7.28584L 6.86921,5.86921L 7.04537,5.72604L 7.99939,-0.000951767L 15.9994,-0.000951767L 16.9544,5.72604C 18.8074,7.19102 19.9994,9.45404 19.9994,11.999C 19.9994,14.544 18.8074,16.8071 16.9544,18.2721L 15.9994,23.999L 7.99939,23.999L 7.04537,18.2721L 6.87025,18.1298L 8.28691,16.7131C 9.30821,17.5185 10.5976,17.999 11.9994,17.999 Z ' })
                )
            );
        }
    }]);

    return MdiWatchImport;
}(React.Component);

exports.default = MdiWatchImport;
module.exports = exports['default'];