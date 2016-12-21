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

var MdiChartArc = function (_React$Component) {
    _inherits(MdiChartArc, _React$Component);

    function MdiChartArc() {
        _classCallCheck(this, MdiChartArc);

        return _possibleConstructorReturn(this, (MdiChartArc.__proto__ || Object.getPrototypeOf(MdiChartArc)).apply(this, arguments));
    }

    _createClass(MdiChartArc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.1761,19.5993L 14.1692,16.1232C 15.1534,15.397 15.8311,14.2793 15.9725,13L 19.9855,13C 19.8255,15.7589 18.3496,18.1648 16.1761,19.5993 Z M 13,7.02748L 13,3.01447C 17.2962,3.26369 20.7363,6.70376 20.9855,11L 16.9725,11C 16.7419,8.9142 15.0858,7.25805 13,7.02748 Z M 7,12.5C 7,13.1414 7.13419,13.7515 7.37602,14.3036L 3.89992,16.3106C 3.32414,15.1644 3,13.8701 3,12.5C 3,7.97343 6.53831,4.27327 11,4.01446L 11,8.02747C 8.75002,8.27619 7,10.1837 7,12.5 Z M 11.5,21C 8.5331,21 5.92124,19.4799 4.40071,17.1761L 7.87676,15.1692C 8.69621,16.2797 10.014,17 11.5,17C 12.1414,17 12.7514,16.8658 13.3036,16.624L 15.3106,20.1001C 14.1644,20.6759 12.8701,21 11.5,21 Z ' })
                )
            );
        }
    }]);

    return MdiChartArc;
}(React.Component);

exports.default = MdiChartArc;
module.exports = exports['default'];