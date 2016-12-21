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

var MdiCloseCircle = function (_React$Component) {
    _inherits(MdiCloseCircle, _React$Component);

    function MdiCloseCircle() {
        _classCallCheck(this, MdiCloseCircle);

        return _possibleConstructorReturn(this, (MdiCloseCircle.__proto__ || Object.getPrototypeOf(MdiCloseCircle)).apply(this, arguments));
    }

    _createClass(MdiCloseCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,2C 17.53,2 22,6.47 22,12C 22,17.53 17.53,22 12,22C 6.47,22 2,17.53 2,12C 2,6.47 6.47,2 12,2 Z M 15.59,7.00002L 12,10.59L 8.40999,7.00002L 6.99999,8.41002L 10.59,12L 6.99999,15.59L 8.40999,17L 12,13.41L 15.59,17L 17,15.59L 13.41,12L 17,8.41002L 15.59,7.00002 Z ' })
                )
            );
        }
    }]);

    return MdiCloseCircle;
}(React.Component);

exports.default = MdiCloseCircle;
module.exports = exports['default'];