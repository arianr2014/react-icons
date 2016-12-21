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

var MdiProjector = function (_React$Component) {
    _inherits(MdiProjector, _React$Component);

    function MdiProjector() {
        _classCallCheck(this, MdiProjector);

        return _possibleConstructorReturn(this, (MdiProjector.__proto__ || Object.getPrototypeOf(MdiProjector)).apply(this, arguments));
    }

    _createClass(MdiProjector, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 16,6C 14.8702,6.0012 13.7681,6.3504 12.8438,7L 4.00001,7C 2.89201,7 2.00001,7.892 2.00001,9L 2.00001,15C 2.00001,16.108 2.89201,17 4.00001,17L 5.00001,17L 5.00001,18C 5.00001,18.554 5.44601,19 6.00001,19L 8,19C 8.554,19 9,18.554 9,18L 9,17L 15,17L 15,18C 15,18.554 15.446,19 16,19L 18,19C 18.554,19 19,18.554 19,18L 19,17L 20,17C 21.108,17 22,16.108 22,15L 22,9C 22,7.892 21.108,7 20,7L 19.1504,7C 18.2276,6.3515 17.1278,6.0024 16,6 Z M 16,7.5C 17.933,7.5 19.5,9.067 19.5,11C 19.5,12.933 17.933,14.5 16,14.5C 14.067,14.5 12.5,12.933 12.5,11C 12.5,9.067 14.067,7.5 16,7.5 Z M 4.00001,9L 8,9L 8,10L 4.00001,10L 4.00001,9 Z M 16,9C 14.8954,9 14,9.8954 14,11C 14,12.1046 14.8954,13 16,13C 17.1046,13 18,12.1046 18,11C 18,9.8954 17.1046,9 16,9 Z M 4.00001,11L 8,11L 8,12L 4.00001,12L 4.00001,11 Z M 4.00001,13L 8,13L 8,14L 4.00001,14L 4.00001,13 Z ' })
                )
            );
        }
    }]);

    return MdiProjector;
}(React.Component);

exports.default = MdiProjector;
module.exports = exports['default'];