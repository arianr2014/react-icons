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

var MdiProjectorScreen = function (_React$Component) {
    _inherits(MdiProjectorScreen, _React$Component);

    function MdiProjectorScreen() {
        _classCallCheck(this, MdiProjectorScreen);

        return _possibleConstructorReturn(this, (MdiProjectorScreen.__proto__ || Object.getPrototypeOf(MdiProjectorScreen)).apply(this, arguments));
    }

    _createClass(MdiProjectorScreen, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 4,2C 3.446,2 3,2.446 3,3L 3,4C 3,4.554 3.446,5 4,5L 5,5L 5,14L 11,14L 11,16.5859L 6.79297,20.793L 8.20703,22.207L 11,19.4141L 11,22L 13,22L 13,19.4141L 15.793,22.207L 17.207,20.793L 13,16.5859L 13,14L 19,14L 19,5L 20,5C 20.554,5 21,4.554 21,4L 21,3C 21,2.446 20.554,2 20,2L 4,2 Z ' })
                )
            );
        }
    }]);

    return MdiProjectorScreen;
}(React.Component);

exports.default = MdiProjectorScreen;
module.exports = exports['default'];