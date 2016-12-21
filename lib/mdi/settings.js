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

var MdiSettings = function (_React$Component) {
    _inherits(MdiSettings, _React$Component);

    function MdiSettings() {
        _classCallCheck(this, MdiSettings);

        return _possibleConstructorReturn(this, (MdiSettings.__proto__ || Object.getPrototypeOf(MdiSettings)).apply(this, arguments));
    }

    _createClass(MdiSettings, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,15.498C 10.0664,15.498 8.49939,13.931 8.49939,11.998C 8.49939,10.0651 10.0664,8.49805 11.9994,8.49805C 13.9324,8.49805 15.4994,10.0651 15.4994,11.998C 15.4994,13.931 13.9324,15.498 11.9994,15.498 Z M 19.4284,12.9741C 19.4704,12.6531 19.4984,12.329 19.4984,11.998C 19.4984,11.6671 19.4704,11.343 19.4284,11.022L 21.5414,9.36804C 21.7294,9.21606 21.7844,8.94604 21.6594,8.73004L 19.6594,5.26605C 19.5354,5.05005 19.2734,4.96204 19.0474,5.04907L 16.5584,6.05206C 16.0424,5.65607 15.4774,5.32104 14.8684,5.06903L 14.4934,2.41907C 14.4554,2.18103 14.2484,1.99805 13.9994,1.99805L 9.99939,1.99805C 9.74939,1.99805 9.5434,2.18103 9.5054,2.41907L 9.1304,5.06805C 8.52039,5.32104 7.95538,5.65607 7.43939,6.05206L 4.95139,5.04907C 4.7254,4.96204 4.46338,5.05005 4.33939,5.26605L 2.33939,8.73004C 2.21439,8.94604 2.26938,9.21606 2.4574,9.36804L 4.5694,11.022C 4.5274,11.342 4.49939,11.6671 4.49939,11.998C 4.49939,12.329 4.5274,12.6541 4.5694,12.9741L 2.4574,14.6271C 2.26938,14.78 2.21439,15.05 2.33939,15.2661L 4.33939,18.73C 4.46338,18.946 4.7254,19.0341 4.95139,18.947L 7.4404,17.944C 7.95639,18.34 8.52139,18.675 9.1304,18.9271L 9.5054,21.577C 9.5434,21.8151 9.74939,21.998 9.99939,21.998L 13.9994,21.998C 14.2484,21.998 14.4554,21.8151 14.4934,21.577L 14.8684,18.9271C 15.4764,18.6741 16.0414,18.34 16.5574,17.9431L 19.0474,18.947C 19.2734,19.0341 19.5354,18.946 19.6594,18.73L 21.6594,15.2661C 21.7844,15.05 21.7294,14.78 21.5414,14.6271L 19.4284,12.9741 Z ' })
                )
            );
        }
    }]);

    return MdiSettings;
}(React.Component);

exports.default = MdiSettings;
module.exports = exports['default'];