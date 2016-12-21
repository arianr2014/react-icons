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

var MdiSwim = function (_React$Component) {
    _inherits(MdiSwim, _React$Component);

    function MdiSwim() {
        _classCallCheck(this, MdiSwim);

        return _possibleConstructorReturn(this, (MdiSwim.__proto__ || Object.getPrototypeOf(MdiSwim)).apply(this, arguments));
    }

    _createClass(MdiSwim, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2.00001,18C 4.22224,17 6.44446,16 8.66668,16C 10.8889,16 13.1111,18 15.3333,18C 17.5556,18 19.7778,16 22,16L 22,19C 19.7778,19 17.5556,21 15.3333,21C 13.1111,21 10.8889,19 8.66668,19C 6.44446,19 4.22224,20 2.00001,21L 2.00001,18 Z M 8.66666,13C 7.89471,13 7.12275,13.1207 6.3508,13.3201L 11.269,9.87633L 10.234,8.64279C 10.0879,8.46897 10,8.24477 10,8C 10,7.65608 10.1736,7.35272 10.438,7.17276L 16.1605,3.16582L 17.3076,4.80412L 12.4675,8.19321L 17.6961,14.4244C 16.9085,14.7488 16.1209,15 15.3333,15C 13.1111,15 10.8889,13 8.66666,13 Z M 18,7.00001C 19.1046,7.00001 20,7.89544 20,9.00001C 20,10.1046 19.1046,11 18,11C 16.8954,11 16,10.1046 16,9.00001C 16,7.89544 16.8954,7.00001 18,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiSwim;
}(React.Component);

exports.default = MdiSwim;
module.exports = exports['default'];