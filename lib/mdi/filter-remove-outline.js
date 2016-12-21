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

var MdiFilterRemoveOutline = function (_React$Component) {
    _inherits(MdiFilterRemoveOutline, _React$Component);

    function MdiFilterRemoveOutline() {
        _classCallCheck(this, MdiFilterRemoveOutline);

        return _possibleConstructorReturn(this, (MdiFilterRemoveOutline.__proto__ || Object.getPrototypeOf(MdiFilterRemoveOutline)).apply(this, arguments));
    }

    _createClass(MdiFilterRemoveOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.7322,20.8284L 17.5784,17.9822L 14.7322,15.1716L 16.1464,13.7574L 18.9926,16.568L 21.8033,13.7574L 23.2175,15.1716L 20.4069,17.9822L 23.2175,20.8284L 21.8033,22.2426L 18.9926,19.3964L 16.1464,22.2426L 14.7322,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 14,9.92065L 14,22.909L 8,16.909L 8,9.90594L 2.09405,3.99999L 2,3.99999L 2,2 Z M 9.99998,16.0806L 12,18.0806L 12,8.99999L 12.0922,8.99999L 17.0922,4L 4.92247,4L 9.92246,9L 9.99999,9L 9.99998,16.0806 Z ' })
                )
            );
        }
    }]);

    return MdiFilterRemoveOutline;
}(React.Component);

exports.default = MdiFilterRemoveOutline;
module.exports = exports['default'];