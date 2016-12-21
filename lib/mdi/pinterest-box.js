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

var MdiPinterestBox = function (_React$Component) {
    _inherits(MdiPinterestBox, _React$Component);

    function MdiPinterestBox() {
        _classCallCheck(this, MdiPinterestBox);

        return _possibleConstructorReturn(this, (MdiPinterestBox.__proto__ || Object.getPrototypeOf(MdiPinterestBox)).apply(this, arguments));
    }

    _createClass(MdiPinterestBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,16.1983C 12.1974,16.1983 11.4314,15.8593 10.8834,15.2783L 9.9314,18.4783L 9.8634,18.6853L 9.8314,18.6743C 9.6354,18.9983 9.2874,19.1983 8.8994,19.1983C 8.2934,19.1983 7.7994,18.7053 7.7994,18.0973C 7.7994,18.0463 7.8054,17.9983 7.8134,17.9523L 7.7964,17.9453L 7.8504,17.7673L 9.6994,12.2053C 9.6994,12.2053 9.4994,11.5923 9.4994,10.7323C 9.4994,9.01327 10.4214,8.49827 11.1634,8.49827C 11.9054,8.49827 12.5804,8.76327 12.5804,9.81027C 12.5804,11.1543 11.6914,11.8423 11.6914,12.8133C 11.6914,13.5533 12.2944,14.1553 13.0346,14.1553C 15.3684,14.1553 16.1994,12.3953 16.1994,10.7483C 16.1994,8.57027 14.3154,6.79827 11.9994,6.79827C 9.6834,6.79827 7.7994,8.57027 7.7994,10.7483C 7.8004,11.4223 7.9874,12.0923 8.3414,12.6833C 8.4344,12.8393 8.4834,13.0153 8.4834,13.1983C 8.4834,13.7503 8.03456,14.1983 7.4834,14.1983C 7.1274,14.1983 6.7944,14.0083 6.6164,13.7033C 6.08241,12.8073 5.7994,11.7853 5.7994,10.7483C 5.7994,7.46727 8.5804,4.79827 11.9994,4.79827C 15.4184,4.79827 18.1994,7.46727 18.1994,10.7483C 18.1994,13.3733 16.5714,16.1983 12.9994,16.1983 Z M 19.9994,1.99827L 3.9994,1.99827C 2.8944,1.99827 2.0094,2.89327 2.0094,3.99827L 1.9994,19.9983C 1.9994,21.1023 2.8944,21.9983 3.9994,21.9983L 19.9994,21.9983C 21.1034,21.9983 21.9994,21.1023 21.9994,19.9983L 21.9994,3.99827C 21.9994,2.89327 21.1034,1.99827 19.9994,1.99827 Z ' })
                )
            );
        }
    }]);

    return MdiPinterestBox;
}(React.Component);

exports.default = MdiPinterestBox;
module.exports = exports['default'];