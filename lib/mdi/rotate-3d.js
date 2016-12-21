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

var MdiRotate3d = function (_React$Component) {
    _inherits(MdiRotate3d, _React$Component);

    function MdiRotate3d() {
        _classCallCheck(this, MdiRotate3d);

        return _possibleConstructorReturn(this, (MdiRotate3d.__proto__ || Object.getPrototypeOf(MdiRotate3d)).apply(this, arguments));
    }

    _createClass(MdiRotate3d, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,5C 16.9706,5 21,7.68629 21,11C 21,12.6803 19.964,14.1992 18.2946,15.2884C 19.3629,14.4172 20,13.3188 20,12.125C 20,9.29454 16.4183,7 12,7L 12,10L 8,6L 12,2L 12,5 Z M 12,19C 7.02943,19 3,16.3137 3,13C 3,11.3197 4.03602,9.80081 5.70542,8.7116C 4.63712,9.58278 4,10.6812 4,11.875C 4,14.7055 7.58172,17 12,17L 12,14L 16,18L 12,22L 12,19 Z ' })
                )
            );
        }
    }]);

    return MdiRotate3d;
}(React.Component);

exports.default = MdiRotate3d;
module.exports = exports['default'];