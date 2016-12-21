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

var MdiBellRingOutline = function (_React$Component) {
    _inherits(MdiBellRingOutline, _React$Component);

    function MdiBellRingOutline() {
        _classCallCheck(this, MdiBellRingOutline);

        return _possibleConstructorReturn(this, (MdiBellRingOutline.__proto__ || Object.getPrototypeOf(MdiBellRingOutline)).apply(this, arguments));
    }

    _createClass(MdiBellRingOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9997,16.9981L 15.9997,10.4981C 15.9997,8.01306 13.9847,5.99807 11.4997,5.99807C 9.01469,5.99807 6.99967,8.01306 6.99967,10.4981L 6.99967,16.9981L 15.9997,16.9981 Z M 17.9997,15.9981L 19.9997,17.9981L 19.9997,18.9981L 2.99967,18.9981L 2.99967,17.9981L 4.99967,15.9981L 4.99967,10.4981C 4.99967,7.42507 7.13468,4.85707 9.99967,4.17907L 9.99967,3.49807C 9.99967,2.67006 10.6717,1.99807 11.4997,1.99807C 12.3277,1.99807 12.9997,2.67006 12.9997,3.49807L 12.9997,4.17907C 15.8647,4.85707 17.9997,7.42507 17.9997,10.4981L 17.9997,15.9981 Z M 11.4997,21.9981C 10.3957,21.9981 9.49967,21.1016 9.49967,19.9981L 13.4997,19.9981C 13.4997,21.1016 12.6047,21.9981 11.4997,21.9981 Z M 19.9744,9.99807C 19.8194,7.34806 18.4564,5.02639 16.4214,3.57607L 17.8484,2.14907C 20.2424,3.97207 21.8224,6.79407 21.9744,9.99807L 19.9744,9.99807 Z M 6.57733,3.57608C 4.54234,5.0264 3.17934,7.34807 3.02433,9.99807L 1.02433,9.99807C 1.17633,6.79407 2.75633,3.97208 5.15033,2.14908L 6.57733,3.57608 Z ' })
                )
            );
        }
    }]);

    return MdiBellRingOutline;
}(React.Component);

exports.default = MdiBellRingOutline;
module.exports = exports['default'];