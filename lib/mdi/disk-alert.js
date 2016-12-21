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

var MdiDiskAlert = function (_React$Component) {
    _inherits(MdiDiskAlert, _React$Component);

    function MdiDiskAlert() {
        _classCallCheck(this, MdiDiskAlert);

        return _possibleConstructorReturn(this, (MdiDiskAlert.__proto__ || Object.getPrototypeOf(MdiDiskAlert)).apply(this, arguments));
    }

    _createClass(MdiDiskAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.9994,13.9981C 8.8944,13.9981 7.9994,13.1021 7.9994,11.9981C 7.9994,10.8931 8.8944,9.99807 9.9994,9.99807C 11.1034,9.99807 11.9994,10.8931 11.9994,11.9981C 11.9994,13.1021 11.1034,13.9981 9.9994,13.9981 Z M 9.9994,3.99807C 5.5814,3.99807 1.9994,7.58007 1.9994,11.9981C 1.9994,16.4171 5.5814,19.9981 9.9994,19.9981C 14.4174,19.9981 17.9994,16.4171 17.9994,11.9981C 17.9994,7.58007 14.4174,3.99807 9.9994,3.99807 Z M 19.9994,11.9981L 21.9994,11.9981L 21.9994,6.99807L 19.9994,6.99807M 19.9994,15.9981L 21.9994,15.9981L 21.9994,13.9981L 19.9994,13.9981L 19.9994,15.9981 Z ' })
                )
            );
        }
    }]);

    return MdiDiskAlert;
}(React.Component);

exports.default = MdiDiskAlert;
module.exports = exports['default'];