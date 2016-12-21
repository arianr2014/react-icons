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

var MdiNoteMultiple = function (_React$Component) {
    _inherits(MdiNoteMultiple, _React$Component);

    function MdiNoteMultiple() {
        _classCallCheck(this, MdiNoteMultiple);

        return _possibleConstructorReturn(this, (MdiNoteMultiple.__proto__ || Object.getPrototypeOf(MdiNoteMultiple)).apply(this, arguments));
    }

    _createClass(MdiNoteMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,9L 21.5,9L 16,3.49999L 16,9 Z M 7,2L 17,2L 23,8L 23,18C 23,19.104 22.104,20 21,20L 6.98999,20C 5.88599,20 5,19.104 5,18L 5.01001,4C 5.01001,2.89599 5.89498,2 7,2 Z M 3,6L 3,22L 21,22L 21,24L 3,24C 1.90001,24 1,23.1 1,22L 1,6L 3,6 Z ' })
                )
            );
        }
    }]);

    return MdiNoteMultiple;
}(React.Component);

exports.default = MdiNoteMultiple;
module.exports = exports['default'];