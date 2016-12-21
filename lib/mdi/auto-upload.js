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

var MdiAutoUpload = function (_React$Component) {
    _inherits(MdiAutoUpload, _React$Component);

    function MdiAutoUpload() {
        _classCallCheck(this, MdiAutoUpload);

        return _possibleConstructorReturn(this, (MdiAutoUpload.__proto__ || Object.getPrototypeOf(MdiAutoUpload)).apply(this, arguments));
    }

    _createClass(MdiAutoUpload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.3494,12.648L 6.49939,8.99796L 7.64938,12.648M 5.49939,6.99796L 2.29938,15.998L 4.1994,15.998L 4.89938,13.998L 8.0994,13.998L 8.79938,15.998L 10.6994,15.998L 7.49939,6.99796M 10.9994,19.998L 21.9994,19.998L 21.9994,17.998L 10.9994,17.998M 13.9994,15.998L 18.9994,15.998L 18.9994,10.998L 21.9994,10.998L 16.4994,5.49796L 10.9994,10.998L 13.9994,10.998L 13.9994,15.998 Z ' })
                )
            );
        }
    }]);

    return MdiAutoUpload;
}(React.Component);

exports.default = MdiAutoUpload;
module.exports = exports['default'];