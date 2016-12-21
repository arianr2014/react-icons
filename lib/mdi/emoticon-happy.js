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

var MdiEmoticonHappy = function (_React$Component) {
    _inherits(MdiEmoticonHappy, _React$Component);

    function MdiEmoticonHappy() {
        _classCallCheck(this, MdiEmoticonHappy);

        return _possibleConstructorReturn(this, (MdiEmoticonHappy.__proto__ || Object.getPrototypeOf(MdiEmoticonHappy)).apply(this, arguments));
    }

    _createClass(MdiEmoticonHappy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,12C 20,7.58172 16.4183,4 12,4C 7.58172,4 4,7.58172 4,12C 4,16.4183 7.58172,20 12,20C 16.4183,20 20,16.4183 20,12 Z M 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47715 6.47715,2.00001 12,2.00001C 17.5228,2.00001 22,6.47715 22,12 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8C 16.3,8 17,8.7 17,9.5 Z M 12,17.2303C 10.2476,17.2303 8.7057,16.509 7.81291,15.4173L 9.23025,14C 9.68254,14.7225 10.7523,15.2302 12,15.2302C 13.2477,15.2302 14.3175,14.7225 14.7697,14L 16.1871,15.4173C 15.2943,16.509 13.7524,17.2303 12,17.2303 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonHappy;
}(React.Component);

exports.default = MdiEmoticonHappy;
module.exports = exports['default'];