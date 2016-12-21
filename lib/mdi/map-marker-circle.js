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

var MdiMapMarkerCircle = function (_React$Component) {
    _inherits(MdiMapMarkerCircle, _React$Component);

    function MdiMapMarkerCircle() {
        _classCallCheck(this, MdiMapMarkerCircle);

        return _possibleConstructorReturn(this, (MdiMapMarkerCircle.__proto__ || Object.getPrototypeOf(MdiMapMarkerCircle)).apply(this, arguments));
    }

    _createClass(MdiMapMarkerCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,19.9981C 7.58139,19.9981 3.99939,16.4161 3.99939,11.9981C 3.99939,7.58007 7.58139,3.99807 11.9994,3.99807C 16.4174,3.99807 19.9994,7.58007 19.9994,11.9981C 19.9994,16.4161 16.4174,19.9981 11.9994,19.9981 Z M 11.9994,1.99807C 6.47639,1.99807 1.99939,6.47507 1.99939,11.9981C 1.99939,17.5211 6.47639,21.9981 11.9994,21.9981C 17.5224,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47507 17.5224,1.99807 11.9994,1.99807 Z M 11.9994,12.4981C 11.1714,12.4981 10.4994,11.8261 10.4994,10.9981C 10.4994,10.1691 11.1714,9.49807 11.9994,9.49807C 12.8284,9.49807 13.4994,10.1691 13.4994,10.9981C 13.4994,11.8261 12.8284,12.4981 11.9994,12.4981 Z M 11.9994,7.19806C 9.90138,7.19806 8.19939,8.89907 8.19939,10.9981C 8.19939,13.9981 11.9994,17.4981 11.9994,17.4981C 11.9994,17.4981 15.7994,13.9981 15.7994,10.9981C 15.7994,8.89907 14.0974,7.19806 11.9994,7.19806 Z ' })
                )
            );
        }
    }]);

    return MdiMapMarkerCircle;
}(React.Component);

exports.default = MdiMapMarkerCircle;
module.exports = exports['default'];