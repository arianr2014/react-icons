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

var MdiAccountSearch = function (_React$Component) {
    _inherits(MdiAccountSearch, _React$Component);

    function MdiAccountSearch() {
        _classCallCheck(this, MdiAccountSearch);

        return _possibleConstructorReturn(this, (MdiAccountSearch.__proto__ || Object.getPrototypeOf(MdiAccountSearch)).apply(this, arguments));
    }

    _createClass(MdiAccountSearch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 9.5,3C 13.09,3 16,5.91 16,9.5C 16,11.11 15.4097,12.5905 14.4297,13.7305L 14.7109,14L 15.5,14L 20.4902,19L 19,20.4902L 14,15.5L 14,14.7109L 13.7305,14.4297C 12.5905,15.4097 11.11,16 9.5,16C 5.91,16 3,13.09 3,9.5C 3,5.91 5.91,3 9.5,3 Z M 9.5,14C 11.1104,14 12.5232,13.1541 13.3184,11.8824C 12.5232,10.7519 11.1104,10 9.5,10C 7.8896,10 6.47678,10.7519 5.68164,11.8824C 6.47678,13.1541 7.8896,14 9.5,14 Z M 9.5,5C 8.5335,5 7.75,5.7835 7.75,6.75C 7.75,7.7165 8.5335,8.5 9.5,8.5C 10.4665,8.5 11.25,7.7165 11.25,6.75C 11.25,5.7835 10.4665,5 9.5,5 Z ' })
                )
            );
        }
    }]);

    return MdiAccountSearch;
}(React.Component);

exports.default = MdiAccountSearch;
module.exports = exports['default'];