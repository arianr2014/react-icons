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

var MdiTextToSpeechOff = function (_React$Component) {
    _inherits(MdiTextToSpeechOff, _React$Component);

    function MdiTextToSpeechOff() {
        _classCallCheck(this, MdiTextToSpeechOff);

        return _possibleConstructorReturn(this, (MdiTextToSpeechOff.__proto__ || Object.getPrototypeOf(MdiTextToSpeechOff)).apply(this, arguments));
    }

    _createClass(MdiTextToSpeechOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 13.3836,16.652C 12.5458,18.3494 10.929,19.5934 9,19.917L 9,22L 7,22L 7,19.917C 4.16229,19.441 2.00001,16.973 2.00001,14L 4.00001,14C 4.00001,16.2092 5.79086,18 8,18C 9.82331,18 11.3617,16.7801 11.8434,15.1119L 10,13.2685L 10,14C 10,15.1046 9.10458,16 8.00001,16C 6.89544,16 6.00001,15.1046 6.00001,14L 6.00001,9.26848L 2,5.26848 Z M 21.4142,9.41422L 17.1716,13.6569L 18.176,10L 14,10C 12.8954,10 12,9.10457 12,8L 12,4.00002C 12,2.89545 12.8954,2.00003 14,2.00003L 20,2.00003C 21.1046,2.00003 22,2.89545 22,4.00002L 22,8C 22,8.55229 21.7761,9.05229 21.4142,9.41422 Z ' })
                )
            );
        }
    }]);

    return MdiTextToSpeechOff;
}(React.Component);

exports.default = MdiTextToSpeechOff;
module.exports = exports['default'];