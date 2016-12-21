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

var MdiSignCaution = function (_React$Component) {
    _inherits(MdiSignCaution, _React$Component);

    function MdiSignCaution() {
        _classCallCheck(this, MdiSignCaution);

        return _possibleConstructorReturn(this, (MdiSignCaution.__proto__ || Object.getPrototypeOf(MdiSignCaution)).apply(this, arguments));
    }

    _createClass(MdiSignCaution, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'round', d: 'M 2,3L 22,3L 22,13L 18,13L 18,21L 16,21L 16,13L 8,13L 8,21L 6,21L 6,13L 2,13L 2,3 Z M 18.9749,11L 20,9.97488L 20,7.14646L 16.1464,11L 18.9749,11 Z M 13.318,11L 19.318,5.00001L 16.4896,5.00001L 10.4896,11L 13.318,11 Z M 7.66117,11L 13.6612,5.00001L 10.8327,5L 4.83274,11L 7.66117,11 Z M 5.17588,5L 4,6.17589L 4,9.00432L 8.00431,5.00001L 5.17588,5 Z ' })
                )
            );
        }
    }]);

    return MdiSignCaution;
}(React.Component);

exports.default = MdiSignCaution;
module.exports = exports['default'];