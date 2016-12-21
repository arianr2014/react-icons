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

var MdiTimerSandEmpty = function (_React$Component) {
    _inherits(MdiTimerSandEmpty, _React$Component);

    function MdiTimerSandEmpty() {
        _classCallCheck(this, MdiTimerSandEmpty);

        return _possibleConstructorReturn(this, (MdiTimerSandEmpty.__proto__ || Object.getPrototypeOf(MdiTimerSandEmpty)).apply(this, arguments));
    }

    _createClass(MdiTimerSandEmpty, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,2L 20,4L 18,4L 18,8.41421L 14.4142,12L 18,15.5858L 18,20L 20,20L 20,22L 4,22L 4,20L 6,20L 6,15.5858L 9.58578,12L 6,8.41422L 6,4L 4,4L 4,2L 20,2 Z M 16,16.4142L 13,13.4142L 13,10.5858L 16,7.5858L 16,4.00001L 8,4.00001L 8,7.5858L 11,10.5858L 11,13.4142L 7.99999,16.4142L 8,20L 16,20L 16,16.4142 Z ' })
                )
            );
        }
    }]);

    return MdiTimerSandEmpty;
}(React.Component);

exports.default = MdiTimerSandEmpty;
module.exports = exports['default'];