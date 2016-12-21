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

var MdiPercent = function (_React$Component) {
    _inherits(MdiPercent, _React$Component);

    function MdiPercent() {
        _classCallCheck(this, MdiPercent);

        return _possibleConstructorReturn(this, (MdiPercent.__proto__ || Object.getPrototypeOf(MdiPercent)).apply(this, arguments));
    }

    _createClass(MdiPercent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7,4C 8.65685,4 10,5.34315 10,7C 10,8.65686 8.65685,10 7,10C 5.34315,10 4,8.65686 4,7C 4,5.34315 5.34315,4 7,4 Z M 17,14C 18.6569,14 20,15.3431 20,17C 20,18.6569 18.6569,20 17,20C 15.3431,20 14,18.6569 14,17C 14,15.3431 15.3431,14 17,14 Z M 20,5.41422L 5.41421,20L 4,18.5858L 18.5858,4L 20,5.41422 Z ' })
                )
            );
        }
    }]);

    return MdiPercent;
}(React.Component);

exports.default = MdiPercent;
module.exports = exports['default'];