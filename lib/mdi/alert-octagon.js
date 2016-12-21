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

var MdiAlertOctagon = function (_React$Component) {
    _inherits(MdiAlertOctagon, _React$Component);

    function MdiAlertOctagon() {
        _classCallCheck(this, MdiAlertOctagon);

        return _possibleConstructorReturn(this, (MdiAlertOctagon.__proto__ || Object.getPrototypeOf(MdiAlertOctagon)).apply(this, arguments));
    }

    _createClass(MdiAlertOctagon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,12.998L 10.9994,12.998L 10.9994,6.99805L 12.9994,6.99805M 11.9994,17.298C 11.2824,17.298 10.6994,16.716 10.6994,15.998C 10.6994,15.2811 11.2824,14.6981 11.9994,14.6981C 12.7164,14.6981 13.2994,15.2811 13.2994,15.998C 13.2994,16.716 12.7164,17.298 11.9994,17.298 Z M 15.7274,2.99805L 8.27086,2.99805L 2.99938,8.27002L 2.99938,15.7261L 8.27086,20.998L 15.7274,20.998L 20.9994,15.7261L 20.9994,8.27002L 15.7274,2.99805 Z ' })
                )
            );
        }
    }]);

    return MdiAlertOctagon;
}(React.Component);

exports.default = MdiAlertOctagon;
module.exports = exports['default'];