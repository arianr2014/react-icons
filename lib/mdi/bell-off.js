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

var MdiBellOff = function (_React$Component) {
    _inherits(MdiBellOff, _React$Component);

    function MdiBellOff() {
        _classCallCheck(this, MdiBellOff);

        return _possibleConstructorReturn(this, (MdiBellOff.__proto__ || Object.getPrototypeOf(MdiBellOff)).apply(this, arguments));
    }

    _createClass(MdiBellOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 14,20 Z M 19.7379,21.5663L 17.1716,19L 3,19L 6,16L 6,10C 6,9.34584 6.10469,8.71611 6.29824,8.12667L 3.47443,5.30287L 4.88864,3.88865L 7.28676,6.28676L 21.1521,20.1521L 19.7379,21.5663 Z M 11,4.08298L 11,3.00003C 11,2.44775 11.4477,2.00004 12,2.00004C 12.5523,2.00004 13,2.44775 13,3.00003L 13,4.08298C 15.8377,4.55905 18,7.02702 18,10L 18,14.1716L 8.77071,4.94229C 9.43581,4.51675 10.1904,4.21881 11,4.08298 Z ' })
                )
            );
        }
    }]);

    return MdiBellOff;
}(React.Component);

exports.default = MdiBellOff;
module.exports = exports['default'];