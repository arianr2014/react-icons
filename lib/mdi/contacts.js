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

var MdiContacts = function (_React$Component) {
    _inherits(MdiContacts, _React$Component);

    function MdiContacts() {
        _classCallCheck(this, MdiContacts);

        return _possibleConstructorReturn(this, (MdiContacts.__proto__ || Object.getPrototypeOf(MdiContacts)).apply(this, arguments));
    }

    _createClass(MdiContacts, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20,0L 4,0L 4,2L 20,2L 20,0 Z M 4,24L 20,24L 20,22L 4,22L 4,24 Z M 20,4L 4,4C 2.9,4 2,4.9 2,6L 2,18C 2,19.1 2.9,20 4,20L 20,20C 21.1,20 22,19.1 22,18L 22,6C 22,4.9 21.1,4 20,4 Z M 12,6.75C 13.24,6.75 14.25,7.76 14.25,9C 14.25,10.24 13.24,11.25 12,11.25C 10.76,11.25 9.75,10.24 9.75,9C 9.75,7.76 10.76,6.75 12,6.75 Z M 17,17L 7,17L 7,15.5C 7,13.83 10.33,13 12,13C 13.67,13 17,13.83 17,15.5L 17,17 Z ' })
                )
            );
        }
    }]);

    return MdiContacts;
}(React.Component);

exports.default = MdiContacts;
module.exports = exports['default'];