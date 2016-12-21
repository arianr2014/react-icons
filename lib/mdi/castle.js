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

var MdiCastle = function (_React$Component) {
    _inherits(MdiCastle, _React$Component);

    function MdiCastle() {
        _classCallCheck(this, MdiCastle);

        return _possibleConstructorReturn(this, (MdiCastle.__proto__ || Object.getPrototypeOf(MdiCastle)).apply(this, arguments));
    }

    _createClass(MdiCastle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2,13L 4,13L 4,15L 6,15L 6,13L 8,13L 8,15L 10,15L 10,13L 12,13L 12,15L 14,15L 14,10L 17,7L 17,1.00001L 19,1.00001L 23,3L 19,5L 19,7L 22,10L 22,22L 11,22L 11,19C 11,17.8954 10.1046,17 9,17C 7.89543,17 7,17.8954 7,19L 7,22L 2,22L 2,13 Z M 18,10C 17.4477,10 17,10.5373 17,11.2L 17,13L 19,13L 19,11.2C 19,10.5373 18.5523,10 18,10 Z ' })
                )
            );
        }
    }]);

    return MdiCastle;
}(React.Component);

exports.default = MdiCastle;
module.exports = exports['default'];