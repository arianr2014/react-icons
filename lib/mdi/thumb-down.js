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

var MdiThumbDown = function (_React$Component) {
    _inherits(MdiThumbDown, _React$Component);

    function MdiThumbDown() {
        _classCallCheck(this, MdiThumbDown);

        return _possibleConstructorReturn(this, (MdiThumbDown.__proto__ || Object.getPrototypeOf(MdiThumbDown)).apply(this, arguments));
    }

    _createClass(MdiThumbDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,14.998L 22.9994,14.998L 22.9994,2.99805L 18.9994,2.99805M 14.9994,2.99805L 5.99939,2.99805C 5.17139,2.99805 4.4614,3.50104 4.15738,4.21802L 1.14038,11.2711C 1.0524,11.496 0.99939,11.741 0.99939,11.998L 0.99939,13.913L 0.99939,13.998C 0.99939,15.103 1.89438,15.998 2.99939,15.998L 9.31439,15.998L 8.36041,20.567C 8.33942,20.6691 8.32739,20.774 8.32739,20.8831C 8.32739,21.2971 8.49536,21.6721 8.7674,21.9431L 9.82739,22.998L 16.4134,16.412C 16.7754,16.05 16.9994,15.55 16.9994,14.998L 16.9994,4.99805C 16.9994,3.89404 16.1034,2.99805 14.9994,2.99805 Z ' })
                )
            );
        }
    }]);

    return MdiThumbDown;
}(React.Component);

exports.default = MdiThumbDown;
module.exports = exports['default'];