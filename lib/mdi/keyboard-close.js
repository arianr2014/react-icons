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

var MdiKeyboardClose = function (_React$Component) {
    _inherits(MdiKeyboardClose, _React$Component);

    function MdiKeyboardClose() {
        _classCallCheck(this, MdiKeyboardClose);

        return _possibleConstructorReturn(this, (MdiKeyboardClose.__proto__ || Object.getPrototypeOf(MdiKeyboardClose)).apply(this, arguments));
    }

    _createClass(MdiKeyboardClose, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,22.9981L 15.9994,18.9981L 7.99939,18.9981M 18.9994,7.99807L 16.9994,7.99807L 16.9994,5.99807L 18.9994,5.99807M 18.9994,10.9981L 16.9994,10.9981L 16.9994,8.99807L 18.9994,8.99807M 15.9994,7.99807L 13.9994,7.99807L 13.9994,5.99807L 15.9994,5.99807M 15.9994,10.9981L 13.9994,10.9981L 13.9994,8.99807L 15.9994,8.99807M 15.9994,14.9981L 7.99939,14.9981L 7.99939,12.9981L 15.9994,12.9981M 6.99939,7.99807L 4.99939,7.99807L 4.99939,5.99807L 6.99939,5.99807M 6.99939,10.9981L 4.99939,10.9981L 4.99939,8.99807L 6.99939,8.99807M 7.99939,8.99807L 9.99939,8.99807L 9.99939,10.9981L 7.99939,10.9981M 7.99939,5.99807L 9.99939,5.99807L 9.99939,7.99807L 7.99939,7.99807M 10.9994,8.99807L 12.9994,8.99807L 12.9994,10.9981L 10.9994,10.9981M 10.9994,5.99807L 12.9994,5.99807L 12.9994,7.99807L 10.9994,7.99807M 19.9994,2.99807L 3.99939,2.99807C 2.89439,2.99807 2.00938,3.89406 2.00938,4.99807L 1.99939,14.9981C 1.99939,16.1021 2.89439,16.9981 3.99939,16.9981L 19.9994,16.9981C 21.1034,16.9981 21.9994,16.1021 21.9994,14.9981L 21.9994,4.99807C 21.9994,3.89406 21.1034,2.99807 19.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiKeyboardClose;
}(React.Component);

exports.default = MdiKeyboardClose;
module.exports = exports['default'];