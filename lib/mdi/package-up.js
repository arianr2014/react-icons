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

var MdiPackageUp = function (_React$Component) {
    _inherits(MdiPackageUp, _React$Component);

    function MdiPackageUp() {
        _classCallCheck(this, MdiPackageUp);

        return _possibleConstructorReturn(this, (MdiPackageUp.__proto__ || Object.getPrototypeOf(MdiPackageUp)).apply(this, arguments));
    }

    _createClass(MdiPackageUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 20.54,5.23C 20.83,5.57 21,6.02 21,6.5L 21,19C 21,20.1 20.1,21 19,21L 5,21C 3.9,21 3,20.1 3,19L 3,6.5C 3,6.02 3.17,5.57 3.46,5.23L 4.84,3.55C 5.12,3.21 5.53,3 6,3L 18,3C 18.47,3 18.88,3.21 19.15,3.55L 20.54,5.23 Z M 5.12,5.00001L 18.87,5.00001L 17.93,4.00001L 5.93,4.00001L 5.12,5.00001 Z M 12,9.5L 6.5,15L 10,15L 10,17L 14,17L 14,15L 17.5,15L 12,9.5 Z ' })
                )
            );
        }
    }]);

    return MdiPackageUp;
}(React.Component);

exports.default = MdiPackageUp;
module.exports = exports['default'];