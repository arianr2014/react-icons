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

var MdiKeyChange = function (_React$Component) {
    _inherits(MdiKeyChange, _React$Component);

    function MdiKeyChange() {
        _classCallCheck(this, MdiKeyChange);

        return _possibleConstructorReturn(this, (MdiKeyChange.__proto__ || Object.getPrototypeOf(MdiKeyChange)).apply(this, arguments));
    }

    _createClass(MdiKeyChange, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 6.5,2.00001C 8.45932,2.00001 10.1262,3.25222 10.7439,5L 22,5L 22,8L 18,8L 18,11L 15,11L 15,8L 10.7439,8C 10.1262,9.74779 8.45933,11 6.5,11C 4.01472,11 2,8.98529 2,6.50001C 2,4.01472 4.01472,2.00001 6.5,2.00001 Z M 6.49999,5.00001C 5.67157,5.00001 5,5.67159 5,6.50001C 5,7.32844 5.67157,8.00001 6.49999,8.00001C 7.32842,8.00001 7.99999,7.32844 7.99999,6.50001C 7.99999,5.67159 7.32842,5.00001 6.49999,5.00001 Z M 6.5,13C 8.45932,13 10.1262,14.2522 10.7439,16L 22,16L 22,19L 20,19L 20,22L 18,22L 18,19L 16,19L 16,22L 13,22L 13,19L 10.7439,19C 10.1262,20.7478 8.45932,22 6.5,22C 4.01472,22 2,19.9853 2,17.5C 2,15.0147 4.01472,13 6.5,13 Z M 6.49999,16C 5.67157,16 5,16.6716 5,17.5C 5,18.3284 5.67157,19 6.49999,19C 7.32842,19 7.99999,18.3284 7.99999,17.5C 7.99999,16.6716 7.32842,16 6.49999,16 Z ' })
                )
            );
        }
    }]);

    return MdiKeyChange;
}(React.Component);

exports.default = MdiKeyChange;
module.exports = exports['default'];