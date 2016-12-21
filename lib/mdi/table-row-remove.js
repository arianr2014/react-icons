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

var MdiTableRowRemove = function (_React$Component) {
    _inherits(MdiTableRowRemove, _React$Component);

    function MdiTableRowRemove() {
        _classCallCheck(this, MdiTableRowRemove);

        return _possibleConstructorReturn(this, (MdiTableRowRemove.__proto__ || Object.getPrototypeOf(MdiTableRowRemove)).apply(this, arguments));
    }

    _createClass(MdiTableRowRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 9.41422,13L 12,15.5858L 14.5858,13L 16,14.4142L 13.4142,17L 16,19.5858L 14.5858,21L 12,18.4142L 9.4142,21L 8,19.5858L 10.5858,17L 8,14.4142L 9.41422,13 Z M 21.9999,9.00001C 21.9999,10.1046 21.1045,11 20,11L 4,11C 2.89543,11 2,10.1046 2,9.00001L 2.00004,6.00001C 2.00004,4.89544 2.89547,4.00001 4.00004,4.00001L 20,4.00001C 21.1046,4.00001 22,4.89544 22,6.00001L 21.9999,9.00001 Z M 3.99999,9.00002L 7.99998,9.00002L 8.00002,5.99999L 4.00004,6L 3.99999,9.00002 Z M 9.99996,9.00002L 14,9.00001L 14,6.00001L 10,5.99999L 9.99996,9.00002 Z M 16,9.00001L 20,9.00002L 20,6L 16,6.00001L 16,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiTableRowRemove;
}(React.Component);

exports.default = MdiTableRowRemove;
module.exports = exports['default'];