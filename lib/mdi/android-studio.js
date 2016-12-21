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

var MdiAndroidStudio = function (_React$Component) {
    _inherits(MdiAndroidStudio, _React$Component);

    function MdiAndroidStudio() {
        _classCallCheck(this, MdiAndroidStudio);

        return _possibleConstructorReturn(this, (MdiAndroidStudio.__proto__ || Object.getPrototypeOf(MdiAndroidStudio)).apply(this, arguments));
    }

    _createClass(MdiAndroidStudio, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 11,1.99999L 13,1.99999L 13,3.99999L 13.5,4C 14.3284,4 15,4.67157 15,5.5L 15,9L 14.5622,9.43783L 16.2038,12.2812C 17.3124,11.1925 18,9.67654 18,8L 20,8.00001C 20,10.4197 18.9257,12.5885 17.2282,14.0554L 20.366,19.4904L 20.5,21.7224L 18.634,20.4904L 15.56,15.1662C 14.4879,15.6999 13.279,16 12,16C 10.721,16 9.51214,15.6999 8.43995,15.1662L 5.36603,20.4904L 3.5,21.7224L 3.63398,19.4904L 9.43782,9.43782L 9,9L 9,5.5C 9,4.67157 9.67157,4 10.5,4L 11,3.99999L 11,1.99999 Z M 9.44273,13.4293C 10.2185,13.7953 11.0853,14 12,14C 12.9146,14 13.7815,13.7953 14.5572,13.4293L 13.0981,10.9019L 13.0907,10.9019C 12.4749,11.5178 11.5251,11.5178 10.9093,10.9019L 10.9019,10.9019L 9.44273,13.4293 Z M 12,6C 11.4477,6 11,6.44772 11,7C 11,7.55229 11.4477,8 12,8C 12.5523,8 13,7.55229 13,7C 13,6.44772 12.5523,6 12,6 Z ' })
                )
            );
        }
    }]);

    return MdiAndroidStudio;
}(React.Component);

exports.default = MdiAndroidStudio;
module.exports = exports['default'];