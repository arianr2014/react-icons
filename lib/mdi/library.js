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

var MdiLibrary = function (_React$Component) {
    _inherits(MdiLibrary, _React$Component);

    function MdiLibrary() {
        _classCallCheck(this, MdiLibrary);

        return _possibleConstructorReturn(this, (MdiLibrary.__proto__ || Object.getPrototypeOf(MdiLibrary)).apply(this, arguments));
    }

    _createClass(MdiLibrary, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,7.99807C 13.6564,7.99807 14.9994,6.65507 14.9994,4.99807C 14.9994,3.34107 13.6564,1.99807 11.9994,1.99807C 10.3424,1.99807 8.99939,3.34107 8.99939,4.99807C 8.99939,6.65507 10.3424,7.99807 11.9994,7.99807 Z M 11.9994,11.5431C 9.63538,9.35007 6.47839,7.99807 2.99939,7.99807L 2.99939,18.9981C 6.47839,18.9981 9.63538,20.3501 11.9994,22.5431C 14.3634,20.3501 17.5204,18.9981 20.9994,18.9981L 20.9994,7.99807C 17.5204,7.99807 14.3634,9.35007 11.9994,11.5431 Z ' })
                )
            );
        }
    }]);

    return MdiLibrary;
}(React.Component);

exports.default = MdiLibrary;
module.exports = exports['default'];