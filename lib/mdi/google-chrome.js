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

var MdiGoogleChrome = function (_React$Component) {
    _inherits(MdiGoogleChrome, _React$Component);

    function MdiGoogleChrome() {
        _classCallCheck(this, MdiGoogleChrome);

        return _possibleConstructorReturn(this, (MdiGoogleChrome.__proto__ || Object.getPrototypeOf(MdiGoogleChrome)).apply(this, arguments));
    }

    _createClass(MdiGoogleChrome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9999,19.9981L 15.4639,13.9981L 15.4489,13.9891C 15.7899,13.4011 15.9999,12.7271 15.9999,11.9981C 15.9999,10.7961 15.4589,9.73107 14.6199,8.99807L 19.4129,8.99807C 19.7879,9.92507 19.9999,10.9361 19.9999,11.9981C 19.9999,16.4161 16.4179,19.9981 11.9999,19.9981 Z M 3.9999,11.9981C 3.9999,10.5411 4.3949,9.18007 5.0749,8.00408L 8.5369,13.9991L 8.5499,13.9911C 9.2429,15.1851 10.5199,15.9981 11.9999,15.9981C 12.4539,15.9981 12.8819,15.9061 13.2889,15.7671L 10.8949,19.9131C 7.0009,19.3741 3.9999,16.0401 3.9999,11.9981 Z M 14.9999,11.9981C 14.9999,13.6541 13.6559,14.9981 11.9999,14.9981C 10.3429,14.9981 8.9999,13.6541 8.9999,11.9981C 8.9999,10.3421 10.3429,8.99807 11.9999,8.99807C 13.6559,8.99807 14.9999,10.3421 14.9999,11.9981 Z M 11.9999,3.99807C 14.9589,3.99807 17.5369,5.60906 18.9199,7.99807L 11.9999,7.99807C 10.0609,7.99807 8.4459,9.37807 8.0789,11.2081L 5.6969,7.08306C 7.1609,5.20806 9.4369,3.99807 11.9999,3.99807 Z M 11.9999,1.99807C 6.4759,1.99807 1.9999,6.47506 1.9999,11.9981C 1.9999,17.5211 6.4759,21.9981 11.9999,21.9981C 17.5229,21.9981 21.9999,17.5211 21.9999,11.9981C 21.9999,6.47506 17.5229,1.99807 11.9999,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleChrome;
}(React.Component);

exports.default = MdiGoogleChrome;
module.exports = exports['default'];