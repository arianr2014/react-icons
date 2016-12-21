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

var MdiMailRu = function (_React$Component) {
    _inherits(MdiMailRu, _React$Component);

    function MdiMailRu() {
        _classCallCheck(this, MdiMailRu);

        return _possibleConstructorReturn(this, (MdiMailRu.__proto__ || Object.getPrototypeOf(MdiMailRu)).apply(this, arguments));
    }

    _createClass(MdiMailRu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-linejoin': 'round', d: 'M 15.4548,11.912C 15.341,9.70032 13.6996,8.37041 11.7173,8.37041L 11.6426,8.37041C 9.35497,8.37041 8.08615,10.1695 8.08615,12.2128C 8.08615,14.5012 9.62116,15.9463 11.6336,15.9463C 13.8776,15.9463 15.3532,14.3028 15.4599,12.3586M 11.6538,6.39212C 13.1825,6.39212 14.6194,7.06746 15.6748,8.12527L 15.6748,8.12937C 15.6748,7.62139 16.0163,7.23868 16.4912,7.23868L 16.6111,7.23789C 17.3534,7.23789 17.5056,7.94046 17.5056,8.16275L 17.5095,16.0598C 17.4571,16.5765 18.0429,16.8432 18.3678,16.5121C 19.6359,15.2089 21.1527,9.81301 17.5796,6.68653C 14.2493,3.77155 9.78095,4.2521 7.40463,5.89002C 4.87843,7.63243 3.26193,11.4882 4.83222,15.1098C 6.54382,19.0608 11.442,20.2385 14.3531,19.0638C 15.8273,18.4686 16.5081,20.4615 14.9771,21.1125C 12.6637,22.0984 6.22514,21.9991 3.21753,16.7888C 1.18544,13.2706 1.29363,7.08028 6.68321,3.8732C 10.8062,1.42002 16.2419,2.09949 19.5196,5.52269C 22.9459,9.10121 22.7462,15.8021 19.4041,18.4088C 17.8899,19.5918 15.641,18.4398 15.6554,16.7149L 15.6399,16.1509C 14.5854,17.1972 13.1825,17.8076 11.6538,17.8076C 8.63353,17.8076 5.97604,15.1498 5.97604,12.1307C 5.97604,9.08015 8.63353,6.39212 11.6538,6.39212 Z ' })
                )
            );
        }
    }]);

    return MdiMailRu;
}(React.Component);

exports.default = MdiMailRu;
module.exports = exports['default'];