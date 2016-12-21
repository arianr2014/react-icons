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

var MdiAppleMobileme = function (_React$Component) {
    _inherits(MdiAppleMobileme, _React$Component);

    function MdiAppleMobileme() {
        _classCallCheck(this, MdiAppleMobileme);

        return _possibleConstructorReturn(this, (MdiAppleMobileme.__proto__ || Object.getPrototypeOf(MdiAppleMobileme)).apply(this, arguments));
    }

    _createClass(MdiAppleMobileme, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,15.0445C 22,17.2291 20.2422,19 18.0733,19L 5.92668,19C 3.75779,19 2.00001,17.2291 2.00001,15.0445C 2.00001,13.0713 3.43333,11.4367 5.3089,11.1378C 5.28446,10.9991 5.27111,10.8569 5.27111,10.7102C 5.27111,9.326 6.38445,8.20378 7.76002,8.20378C 8.37335,8.20378 8.93555,8.42712 9.36668,8.79867C 10.14,7.04512 11.1311,5.44445 13.9089,5.44445C 17.2778,5.44445 18.8734,8.06267 18.8734,10.8251C 18.8734,10.9407 18.8689,11.0551 18.8622,11.1684C 20.6533,11.536 22,13.1316 22,15.0445 Z ' })
                )
            );
        }
    }]);

    return MdiAppleMobileme;
}(React.Component);

exports.default = MdiAppleMobileme;
module.exports = exports['default'];