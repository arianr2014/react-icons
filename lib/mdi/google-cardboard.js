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

var MdiGoogleCardboard = function (_React$Component) {
    _inherits(MdiGoogleCardboard, _React$Component);

    function MdiGoogleCardboard() {
        _classCallCheck(this, MdiGoogleCardboard);

        return _possibleConstructorReturn(this, (MdiGoogleCardboard.__proto__ || Object.getPrototypeOf(MdiGoogleCardboard)).apply(this, arguments));
    }

    _createClass(MdiGoogleCardboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.7422,6.00125L 3.20375,6.00125C 2.55375,6.00125 2.0025,6.5675 2.0025,7.27L 2.0025,17.73C 2.0025,18.4325 2.55375,18.9988 3.2325,18.9988L 8.0225,18.9988C 8.535,18.9988 8.975,18.6762 9.16,18.2125L 10.5513,14.7413C 10.7913,14.155 11.3475,13.745 12.0025,13.745C 12.6512,13.745 13.2125,14.155 13.4475,14.7413L 14.8387,18.2125C 15.025,18.6762 15.4637,18.9988 15.9525,18.9988L 20.7422,18.9988C 21.4502,18.9988 22.0025,18.4325 22.0025,17.73L 22.0025,7.27C 22.0025,6.5675 21.4502,6.00125 20.7422,6.00125 Z M 7.22125,14.575C 5.99625,14.575 5,13.55 5,12.285C 5,11.02 5.99625,10 7.22125,10C 8.4425,10 9.43375,11.02 9.43375,12.285C 9.43375,13.55 8.4425,14.575 7.22125,14.575 Z M 16.7825,14.575C 15.5562,14.575 14.565,13.55 14.565,12.285C 14.565,11.025 15.5562,10 16.7825,10C 18.0075,10 18.9988,11.025 18.9988,12.285C 18.9988,13.55 18.0075,14.575 16.7825,14.575 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleCardboard;
}(React.Component);

exports.default = MdiGoogleCardboard;
module.exports = exports['default'];