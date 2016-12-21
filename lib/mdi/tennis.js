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

var MdiTennis = function (_React$Component) {
    _inherits(MdiTennis, _React$Component);

    function MdiTennis() {
        _classCallCheck(this, MdiTennis);

        return _possibleConstructorReturn(this, (MdiTennis.__proto__ || Object.getPrototypeOf(MdiTennis)).apply(this, arguments));
    }

    _createClass(MdiTennis, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,2C 14.4815,2 16.752,2.9039 18.5,4.40042C 16.3577,6.2345 15,8.9587 15,12C 15,15.0413 16.3577,17.7655 18.5,19.5996C 16.752,21.0961 14.4815,22 12,22C 9.51845,22 7.24803,21.0961 5.5,19.5996C 7.64233,17.7655 9,15.0413 9,12C 9,8.9587 7.64233,6.23449 5.5,4.40041C 7.24803,2.9039 9.51845,2 12,2 Z M 22,12C 22,14.3196 21.2102,16.4548 19.8848,18.1513C 18.1221,16.6838 17,14.4729 17,12C 17,9.52706 18.1221,7.31618 19.8848,5.84872C 21.2102,7.54518 22,9.68036 22,12 Z M 2,12C 2,9.68036 2.7898,7.54518 4.11516,5.84872C 5.87794,7.31618 7,9.52706 7,12C 7,14.4729 5.87794,16.6838 4.11516,18.1513C 2.7898,16.4548 2,14.3196 2,12 Z ' })
                )
            );
        }
    }]);

    return MdiTennis;
}(React.Component);

exports.default = MdiTennis;
module.exports = exports['default'];