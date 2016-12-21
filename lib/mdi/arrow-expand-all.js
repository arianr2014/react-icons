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

var MdiArrowExpandAll = function (_React$Component) {
    _inherits(MdiArrowExpandAll, _React$Component);

    function MdiArrowExpandAll() {
        _classCallCheck(this, MdiArrowExpandAll);

        return _possibleConstructorReturn(this, (MdiArrowExpandAll.__proto__ || Object.getPrototypeOf(MdiArrowExpandAll)).apply(this, arguments));
    }

    _createClass(MdiArrowExpandAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.49263,13.0931L 10.9068,14.5073L 6.41421,19L 10,19L 10,21L 3,21L 3,14L 5,14L 5,17.5858L 9.49263,13.0931 Z M 10.9069,9.49266L 9.49265,10.9069L 5,6.41422L 5,10L 3,10L 3,3.00001L 10,3L 10,5L 6.41421,5L 10.9069,9.49266 Z M 14.5074,13.0931L 19,17.5858L 19,14L 21,14L 21,21L 14,21L 14,19L 17.5858,19L 13.0932,14.5073L 14.5074,13.0931 Z M 13.0931,9.49265L 17.5858,5L 14,5L 14,3L 21,3L 21,10L 19,10L 19,6.41421L 14.5073,10.9069L 13.0931,9.49265 Z ' })
                )
            );
        }
    }]);

    return MdiArrowExpandAll;
}(React.Component);

exports.default = MdiArrowExpandAll;
module.exports = exports['default'];