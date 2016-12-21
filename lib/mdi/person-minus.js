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

var MdiPersonMinus = function (_React$Component) {
    _inherits(MdiPersonMinus, _React$Component);

    function MdiPersonMinus() {
        _classCallCheck(this, MdiPersonMinus);

        return _possibleConstructorReturn(this, (MdiPersonMinus.__proto__ || Object.getPrototypeOf(MdiPersonMinus)).apply(this, arguments));
    }

    _createClass(MdiPersonMinus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 1,10L 9,10L 9,12L 1,12L 1,10 Z M 15,4C 17.2091,4 19,5.79086 19,8C 19,10.2091 17.2091,12 15,12C 12.7909,12 11,10.2091 11,8C 11,5.79086 12.7909,4 15,4 Z M 23,17L 23,20L 7,20L 7,17C 7,15.3431 10.5817,14 15,14C 19.4183,14 23,15.3431 23,17 Z ' })
                )
            );
        }
    }]);

    return MdiPersonMinus;
}(React.Component);

exports.default = MdiPersonMinus;
module.exports = exports['default'];