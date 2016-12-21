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

var MdiTrash = function (_React$Component) {
    _inherits(MdiTrash, _React$Component);

    function MdiTrash() {
        _classCallCheck(this, MdiTrash);

        return _possibleConstructorReturn(this, (MdiTrash.__proto__ || Object.getPrototypeOf(MdiTrash)).apply(this, arguments));
    }

    _createClass(MdiTrash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7.99991,21.0001C 6.89534,21.0001 5.99991,20.1047 5.99991,19.0001L 6,7L 18,7L 17.9999,19.0001C 17.9999,20.1047 17.1045,21.0001 15.9999,21.0001L 7.99991,21.0001 Z M 4.99995,6.00003L 4.99995,4.00005L 8.49995,4.00005L 9.49995,3.00005L 14.5,3L 15.5,4L 19,4.00005L 18.9999,6.00004L 4.99995,6.00003 Z ' })
                )
            );
        }
    }]);

    return MdiTrash;
}(React.Component);

exports.default = MdiTrash;
module.exports = exports['default'];