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

var MdiSortAscending = function (_React$Component) {
    _inherits(MdiSortAscending, _React$Component);

    function MdiSortAscending() {
        _classCallCheck(this, MdiSortAscending);

        return _possibleConstructorReturn(this, (MdiSortAscending.__proto__ || Object.getPrototypeOf(MdiSortAscending)).apply(this, arguments));
    }

    _createClass(MdiSortAscending, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10,11.0019L 10,13.0019L 18.0006,13L 18.0006,11L 10,11.0019 Z M 10,5.00195L 10,7.00195L 14.0006,7L 14.0006,5L 10,5.00195 Z M 10.0006,17L 10,19.0019L 22,19.0019L 22.0006,17L 10.0006,17 Z M 6.00001,7.00196L 8.50001,7.00196L 5.00001,3.50196L 1.50001,7.00196L 4.00001,7.00196L 4.00061,20L 6.0006,20L 6.00001,7.00196 Z ' })
                )
            );
        }
    }]);

    return MdiSortAscending;
}(React.Component);

exports.default = MdiSortAscending;
module.exports = exports['default'];