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

var MdiTshirtCrew = function (_React$Component) {
    _inherits(MdiTshirtCrew, _React$Component);

    function MdiTshirtCrew() {
        _classCallCheck(this, MdiTshirtCrew);

        return _possibleConstructorReturn(this, (MdiTshirtCrew.__proto__ || Object.getPrototypeOf(MdiTshirtCrew)).apply(this, arguments));
    }

    _createClass(MdiTshirtCrew, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16,21L 8,21C 7.44771,21 7,20.5523 7,20L 6.99999,12.0732L 5.70342,13.1198C 5.3129,13.5103 4.67973,13.5103 4.28921,13.1198L 1.46078,10.2914C 1.07026,9.90085 1.07026,9.26769 1.46078,8.87717L 7.33792,3.00001L 9,3.00002C 9,4.10458 10.3431,5.00001 12,5.00001C 13.6568,5.00001 15,4.10458 15,3.00002L 16.6621,3.00001L 22.5392,8.87717C 22.9297,9.26769 22.9297,9.90086 22.5392,10.2914L 19.7108,13.1198C 19.3203,13.5103 18.6871,13.5103 18.2966,13.1198L 17,12.0732L 17,20C 17,20.5523 16.5523,21 16,21 Z M 20.4179,9.58429L 16.111,5.27742C 15.8047,5.63062 15.4291,5.94245 15,6.20032C 14.1643,6.70247 13.1256,7.00002 12,7.00002C 10.2963,7.00002 8.79171,6.31839 7.88896,5.27743L 3.5821,9.58429L 4.99631,10.9985L 7.99479,9.00003L 8.99999,9.00003L 8.99999,19L 15,19L 15,9.00003L 16.0052,9.00003L 19.0037,10.9985L 20.4179,9.58429 Z ' })
                )
            );
        }
    }]);

    return MdiTshirtCrew;
}(React.Component);

exports.default = MdiTshirtCrew;
module.exports = exports['default'];