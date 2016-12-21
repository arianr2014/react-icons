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

var MdiTextbox = function (_React$Component) {
    _inherits(MdiTextbox, _React$Component);

    function MdiTextbox() {
        _classCallCheck(this, MdiTextbox);

        return _possibleConstructorReturn(this, (MdiTextbox.__proto__ || Object.getPrototypeOf(MdiTextbox)).apply(this, arguments));
    }

    _createClass(MdiTextbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17,7.00001L 22,7.00001L 22,17L 17,17L 17,19C 17,19.5523 17.4477,20 18,20L 20,20L 20,22L 17.5,22C 16.9477,22 16,21.5523 16,21C 16,21.5523 15.0523,22 14.5,22L 12,22L 12,20L 14,20C 14.5523,20 15,19.5523 15,19L 15,5C 15,4.44772 14.5523,4 14,4L 12,4.00001L 12,2.00001L 14.5,2.00001C 15.0523,2.00001 16,2.44772 16,3.00001C 16,2.44772 16.9477,2.00001 17.5,2.00001L 20,2.00001L 20,4.00001L 18,4C 17.4477,4 17,4.44772 17,5L 17,7.00001 Z M 2,7.00001L 13,7.00001L 13,9.00001L 4,9.00001L 4,15L 13,15L 13,17L 2,17L 2,7.00001 Z M 20,15L 20,9.00001L 17,9.00001L 17,15L 20,15 Z ' })
                )
            );
        }
    }]);

    return MdiTextbox;
}(React.Component);

exports.default = MdiTextbox;
module.exports = exports['default'];