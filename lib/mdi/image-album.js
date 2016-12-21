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

var MdiImageAlbum = function (_React$Component) {
    _inherits(MdiImageAlbum, _React$Component);

    function MdiImageAlbum() {
        _classCallCheck(this, MdiImageAlbum);

        return _possibleConstructorReturn(this, (MdiImageAlbum.__proto__ || Object.getPrototypeOf(MdiImageAlbum)).apply(this, arguments));
    }

    _createClass(MdiImageAlbum, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6,19L 9,15.14L 11.14,17.72L 14.14,13.86L 18,19L 6,19 Z M 6,4L 11,4L 11,12L 8.5,10.5L 6,12M 18,2L 6,2C 4.9,2 4,2.9 4,4L 4,20C 4,21.1 4.9,22 6,22L 18,22C 19.1,22 20,21.1 20,20L 20,4C 20,2.9 19.1,2 18,2 Z ' })
                )
            );
        }
    }]);

    return MdiImageAlbum;
}(React.Component);

exports.default = MdiImageAlbum;
module.exports = exports['default'];