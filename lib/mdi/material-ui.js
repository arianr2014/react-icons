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

var MdiMaterialUi = function (_React$Component) {
    _inherits(MdiMaterialUi, _React$Component);

    function MdiMaterialUi() {
        _classCallCheck(this, MdiMaterialUi);

        return _possibleConstructorReturn(this, (MdiMaterialUi.__proto__ || Object.getPrototypeOf(MdiMaterialUi)).apply(this, arguments));
    }

    _createClass(MdiMaterialUi, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8,16.6132L 8,15.3715L 14,11.9074L 14,7.23205L 9,10.1188L 4,7.23204L 4,13L 3,13.5774L 2,13L 2,5L 3.06699,4.38397L 9,7.8094L 12.933,5.53867L 14.933,4.38397L 16,5L 16,13.0621L 10.9246,15.9924L 14.9748,18.3308L 20,15.4295L 20,11L 21,10.4227L 22,11L 22,16.5842L 14.9748,20.6402L 8,16.6132 Z M 22,9.75001L 21,10.3274L 20,9.75001L 20,8.57736L 21,8.00001L 22,8.57736L 22,9.75001 Z ' })
                )
            );
        }
    }]);

    return MdiMaterialUi;
}(React.Component);

exports.default = MdiMaterialUi;
module.exports = exports['default'];