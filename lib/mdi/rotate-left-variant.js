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

var MdiRotateLeftVariant = function (_React$Component) {
    _inherits(MdiRotateLeftVariant, _React$Component);

    function MdiRotateLeftVariant() {
        _classCallCheck(this, MdiRotateLeftVariant);

        return _possibleConstructorReturn(this, (MdiRotateLeftVariant.__proto__ || Object.getPrototypeOf(MdiRotateLeftVariant)).apply(this, arguments));
    }

    _createClass(MdiRotateLeftVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,2L 7,2C 8.10457,2 9,2.89543 9,4L 9,20C 9,21.1046 8.10457,22 7,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,4C 2,2.89543 2.89543,2 4,2 Z M 20,15C 21.1046,15 22,15.8954 22,17L 22,20C 22,21.1046 21.1046,22 20,22L 11,22L 11,15L 20,15 Z M 14,4.00001C 18.418,4.00001 22,7.58201 22,12L 21.9372,13L 19.9164,13L 20,12C 20,8.686 17.314,6.00001 14,6.00001L 14,9L 10,5.00001L 14,1.00001L 14,4.00001 Z ' })
                )
            );
        }
    }]);

    return MdiRotateLeftVariant;
}(React.Component);

exports.default = MdiRotateLeftVariant;
module.exports = exports['default'];