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

var MdiHangouts = function (_React$Component) {
    _inherits(MdiHangouts, _React$Component);

    function MdiHangouts() {
        _classCallCheck(this, MdiHangouts);

        return _possibleConstructorReturn(this, (MdiHangouts.__proto__ || Object.getPrototypeOf(MdiHangouts)).apply(this, arguments));
    }

    _createClass(MdiHangouts, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,10.9981L 13.9994,12.9981L 12.4994,12.9981L 13.4994,10.9981L 11.9994,10.9981L 11.9994,7.99807L 14.9994,7.99807M 10.9994,10.9981L 9.99941,12.9981L 8.49941,12.9981L 9.49941,10.9981L 7.99941,10.9981L 7.99941,7.99807L 10.9994,7.99807M 11.4994,1.99807C 6.80541,1.99807 2.99941,5.80407 2.99941,10.4981C 2.99941,15.1921 6.80541,18.9981 11.4994,18.9981L 11.9994,18.9981L 11.9994,22.4981C 16.8584,20.1541 19.9994,14.9981 19.9994,10.4981C 19.9994,5.80407 16.1934,1.99807 11.4994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiHangouts;
}(React.Component);

exports.default = MdiHangouts;
module.exports = exports['default'];