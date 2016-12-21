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

var MdiVectorLine = function (_React$Component) {
    _inherits(MdiVectorLine, _React$Component);

    function MdiVectorLine() {
        _classCallCheck(this, MdiVectorLine);

        return _possibleConstructorReturn(this, (MdiVectorLine.__proto__ || Object.getPrototypeOf(MdiVectorLine)).apply(this, arguments));
    }

    _createClass(MdiVectorLine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15,2.9978L 15,7.5875L 7.5875,15L 2.9975,15L 2.9975,21.0012L 8.99875,21.0012L 8.99875,16.4162L 16.4163,8.99875L 21.0013,8.99875L 21.0013,2.9978M 17.0025,5L 18.9988,5L 18.9988,7.0025L 17.0025,7.0025M 5,17.0025L 7.0025,17.0025L 7.0025,18.9988L 5,18.9988' })
                )
            );
        }
    }]);

    return MdiVectorLine;
}(React.Component);

exports.default = MdiVectorLine;
module.exports = exports['default'];