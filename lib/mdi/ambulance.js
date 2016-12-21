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

var MdiAmbulance = function (_React$Component) {
    _inherits(MdiAmbulance, _React$Component);

    function MdiAmbulance() {
        _classCallCheck(this, MdiAmbulance);

        return _possibleConstructorReturn(this, (MdiAmbulance.__proto__ || Object.getPrototypeOf(MdiAmbulance)).apply(this, arguments));
    }

    _createClass(MdiAmbulance, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,18.4981C 18.8274,18.4981 19.4994,17.8261 19.4994,16.9981C 19.4994,16.1701 18.8274,15.4981 17.9994,15.4981C 17.1714,15.4981 16.4994,16.1701 16.4994,16.9981C 16.4994,17.8261 17.1714,18.4981 17.9994,18.4981 Z M 19.4994,9.49807L 16.9994,9.49807L 16.9994,11.9981L 21.4634,11.9981L 19.4994,9.49807 Z M 5.99941,18.4981C 6.82741,18.4981 7.49941,17.8261 7.49941,16.9981C 7.49941,16.1701 6.82741,15.4981 5.99941,15.4981C 5.17141,15.4981 4.49941,16.1701 4.49941,16.9981C 4.49941,17.8261 5.17141,18.4981 5.99941,18.4981 Z M 19.9994,7.99807L 22.9994,11.9981L 22.9994,16.9981L 20.9994,16.9981C 20.9994,18.6551 19.6564,19.9981 17.9994,19.9981C 16.3424,19.9981 14.9994,18.6551 14.9994,16.9981L 8.99941,16.9981C 8.99941,18.6551 7.65641,19.9981 5.99941,19.9981C 4.34241,19.9981 2.99941,18.6551 2.99941,16.9981L 0.99941,16.9981L 0.99941,5.99807C 0.99941,4.89307 1.89441,3.99807 2.99941,3.99807L 16.9994,3.99807L 16.9994,7.99807L 19.9994,7.99807 Z M 8,6L 8,9L 5,9L 5,11L 8,11L 8,14L 10,14L 10,11L 13,11L 13,9L 10,9L 10,6L 8,6 Z ' })
                )
            );
        }
    }]);

    return MdiAmbulance;
}(React.Component);

exports.default = MdiAmbulance;
module.exports = exports['default'];