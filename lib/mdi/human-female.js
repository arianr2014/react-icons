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

var MdiHumanFemale = function (_React$Component) {
    _inherits(MdiHumanFemale, _React$Component);

    function MdiHumanFemale() {
        _classCallCheck(this, MdiHumanFemale);

        return _possibleConstructorReturn(this, (MdiHumanFemale.__proto__ || Object.getPrototypeOf(MdiHumanFemale)).apply(this, arguments));
    }

    _createClass(MdiHumanFemale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,2.00001C 13.1046,2.00001 14,2.89544 14,4.00001C 14,5.10458 13.1046,6.00001 12,6.00001C 10.8954,6.00001 10,5.10458 10,4.00001C 10,2.89544 10.8954,2.00001 12,2.00001 Z M 10.5,22L 10.5,16L 7.5,16L 10.0878,8.41201C 10.3389,7.5944 11.1001,7 12,7C 12.8999,7 13.661,7.59439 13.9122,8.412L 16.5,16L 13.5,16L 13.5,22L 10.5,22 Z ' })
                )
            );
        }
    }]);

    return MdiHumanFemale;
}(React.Component);

exports.default = MdiHumanFemale;
module.exports = exports['default'];