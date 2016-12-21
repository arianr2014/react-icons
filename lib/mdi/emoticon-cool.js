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

var MdiEmoticonCool = function (_React$Component) {
    _inherits(MdiEmoticonCool, _React$Component);

    function MdiEmoticonCool() {
        _classCallCheck(this, MdiEmoticonCool);

        return _possibleConstructorReturn(this, (MdiEmoticonCool.__proto__ || Object.getPrototypeOf(MdiEmoticonCool)).apply(this, arguments));
    }

    _createClass(MdiEmoticonCool, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19,10C 19,11.3807 16.8807,12.5 15.5,12.5C 14.1193,12.5 12.75,11.3807 12.75,10L 11.25,10C 11.25,11.3807 9.88071,12.5 8.5,12.5C 7.11929,12.5 5,11.3807 5,10L 4.25204,10C 4.08751,10.6392 4.00001,11.3094 4.00001,12C 4.00001,16.4183 7.58173,20 12,20C 16.4183,20 20,16.4183 20,12C 20,11.3094 19.9125,10.6392 19.748,10L 19,10 Z M 12,3.99999C 9.03887,3.99999 6.45349,5.60879 5.07026,8L 18.9298,8C 17.5465,5.60879 14.9612,3.99999 12,3.99999 Z M 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2.00001,17.5228 2.00001,12C 2.00001,6.47715 6.47715,2 12,2C 17.5228,2 22,6.47715 22,12 Z M 12,17.2302C 10.2476,17.2302 8.70571,16.509 7.81291,15.4173L 9.23025,14C 9.68255,14.7225 10.7523,15.2302 12,15.2302C 13.2477,15.2302 14.3175,14.7225 14.7698,14L 16.1871,15.4173C 15.2943,16.509 13.7524,17.2302 12,17.2302 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonCool;
}(React.Component);

exports.default = MdiEmoticonCool;
module.exports = exports['default'];