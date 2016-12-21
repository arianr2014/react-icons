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

var MdiBellSleep = function (_React$Component) {
    _inherits(MdiBellSleep, _React$Component);

    function MdiBellSleep() {
        _classCallCheck(this, MdiBellSleep);

        return _possibleConstructorReturn(this, (MdiBellSleep.__proto__ || Object.getPrototypeOf(MdiBellSleep)).apply(this, arguments));
    }

    _createClass(MdiBellSleep, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9994,9.79817L 11.1994,13.1982L 13.9994,13.1982L 13.9994,14.9982L 8.99939,14.9982L 8.99939,13.1982L 11.7994,9.79817L 8.99939,9.79817L 8.99939,7.99817L 13.9994,7.99817M 17.9994,15.9982L 17.9994,10.4982C 17.9994,7.42517 15.8644,4.85717 12.9994,4.17917L 12.9994,3.49817C 12.9994,2.67016 12.3274,1.99817 11.4994,1.99817C 10.6714,1.99817 9.99939,2.67016 9.99939,3.49817L 9.99939,4.17917C 7.1344,4.85717 4.99939,7.42517 4.99939,10.4982L 4.99939,15.9982L 2.99939,17.9982L 2.99939,18.9982L 19.9994,18.9982L 19.9994,17.9982M 11.4994,21.9982C 12.6044,21.9982 13.4994,21.1022 13.4994,19.9982L 9.49939,19.9982C 9.49939,21.1022 10.3954,21.9982 11.4994,21.9982 Z ' })
                )
            );
        }
    }]);

    return MdiBellSleep;
}(React.Component);

exports.default = MdiBellSleep;
module.exports = exports['default'];