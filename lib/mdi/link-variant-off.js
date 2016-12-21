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

var MdiLinkVariantOff = function (_React$Component) {
    _inherits(MdiLinkVariantOff, _React$Component);

    function MdiLinkVariantOff() {
        _classCallCheck(this, MdiLinkVariantOff);

        return _possibleConstructorReturn(this, (MdiLinkVariantOff.__proto__ || Object.getPrototypeOf(MdiLinkVariantOff)).apply(this, arguments));
    }

    _createClass(MdiLinkVariantOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 13.9013,17.1698L 11.2929,19.7782C 9.34026,21.7308 6.17444,21.7308 4.22182,19.7782C 2.2692,17.8255 2.2692,14.6597 4.22182,12.7071L 5.70744,11.2215C 5.69913,12.0417 5.83409,12.8631 6.11234,13.645L 5.63601,14.1213C 4.46444,15.2929 4.46444,17.1924 5.63601,18.3639C 6.80758,19.5355 8.70708,19.5355 9.87865,18.3639L 12.4871,15.7555L 10.8783,14.1468C 10.8721,14.3942 10.7745,14.6396 10.5858,14.8284C 10.1952,15.2189 9.56207,15.2189 9.17154,14.8284C 8.11689,13.7737 7.63188,12.3652 7.71651,10.985L 2,5.26848 Z M 12.707,4.2219C 14.6596,2.26929 17.8255,2.26929 19.7781,4.22191C 21.7307,6.17452 21.7307,9.34034 19.7781,11.293L 18.2925,12.7785C 18.3008,11.9583 18.1658,11.1368 17.8876,10.355L 18.3639,9.87866C 19.5355,8.70708 19.5355,6.8076 18.3639,5.63603C 17.1923,4.46445 15.2929,4.46445 14.1213,5.63602L 10.79,8.96731L 9.37581,7.55312L 12.707,4.2219 Z M 13.4142,9.17155C 13.8047,8.78103 14.4379,8.78103 14.8284,9.17155C 16.1978,10.5409 16.6068,12.507 16.0555,14.2328L 14.2827,12.46C 14.2266,11.7766 13.9371,11.1087 13.4142,10.5858C 13.0237,10.1952 13.0237,9.56208 13.4142,9.17155 Z ' })
                )
            );
        }
    }]);

    return MdiLinkVariantOff;
}(React.Component);

exports.default = MdiLinkVariantOff;
module.exports = exports['default'];