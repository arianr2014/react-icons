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

var MdiDrone = function (_React$Component) {
    _inherits(MdiDrone, _React$Component);

    function MdiDrone() {
        _classCallCheck(this, MdiDrone);

        return _possibleConstructorReturn(this, (MdiDrone.__proto__ || Object.getPrototypeOf(MdiDrone)).apply(this, arguments));
    }

    _createClass(MdiDrone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22,11L 21,11L 20,9L 13.75,9L 16,12.5L 14,12.5L 10.75,9L 4,9C 3.44772,9 2,8.55229 2,8C 2,7.44772 3.49999,5.50004 5.49999,5.50002C 7.5,5.50001 7.66666,6.50001 9,7L 21,7C 21.5523,7 22,7.44772 22,8L 22,9L 22,11 Z M 10.75,6.50002L 14,3.00001L 16,3.00001L 13.75,6.50002L 10.75,6.50002 Z M 18,11L 18,9.50001L 19.75,9.50002L 19,11L 18,11 Z M 3,19C 2.44771,19 2,18.5523 2,18C 2,17.4477 2.44771,17 3,17C 5.20914,17 6.99999,18.7909 6.99999,21C 6.99999,21.5523 6.55228,22 5.99999,22C 5.44771,22 5,21.5523 5,21C 5,19.8954 4.10457,19 3,19 Z M 11,21C 11,21.5523 10.5523,22 9.99999,22C 9.44771,22 8.99999,21.5523 8.99999,21C 8.99999,17.6863 6.3137,15 3,15C 2.44771,15 2,14.5523 2,14C 2,13.4477 2.44771,13 3,13C 7.41827,13 11,16.5817 11,21 Z ' })
                )
            );
        }
    }]);

    return MdiDrone;
}(React.Component);

exports.default = MdiDrone;
module.exports = exports['default'];