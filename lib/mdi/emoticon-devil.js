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

var MdiEmoticonDevil = function (_React$Component) {
    _inherits(MdiEmoticonDevil, _React$Component);

    function MdiEmoticonDevil() {
        _classCallCheck(this, MdiEmoticonDevil);

        return _possibleConstructorReturn(this, (MdiEmoticonDevil.__proto__ || Object.getPrototypeOf(MdiEmoticonDevil)).apply(this, arguments));
    }

    _createClass(MdiEmoticonDevil, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1.50075,2.08664C 2.40331,2.97878 3.86674,3.72943 5.68573,4.24524C 7.40745,2.84165 9.60544,2.00001 12,2.00001C 14.3945,2.00001 16.5925,2.84165 18.3143,4.24525C 20.1332,3.72944 21.5967,2.97879 22.4992,2.08665C 22.471,3.71791 21.6456,5.21488 20.2831,6.39554C 21.3669,7.99417 22,9.92315 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,9.92315 2.63312,7.99417 3.71689,6.39553C 2.3544,5.21487 1.52902,3.7179 1.50075,2.08664 Z M 20,12C 20,7.58172 16.4183,4 12,4C 7.58172,4 4,7.58172 4,12C 4,16.4183 7.58172,20 12,20C 16.4183,20 20,16.4183 20,12 Z M 10.5,10C 10.5,10.8 9.79999,11.5 8.99999,11.5C 8.19999,11.5 7.49999,10.8 7.49999,10L 7.49999,8.50001L 10.5,10 Z M 16.5,10C 16.5,10.8 15.8,11.5 15,11.5C 14.2,11.5 13.5,10.8 13.5,10L 16.5,8.50001L 16.5,10 Z M 12,17.2303C 10.2476,17.2303 8.7057,16.509 7.81291,15.4173L 9.23025,14C 9.68254,14.7225 10.7523,15.2302 12,15.2302C 13.2477,15.2302 14.3175,14.7225 14.7697,14L 16.1871,15.4173C 15.2943,16.509 13.7524,17.2303 12,17.2303 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonDevil;
}(React.Component);

exports.default = MdiEmoticonDevil;
module.exports = exports['default'];