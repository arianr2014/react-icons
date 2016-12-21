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

var MdiDisk = function (_React$Component) {
    _inherits(MdiDisk, _React$Component);

    function MdiDisk() {
        _classCallCheck(this, MdiDisk);

        return _possibleConstructorReturn(this, (MdiDisk.__proto__ || Object.getPrototypeOf(MdiDisk)).apply(this, arguments));
    }

    _createClass(MdiDisk, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9975,13.9987C 10.8938,13.9987 10,13.1 10,11.9975C 10,10.8938 10.8938,10 11.9975,10C 13.105,10 13.9987,10.8938 13.9987,11.9975C 13.9987,13.1 13.105,13.9987 11.9975,13.9987 Z M 11.9975,3.99875C 7.5825,3.99875 3.99875,7.5775 3.99875,11.9975C 3.99875,16.4162 7.5825,20 11.9975,20C 16.4163,20 20,16.4162 20,11.9975C 20,7.5775 16.4163,3.99875 11.9975,3.99875 Z ' })
                )
            );
        }
    }]);

    return MdiDisk;
}(React.Component);

exports.default = MdiDisk;
module.exports = exports['default'];