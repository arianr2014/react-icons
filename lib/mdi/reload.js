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

var MdiReload = function (_React$Component) {
    _inherits(MdiReload, _React$Component);

    function MdiReload() {
        _classCallCheck(this, MdiReload);

        return _possibleConstructorReturn(this, (MdiReload.__proto__ || Object.getPrototypeOf(MdiReload)).apply(this, arguments));
    }

    _createClass(MdiReload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9918,11.9965L 22.3152,11.9965L 17.3654,16.9462L 12.4157,11.9965L 16.9694,11.9965C 16.9765,10.462 16.4179,8.92762 15.2441,7.75382C 12.9036,5.4133 9.09935,5.4133 6.75882,7.75382C 4.4183,10.0943 4.4183,13.8986 6.75883,16.2391C 8.60437,18.0846 11.3551,18.4736 13.5824,17.4058L 15.0532,18.8766C 11.9842,20.6867 7.98212,20.2908 5.34461,17.6533C 2.2192,14.5279 2.22628,9.47209 5.35168,6.34668C 8.47704,3.22133 13.5329,3.2142 16.6583,6.33961C 18.221,7.90231 18.9918,9.94585 18.9918,11.9965 Z ' })
                )
            );
        }
    }]);

    return MdiReload;
}(React.Component);

exports.default = MdiReload;
module.exports = exports['default'];