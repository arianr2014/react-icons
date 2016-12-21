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

var MdiThumbUp = function (_React$Component) {
    _inherits(MdiThumbUp, _React$Component);

    function MdiThumbUp() {
        _classCallCheck(this, MdiThumbUp);

        return _possibleConstructorReturn(this, (MdiThumbUp.__proto__ || Object.getPrototypeOf(MdiThumbUp)).apply(this, arguments));
    }

    _createClass(MdiThumbUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22.9994,9.99805C 22.9994,8.89307 22.1044,7.99805 20.9994,7.99805L 14.6844,7.99805L 15.6384,3.42908C 15.6594,3.32703 15.6714,3.22205 15.6714,3.11304C 15.6714,2.69904 15.5034,2.32404 15.2314,2.05304L 14.1714,0.998047L 7.58539,7.58405C 7.22339,7.94604 6.99939,8.44604 6.99939,8.99805L 6.99939,18.998C 6.99939,20.1021 7.89539,20.998 8.99939,20.998L 17.9994,20.998C 18.8274,20.998 19.5374,20.4951 19.8414,19.7781L 22.8584,12.725C 22.9464,12.5001 22.9994,12.2551 22.9994,11.998L 22.9994,10.0831L 22.9994,9.99805 Z M 0.99939,20.998L 4.99939,20.998L 4.99939,8.99805L 0.99939,8.99805L 0.99939,20.998 Z ' })
                )
            );
        }
    }]);

    return MdiThumbUp;
}(React.Component);

exports.default = MdiThumbUp;
module.exports = exports['default'];