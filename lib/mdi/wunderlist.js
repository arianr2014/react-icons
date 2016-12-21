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

var MdiWunderlist = function (_React$Component) {
    _inherits(MdiWunderlist, _React$Component);

    function MdiWunderlist() {
        _classCallCheck(this, MdiWunderlist);

        return _possibleConstructorReturn(this, (MdiWunderlist.__proto__ || Object.getPrototypeOf(MdiWunderlist)).apply(this, arguments));
    }

    _createClass(MdiWunderlist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17,17.5L 12,15L 7,17.5L 7,5L 5,5L 5,19L 19,19L 19,5L 17,5L 17,17.5 Z M 11.9998,12.4166L 14.247,13.7719L 13.6525,11.2159L 15.6361,9.49738L 13.0212,9.27265L 11.9998,6.86286L 10.9783,9.27265L 8.36347,9.49738L 10.3471,11.2159L 9.75254,13.7719L 11.9998,12.4166 Z M 5,3L 19,3C 20.1046,3 21,3.89543 21,5L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5C 3,3.89543 3.89543,3 5,3 Z ' })
                )
            );
        }
    }]);

    return MdiWunderlist;
}(React.Component);

exports.default = MdiWunderlist;
module.exports = exports['default'];