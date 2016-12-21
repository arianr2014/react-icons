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

var MdiStackoverflow = function (_React$Component) {
    _inherits(MdiStackoverflow, _React$Component);

    function MdiStackoverflow() {
        _classCallCheck(this, MdiStackoverflow);

        return _possibleConstructorReturn(this, (MdiStackoverflow.__proto__ || Object.getPrototypeOf(MdiStackoverflow)).apply(this, arguments));
    }

    _createClass(MdiStackoverflow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 17.3566,20.2039L 17.3566,14.8161L 19.1523,14.8161L 19.1523,22L 3,22L 3,14.8161L 4.79576,14.8161L 4.79576,20.2039L 17.3566,20.2039 Z M 6.77203,14.3205L 7.14139,12.563L 15.9286,14.4098L 15.5593,16.1674L 6.77203,14.3205 Z M 7.9346,10.113L 8.69279,8.48514L 16.8325,12.276L 16.0743,13.9039L 7.9346,10.113 Z M 10.1872,6.11971L 11.3364,4.73976L 18.2362,10.486L 17.0869,11.866L 10.1872,6.11971 Z M 14.6412,1.8721L 20,9.07685L 18.5591,10.1486L 13.2003,2.94382L 14.6412,1.8721 Z M 6.59358,18.4078L 6.59358,16.6119L 15.5727,16.6119L 15.5727,18.4078L 6.59358,18.4078 Z ' })
                )
            );
        }
    }]);

    return MdiStackoverflow;
}(React.Component);

exports.default = MdiStackoverflow;
module.exports = exports['default'];