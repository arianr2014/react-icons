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

var MdiMouseOff = function (_React$Component) {
    _inherits(MdiMouseOff, _React$Component);

    function MdiMouseOff() {
        _classCallCheck(this, MdiMouseOff);

        return _possibleConstructorReturn(this, (MdiMouseOff.__proto__ || Object.getPrototypeOf(MdiMouseOff)).apply(this, arguments));
    }

    _createClass(MdiMouseOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2,5.26848L 3.27711,4L 20,20.7229L 18.7315,22L 17.5198,20.7883C 16.0841,22.1576 14.1399,22.9984 11.9994,22.9984C 7.58138,22.9984 3.99939,19.4164 3.99939,14.9984L 3.99939,10.9984L 7.7299,10.9984L 5.7299,8.99837L 3.99939,8.99837C 3.99939,8.45904 4.0528,7.93229 4.15461,7.42309L 2,5.26848 Z M 10.9994,1.06737L 10.9994,8.99837L 10.8211,8.99837L 5.78589,3.9632C 7.05483,2.40247 8.90123,1.32957 10.9994,1.06737 Z M 19.9994,10.9984L 19.9994,14.9984C 19.9994,15.9489 19.8336,16.8608 19.5293,17.7066L 12.8211,10.9984L 19.9994,10.9984 Z M 12.9994,1.06737C 16.9444,1.56037 19.9994,4.91938 19.9994,8.99838L 12.9994,8.99838L 12.9994,1.06737 Z ' })
                )
            );
        }
    }]);

    return MdiMouseOff;
}(React.Component);

exports.default = MdiMouseOff;
module.exports = exports['default'];