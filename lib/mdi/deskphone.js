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

var MdiDeskphone = function (_React$Component) {
    _inherits(MdiDeskphone, _React$Component);

    function MdiDeskphone() {
        _classCallCheck(this, MdiDeskphone);

        return _possibleConstructorReturn(this, (MdiDeskphone.__proto__ || Object.getPrototypeOf(MdiDeskphone)).apply(this, arguments));
    }

    _createClass(MdiDeskphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,3L 19,3C 20.1046,3 21,3.89543 21,5L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5C 3,3.89543 3.89543,3 5,3 Z M 15,5.00001L 15,19L 19,19L 19,5.00001L 15,5.00001 Z M 5,5.00001L 5,9.00001L 13,9.00001L 13,5.00001L 5,5.00001 Z M 5,11L 5,13L 6.99999,13L 6.99999,11L 5,11 Z M 7.99999,11L 7.99999,13L 10,13L 10,11L 7.99999,11 Z M 11,11L 11,13L 13,13L 13,11L 11,11 Z M 5,14L 5,16L 7,16L 7,14L 5,14 Z M 8,14L 8,16L 10,16L 10,14L 8,14 Z M 11,14L 11,16L 13,16L 13,14L 11,14 Z M 11,17L 11,19L 13,19L 13,17L 11,17 Z M 8,17L 8,19L 10,19L 10,17L 8,17 Z M 5,17L 5,19L 7,19L 7,17L 5,17 Z ' })
                )
            );
        }
    }]);

    return MdiDeskphone;
}(React.Component);

exports.default = MdiDeskphone;
module.exports = exports['default'];