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

var MdiPolymer = function (_React$Component) {
    _inherits(MdiPolymer, _React$Component);

    function MdiPolymer() {
        _classCallCheck(this, MdiPolymer);

        return _possibleConstructorReturn(this, (MdiPolymer.__proto__ || Object.getPrototypeOf(MdiPolymer)).apply(this, arguments));
    }

    _createClass(MdiPolymer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,3.99805L 14.9994,3.99805L 7.1044,16.6301L 4.49939,11.998L 8.99939,3.99805L 4.99939,3.99805L 0.49939,11.998L 4.99939,19.998L 8.99939,19.998L 16.8944,7.36603L 19.4994,11.998L 14.9994,19.998L 18.9994,19.998L 23.4994,11.998L 18.9994,3.99805 Z ' })
                )
            );
        }
    }]);

    return MdiPolymer;
}(React.Component);

exports.default = MdiPolymer;
module.exports = exports['default'];