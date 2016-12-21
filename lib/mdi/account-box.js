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

var MdiAccountBox = function (_React$Component) {
    _inherits(MdiAccountBox, _React$Component);

    function MdiAccountBox() {
        _classCallCheck(this, MdiAccountBox);

        return _possibleConstructorReturn(this, (MdiAccountBox.__proto__ || Object.getPrototypeOf(MdiAccountBox)).apply(this, arguments));
    }

    _createClass(MdiAccountBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.9994,17C 5.9994,15 9.9994,13.9 11.9994,13.9C 13.9994,13.9 17.9994,15 17.9994,17L 17.9994,18L 5.9994,18M 14.9994,9C 14.9994,10.658 13.6554,12 11.9994,12C 10.3434,12 8.9994,10.658 8.9994,9C 8.9994,7.34399 10.3434,6 11.9994,6C 13.6554,6 14.9994,7.34399 14.9994,9 Z M 2.9994,5L 2.9994,19C 2.9994,20.104 3.8934,21 4.9994,21L 18.9994,21C 20.1029,21 20.9994,20.104 20.9994,19L 20.9994,5C 20.9994,3.896 20.1029,3 18.9994,3L 4.9994,3C 3.8934,3 2.9994,3.896 2.9994,5 Z ' })
                )
            );
        }
    }]);

    return MdiAccountBox;
}(React.Component);

exports.default = MdiAccountBox;
module.exports = exports['default'];