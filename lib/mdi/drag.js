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

var MdiDrag = function (_React$Component) {
    _inherits(MdiDrag, _React$Component);

    function MdiDrag() {
        _classCallCheck(this, MdiDrag);

        return _possibleConstructorReturn(this, (MdiDrag.__proto__ || Object.getPrototypeOf(MdiDrag)).apply(this, arguments));
    }

    _createClass(MdiDrag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7,19L 7,17L 9,17L 9,19L 7,19 Z M 11,19L 11,17L 13,17L 13,19L 11,19 Z M 15,19L 15,17L 17,17L 17,19L 15,19 Z M 7,15L 7,13L 9,13L 9,15L 7,15 Z M 11,15L 11,13L 13,13L 13,15L 11,15 Z M 15,15L 15,13L 17,13L 17,15L 15,15 Z M 7,11L 7,9.00001L 9,9.00001L 9,11L 7,11 Z M 11,11L 11,9.00001L 13,9.00001L 13,11L 11,11 Z M 15,11L 15,9.00001L 17,9.00001L 17,11L 15,11 Z M 7,7.00001L 7,5.00001L 9,5.00001L 9,7.00001L 7,7.00001 Z M 11,7.00001L 11,5.00001L 13,5.00001L 13,7.00001L 11,7.00001 Z M 15,7.00001L 15,5.00001L 17,5.00001L 17,7.00001L 15,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiDrag;
}(React.Component);

exports.default = MdiDrag;
module.exports = exports['default'];