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

var MdiGithubBox = function (_React$Component) {
    _inherits(MdiGithubBox, _React$Component);

    function MdiGithubBox() {
        _classCallCheck(this, MdiGithubBox);

        return _possibleConstructorReturn(this, (MdiGithubBox.__proto__ || Object.getPrototypeOf(MdiGithubBox)).apply(this, arguments));
    }

    _createClass(MdiGithubBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'fill-rule': 'evenodd', 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,2L 20,2C 21.1046,2 22,2.89543 22,4L 22,20C 22,21.1046 21.1046,22 20,22L 14.8465,22C 14.49,21.9189 14.4792,21.2442 14.4792,21.007L 14.4915,18.2637C 14.4915,17.3309 14.1717,16.7205 13.8131,16.4118C 16.0403,16.1642 18.3787,15.3189 18.3787,11.4773C 18.3787,10.3856 17.9919,9.49292 17.351,8.79388C 17.4535,8.54089 17.7967,7.52417 17.2509,6.1474C 17.2509,6.1474 16.413,5.87852 14.5038,7.17253C 13.7051,6.95072 12.8499,6.8398 12.0003,6.83594C 11.1501,6.8398 10.2943,6.95072 9.49686,7.17253C 7.58643,5.87852 6.74723,6.1474 6.74723,6.1474C 6.20272,7.52417 6.54588,8.54089 6.64902,8.79388C 6.00934,9.49292 5.61952,10.3856 5.61952,11.4773C 5.61952,15.3093 7.95414,16.1672 10.1746,16.4196C 9.88914,16.6696 9.63069,17.1102 9.53984,17.7564C 8.97013,18.0125 7.52135,18.4537 6.62936,16.9256C 6.62936,16.9256 6.10143,15.9657 5.09771,15.895C 5.09771,15.895 4.121,15.8824 5.02895,16.5029C 5.02895,16.5029 5.68459,16.8104 6.13949,17.9657C 6.13949,17.9657 6.72636,19.9105 9.50791,19.3062L 9.52142,21.007C 9.52142,21.2437 9.50457,21.9231 9.14439,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,4C 2,2.89543 2.89543,2 4,2 Z ' })
                )
            );
        }
    }]);

    return MdiGithubBox;
}(React.Component);

exports.default = MdiGithubBox;
module.exports = exports['default'];