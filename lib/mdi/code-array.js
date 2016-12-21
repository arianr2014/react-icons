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

var MdiCodeArray = function (_React$Component) {
    _inherits(MdiCodeArray, _React$Component);

    function MdiCodeArray() {
        _classCallCheck(this, MdiCodeArray);

        return _possibleConstructorReturn(this, (MdiCodeArray.__proto__ || Object.getPrototypeOf(MdiCodeArray)).apply(this, arguments));
    }

    _createClass(MdiCodeArray, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.9994,5C 2.9994,3.896 3.8934,3 4.9994,3L 18.9994,3C 20.1029,3 20.9994,3.896 20.9994,5L 20.9994,19C 20.9994,20.104 20.1029,21 18.9994,21L 4.9994,21C 3.8934,21 2.9994,20.104 2.9994,19L 2.9994,5 Z M 6,6.00001L 6,18L 10,18L 10,16L 8,16L 8,8L 10,8L 10,6.00001L 6,6.00001 Z M 16,16L 14,16L 14,18L 18,18L 18,6.00001L 14,6L 14,8L 16,8L 16,16 Z ' })
                )
            );
        }
    }]);

    return MdiCodeArray;
}(React.Component);

exports.default = MdiCodeArray;
module.exports = exports['default'];