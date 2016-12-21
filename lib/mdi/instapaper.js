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

var MdiInstapaper = function (_React$Component) {
    _inherits(MdiInstapaper, _React$Component);

    function MdiInstapaper() {
        _classCallCheck(this, MdiInstapaper);

        return _possibleConstructorReturn(this, (MdiInstapaper.__proto__ || Object.getPrototypeOf(MdiInstapaper)).apply(this, arguments));
    }

    _createClass(MdiInstapaper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10,5.00001C 10,4.44772 9.55228,4.00001 9,4.00001L 8,4L 8,2L 16,2L 16,4L 15,4C 14.4477,4 14,4.44772 14,5L 14,19C 14,19.5523 14.4477,20 15,20L 16,20L 16,22L 8,22L 8,20L 9,20C 9.55228,20 10,19.5523 10,19L 10,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiInstapaper;
}(React.Component);

exports.default = MdiInstapaper;
module.exports = exports['default'];