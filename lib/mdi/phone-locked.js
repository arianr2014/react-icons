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

var MdiPhoneLocked = function (_React$Component) {
    _inherits(MdiPhoneLocked, _React$Component);

    function MdiPhoneLocked() {
        _classCallCheck(this, MdiPhoneLocked);

        return _possibleConstructorReturn(this, (MdiPhoneLocked.__proto__ || Object.getPrototypeOf(MdiPhoneLocked)).apply(this, arguments));
    }

    _createClass(MdiPhoneLocked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.1996,3.99807L 15.7996,3.99807L 15.7996,3.50007C 15.7996,2.56006 16.5586,1.79807 17.4986,1.79807C 18.4376,1.79807 19.1996,2.56006 19.1996,3.50007M 19.9996,3.99807L 19.9996,3.50007C 19.9996,2.11807 18.8796,0.998068 17.4976,0.998068C 16.1166,0.998068 14.9996,2.11807 14.9996,3.50007L 14.9996,3.99807C 14.4466,3.99807 13.9996,4.44607 13.9996,4.99807L 13.9996,8.99807C 13.9996,9.55007 14.4466,9.99807 14.9996,9.99807L 19.9996,9.99807C 20.5516,9.99807 20.9996,9.55007 20.9996,8.99807L 20.9996,4.99807C 20.9996,4.44607 20.5516,3.99807 19.9996,3.99807 Z M 19.9996,15.4981C 18.7526,15.4981 17.5516,15.2971 16.4266,14.9301C 16.0816,14.8181 15.6866,14.9001 15.4116,15.1751L 13.2116,17.3781C 10.3786,15.9371 8.06458,13.6241 6.62259,10.7931L 8.8226,8.58506C 9.09659,8.31107 9.17859,7.91607 9.0676,7.57007C 8.69958,6.44507 8.4996,5.24507 8.4996,3.99807C 8.4996,3.44507 8.05157,2.99807 7.4996,2.99807L 3.9996,2.99807C 3.4476,2.99807 2.9996,3.44507 2.9996,3.99807C 2.9996,13.3867 10.6106,20.9981 19.9996,20.9981C 20.5516,20.9981 20.9996,20.5511 20.9996,19.9981L 20.9996,16.4981C 20.9996,15.9451 20.5516,15.4981 19.9996,15.4981 Z ' })
                )
            );
        }
    }]);

    return MdiPhoneLocked;
}(React.Component);

exports.default = MdiPhoneLocked;
module.exports = exports['default'];