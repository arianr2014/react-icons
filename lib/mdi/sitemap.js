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

var MdiSitemap = function (_React$Component) {
    _inherits(MdiSitemap, _React$Component);

    function MdiSitemap() {
        _classCallCheck(this, MdiSitemap);

        return _possibleConstructorReturn(this, (MdiSitemap.__proto__ || Object.getPrototypeOf(MdiSitemap)).apply(this, arguments));
    }

    _createClass(MdiSitemap, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 9,2L 9,8L 11,8L 11,11L 5,11C 3.892,11 3,11.892 3,13L 3,16L 1,16L 1,22L 7,22L 7,16L 5,16L 5,13L 11,13L 11,16L 9,16L 9,22L 15,22L 15,16L 13,16L 13,13L 19,13L 19,16L 17,16L 17,22L 23,22L 23,16L 21,16L 21,13C 21,11.892 20.108,11 19,11L 13,11L 13,8L 15,8L 15,2L 9,2 Z ' })
                )
            );
        }
    }]);

    return MdiSitemap;
}(React.Component);

exports.default = MdiSitemap;
module.exports = exports['default'];