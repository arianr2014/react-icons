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

var MdiGooglePlusBox = function (_React$Component) {
    _inherits(MdiGooglePlusBox, _React$Component);

    function MdiGooglePlusBox() {
        _classCallCheck(this, MdiGooglePlusBox);

        return _possibleConstructorReturn(this, (MdiGooglePlusBox.__proto__ || Object.getPrototypeOf(MdiGooglePlusBox)).apply(this, arguments));
    }

    _createClass(MdiGooglePlusBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,1.99807C 21.1034,1.99807 21.9994,2.89307 21.9994,3.99807L 21.9994,19.9981C 21.9994,21.1016 21.1034,21.9981 19.9994,21.9981L 3.99939,21.9981C 2.89539,21.9981 1.99939,21.1016 1.99939,19.9981L 2.0094,3.99807C 2.0094,2.89307 2.89539,1.99807 3.99939,1.99807L 19.9994,1.99807 Z M 20,12L 18,12L 18,10L 17,10L 17,12L 15,12L 15,13L 17,13L 17,15L 18,15L 18,13L 20,13L 20,12 Z M 9,11.2857L 9,13L 11.8571,13C 11.7143,13.7143 11,15.1429 9,15.1429C 7.28571,15.1429 5.92857,13.7143 5.92857,12C 5.92857,10.2857 7.28571,8.85714 9,8.85714C 10,8.85714 10.6429,9.28571 11,9.64286L 12.3571,8.35714C 11.5,7.5 10.3571,7 9,7C 6.21428,7 4,9.21429 4,12C 4,14.7857 6.21428,17 9,17C 11.8571,17 13.7857,15 13.7857,12.1429C 13.7857,11.7857 13.7857,11.5714 13.7143,11.2857L 9,11.2857 Z ' })
                )
            );
        }
    }]);

    return MdiGooglePlusBox;
}(React.Component);

exports.default = MdiGooglePlusBox;
module.exports = exports['default'];