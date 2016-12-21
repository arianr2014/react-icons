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

var MdiBullhorn = function (_React$Component) {
    _inherits(MdiBullhorn, _React$Component);

    function MdiBullhorn() {
        _classCallCheck(this, MdiBullhorn);

        return _possibleConstructorReturn(this, (MdiBullhorn.__proto__ || Object.getPrototypeOf(MdiBullhorn)).apply(this, arguments));
    }

    _createClass(MdiBullhorn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 16,12L 16,16C 16,16.5523 15.5523,17 15,17C 14.8333,17 14.6667,17 14.0556,16.5C 13.4444,16 12.3889,15 11.3056,14.5C 10.3062,14.0387 9.28314,14.003 8.25828,14.0002L 9.46586,17.318L 9.5,17.5C 9.5,17.7761 9.27614,18 9,18L 7,18C 6.77985,18 6.59294,17.8577 6.52618,17.6601L 5.19402,14L 5,14C 4.44771,14 4,13.5523 4,13C 2.89543,13 2,12.1046 2,11C 2,9.89543 2.89543,9 4,9C 4,8.44772 4.44771,8 5,8L 8,8C 9.11111,8 10.2222,8 11.3056,7.5C 12.3889,7 13.4444,6 14.0556,5.5C 14.6667,5 14.8333,5.00001 15,5.00001C 15.5523,5.00001 16,5.44772 16,6.00001L 16,10C 16.5523,10 17,10.4477 17,11C 17,11.5523 16.5523,12 16,12 Z M 21,11C 21,12.3807 20.4403,13.6307 19.5355,14.5355L 18.1213,13.1213C 18.6642,12.5784 19,11.8284 19,11C 19,10.1716 18.6642,9.42158 18.1213,8.87869L 19.5355,7.46447C 20.4403,8.36929 21,9.61929 21,11 Z ' })
                )
            );
        }
    }]);

    return MdiBullhorn;
}(React.Component);

exports.default = MdiBullhorn;
module.exports = exports['default'];