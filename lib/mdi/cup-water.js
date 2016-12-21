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

var MdiCupWater = function (_React$Component) {
    _inherits(MdiCupWater, _React$Component);

    function MdiCupWater() {
        _classCallCheck(this, MdiCupWater);

        return _possibleConstructorReturn(this, (MdiCupWater.__proto__ || Object.getPrototypeOf(MdiCupWater)).apply(this, arguments));
    }

    _createClass(MdiCupWater, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.3246,7.99807L 5.67462,7.99807L 5.23262,3.99807L 18.7666,3.99807M 11.9996,18.9981C 10.3426,18.9981 8.99962,17.6551 8.99962,15.9981C 8.99962,13.9981 11.9996,10.5981 11.9996,10.5981C 11.9996,10.5981 14.9996,13.9981 14.9996,15.9981C 14.9996,17.6551 13.6566,18.9981 11.9996,18.9981 Z M 2.99962,1.99807L 5.01363,20.2311C 5.12862,21.2261 5.97362,21.9981 6.99962,21.9981L 16.9996,21.9981C 18.0246,21.9981 18.8696,21.2261 18.9856,20.2311L 20.9996,1.99807L 2.99962,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCupWater;
}(React.Component);

exports.default = MdiCupWater;
module.exports = exports['default'];