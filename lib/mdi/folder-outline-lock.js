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

var MdiFolderOutlineLock = function (_React$Component) {
    _inherits(MdiFolderOutlineLock, _React$Component);

    function MdiFolderOutlineLock() {
        _classCallCheck(this, MdiFolderOutlineLock);

        return _possibleConstructorReturn(this, (MdiFolderOutlineLock.__proto__ || Object.getPrototypeOf(MdiFolderOutlineLock)).apply(this, arguments));
    }

    _createClass(MdiFolderOutlineLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,17.9981L 19.9994,7.99807L 3.99939,7.99807L 3.99939,17.9981L 19.9994,17.9981 Z M 19.9994,5.99807C 21.1034,5.99807 21.9994,6.89407 21.9994,7.99807L 21.9994,17.9981C 21.9994,19.1021 21.1034,19.9981 19.9994,19.9981L 3.99939,19.9981C 2.89437,19.9981 1.99939,19.1021 1.99939,17.9981L 2.0094,5.99807C 2.0094,4.89407 2.89437,3.99807 3.99939,3.99807L 9.99939,3.99807L 11.9994,5.99807L 19.9994,5.99807 Z M 9,16L 9,13L 10,13L 10,12C 10,10.8954 10.8954,10 12,10C 13.1046,10 14,10.8954 14,12L 14,13L 15,13L 15,16L 9,16 Z M 13,13L 13,12C 13,11.4477 12.5523,11 12,11C 11.4477,11 11,11.4477 11,12L 11,13L 13,13 Z ' })
                )
            );
        }
    }]);

    return MdiFolderOutlineLock;
}(React.Component);

exports.default = MdiFolderOutlineLock;
module.exports = exports['default'];