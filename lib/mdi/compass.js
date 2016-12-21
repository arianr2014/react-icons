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

var MdiCompass = function (_React$Component) {
    _inherits(MdiCompass, _React$Component);

    function MdiCompass() {
        _classCallCheck(this, MdiCompass);

        return _possibleConstructorReturn(this, (MdiCompass.__proto__ || Object.getPrototypeOf(MdiCompass)).apply(this, arguments));
    }

    _createClass(MdiCompass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.1918,14.1904L 5.99979,17.9985L 9.80679,9.80542L 17.9998,5.99847M 11.9998,1.99847C 6.47679,1.99847 1.99979,6.47546 1.99979,11.9985C 1.99979,17.5204 6.47679,21.9985 11.9998,21.9985C 17.5228,21.9985 21.9998,17.5204 21.9998,11.9985C 21.9998,6.47546 17.5228,1.99847 11.9998,1.99847 Z M 11.9998,10.8984C 11.3928,10.8984 10.8998,11.3904 10.8998,11.9985C 10.8998,12.6055 11.3928,13.0984 11.9998,13.0984C 12.6078,13.0984 13.0998,12.6055 13.0998,11.9985C 13.0998,11.3904 12.6078,10.8984 11.9998,10.8984 Z ' })
                )
            );
        }
    }]);

    return MdiCompass;
}(React.Component);

exports.default = MdiCompass;
module.exports = exports['default'];