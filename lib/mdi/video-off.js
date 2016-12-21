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

var MdiVideoOff = function (_React$Component) {
    _inherits(MdiVideoOff, _React$Component);

    function MdiVideoOff() {
        _classCallCheck(this, MdiVideoOff);

        return _possibleConstructorReturn(this, (MdiVideoOff.__proto__ || Object.getPrototypeOf(MdiVideoOff)).apply(this, arguments));
    }

    _createClass(MdiVideoOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.2723,1.99813L 1.9993,3.27114L 4.72729,5.99813L 3.9993,5.99813C 3.4473,5.99813 2.9993,6.44613 2.9993,6.99813L 2.9993,16.9981C 2.9993,17.5501 3.4473,17.9981 3.9993,17.9981L 15.9993,17.9981C 16.2043,17.9981 16.3853,17.9211 16.5433,17.8151L 19.7273,20.9981L 20.9993,19.7251M 20.9993,6.49813L 16.9993,10.4981L 16.9993,6.99813C 16.9993,6.44613 16.5513,5.99813 15.9993,5.99813L 9.8183,5.99813L 20.9993,17.1792L 20.9993,6.49813 Z ' })
                )
            );
        }
    }]);

    return MdiVideoOff;
}(React.Component);

exports.default = MdiVideoOff;
module.exports = exports['default'];