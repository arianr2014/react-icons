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

var MdiPocket = function (_React$Component) {
    _inherits(MdiPocket, _React$Component);

    function MdiPocket() {
        _classCallCheck(this, MdiPocket);

        return _possibleConstructorReturn(this, (MdiPocket.__proto__ || Object.getPrototypeOf(MdiPocket)).apply(this, arguments));
    }

    _createClass(MdiPocket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12L 2,4.5C 2,3.11929 3.11929,2.00001 4.5,2.00001L 19.5,2.00001C 20.8807,2.00001 22,3.11929 22,4.5L 22,12 Z M 15.8841,8.24534L 12.0044,12.125L 8.11846,8.23908C 7.53268,7.6533 6.58294,7.6533 5.99715,8.23908C 5.41137,8.82486 5.41137,9.7746 5.99715,10.3604L 10.9344,15.3164C 11.5202,15.9022 12.4699,15.9022 13.0557,15.3164L 18.0054,10.3666C 18.5912,9.78086 18.5912,8.83112 18.0054,8.24534C 17.4196,7.65956 16.4699,7.65956 15.8841,8.24534 Z ' })
                )
            );
        }
    }]);

    return MdiPocket;
}(React.Component);

exports.default = MdiPocket;
module.exports = exports['default'];