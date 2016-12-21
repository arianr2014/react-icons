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

var MdiForum = function (_React$Component) {
    _inherits(MdiForum, _React$Component);

    function MdiForum() {
        _classCallCheck(this, MdiForum);

        return _possibleConstructorReturn(this, (MdiForum.__proto__ || Object.getPrototypeOf(MdiForum)).apply(this, arguments));
    }

    _createClass(MdiForum, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 17,12L 17,3C 17,2.45 16.55,2 16,2L 3,2C 2.45,2 2,2.45 2,3L 2,17L 6,13L 16,13C 16.55,13 17,12.55 17,12 Z M 21,6L 19,6L 19,15L 6,15L 6,17C 6,17.55 6.45,18 7,18L 18,18L 22,22L 22,7C 22,6.45 21.55,6 21,6 Z ' })
                )
            );
        }
    }]);

    return MdiForum;
}(React.Component);

exports.default = MdiForum;
module.exports = exports['default'];