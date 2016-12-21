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

var MdiVectorPoint = function (_React$Component) {
    _inherits(MdiVectorPoint, _React$Component);

    function MdiVectorPoint() {
        _classCallCheck(this, MdiVectorPoint);

        return _possibleConstructorReturn(this, (MdiVectorPoint.__proto__ || Object.getPrototypeOf(MdiVectorPoint)).apply(this, arguments));
    }

    _createClass(MdiVectorPoint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,20L 7,22L 12,11L 17,22L 12,20 Z M 8,2.00001L 16,2.00001L 16,5L 22,5L 22,7L 16,7L 16,10L 8,10L 8,7L 2,7L 2,5L 8,5L 8,2.00001 Z M 10,4.00001L 10,8L 14,8L 14,4.00001L 10,4.00001 Z ' })
                )
            );
        }
    }]);

    return MdiVectorPoint;
}(React.Component);

exports.default = MdiVectorPoint;
module.exports = exports['default'];