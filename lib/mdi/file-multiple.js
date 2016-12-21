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

var MdiFileMultiple = function (_React$Component) {
    _inherits(MdiFileMultiple, _React$Component);

    function MdiFileMultiple() {
        _classCallCheck(this, MdiFileMultiple);

        return _possibleConstructorReturn(this, (MdiFileMultiple.__proto__ || Object.getPrototypeOf(MdiFileMultiple)).apply(this, arguments));
    }

    _createClass(MdiFileMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,7L 20.5,7L 15,1.5L 15,7 Z M 8,1.90735e-006L 16,1.90735e-006L 22,6L 22,18C 22,19.104 21.104,20 20,20L 7.98999,20C 6.88599,20 6,19.104 6,18L 6.01001,2C 6.01001,0.895998 6.89498,1.90735e-006 8,1.90735e-006 Z M 4,4L 4,22L 20,22L 20,24L 4,24C 2.9,24 2,23.1 2,22L 2,4L 4,4 Z ' })
                )
            );
        }
    }]);

    return MdiFileMultiple;
}(React.Component);

exports.default = MdiFileMultiple;
module.exports = exports['default'];