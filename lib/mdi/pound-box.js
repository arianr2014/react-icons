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

var MdiPoundBox = function (_React$Component) {
    _inherits(MdiPoundBox, _React$Component);

    function MdiPoundBox() {
        _classCallCheck(this, MdiPoundBox);

        return _possibleConstructorReturn(this, (MdiPoundBox.__proto__ || Object.getPrototypeOf(MdiPoundBox)).apply(this, arguments));
    }

    _createClass(MdiPoundBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,5C 3,3.896 3.894,3 5,3L 19,3C 20.1035,3 21,3.896 21,5L 21,19C 21,20.104 20.1035,21 19,21L 5,21C 3.894,21 3,20.104 3,19L 3,5 Z M 7,18L 9,18L 9.35265,16L 13.3526,16L 13,18L 15,18L 15.3526,16L 17.3526,16L 17.7053,14L 15.7053,14L 16.4106,10L 18.4106,10L 18.7633,8.00002L 16.7632,8.00002L 17.1159,6.00001L 15.1159,6.00001L 14.7632,8.00002L 10.7633,8.00002L 11.1159,6.00001L 9.11592,6.00001L 8.76326,8.00002L 6.76327,8.00001L 6.41061,10L 8.41061,10L 7.7053,14L 5.70531,14L 5.35265,16L 7.35265,16L 7,18 Z M 10.4106,10L 14.4106,10L 13.7053,14L 9.7053,14L 10.4106,10 Z ' })
                )
            );
        }
    }]);

    return MdiPoundBox;
}(React.Component);

exports.default = MdiPoundBox;
module.exports = exports['default'];