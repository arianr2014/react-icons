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

var MdiCloudDownload = function (_React$Component) {
    _inherits(MdiCloudDownload, _React$Component);

    function MdiCloudDownload() {
        _classCallCheck(this, MdiCloudDownload);

        return _possibleConstructorReturn(this, (MdiCloudDownload.__proto__ || Object.getPrototypeOf(MdiCloudDownload)).apply(this, arguments));
    }

    _createClass(MdiCloudDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9997,12.9981L 11.9997,17.9981L 6.9997,12.9981L 9.9997,12.9981L 9.9997,8.99807L 13.9997,8.99807L 13.9997,12.9981M 19.3547,10.0341C 18.6737,6.59307 15.6407,3.99807 11.9997,3.99807C 9.1077,3.99807 6.6027,5.63708 5.3507,8.03408C 2.3427,8.35805 -0.00030009,10.9031 -0.00030009,13.9981C -0.00030009,17.3121 2.6857,19.9981 5.9997,19.9981L 18.9997,19.9981C 21.7607,19.9981 23.9997,17.7601 23.9997,14.9981C 23.9997,12.3581 21.9467,10.2191 19.3547,10.0341 Z ' })
                )
            );
        }
    }]);

    return MdiCloudDownload;
}(React.Component);

exports.default = MdiCloudDownload;
module.exports = exports['default'];