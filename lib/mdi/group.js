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

var MdiGroup = function (_React$Component) {
    _inherits(MdiGroup, _React$Component);

    function MdiGroup() {
        _classCallCheck(this, MdiGroup);

        return _possibleConstructorReturn(this, (MdiGroup.__proto__ || Object.getPrototypeOf(MdiGroup)).apply(this, arguments));
    }

    _createClass(MdiGroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8,8L 8,12L 13,12L 13,8L 8,8 Z M 1,1L 5,1L 5,2L 19,2L 19,1L 23,1L 23,5L 22,5L 22,19L 23,19L 23,23L 19,23L 19,22L 5,22L 5,23L 1,23L 1,19L 2,19L 2,5L 1,5L 1,1 Z M 5,19L 5,20L 19,20L 19,19L 20,19L 20,5.00001L 19,5.00001L 19,4.00001L 5,4.00001L 5,5.00001L 4,5.00001L 4,19L 5,19 Z M 6,6.00001L 15,6.00001L 15,10L 18,10L 18,18L 8,18L 8,14L 6,14L 6,6.00001 Z M 15,14L 10,14L 10,16L 16,16L 16,12L 15,12L 15,14 Z ' })
                )
            );
        }
    }]);

    return MdiGroup;
}(React.Component);

exports.default = MdiGroup;
module.exports = exports['default'];