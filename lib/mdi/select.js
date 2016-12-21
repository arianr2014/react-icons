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

var MdiSelect = function (_React$Component) {
    _inherits(MdiSelect, _React$Component);

    function MdiSelect() {
        _classCallCheck(this, MdiSelect);

        return _possibleConstructorReturn(this, (MdiSelect.__proto__ || Object.getPrototypeOf(MdiSelect)).apply(this, arguments));
    }

    _createClass(MdiSelect, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,3L 5,3L 5,5L 3,5L 3,4C 3,3.44772 3.44771,3 4,3 Z M 20,3.00001C 20.5523,3.00001 21,3.44773 21,4.00001L 21,5.00001L 19,5.00001L 19,3.00001L 20,3.00001 Z M 15,5.00001L 15,3.00001L 17,3.00001L 17,5.00001L 15,5.00001 Z M 11,5.00001L 11,3.00001L 13,3.00001L 13,5.00001L 11,5.00001 Z M 7,5.00001L 7,3.00001L 9,3.00001L 9,5.00001L 7,5.00001 Z M 21,20C 21,20.5523 20.5523,21 20,21L 19,21L 19,19L 21,19L 21,20 Z M 15,21L 15,19L 17,19L 17,21L 15,21 Z M 11,21L 11,19L 13,19L 13,21L 11,21 Z M 7,21L 7,19L 9,19L 9,21L 7,21 Z M 4,21C 3.44771,21 3,20.5523 3,20L 3,19L 5,19L 5,21L 4,21 Z M 3,15L 5,15L 5,17L 3,17L 3,15 Z M 21,15L 21,17L 19,17L 19,15L 21,15 Z M 3,11L 5,11L 5,13L 3,13L 3,11 Z M 21,11L 21,13L 19,13L 19,11L 21,11 Z M 3,7.00001L 5,7.00001L 5,9.00001L 3,9.00001L 3,7.00001 Z M 21,7.00001L 21,9.00001L 19,9.00001L 19,7.00001L 21,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiSelect;
}(React.Component);

exports.default = MdiSelect;
module.exports = exports['default'];