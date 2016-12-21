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

var MdiSpray = function (_React$Component) {
    _inherits(MdiSpray, _React$Component);

    function MdiSpray() {
        _classCallCheck(this, MdiSpray);

        return _possibleConstructorReturn(this, (MdiSpray.__proto__ || Object.getPrototypeOf(MdiSpray)).apply(this, arguments));
    }

    _createClass(MdiSpray, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10,4L 12,4L 12,6L 10,6L 10,4 Z M 7,3.00001L 9,3.00001L 9,5.00001L 7,5.00001L 7,3.00001 Z M 7,6.00001L 9,6.00001L 9,8.00001L 7,8.00001L 7,6.00001 Z M 6,8L 6,10L 4,10L 4,8L 6,8 Z M 6,5L 6,7L 4,7L 4,5L 6,5 Z M 6,2.00001L 6,4L 4,4L 4,2.00001L 6,2.00001 Z M 13,22C 11.8954,22 11,21.1046 11,20L 11,10C 11,8.89545 11.8954,8.00002 13,8.00002L 13,7.00001L 14,7.00001L 14,4.00001L 17,4L 17,7L 18,7L 18,8.00002C 19.1046,8.00002 20,8.89545 20,10L 20,20C 20,21.1046 19.1046,22 18,22L 13,22 Z M 13,10L 13,20L 18,20L 18,10L 13,10 Z ' })
                )
            );
        }
    }]);

    return MdiSpray;
}(React.Component);

exports.default = MdiSpray;
module.exports = exports['default'];