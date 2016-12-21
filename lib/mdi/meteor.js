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

var MdiMeteor = function (_React$Component) {
    _inherits(MdiMeteor, _React$Component);

    function MdiMeteor() {
        _classCallCheck(this, MdiMeteor);

        return _possibleConstructorReturn(this, (MdiMeteor.__proto__ || Object.getPrototypeOf(MdiMeteor)).apply(this, arguments));
    }

    _createClass(MdiMeteor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 2.8,3.0083L 19.6741,18.8226C 19.6741,18.8226 19.9913,19.2663 19.579,19.71C 19.1666,20.1537 18.6274,19.7734 18.6274,19.7734L 2.8,3.0083 Z M 7.81149,4.59291L 20.9111,16.6359C 20.9111,16.6359 21.2283,17.0796 20.816,17.5232C 20.4037,17.9669 19.8644,17.5866 19.8644,17.5866L 7.81149,4.59291 Z M 4.29075,7.98396L 17.3904,20.0269C 17.3904,20.0269 17.7076,20.4706 17.2953,20.9143C 16.8829,21.358 16.3437,20.9777 16.3437,20.9777L 4.29075,7.98396 Z M 12.0481,5.95567L 21.2,14.3694C 21.2,14.3694 21.4216,14.6793 21.1335,14.9893C 20.8454,15.2993 20.4687,15.0336 20.4687,15.0336L 12.0481,5.95567 Z M 5.45065,11.9138L 14.6026,20.3275C 14.6026,20.3275 14.8242,20.6374 14.5361,20.9474C 14.248,21.2574 13.8713,20.9917 13.8713,20.9917L 5.45065,11.9138 Z M 16.3754,7.92057L 20.5537,11.7362C 20.5537,11.7362 20.6633,11.8815 20.5208,12.0267C 20.3783,12.172 20.192,12.0475 20.192,12.0475L 16.3754,7.92057 Z M 7.55774,16.0971L 11.736,19.9128C 11.736,19.9128 11.8456,20.058 11.7031,20.2033C 11.5606,20.3485 11.3743,20.224 11.3743,20.224L 7.55774,16.0971 Z ' })
                )
            );
        }
    }]);

    return MdiMeteor;
}(React.Component);

exports.default = MdiMeteor;
module.exports = exports['default'];