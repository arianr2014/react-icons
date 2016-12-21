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

var MdiChevronDoubleUp = function (_React$Component) {
    _inherits(MdiChevronDoubleUp, _React$Component);

    function MdiChevronDoubleUp() {
        _classCallCheck(this, MdiChevronDoubleUp);

        return _possibleConstructorReturn(this, (MdiChevronDoubleUp.__proto__ || Object.getPrototypeOf(MdiChevronDoubleUp)).apply(this, arguments));
    }

    _createClass(MdiChevronDoubleUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.41398,18.414L 6,17L 12,11L 18,17L 16.586,18.414L 12,13.828L 7.41398,18.414 Z M 7.41398,12.414L 6,11L 12,5.00001L 18,11L 16.586,12.414L 12,7.82801L 7.41398,12.414 Z ' })
                )
            );
        }
    }]);

    return MdiChevronDoubleUp;
}(React.Component);

exports.default = MdiChevronDoubleUp;
module.exports = exports['default'];