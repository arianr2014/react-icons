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

var MdiHeadsetOff = function (_React$Component) {
    _inherits(MdiHeadsetOff, _React$Component);

    function MdiHeadsetOff() {
        _classCallCheck(this, MdiHeadsetOff);

        return _possibleConstructorReturn(this, (MdiHeadsetOff.__proto__ || Object.getPrototypeOf(MdiHeadsetOff)).apply(this, arguments));
    }

    _createClass(MdiHeadsetOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22.5,4.76848L 20.4295,6.83902C 20.7979,7.82191 20.9994,8.88644 20.9994,9.99807L 20.9994,19.9981C 20.9994,21.6551 19.6564,22.9981 17.9994,22.9981L 11.9994,22.9981L 11.9994,20.9981L 18.9994,20.9981L 18.9994,19.9981L 14.9994,19.9981L 14.9994,12.2691L 8.99939,18.2691L 8.99939,19.9981L 7.27042,19.9981L 4.76849,22.5L 3.50002,21.2229L 21.2229,3.50001L 22.5,4.76848 Z M 11.9994,0.99807C 14.5306,0.99807 16.8176,2.04274 18.4528,3.7245L 17.0383,5.13906C 15.7651,3.81909 13.9781,2.99807 11.9994,2.99807C 8.13338,2.99807 4.99939,6.13206 4.99939,9.99807L 4.99939,11.9981L 8.99939,11.9981L 8.99939,13.1779L 3.50773,18.6696C 3.1867,18.1919 2.99939,17.6169 2.99939,16.9981L 2.99939,9.99807C 2.99939,5.02706 7.0284,0.99807 11.9994,0.99807 Z M 18.9994,11.9981L 18.9994,9.99807C 18.9994,9.46345 18.9395,8.94282 18.8259,8.44255L 15.2704,11.9981L 18.9994,11.9981 Z ' })
                )
            );
        }
    }]);

    return MdiHeadsetOff;
}(React.Component);

exports.default = MdiHeadsetOff;
module.exports = exports['default'];