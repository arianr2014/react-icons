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

var MdiBackupRestore = function (_React$Component) {
    _inherits(MdiBackupRestore, _React$Component);

    function MdiBackupRestore() {
        _classCallCheck(this, MdiBackupRestore);

        return _possibleConstructorReturn(this, (MdiBackupRestore.__proto__ || Object.getPrototypeOf(MdiBackupRestore)).apply(this, arguments));
    }

    _createClass(MdiBackupRestore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,3C 7.03,3 3,7.03 3,12L 0,12L 4,16L 8,12L 5,12C 5,8.13 8.13,5 12,5C 15.87,5 19,8.13 19,12C 19,15.87 15.87,19 12,19C 10.49,19 9.09,18.51 7.94,17.7L 6.52,19.14C 8.04,20.3 9.94,21 12,21C 16.97,21 21,16.97 21,12C 21,7.03 16.97,3 12,3 Z M 14,12C 14,10.9 13.1,10 12,10C 10.9,10 10,10.9 10,12C 10,13.1 10.9,14 12,14C 13.1,14 14,13.1 14,12 Z ' })
                )
            );
        }
    }]);

    return MdiBackupRestore;
}(React.Component);

exports.default = MdiBackupRestore;
module.exports = exports['default'];