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

var MdiSourceBranch = function (_React$Component) {
    _inherits(MdiSourceBranch, _React$Component);

    function MdiSourceBranch() {
        _classCallCheck(this, MdiSourceBranch);

        return _possibleConstructorReturn(this, (MdiSourceBranch.__proto__ || Object.getPrototypeOf(MdiSourceBranch)).apply(this, arguments));
    }

    _createClass(MdiSourceBranch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13,14C 9.64431,14 8.54075,15.3513 8.17783,16.24C 9.2492,16.6979 10,17.7612 10,19C 10,20.6569 8.65686,22 7,22C 5.34315,22 4,20.6569 4,19C 4,17.6938 4.83481,16.5825 6,16.1707L 6,7.8293C 4.83481,7.41746 4,6.30622 4,5C 4,3.34315 5.34315,2.00001 7,2.00001C 8.65685,2.00001 10,3.34315 10,5C 10,6.30622 9.16519,7.41746 8,7.8293L 8,13.1221C 8.8845,12.4701 10.1602,12 12,12C 14.6714,12 15.5587,10.662 15.8534,9.77309C 14.7654,9.32274 14,8.25076 14,7C 14,5.34315 15.3431,4 17,4C 18.6569,4 20,5.34315 20,7C 20,8.34026 19.1211,9.47524 17.9082,9.86006C 17.6521,11.2898 16.6812,14 13,14 Z M 7,18C 6.44771,18 6,18.4477 6,19C 6,19.5523 6.44771,20 7,20C 7.55228,20 8,19.5523 8,19C 8,18.4477 7.55228,18 7,18 Z M 7,4.00001C 6.44771,4.00001 6,4.44772 6,5.00001C 6,5.55229 6.44771,6.00001 7,6.00001C 7.55228,6.00001 8,5.55229 8,5.00001C 8,4.44772 7.55228,4.00001 7,4.00001 Z M 17,6.00001C 16.4477,6.00001 16,6.44772 16,7C 16,7.55229 16.4477,8 17,8C 17.5523,8 18,7.55229 18,7C 18,6.44772 17.5523,6.00001 17,6.00001 Z ' })
                )
            );
        }
    }]);

    return MdiSourceBranch;
}(React.Component);

exports.default = MdiSourceBranch;
module.exports = exports['default'];