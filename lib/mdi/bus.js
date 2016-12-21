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

var MdiBus = function (_React$Component) {
    _inherits(MdiBus, _React$Component);

    function MdiBus() {
        _classCallCheck(this, MdiBus);

        return _possibleConstructorReturn(this, (MdiBus.__proto__ || Object.getPrototypeOf(MdiBus)).apply(this, arguments));
    }

    _createClass(MdiBus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,10.9981L 5.99939,10.9981L 5.99939,5.99807L 17.9994,5.99807M 16.4994,16.9981C 15.6714,16.9981 14.9994,16.3261 14.9994,15.4981C 14.9994,14.6701 15.6714,13.9981 16.4994,13.9981C 17.3284,13.9981 17.9994,14.6701 17.9994,15.4981C 17.9994,16.3261 17.3284,16.9981 16.4994,16.9981 Z M 7.49939,16.9981C 6.67139,16.9981 5.99939,16.3261 5.99939,15.4981C 5.99939,14.6701 6.67139,13.9981 7.49939,13.9981C 8.3284,13.9981 8.99939,14.6701 8.99939,15.4981C 8.99939,16.3261 8.3284,16.9981 7.49939,16.9981 Z M 3.99939,15.9981C 3.99939,16.8831 4.38939,17.6701 4.99939,18.2191L 4.99939,19.9981C 4.99939,20.5501 5.44739,20.9981 5.99939,20.9981L 6.99939,20.9981C 7.5524,20.9981 7.99939,20.5501 7.99939,19.9981L 7.99939,18.9981L 15.9994,18.9981L 15.9994,19.9981C 15.9994,20.5501 16.4464,20.9981 16.9994,20.9981L 17.9994,20.9981C 18.5514,20.9981 18.9994,20.5501 18.9994,19.9981L 18.9994,18.2191C 19.6094,17.6701 19.9994,16.8831 19.9994,15.9981L 19.9994,5.99807C 19.9994,2.49807 16.4174,1.99807 11.9994,1.99807C 7.5814,1.99807 3.99939,2.49807 3.99939,5.99807L 3.99939,15.9981 Z ' })
                )
            );
        }
    }]);

    return MdiBus;
}(React.Component);

exports.default = MdiBus;
module.exports = exports['default'];