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

var MdiRoadVariant = function (_React$Component) {
    _inherits(MdiRoadVariant, _React$Component);

    function MdiRoadVariant() {
        _classCallCheck(this, MdiRoadVariant);

        return _possibleConstructorReturn(this, (MdiRoadVariant.__proto__ || Object.getPrototypeOf(MdiRoadVariant)).apply(this, arguments));
    }

    _createClass(MdiRoadVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18.1,4.8C 18,4.3 17.6,4 17.1,4L 13,4L 13.2,7L 10.8,7L 11,4L 6.8,4C 6.3,4 5.9,4.4 5.8,4.8L 3.1,18.8C 3,19.4 3.5,20 4.1,20L 10,20L 10.3,15L 13.7,15L 14,20L 19.8,20C 20.4,20 20.9,19.4 20.8,18.8L 18.1,4.8 Z M 10.4,13L 10.6,9L 13.2,9L 13.4,13L 10.4,13 Z ' })
                )
            );
        }
    }]);

    return MdiRoadVariant;
}(React.Component);

exports.default = MdiRoadVariant;
module.exports = exports['default'];