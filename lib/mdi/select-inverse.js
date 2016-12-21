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

var MdiSelectInverse = function (_React$Component) {
    _inherits(MdiSelectInverse, _React$Component);

    function MdiSelectInverse() {
        _classCallCheck(this, MdiSelectInverse);

        return _possibleConstructorReturn(this, (MdiSelectInverse.__proto__ || Object.getPrototypeOf(MdiSelectInverse)).apply(this, arguments));
    }

    _createClass(MdiSelectInverse, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.00001,3L 7,3.00001L 7,5.00001L 9,5.00001L 9,3.00001L 11,3.00001L 11,5.00001L 13,5.00001L 13,3.00001L 15,3.00001L 15,5.00001L 17,5.00001L 17,3.00001L 19,3.00001L 19,5.00001L 21,5.00001L 21,7.00001L 19,7.00001L 19,9.00001L 21,9.00001L 21,11L 19,11L 19,13L 21,13L 21,15L 19,15L 19,17L 21,17L 21,19L 19,19L 19,21L 17,21L 17,19L 15,19L 15,21L 13,21L 13,19L 11,19L 11,21L 9,21L 9,19L 7,19L 7,21L 5,21L 5,19L 3,19L 3,17L 5,17L 5,15L 3,15L 3,13L 5,13L 5,11L 3,11L 3,9.00001L 5,9.00001L 5,7.00001L 3,7.00001L 3,5L 5.00001,5L 5.00001,3 Z ' })
                )
            );
        }
    }]);

    return MdiSelectInverse;
}(React.Component);

exports.default = MdiSelectInverse;
module.exports = exports['default'];