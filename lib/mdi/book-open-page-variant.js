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

var MdiBookOpenPageVariant = function (_React$Component) {
    _inherits(MdiBookOpenPageVariant, _React$Component);

    function MdiBookOpenPageVariant() {
        _classCallCheck(this, MdiBookOpenPageVariant);

        return _possibleConstructorReturn(this, (MdiBookOpenPageVariant.__proto__ || Object.getPrototypeOf(MdiBookOpenPageVariant)).apply(this, arguments));
    }

    _createClass(MdiBookOpenPageVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 19,2L 14,6.5L 14,17.5L 19,13L 19,2 Z M 6.5,5C 4.55,5 2.45,5.4 1,6.5L 1,21.1562C 1,21.4062 1.25,21.6562 1.5,21.6562C 1.6,21.6562 1.65,21.5942 1.75,21.5942C 3.1,20.9442 5.05,20.5005 6.5,20.5005C 8.45,20.5005 10.55,20.9005 12,22.0005C 13.35,21.1505 15.8,20.5005 17.5,20.5005C 19.15,20.5005 20.85,20.813 22.25,21.563C 22.35,21.613 22.4,21.594 22.5,21.594C 22.75,21.594 23,21.344 23,21.094L 23,6.5002C 22.4,6.0503 21.75,5.7502 21,5.5002L 21,7.5002L 21,13.0002L 21,19.0002C 19.9,18.6503 18.7,18.5002 17.5,18.5002C 15.8,18.5002 13.35,19.1503 12,20.0002L 12,13.0002L 12,8.5002L 12,6.5002C 10.55,5.4003 8.45,5.0002 6.5,5.0002L 6.5,5 Z ' })
                )
            );
        }
    }]);

    return MdiBookOpenPageVariant;
}(React.Component);

exports.default = MdiBookOpenPageVariant;
module.exports = exports['default'];