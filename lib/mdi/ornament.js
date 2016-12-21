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

var MdiOrnament = function (_React$Component) {
    _inherits(MdiOrnament, _React$Component);

    function MdiOrnament() {
        _classCallCheck(this, MdiOrnament);

        return _possibleConstructorReturn(this, (MdiOrnament.__proto__ || Object.getPrototypeOf(MdiOrnament)).apply(this, arguments));
    }

    _createClass(MdiOrnament, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,1.00002C 13.6569,1.00002 15,2.34316 15,4.00001L 15,5C 15.5523,5 16,5.44772 16,6L 16,7.07026C 18.3912,8.4535 20,11.0389 20,14C 20,18.4183 16.4183,22 12,22C 7.58172,22 4,18.4183 4,14C 4,11.0389 5.60879,8.4535 8,7.07026L 8,6C 8,5.44772 8.44771,5 9,5L 9,4.00001C 9,2.34316 10.3431,1.00002 12,1.00002 Z M 12,3.00002C 11.4477,3.00002 11,3.44775 11,4.00002L 11,5L 13,5L 13,4C 13,3.44773 12.5523,3.00002 12,3.00002 Z M 12,8.00001C 10.223,8.00001 8.62642,8.77251 7.52778,10L 16.4722,10C 15.3736,8.77251 13.777,8.00001 12,8.00001 Z M 6.3414,16L 7.58578,16L 6.01512,14.4293C 6.0538,14.9764 6.16582,15.5032 6.3414,16 Z M 12.5858,16L 8.58579,12L 6.41421,12L 10.4142,16L 12.5858,16 Z M 17.6586,12L 16.4142,12L 17.9849,13.5707C 17.9462,13.0236 17.8342,12.4968 17.6586,12 Z M 11.4142,12L 15.4142,16L 17.5858,16L 13.5858,12L 11.4142,12 Z M 12,20C 13.777,20 15.3736,19.2275 16.4722,18L 7.52778,18C 8.62642,19.2275 10.223,20 12,20 Z ' })
                )
            );
        }
    }]);

    return MdiOrnament;
}(React.Component);

exports.default = MdiOrnament;
module.exports = exports['default'];