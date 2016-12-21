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

var MdiBorderRight = function (_React$Component) {
    _inherits(MdiBorderRight, _React$Component);

    function MdiBorderRight() {
        _classCallCheck(this, MdiBorderRight);

        return _possibleConstructorReturn(this, (MdiBorderRight.__proto__ || Object.getPrototypeOf(MdiBorderRight)).apply(this, arguments));
    }

    _createClass(MdiBorderRight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10.9994,8.99805L 12.9994,8.99805L 12.9994,6.99805L 10.9994,6.99805M 10.9994,4.99805L 12.9994,4.99805L 12.9994,2.99805L 10.9994,2.99805M 10.9994,12.998L 12.9994,12.998L 12.9994,10.998L 10.9994,10.998M 14.9994,4.99805L 16.9994,4.99805L 16.9994,2.99805L 14.9994,2.99805M 14.9994,20.998L 16.9994,20.998L 16.9994,18.998L 14.9994,18.998M 18.9994,20.998L 20.9994,20.998L 20.9994,2.99805L 18.9994,2.99805M 14.9994,12.998L 16.9994,12.998L 16.9994,10.998L 14.9994,10.998M 10.9994,16.998L 12.9994,16.998L 12.9994,14.998L 10.9994,14.998M 2.99942,8.99805L 4.99942,8.99805L 4.99942,6.99805L 2.99942,6.99805M 2.99942,16.998L 4.99942,16.998L 4.99942,14.998L 2.99942,14.998M 2.99942,12.998L 4.99942,12.998L 4.99942,10.998L 2.99942,10.998M 10.9994,20.998L 12.9994,20.998L 12.9994,18.998L 10.9994,18.998M 2.99942,20.998L 4.99942,20.998L 4.99942,18.998L 2.99942,18.998M 6.99942,12.998L 8.99942,12.998L 8.99942,10.998L 6.99942,10.998M 6.99942,4.99805L 8.99942,4.99805L 8.99942,2.99805L 6.99942,2.99805M 2.99942,4.99805L 4.99942,4.99805L 4.99942,2.99805L 2.99942,2.99805M 6.99942,20.998L 8.99942,20.998L 8.99942,18.998L 6.99942,18.998L 6.99942,20.998 Z ' })
                )
            );
        }
    }]);

    return MdiBorderRight;
}(React.Component);

exports.default = MdiBorderRight;
module.exports = exports['default'];