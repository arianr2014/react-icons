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

var MdiDiceD8 = function (_React$Component) {
    _inherits(MdiDiceD8, _React$Component);

    function MdiDiceD8() {
        _classCallCheck(this, MdiDiceD8);

        return _possibleConstructorReturn(this, (MdiDiceD8.__proto__ || Object.getPrototypeOf(MdiDiceD8)).apply(this, arguments));
    }

    _createClass(MdiDiceD8, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'miter', d: 'M 12,23C 11.6739,23 11.3679,22.8412 11.1809,22.5729L 4.18095,12.5736C 3.93945,12.2292 3.93945,11.7708 4.18095,11.4264L 11.1809,1.42639C 11.5546,0.89254 12.4454,0.89254 12.819,1.42639L 19.819,11.4264C 20.0599,11.7708 20.0599,12.2292 19.819,12.5736L 12.819,22.5729C 12.6321,22.8412 12.3261,23 12,23 Z M 6.22066,12L 12,20.2566L 17.78,12L 12,3.74345L 6.22066,12 Z M 12,8.25C 13.3117,8.25 14.375,9.2014 14.375,10.375C 14.375,11.0651 14.0073,11.6784 13.4376,12.0666C 14.1382,12.4607 14.6,13.1347 14.6,13.9C 14.6,15.115 13.4359,16.1 12,16.1C 10.5641,16.1 9.4,15.115 9.4,13.9C 9.4,13.1347 9.86176,12.4607 10.5624,12.0666C 9.9927,11.6784 9.625,11.0651 9.625,10.375C 9.625,9.2014 10.6883,8.25 12,8.25 Z M 12,12.65C 11.3925,12.65 10.9,13.1425 10.9,13.75C 10.9,14.3575 11.3925,14.85 12,14.85C 12.6075,14.85 13.1,14.3575 13.1,13.75C 13.1,13.1425 12.6075,12.65 12,12.65 Z M 12,9.5C 11.5029,9.5 11.1,9.94772 11.1,10.5C 11.1,11.0523 11.5029,11.5 12,11.5C 12.4971,11.5 12.9,11.0523 12.9,10.5C 12.9,9.94772 12.4971,9.5 12,9.5 Z ' })
                )
            );
        }
    }]);

    return MdiDiceD8;
}(React.Component);

exports.default = MdiDiceD8;
module.exports = exports['default'];