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

var MdiAndroidDebugBridge = function (_React$Component) {
    _inherits(MdiAndroidDebugBridge, _React$Component);

    function MdiAndroidDebugBridge() {
        _classCallCheck(this, MdiAndroidDebugBridge);

        return _possibleConstructorReturn(this, (MdiAndroidDebugBridge.__proto__ || Object.getPrototypeOf(MdiAndroidDebugBridge)).apply(this, arguments));
    }

    _createClass(MdiAndroidDebugBridge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,8.99807C 14.4464,8.99807 13.9994,8.55007 13.9994,7.99807C 13.9994,7.44607 14.4464,6.99807 14.9994,6.99807C 15.5524,6.99807 15.9994,7.44607 15.9994,7.99807C 15.9994,8.55007 15.5524,8.99807 14.9994,8.99807 Z M 8.99938,8.99807C 8.44638,8.99807 7.99938,8.55007 7.99938,7.99807C 7.99938,7.44607 8.44638,6.99807 8.99938,6.99807C 9.55238,6.99807 9.99938,7.44607 9.99938,7.99807C 9.99938,8.55007 9.55238,8.99807 8.99938,8.99807 Z M 16.1224,4.36707L 18.2211,2.26806L 17.3964,1.44207L 15.0924,3.74707C 14.1554,3.28307 13.1144,2.99807 11.9994,2.99807C 10.8844,2.99807 9.84338,3.28307 8.90638,3.74707L 6.60138,1.44207L 5.77738,2.26806L 7.87638,4.36707C 6.14038,5.64007 4.99938,7.67907 4.99938,9.99807L 4.99938,10.9981L 18.9994,10.9981L 18.9994,9.99807C 18.9994,7.67907 17.8584,5.64007 16.1224,4.36707 Z M 4.99938,15.9981C 4.99938,19.8641 8.13338,22.9981 11.9994,22.9981C 15.8654,22.9981 18.9994,19.8641 18.9994,15.9981L 18.9994,11.9981L 4.99938,11.9981L 4.99938,15.9981 Z ' })
                )
            );
        }
    }]);

    return MdiAndroidDebugBridge;
}(React.Component);

exports.default = MdiAndroidDebugBridge;
module.exports = exports['default'];