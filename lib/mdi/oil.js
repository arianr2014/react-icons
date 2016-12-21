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

var MdiOil = function (_React$Component) {
    _inherits(MdiOil, _React$Component);

    function MdiOil() {
        _classCallCheck(this, MdiOil);

        return _possibleConstructorReturn(this, (MdiOil.__proto__ || Object.getPrototypeOf(MdiOil)).apply(this, arguments));
    }

    _createClass(MdiOil, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,12.5C 22,12.5 24,14.667 24,16C 24,17.104 23.104,18 22,18C 20.896,18 20,17.104 20,16C 20,14.667 22,12.5 22,12.5 Z M 6,6L 10,6C 10.5523,6 11,6.44772 11,7C 11,7.55229 10.5523,8 10,8L 9,8L 9,10L 11,10C 11.7402,10 12.3865,10.4021 12.7323,10.9998L 19.2372,7.24422L 22.5014,9.12877C 22.9797,9.40491 23.1435,10.0165 22.8674,10.4948C 22.5913,10.9731 21.9797,11.137 21.5014,10.8608L 19.3997,9.64742L 15.7513,15.9667C 15.4104,16.5828 14.7539,17 14,17L 5,17C 3.89543,17 3,16.1046 3,15L 3,12C 3,10.8954 3.89543,10 5,10L 7,10L 7,8L 6,8C 5.44771,8 5,7.55229 5,7C 5,6.44772 5.44771,6 6,6 Z M 5,12L 5,15L 14,15L 16.0622,11.4282L 12.5981,13.4282L 11.689,12L 5,12 Z M 0.378682,9.20711L 2.08579,7.50001C 2.47631,7.10948 3.10948,7.10948 3.5,7.50001C 3.89053,7.89053 3.89053,8.52369 3.5,8.91422L 1.7929,10.6213C 1.40237,11.0118 0.769206,11.0118 0.378682,10.6213C -0.0118421,10.2308 -0.0118421,9.59764 0.378682,9.20711 Z ' })
                )
            );
        }
    }]);

    return MdiOil;
}(React.Component);

exports.default = MdiOil;
module.exports = exports['default'];