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

var MdiCodeLessThan = function (_React$Component) {
    _inherits(MdiCodeLessThan, _React$Component);

    function MdiCodeLessThan() {
        _classCallCheck(this, MdiCodeLessThan);

        return _possibleConstructorReturn(this, (MdiCodeLessThan.__proto__ || Object.getPrototypeOf(MdiCodeLessThan)).apply(this, arguments));
    }

    _createClass(MdiCodeLessThan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 13.5918,7.40625L 8.99414,12.002L 13.5918,16.5977L 15.0059,15.1836L 11.8223,12.002L 15.0059,8.82031M 19,3C 20.106,3 21,3.896 21,5L 21,19C 21,20.104 20.106,21 19,21L 5,21C 3.897,21 3,20.104 3,19L 3,5C 3,3.896 3.897,3 5,3L 19,3 Z ' })
                )
            );
        }
    }]);

    return MdiCodeLessThan;
}(React.Component);

exports.default = MdiCodeLessThan;
module.exports = exports['default'];