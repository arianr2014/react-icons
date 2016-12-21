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

var MdiFileMove = function (_React$Component) {
    _inherits(MdiFileMove, _React$Component);

    function MdiFileMove() {
        _classCallCheck(this, MdiFileMove);

        return _possibleConstructorReturn(this, (MdiFileMove.__proto__ || Object.getPrototypeOf(MdiFileMove)).apply(this, arguments));
    }

    _createClass(MdiFileMove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 6.00125,1.9975L 13.9987,1.9975L 20,7.9975L 20,20C 20,21.1037 19.1012,21.9975 17.9975,21.9975L 5.99125,21.9975C 4.8875,21.9975 3.99875,21.1037 3.99875,20L 4.00875,3.99875C 4.00875,2.895 4.8925,1.9975 6.00125,1.9975 Z M 12,14L 6,13.9972L 6,17.0009L 12,17.0037L 12,19L 15.9987,15.4987L 12,12.0038L 12,14 Z M 12.9975,3.49585L 12.9975,8.99875L 18.5012,8.99875L 12.9975,3.49585 Z ' })
                )
            );
        }
    }]);

    return MdiFileMove;
}(React.Component);

exports.default = MdiFileMove;
module.exports = exports['default'];