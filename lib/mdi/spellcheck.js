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

var MdiSpellcheck = function (_React$Component) {
    _inherits(MdiSpellcheck, _React$Component);

    function MdiSpellcheck() {
        _classCallCheck(this, MdiSpellcheck);

        return _possibleConstructorReturn(this, (MdiSpellcheck.__proto__ || Object.getPrototypeOf(MdiSpellcheck)).apply(this, arguments));
    }

    _createClass(MdiSpellcheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 21.59,11.59L 13.5,19.68L 9.83,16L 8.42,17.41L 13.51,22.5L 23,13M 6.43,11L 8.5,5.48L 10.57,11M 12.45,16L 14.54,16L 9.43,3L 7.57,3L 2.46,16L 4.55,16L 5.67,13L 11.31,13L 12.45,16 Z ' })
                )
            );
        }
    }]);

    return MdiSpellcheck;
}(React.Component);

exports.default = MdiSpellcheck;
module.exports = exports['default'];