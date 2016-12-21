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

var MdiChairSchool = function (_React$Component) {
    _inherits(MdiChairSchool, _React$Component);

    function MdiChairSchool() {
        _classCallCheck(this, MdiChairSchool);

        return _possibleConstructorReturn(this, (MdiChairSchool.__proto__ || Object.getPrototypeOf(MdiChairSchool)).apply(this, arguments));
    }

    _createClass(MdiChairSchool, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22,5L 22,7L 17.0089,7L 13.5326,12L 16,12L 16,14L 14.4632,14L 18.1691,22L 15.965,22L 15.0385,20L 6.38418,20L 5.35074,22L 3.09952,22L 7.23328,14L 7,14C 6.55086,14 6.17087,13.7039 6.04461,13.2962L 2.86808,3.83882L 3.81604,3.52042C 4.33958,3.34458 4.90655,3.62644 5.08239,4.14998L 7.71903,12L 12.0967,12L 15.573,7L 12,7L 12,5L 22,5 Z M 9.4845,14L 7.41762,18L 14.112,18L 12.2591,14L 9.4845,14 Z ' })
                )
            );
        }
    }]);

    return MdiChairSchool;
}(React.Component);

exports.default = MdiChairSchool;
module.exports = exports['default'];