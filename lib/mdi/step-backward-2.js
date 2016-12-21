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

var MdiStepBackward2 = function (_React$Component) {
    _inherits(MdiStepBackward2, _React$Component);

    function MdiStepBackward2() {
        _classCallCheck(this, MdiStepBackward2);

        return _possibleConstructorReturn(this, (MdiStepBackward2.__proto__ || Object.getPrototypeOf(MdiStepBackward2)).apply(this, arguments));
    }

    _createClass(MdiStepBackward2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9988,5.00126L 14,5.00126L 14,19L 16.9988,19L 16.9988,5.00126 Z M 11.9987,5.00001L 0.997503,12.0025L 11.9987,18.9988L 11.9987,5.00001 Z M 22,5.00126L 19.0012,5.00126L 19.0012,19L 22,19L 22,5.00126 Z ' })
                )
            );
        }
    }]);

    return MdiStepBackward2;
}(React.Component);

exports.default = MdiStepBackward2;
module.exports = exports['default'];