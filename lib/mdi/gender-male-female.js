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

var MdiGenderMaleFemale = function (_React$Component) {
    _inherits(MdiGenderMaleFemale, _React$Component);

    function MdiGenderMaleFemale() {
        _classCallCheck(this, MdiGenderMaleFemale);

        return _possibleConstructorReturn(this, (MdiGenderMaleFemale.__proto__ || Object.getPrototypeOf(MdiGenderMaleFemale)).apply(this, arguments));
    }

    _createClass(MdiGenderMaleFemale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.5815,4.00001L 14,4.00002L 14,2.00003L 21,2.00002L 21,9.00002L 19,9.00002L 19,5.4099L 15.1699,9.24001C 15.6945,10.031 16,10.9798 16,12C 16,14.419 14.2822,16.4367 12,16.9L 12,19L 14,19L 14,21L 12,21L 12,23L 10,23L 10,21L 8,21L 8,19L 10,19L 10,16.9C 7.71776,16.4367 6,14.419 6,12C 6,9.23858 8.23858,7 11,7C 12.018,7 12.9649,7.30421 13.7548,7.82668L 17.5815,4.00001 Z M 11,9C 9.34314,9 8,10.3432 8,12C 8,13.6569 9.34314,15 11,15C 12.6568,15 14,13.6569 14,12C 14,10.3432 12.6569,9 11,9 Z ' })
                )
            );
        }
    }]);

    return MdiGenderMaleFemale;
}(React.Component);

exports.default = MdiGenderMaleFemale;
module.exports = exports['default'];