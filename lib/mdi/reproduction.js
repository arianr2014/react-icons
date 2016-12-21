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

var MdiReproduction = function (_React$Component) {
    _inherits(MdiReproduction, _React$Component);

    function MdiReproduction() {
        _classCallCheck(this, MdiReproduction);

        return _possibleConstructorReturn(this, (MdiReproduction.__proto__ || Object.getPrototypeOf(MdiReproduction)).apply(this, arguments));
    }

    _createClass(MdiReproduction, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.7249,13.1538L 13.6194,12.2592C 13.5967,11.0139 14.3127,9.44468 15.6213,8.13604C 17.5739,6.18342 20.1066,5.55026 21.2782,6.72183C 22.4497,7.8934 21.8166,10.4261 19.864,12.3787C 18.5553,13.6873 16.9861,14.4033 15.7407,14.3806L 14.8462,15.2751C 14.5089,15.6124 13.9906,15.6584 13.604,15.413C 12.7612,15.7148 11.9847,16.0828 11.5555,16.7981C 11.0251,17.682 11.0251,19.0962 10.4653,19.9506C 9.90554,20.805 8.78596,21.0997 7.60744,21.0997C 6.42893,21.0997 5,21 3.95406,19.5104L 6.42893,19.9211C 7,20 8.49133,19.3908 9.05112,18.5364C 9.61092,17.682 9.61092,16.2678 10.1412,15.3839C 10.6115,14.6001 11.4988,14.2333 12.4334,13.9138C 12.419,13.6405 12.5162,13.3625 12.7249,13.1538 Z M 7,2.00001C 9.76142,2.00001 12,4.23858 12,7C 12,9.76143 9.76142,12 7,12C 4.23858,12 2,9.76143 2,7C 2,4.23858 4.23857,2.00001 7,2.00001 Z M 7,4C 5.34314,4 4,5.34315 4,7C 4,8.65686 5.34314,10 7,10C 8.65685,10 10,8.65686 10,7C 10,5.34315 8.65685,4 7,4 Z ' })
                )
            );
        }
    }]);

    return MdiReproduction;
}(React.Component);

exports.default = MdiReproduction;
module.exports = exports['default'];