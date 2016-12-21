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

var MdiVectorCircleVariant = function (_React$Component) {
    _inherits(MdiVectorCircleVariant, _React$Component);

    function MdiVectorCircleVariant() {
        _classCallCheck(this, MdiVectorCircleVariant);

        return _possibleConstructorReturn(this, (MdiVectorCircleVariant.__proto__ || Object.getPrototypeOf(MdiVectorCircleVariant)).apply(this, arguments));
    }

    _createClass(MdiVectorCircleVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,9.00124L 19.9737,9.00124C 18.705,5.4125 15.3112,3.005 11.5025,3C 6.53125,3 2.50375,7.03375 2.50375,12.005C 2.50375,16.975 6.53125,21.0037 11.5025,21.0037C 15.3112,20.9987 18.705,18.5962 19.9788,15.0025L 22,15.0025M 20.0037,11.0037L 20.0037,13L 18.0013,13L 18.0013,11.0037M 17.8162,15.0025C 16.6587,17.4438 14.2025,18.9962 11.5025,19.0012C 7.635,19.0012 4.5,15.8663 4.5,12.005C 4.5,8.1375 7.635,5.0025 11.5025,5.0025C 14.2025,5.00749 16.6587,6.565 17.8113,9.00124L 16.005,9.00124L 16.005,15.0025' })
                )
            );
        }
    }]);

    return MdiVectorCircleVariant;
}(React.Component);

exports.default = MdiVectorCircleVariant;
module.exports = exports['default'];