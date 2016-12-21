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

var MdiBellOutline = function (_React$Component) {
    _inherits(MdiBellOutline, _React$Component);

    function MdiBellOutline() {
        _classCallCheck(this, MdiBellOutline);

        return _possibleConstructorReturn(this, (MdiBellOutline.__proto__ || Object.getPrototypeOf(MdiBellOutline)).apply(this, arguments));
    }

    _createClass(MdiBellOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9994,16.9981L 6.99939,16.9981L 6.99939,10.4981C 6.99939,8.01315 9.0144,5.99815 11.4994,5.99815C 13.9844,5.99815 15.9994,8.01315 15.9994,10.4981M 17.9994,15.9981L 17.9994,10.4981C 17.9994,7.42515 15.8644,4.85715 12.9994,4.17915L 12.9994,3.49815C 12.9994,2.67015 12.3274,1.99815 11.4994,1.99815C 10.6714,1.99815 9.99939,2.67015 9.99939,3.49815L 9.99939,4.17915C 7.1344,4.85715 4.99939,7.42515 4.99939,10.4981L 4.99939,15.9981L 2.99939,17.9981L 2.99939,18.9981L 19.9994,18.9981L 19.9994,17.9981M 11.4994,21.9981C 12.6044,21.9981 13.4994,21.1017 13.4994,19.9981L 9.49939,19.9981C 9.49939,21.1017 10.3954,21.9981 11.4994,21.9981 Z ' })
                )
            );
        }
    }]);

    return MdiBellOutline;
}(React.Component);

exports.default = MdiBellOutline;
module.exports = exports['default'];