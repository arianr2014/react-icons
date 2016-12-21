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

var MdiPackageDown = function (_React$Component) {
    _inherits(MdiPackageDown, _React$Component);

    function MdiPackageDown() {
        _classCallCheck(this, MdiPackageDown);

        return _possibleConstructorReturn(this, (MdiPackageDown.__proto__ || Object.getPrototypeOf(MdiPackageDown)).apply(this, arguments));
    }

    _createClass(MdiPackageDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.12,5L 5.93,4L 17.93,4L 18.87,5M 12,17.5L 6.5,12L 10,12L 10,10L 14,10L 14,12L 17.5,12L 12,17.5 Z M 20.54,5.23L 19.15,3.55C 18.88,3.21 18.47,3 18,3L 6,3C 5.53,3 5.12,3.21 4.84,3.55L 3.46,5.23C 3.17,5.57 3,6.02 3,6.5L 3,19C 3,20.1 3.9,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,6.5C 21,6.02 20.8301,5.57 20.54,5.23 Z ' })
                )
            );
        }
    }]);

    return MdiPackageDown;
}(React.Component);

exports.default = MdiPackageDown;
module.exports = exports['default'];