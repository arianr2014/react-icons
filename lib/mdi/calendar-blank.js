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

var MdiCalendarBlank = function (_React$Component) {
    _inherits(MdiCalendarBlank, _React$Component);

    function MdiCalendarBlank() {
        _classCallCheck(this, MdiCalendarBlank);

        return _possibleConstructorReturn(this, (MdiCalendarBlank.__proto__ || Object.getPrototypeOf(MdiCalendarBlank)).apply(this, arguments));
    }

    _createClass(MdiCalendarBlank, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9994,18.9981L 4.9994,18.9981L 4.9994,7.99807L 18.9994,7.99807M 15.9994,0.998075L 15.9994,2.99808L 7.99937,2.99808L 7.99937,0.998075L 5.99937,0.998075L 5.99937,2.99808L 4.99937,2.99808C 3.89337,2.99808 3.00936,3.89307 3.00936,4.99808L 2.99937,18.9981C 2.99937,20.1021 3.89337,20.9981 4.99937,20.9981L 18.9994,20.9981C 20.1024,20.9981 20.9994,20.1021 20.9994,18.9981L 20.9994,4.99808C 20.9994,3.89307 20.1024,2.99808 18.9994,2.99808L 17.9994,2.99808L 17.9994,0.998075' })
                )
            );
        }
    }]);

    return MdiCalendarBlank;
}(React.Component);

exports.default = MdiCalendarBlank;
module.exports = exports['default'];