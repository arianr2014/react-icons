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

var MdiFlaskOutline = function (_React$Component) {
    _inherits(MdiFlaskOutline, _React$Component);

    function MdiFlaskOutline() {
        _classCallCheck(this, MdiFlaskOutline);

        return _possibleConstructorReturn(this, (MdiFlaskOutline.__proto__ || Object.getPrototypeOf(MdiFlaskOutline)).apply(this, arguments));
    }

    _createClass(MdiFlaskOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,19C 5,19.5523 5.44772,20 6,20L 18,20C 18.5523,20 19,19.5523 19,19C 19,18.7862 18.9329,18.5881 18.8186,18.4255L 13,8.34736L 13,3.99999L 11,4L 11,8.34737L 5.18138,18.4255C 5.0671,18.5881 5,18.7862 5,19 Z M 6,22C 4.34315,22 3,20.6569 3,19C 3,18.3969 3.17796,17.8354 3.48423,17.3651L 9,7.81148L 9,6.00001C 8.44771,6.00001 8,5.55229 8,5.00001L 8,4.00001C 8,2.89544 8.89543,2.00002 10,2.00002L 14,2.00001C 15.1046,2.00001 16,2.89543 16,4.00001L 16,5C 16,5.55229 15.5523,6 15,6L 15,7.81147L 20.5158,17.3651C 20.822,17.8354 21,18.3969 21,19C 21,20.6568 19.6569,22 18,22L 6,22 Z M 13,16L 14.3397,14.6603L 16.2679,18L 7.73205,18L 10.3923,13.3923L 13,16 Z M 12.5,12C 12.7761,12 13,12.2239 13,12.5C 13,12.7761 12.7761,13 12.5,13C 12.2239,13 12,12.7761 12,12.5C 12,12.2239 12.2239,12 12.5,12 Z ' })
                )
            );
        }
    }]);

    return MdiFlaskOutline;
}(React.Component);

exports.default = MdiFlaskOutline;
module.exports = exports['default'];