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

var MdiHumanMale = function (_React$Component) {
    _inherits(MdiHumanMale, _React$Component);

    function MdiHumanMale() {
        _classCallCheck(this, MdiHumanMale);

        return _possibleConstructorReturn(this, (MdiHumanMale.__proto__ || Object.getPrototypeOf(MdiHumanMale)).apply(this, arguments));
    }

    _createClass(MdiHumanMale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,2C 13.1046,2 14,2.89543 14,4C 14,5.10457 13.1046,6 12,6C 10.8954,6 10,5.10457 10,4C 10,2.89543 10.8954,2 12,2 Z M 10.5,7.00001L 13.5,7.00001C 14.6046,7.00001 15.5,7.89544 15.5,9.00001L 15.5,14.5L 14,14.5L 14,22L 10,22L 10,14.5L 8.5,14.5L 8.5,9.00001C 8.5,7.89544 9.39543,7.00001 10.5,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiHumanMale;
}(React.Component);

exports.default = MdiHumanMale;
module.exports = exports['default'];