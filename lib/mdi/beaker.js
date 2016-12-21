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

var MdiBeaker = function (_React$Component) {
    _inherits(MdiBeaker, _React$Component);

    function MdiBeaker() {
        _classCallCheck(this, MdiBeaker);

        return _possibleConstructorReturn(this, (MdiBeaker.__proto__ || Object.getPrototypeOf(MdiBeaker)).apply(this, arguments));
    }

    _createClass(MdiBeaker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 3,3L 21,3L 21,5C 19.8954,5 19,5.8954 19,7L 19,19C 19,20.1046 18.1046,21 17,21L 7,21C 5.89543,21 5,20.1046 5,19L 5,7C 5,5.8954 4.10457,5 3,5L 3,3 Z M 7,5.00001L 7,7.00001L 12,7.00001L 12,8L 7,8L 7,9L 10,9L 10,10L 7,10L 7,11L 10,11L 10,12L 7,12L 7,13L 12,13L 12,14L 7,14L 7,15L 10,15L 10,16L 7,16L 7,19L 17,19L 17,5.00001L 7,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiBeaker;
}(React.Component);

exports.default = MdiBeaker;
module.exports = exports['default'];