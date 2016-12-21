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

var MdiAttachment = function (_React$Component) {
    _inherits(MdiAttachment, _React$Component);

    function MdiAttachment() {
        _classCallCheck(this, MdiAttachment);

        return _possibleConstructorReturn(this, (MdiAttachment.__proto__ || Object.getPrototypeOf(MdiAttachment)).apply(this, arguments));
    }

    _createClass(MdiAttachment, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 7.5,18C 4.46,18 2,15.54 2,12.5C 2,9.46 4.46,7 7.5,7L 18,7C 20.21,7 22,8.79 22,11C 22,13.21 20.21,15 18,15L 9.5,15C 8.12,15 7,13.88 7,12.5C 7,11.12 8.12,10 9.5,10L 17,10L 17,11.5L 9.5,11.5C 8.95,11.5 8.5,11.95 8.5,12.5C 8.5,13.05 8.95,13.5 9.5,13.5L 18,13.5C 19.38,13.5 20.5,12.38 20.5,11C 20.5,9.62 19.38,8.5 18,8.5L 7.5,8.5C 5.29,8.5 3.5,10.29 3.5,12.5C 3.5,14.71 5.29,16.5 7.5,16.5L 17,16.5L 17,18L 7.5,18 Z ' })
                )
            );
        }
    }]);

    return MdiAttachment;
}(React.Component);

exports.default = MdiAttachment;
module.exports = exports['default'];