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

var MdiHospitalBuilding = function (_React$Component) {
    _inherits(MdiHospitalBuilding, _React$Component);

    function MdiHospitalBuilding() {
        _classCallCheck(this, MdiHospitalBuilding);

        return _possibleConstructorReturn(this, (MdiHospitalBuilding.__proto__ || Object.getPrototypeOf(MdiHospitalBuilding)).apply(this, arguments));
    }

    _createClass(MdiHospitalBuilding, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,22L 2,7C 2,6.44772 2.44772,6 3,6L 7,6L 7,2L 17,2L 17,6L 21,6C 21.5523,6 22,6.44772 22,7L 22,22L 14,22L 14,17L 10,17L 10,22L 2,22 Z M 8.99999,4.00001L 8.99999,10L 11,10L 11,8.00001L 13,8.00001L 13,10L 15,10L 15,4.00001L 13,4.00001L 13,6.00001L 11,6.00001L 11,4.00001L 8.99999,4.00001 Z M 4,20L 7.99999,20L 7.99999,17L 4,17L 4,20 Z M 4,15L 8,15L 8,12L 4,12L 4,15 Z M 16,20L 20,20L 20,17L 16,17L 16,20 Z M 16,15L 20,15L 20,12L 16,12L 16,15 Z M 10,15L 14,15L 14,12L 10,12L 10,15 Z ' })
                )
            );
        }
    }]);

    return MdiHospitalBuilding;
}(React.Component);

exports.default = MdiHospitalBuilding;
module.exports = exports['default'];