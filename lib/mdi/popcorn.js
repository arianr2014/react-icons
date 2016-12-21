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

var MdiPopcorn = function (_React$Component) {
    _inherits(MdiPopcorn, _React$Component);

    function MdiPopcorn() {
        _classCallCheck(this, MdiPopcorn);

        return _possibleConstructorReturn(this, (MdiPopcorn.__proto__ || Object.getPrototypeOf(MdiPopcorn)).apply(this, arguments));
    }

    _createClass(MdiPopcorn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 7,22L 4.75002,22C 4.75002,22 4.00002,22 3.81359,20.6484L 2.04278,3.81001L 2.00002,3.50003C 2.00002,2.67161 2.89545,2.00004 4.00002,2.00004C 5.10246,2.00004 5.99655,2.66902 6,3.49524C 6.00344,2.66902 6.89755,2.00003 7.99999,2.00003C 9.10455,2.00003 9.99999,2.6716 9.99999,3.50002C 9.99999,2.6716 10.8954,2.00003 12,2.00003C 13.0913,2.00003 13.9785,2.65557 13.999,3.50841L 14,3.50002C 14,2.6716 14.8954,2.00003 16,2.00003C 17.1024,2.00003 17.9965,2.66902 18,3.49524C 18.0034,2.66902 18.8975,2.00004 20,2.00004C 21.1045,2.00004 22,2.67161 22,3.50004L 21.9572,3.81001L 20.1864,20.6484C 20,22 19.25,22 19.25,22L 17,22L 16.5,22L 13.75,22L 10.25,22L 7.50001,22L 7,22 Z M 17.8518,4.93235C 17.5534,4.38538 16.8367,4.00003 16,4.00003C 15.1931,4.00003 14.3643,4.35844 13.9763,4.87459L 13.7781,20L 16.6584,20L 17.8518,4.93235 Z M 10.0237,4.87461C 9.63568,4.35846 8.80693,4.00003 7.99998,4.00003C 7.16328,4.00003 6.44658,4.38538 6.14817,4.93236L 7.3416,20L 10.2219,20L 10.0237,4.87461 Z ' })
                )
            );
        }
    }]);

    return MdiPopcorn;
}(React.Component);

exports.default = MdiPopcorn;
module.exports = exports['default'];