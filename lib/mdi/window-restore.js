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

var MdiWindowRestore = function (_React$Component) {
    _inherits(MdiWindowRestore, _React$Component);

    function MdiWindowRestore() {
        _classCallCheck(this, MdiWindowRestore);

        return _possibleConstructorReturn(this, (MdiWindowRestore.__proto__ || Object.getPrototypeOf(MdiWindowRestore)).apply(this, arguments));
    }

    _createClass(MdiWindowRestore, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3.99992,8.00008L 7.99959,8.00041L 7.99927,4.00073L 19.9996,4.00041L 19.9996,16.0004L 15.9996,16.0004L 15.9999,20.0001L 3.99992,20.0001L 3.99992,8.00008 Z M 15.9999,7.99992L 15.9996,14.0004L 17.9994,14.0004L 17.9994,6.00041L 9.9991,6.00073L 9.99943,8.00024L 15.9999,7.99992 Z M 5.99984,12L 5.99984,18L 13.9998,18.0003L 13.9999,12.0001L 5.99984,12 Z ' })
                )
            );
        }
    }]);

    return MdiWindowRestore;
}(React.Component);

exports.default = MdiWindowRestore;
module.exports = exports['default'];