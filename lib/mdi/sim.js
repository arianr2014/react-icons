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

var MdiSim = function (_React$Component) {
    _inherits(MdiSim, _React$Component);

    function MdiSim() {
        _classCallCheck(this, MdiSim);

        return _possibleConstructorReturn(this, (MdiSim.__proto__ || Object.getPrototypeOf(MdiSim)).apply(this, arguments));
    }

    _createClass(MdiSim, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 19.9902,4C 19.9902,2.9 19.1,2 18,2L 10,2L 4,8L 4,20C 4,21.1 4.9,22 6,22L 18.0098,22C 19.11,22 20,21.1 20,20L 19.9902,4 Z M 9,19L 7,19L 7,17L 9,17L 9,19 Z M 17,19L 15,19L 15,17L 17,17L 17,19 Z M 9,15L 7,15L 7,11L 9,11L 9,15 Z M 13,19L 11,19L 11,15L 13,15L 13,19 Z M 13,13L 11,13L 11,11L 13,11L 13,13 Z M 17,15L 15,15L 15,11L 17,11L 17,15 Z ' })
                )
            );
        }
    }]);

    return MdiSim;
}(React.Component);

exports.default = MdiSim;
module.exports = exports['default'];