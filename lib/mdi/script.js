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

var MdiScript = function (_React$Component) {
    _inherits(MdiScript, _React$Component);

    function MdiScript() {
        _classCallCheck(this, MdiScript);

        return _possibleConstructorReturn(this, (MdiScript.__proto__ || Object.getPrototypeOf(MdiScript)).apply(this, arguments));
    }

    _createClass(MdiScript, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14,20C 15.1046,20 16,19.1046 16,18L 16,5L 9,4.99999C 8.44771,5 8,5.44771 8,5.99999L 8,16L 5,16L 5,5.00001C 5,3.34316 6.34319,2.00001 8.00004,2.00001L 19,2.00001C 20.6568,2.00001 22,3.34316 22,5.00001L 22,6L 18,6L 18,18L 18,19C 18,20.6569 16.6568,22 15,22L 5,22C 3.34315,22 2,20.6569 2,19L 2,18L 12,18C 12,19.1046 12.8954,20 14,20 Z ' })
                )
            );
        }
    }]);

    return MdiScript;
}(React.Component);

exports.default = MdiScript;
module.exports = exports['default'];