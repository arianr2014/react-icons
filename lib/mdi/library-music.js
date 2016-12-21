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

var MdiLibraryMusic = function (_React$Component) {
    _inherits(MdiLibraryMusic, _React$Component);

    function MdiLibraryMusic() {
        _classCallCheck(this, MdiLibraryMusic);

        return _possibleConstructorReturn(this, (MdiLibraryMusic.__proto__ || Object.getPrototypeOf(MdiLibraryMusic)).apply(this, arguments));
    }

    _createClass(MdiLibraryMusic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 4,6L 2,6L 2,20C 2,21.1 2.9,22 4,22L 18,22L 18,20L 4,20M 18,7L 15,7L 15,12.5C 15,13.88 13.88,15 12.5,15C 11.12,15 10,13.88 10,12.5C 10,11.12 11.12,10 12.5,10C 13.07,10 13.58,10.19 14,10.51L 14,5L 18,5M 20,2L 8,2C 6.9,2 6,2.9 6,4L 6,16C 6,17.1 6.9,18 8,18L 20,18C 21.1,18 22,17.1 22,16L 22,4C 22,2.9 21.1,2 20,2 Z ' })
                )
            );
        }
    }]);

    return MdiLibraryMusic;
}(React.Component);

exports.default = MdiLibraryMusic;
module.exports = exports['default'];