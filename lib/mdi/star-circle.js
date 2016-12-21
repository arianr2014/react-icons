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

var MdiStarCircle = function (_React$Component) {
    _inherits(MdiStarCircle, _React$Component);

    function MdiStarCircle() {
        _classCallCheck(this, MdiStarCircle);

        return _possibleConstructorReturn(this, (MdiStarCircle.__proto__ || Object.getPrototypeOf(MdiStarCircle)).apply(this, arguments));
    }

    _createClass(MdiStarCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16.23,18L 12,15.45L 7.77,18L 8.89,13.19L 5.16,9.96L 10.08,9.54L 12,5L 13.92,9.53L 18.84,9.95L 15.11,13.18L 16.23,18 Z M 11.99,2C 6.47,2 2,6.48 2,12C 2,17.52 6.47,22 11.99,22C 17.52,22 22,17.52 22,12C 22,6.48 17.52,2 11.99,2 Z ' })
                )
            );
        }
    }]);

    return MdiStarCircle;
}(React.Component);

exports.default = MdiStarCircle;
module.exports = exports['default'];