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

var MdiDirectionsFork = function (_React$Component) {
    _inherits(MdiDirectionsFork, _React$Component);

    function MdiDirectionsFork() {
        _classCallCheck(this, MdiDirectionsFork);

        return _possibleConstructorReturn(this, (MdiDirectionsFork.__proto__ || Object.getPrototypeOf(MdiDirectionsFork)).apply(this, arguments));
    }

    _createClass(MdiDirectionsFork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.9975,3.99875L 2.9975,12.5L 6.00125,9.5025L 8.99875,12.9975C 10,13.9987 10,15 10,15L 10,21.0012L 13.9987,21.0012L 13.9987,13.9987C 13.9987,13.9987 13.9987,12.9975 13.4663,12.0025C 12.935,11.0012 12.0025,10 12.0025,10L 8.99875,6.5825L 11.4987,3.99875M 17.9975,3.99875L 13.535,8.46625L 13.9987,8.99875C 13.9987,8.99875 14.9312,10 15.4688,11.0012C 15.6837,11.4012 15.7963,11.7875 15.8737,12.1287L 21.0013,7.0025' })
                )
            );
        }
    }]);

    return MdiDirectionsFork;
}(React.Component);

exports.default = MdiDirectionsFork;
module.exports = exports['default'];