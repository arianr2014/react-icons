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

var MdiWatch = function (_React$Component) {
    _inherits(MdiWatch, _React$Component);

    function MdiWatch() {
        _classCallCheck(this, MdiWatch);

        return _possibleConstructorReturn(this, (MdiWatch.__proto__ || Object.getPrototypeOf(MdiWatch)).apply(this, arguments));
    }

    _createClass(MdiWatch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.99939,11.999C 5.99939,8.68505 8.68539,5.99904 11.9994,5.99904C 15.3124,5.99904 17.9994,8.68505 17.9994,11.999C 17.9994,15.313 15.3124,17.999 11.9994,17.999C 8.68539,17.999 5.99939,15.313 5.99939,11.999 Z M 19.9994,11.999C 19.9994,9.45403 18.8074,7.19103 16.9544,5.72603L 15.9994,-0.000955582L 7.99939,-0.000955582L 7.04538,5.72603C 5.19138,7.19005 3.99939,9.45403 3.99939,11.999C 3.99939,14.5441 5.19138,16.808 7.04538,18.2721L 7.99939,23.999L 15.9994,23.999L 16.9544,18.2721C 18.8074,16.8071 19.9994,14.5441 19.9994,11.999 Z ' })
                )
            );
        }
    }]);

    return MdiWatch;
}(React.Component);

exports.default = MdiWatch;
module.exports = exports['default'];