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

var MdiImageBroken = function (_React$Component) {
    _inherits(MdiImageBroken, _React$Component);

    function MdiImageBroken() {
        _classCallCheck(this, MdiImageBroken);

        return _possibleConstructorReturn(this, (MdiImageBroken.__proto__ || Object.getPrototypeOf(MdiImageBroken)).apply(this, arguments));
    }

    _createClass(MdiImageBroken, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9989,3C 20.104,3 21,3.89551 21,5L 21,11L 19,11L 19,13L 18.9988,13L 17,13L 17,15L 15,15L 15,17L 13,17L 13,19L 11,19L 11,21L 4.99105,21C 3.88607,21 3,20.1045 3,19L 3,5C 3,3.89551 3.88607,3 4.99105,3L 18.9989,3 Z M 21,15L 21,19C 21,20.1041 20.1046,20.9994 19,21L 18.9989,21L 15,21L 15,19L 17,19L 17,17L 19,17L 19,15L 21,15 Z M 18.9988,8.50002C 18.9988,8.22398 18.7749,8.00002 18.4985,8.00002L 5.49136,8.00002C 5.21516,8.00002 4.99104,8.22398 4.99104,8.50002L 4.99104,15.5C 4.99104,15.7761 5.21516,16 5.49136,16L 11,16L 11,15L 13,15L 13,13L 15,13L 15,11L 17,11L 17,9.00001L 18.9988,9.00001L 18.9988,8.50002 Z ' })
                )
            );
        }
    }]);

    return MdiImageBroken;
}(React.Component);

exports.default = MdiImageBroken;
module.exports = exports['default'];