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

var MdiFormatListBulleted = function (_React$Component) {
    _inherits(MdiFormatListBulleted, _React$Component);

    function MdiFormatListBulleted() {
        _classCallCheck(this, MdiFormatListBulleted);

        return _possibleConstructorReturn(this, (MdiFormatListBulleted.__proto__ || Object.getPrototypeOf(MdiFormatListBulleted)).apply(this, arguments));
    }

    _createClass(MdiFormatListBulleted, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7,5L 21,5L 21,7L 7,7L 7,5 Z M 7,13L 7,11L 21,11L 21,13L 7,13 Z M 4,4.50001C 4.83,4.50001 5.5,5.16993 5.5,6.00001C 5.5,6.83008 4.83,7.50001 4,7.50001C 3.17,7.50001 2.5,6.83008 2.5,6.00001C 2.5,5.16993 3.17,4.50001 4,4.50001 Z M 4,10.5C 4.83,10.5 5.5,11.17 5.5,12C 5.5,12.83 4.83,13.5 4,13.5C 3.17,13.5 2.5,12.83 2.5,12C 2.5,11.17 3.17,10.5 4,10.5 Z M 7,19L 7,17L 21,17L 21,19L 7,19 Z M 4,16.5C 4.83,16.5 5.5,17.17 5.5,18C 5.5,18.83 4.83,19.5 4,19.5C 3.17,19.5 2.5,18.83 2.5,18C 2.5,17.17 3.17,16.5 4,16.5 Z ' })
                )
            );
        }
    }]);

    return MdiFormatListBulleted;
}(React.Component);

exports.default = MdiFormatListBulleted;
module.exports = exports['default'];