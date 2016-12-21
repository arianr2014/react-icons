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

var MdiPlusCircle = function (_React$Component) {
    _inherits(MdiPlusCircle, _React$Component);

    function MdiPlusCircle() {
        _classCallCheck(this, MdiPlusCircle);

        return _possibleConstructorReturn(this, (MdiPlusCircle.__proto__ || Object.getPrototypeOf(MdiPlusCircle)).apply(this, arguments));
    }

    _createClass(MdiPlusCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,12.998L 12.9994,12.998L 12.9994,16.998L 10.9994,16.998L 10.9994,12.998L 6.9994,12.998L 6.9994,10.998L 10.9994,10.998L 10.9994,6.99805L 12.9994,6.99805L 12.9994,10.998L 16.9994,10.998M 11.9994,1.99805C 6.4764,1.99805 1.9994,6.47504 1.9994,11.998C 1.9994,17.5211 6.4764,21.998 11.9994,21.998C 17.5224,21.998 21.9994,17.5211 21.9994,11.998C 21.9994,6.47504 17.5224,1.99805 11.9994,1.99805 Z ' })
                )
            );
        }
    }]);

    return MdiPlusCircle;
}(React.Component);

exports.default = MdiPlusCircle;
module.exports = exports['default'];