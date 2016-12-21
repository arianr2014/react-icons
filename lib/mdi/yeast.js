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

var MdiYeast = function (_React$Component) {
    _inherits(MdiYeast, _React$Component);

    function MdiYeast() {
        _classCallCheck(this, MdiYeast);

        return _possibleConstructorReturn(this, (MdiYeast.__proto__ || Object.getPrototypeOf(MdiYeast)).apply(this, arguments));
    }

    _createClass(MdiYeast, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 18,14C 20.2091,14 22,15.7909 22,18C 22,20.2091 20.2091,22 18,22C 15.7909,22 14,20.2091 14,18L 14.0912,17.1467C 14.0509,16.4451 13.9227,15.8376 13.55,15.4916C 13.3468,15.303 13.0709,15.192 12.7477,15.1318C 11.7921,15.684 10.683,16 9.5,16C 5.91015,16 3,13.0899 3,9.5C 3,5.91015 5.91015,3 9.5,3C 13.0899,3 16,5.91015 16,9.5C 16,10.683 15.684,11.7921 15.1318,12.7477C 15.192,13.0709 15.303,13.3468 15.4916,13.55C 15.8376,13.9227 16.4451,14.0509 17.1467,14.0912L 18,14 Z M 7.5,10C 8.32843,10 9,10.6716 9,11.5C 9,12.3284 8.32843,13 7.5,13C 6.67157,13 6,12.3284 6,11.5C 6,10.6716 6.67157,10 7.5,10 Z M 9.5,5C 7.01472,5 5,7.01472 5,9.5C 5,11.9853 7.01472,14 9.5,14C 11.9853,14 14,11.9853 14,9.5C 14,7.01472 11.9853,5 9.5,5 Z ' })
                )
            );
        }
    }]);

    return MdiYeast;
}(React.Component);

exports.default = MdiYeast;
module.exports = exports['default'];