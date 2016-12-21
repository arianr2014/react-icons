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

var MdiXingCircle = function (_React$Component) {
    _inherits(MdiXingCircle, _React$Component);

    function MdiXingCircle() {
        _classCallCheck(this, MdiXingCircle);

        return _possibleConstructorReturn(this, (MdiXingCircle.__proto__ || Object.getPrototypeOf(MdiXingCircle)).apply(this, arguments));
    }

    _createClass(MdiXingCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0025,2.0025C 6.48,2.0025 2.0025,6.48 2.0025,12.0025C 2.0025,17.525 6.48,22.0025 12.0025,22.0025C 17.525,22.0025 22.0025,17.525 22.0025,12.0025C 22.0025,6.48 17.525,2.0025 12.0025,2.0025 Z M 15.85,6.00125L 17.7437,6.00125C 17.8563,6.00125 17.9438,6.04 17.9937,6.11875C 18.0425,6.20125 18.0425,6.30375 17.9887,6.40625L 13.8375,13.76L 16.48,18.5887C 16.5337,18.6912 16.5337,18.7987 16.485,18.8812C 16.435,18.96 16.3475,18.9988 16.235,18.9988L 14.36,18.9988C 14.0725,18.9988 13.9313,18.8088 13.8375,18.6425L 11.1725,13.755C 11.3087,13.52 15.3462,6.3575 15.3462,6.3575C 15.4488,6.17625 15.5663,6.00125 15.85,6.00125 Z M 7.51,8.565L 9.385,8.565C 9.6725,8.565 9.81,8.75 9.9025,8.91625L 11.1913,11.1675C 11.1188,11.3038 9.17,14.7463 9.17,14.7463C 9.0725,14.9175 8.94,15.1075 8.6575,15.1075L 6.7825,15.1075C 6.67,15.1075 6.5875,15.0588 6.5375,14.98C 6.48875,14.9025 6.48875,14.795 6.5375,14.6925L 8.53,11.1675L 7.26625,8.975C 7.2125,8.8675 7.2025,8.765 7.25125,8.68625C 7.3,8.60875 7.3925,8.565 7.51,8.565 Z ' })
                )
            );
        }
    }]);

    return MdiXingCircle;
}(React.Component);

exports.default = MdiXingCircle;
module.exports = exports['default'];