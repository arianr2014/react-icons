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

var MdiRoutes = function (_React$Component) {
    _inherits(MdiRoutes, _React$Component);

    function MdiRoutes() {
        _classCallCheck(this, MdiRoutes);

        return _possibleConstructorReturn(this, (MdiRoutes.__proto__ || Object.getPrototypeOf(MdiRoutes)).apply(this, arguments));
    }

    _createClass(MdiRoutes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11,10L 5,10L 3,8L 5,6L 11,6L 11,3L 12,2.00001L 13,3L 13,4L 19,4.00001L 21,6.00001L 19,8L 13,8L 13,10L 19,10L 21,12L 19,14L 13,14L 13,20C 14.1046,20 15,20.8954 15,22L 9,22C 9,20.8954 9.89543,20 11,20L 11,10 Z ' })
                )
            );
        }
    }]);

    return MdiRoutes;
}(React.Component);

exports.default = MdiRoutes;
module.exports = exports['default'];