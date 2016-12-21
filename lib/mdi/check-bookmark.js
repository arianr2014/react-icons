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

var MdiCheckBookmark = function (_React$Component) {
    _inherits(MdiCheckBookmark, _React$Component);

    function MdiCheckBookmark() {
        _classCallCheck(this, MdiCheckBookmark);

        return _possibleConstructorReturn(this, (MdiCheckBookmark.__proto__ || Object.getPrototypeOf(MdiCheckBookmark)).apply(this, arguments));
    }

    _createClass(MdiCheckBookmark, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.99999,1.00006L 19,1.00006C 20.1045,1.00006 21,1.89549 21,3.00006L 21,16C 21,16.7108 20.6292,17.335 20.0704,17.6897L 12,23L 3.92884,17.6893C 3.37051,17.3345 3.00002,16.7105 3.00002,16L 2.99999,3.00006C 2.99999,1.89549 3.89542,1.00006 4.99999,1.00006 Z M 10,16L 19,7L 17.5858,5.58579L 10,13.1716L 6.41421,9.58579L 5,11L 10,16 Z ' })
                )
            );
        }
    }]);

    return MdiCheckBookmark;
}(React.Component);

exports.default = MdiCheckBookmark;
module.exports = exports['default'];