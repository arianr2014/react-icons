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

var MdiRepeatOff = function (_React$Component) {
    _inherits(MdiRepeatOff, _React$Component);

    function MdiRepeatOff() {
        _classCallCheck(this, MdiRepeatOff);

        return _possibleConstructorReturn(this, (MdiRepeatOff.__proto__ || Object.getPrototypeOf(MdiRepeatOff)).apply(this, arguments));
    }

    _createClass(MdiRepeatOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 15.7315,19L 7,19L 7,22L 3,18L 7,14L 7,17L 13.7315,17L 7,10.2685L 7,11L 5,11L 5,8.26848L 2,5.26848 Z M 17,13L 19,13L 19,17.1773L 17,15.1773L 17,13 Z M 17,5.00001L 17,2.00001L 21,6.00001L 17,10L 17,7.00001L 8.82269,7.00001L 6.82269,5.00001L 17,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiRepeatOff;
}(React.Component);

exports.default = MdiRepeatOff;
module.exports = exports['default'];