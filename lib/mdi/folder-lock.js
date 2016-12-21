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

var MdiFolderLock = function (_React$Component) {
    _inherits(MdiFolderLock, _React$Component);

    function MdiFolderLock() {
        _classCallCheck(this, MdiFolderLock);

        return _possibleConstructorReturn(this, (MdiFolderLock.__proto__ || Object.getPrototypeOf(MdiFolderLock)).apply(this, arguments));
    }

    _createClass(MdiFolderLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,5.99807C 21.1034,5.99807 21.9994,6.89407 21.9994,7.99807L 21.9994,17.9981C 21.9994,19.1021 21.1034,19.9981 19.9994,19.9981L 3.99939,19.9981C 2.89437,19.9981 1.99939,19.1021 1.99939,17.9981L 2.0094,5.99807C 2.0094,4.89407 2.89437,3.99807 3.99939,3.99807L 9.99939,3.99807L 11.9994,5.99807L 19.9994,5.99807 Z M 19,17L 19,13L 18,13L 18,12C 18,10.3432 16.6569,9.00002 15,9.00002C 13.3431,9.00002 12,10.3432 12,12L 12,13L 11,13L 11,17L 19,17 Z M 15,11C 15.5523,11 16,11.4477 16,12L 16,13L 14,13L 14,12C 14,11.4477 14.4477,11 15,11 Z ' })
                )
            );
        }
    }]);

    return MdiFolderLock;
}(React.Component);

exports.default = MdiFolderLock;
module.exports = exports['default'];