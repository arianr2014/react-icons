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

var MdiGenderFemale = function (_React$Component) {
    _inherits(MdiGenderFemale, _React$Component);

    function MdiGenderFemale() {
        _classCallCheck(this, MdiGenderFemale);

        return _possibleConstructorReturn(this, (MdiGenderFemale.__proto__ || Object.getPrototypeOf(MdiGenderFemale)).apply(this, arguments));
    }

    _createClass(MdiGenderFemale, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,4C 15.3137,4 18,6.68629 18,10C 18,12.973 15.8377,15.441 13,15.917L 13,18L 15,18L 15,20L 13,20L 13,22L 11,22L 11,20L 9,20L 9,18L 11,18L 11,15.917C 8.16229,15.441 6,12.973 6,10C 6,6.68629 8.68629,4 12,4 Z M 12,6C 9.79086,6 8,7.79086 8,10C 8,12.2091 9.79086,14 12,14C 14.2091,14 16,12.2091 16,10C 16,7.79087 14.2091,6 12,6 Z ' })
                )
            );
        }
    }]);

    return MdiGenderFemale;
}(React.Component);

exports.default = MdiGenderFemale;
module.exports = exports['default'];