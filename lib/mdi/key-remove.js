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

var MdiKeyRemove = function (_React$Component) {
    _inherits(MdiKeyRemove, _React$Component);

    function MdiKeyRemove() {
        _classCallCheck(this, MdiKeyRemove);

        return _possibleConstructorReturn(this, (MdiKeyRemove.__proto__ || Object.getPrototypeOf(MdiKeyRemove)).apply(this, arguments));
    }

    _createClass(MdiKeyRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6.5,3.00001C 8.45932,3.00001 10.1262,4.25221 10.7439,6L 22,6L 22,9L 18,9L 18,12L 15,12L 15,9L 10.7439,9C 10.1262,10.7478 8.45933,12 6.5,12C 4.01472,12 2,9.98528 2,7.5C 2,5.01472 4.01472,3.00001 6.5,3.00001 Z M 6.49999,6.00001C 5.67156,6.00001 4.99999,6.67159 4.99999,7.50001C 4.99999,8.32844 5.67156,9.00001 6.49999,9.00001C 7.32842,9.00001 7.99999,8.32844 7.99999,7.50001C 7.99999,6.67159 7.32842,6.00001 6.49999,6.00001 Z M 14.59,14L 16,15.41L 13.41,18L 16,20.59L 14.59,22L 12,19.41L 9.41,22L 8,20.59L 10.59,18L 8,15.41L 9.41,14L 12,16.59L 14.59,14 Z ' })
                )
            );
        }
    }]);

    return MdiKeyRemove;
}(React.Component);

exports.default = MdiKeyRemove;
module.exports = exports['default'];