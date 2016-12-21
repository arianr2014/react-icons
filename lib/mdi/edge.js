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

var MdiEdge = function (_React$Component) {
    _inherits(MdiEdge, _React$Component);

    function MdiEdge() {
        _classCallCheck(this, MdiEdge);

        return _possibleConstructorReturn(this, (MdiEdge.__proto__ || Object.getPrototypeOf(MdiEdge)).apply(this, arguments));
    }

    _createClass(MdiEdge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 2.73675,10.8077C 3.8293,-1.36109 22.5157,-1.36109 21.1971,13.5579L 8.61392,13.5579C 8.61392,17.8527 14.4157,19.209 19.5394,16.3081L 19.5394,20.5276C 13.2478,23.8806 4.9972,21.4318 4.9972,14.0853C 4.9972,8.58476 9.97019,6.8142 9.97019,6.8142C 9.97019,6.8142 8.57624,8.58489 8.53857,10.0542L 15.6967,10.0542C 15.6967,2.93376 5.90137,5.57095 2.73675,10.8077 Z ' })
                )
            );
        }
    }]);

    return MdiEdge;
}(React.Component);

exports.default = MdiEdge;
module.exports = exports['default'];