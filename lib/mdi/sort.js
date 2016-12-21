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

var MdiSort = function (_React$Component) {
    _inherits(MdiSort, _React$Component);

    function MdiSort() {
        _classCallCheck(this, MdiSort);

        return _possibleConstructorReturn(this, (MdiSort.__proto__ || Object.getPrototypeOf(MdiSort)).apply(this, arguments));
    }

    _createClass(MdiSort, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10,13L 10,11L 18,11L 18,13L 10,13 Z M 10,19L 10,17L 14,17L 14,19L 10,19 Z M 10.0006,7.002L 10,5L 22,5L 22.0006,7.002L 10.0006,7.002 Z M 6.00001,17L 8.50001,17L 5.00001,20.5L 1.50001,17L 4.00001,17L 4,7L 1.5,7L 5,3.5L 8.5,7L 6,7L 6.00001,17 Z ' })
                )
            );
        }
    }]);

    return MdiSort;
}(React.Component);

exports.default = MdiSort;
module.exports = exports['default'];