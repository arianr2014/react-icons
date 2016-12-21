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

var MdiDiceD6 = function (_React$Component) {
    _inherits(MdiDiceD6, _React$Component);

    function MdiDiceD6() {
        _classCallCheck(this, MdiDiceD6);

        return _possibleConstructorReturn(this, (MdiDiceD6.__proto__ || Object.getPrototypeOf(MdiDiceD6)).apply(this, arguments));
    }

    _createClass(MdiDiceD6, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5,3L 19,3C 20.1046,3 21,3.89543 21,5L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5C 3,3.89543 3.89543,3 5,3 Z M 5,5.00001L 5,19L 19,19L 19,5.00001L 5,5.00001 Z M 13.3932,9.53076C 10.8932,9.49951 10.862,11.5308 10.862,11.5308C 10.862,11.5308 11.4089,10.8745 12.5339,10.8745C 13.1901,10.8745 14.4902,11.4505 14.5495,13.4058C 14.612,15.4683 12.7682,16 12.7682,16C 12.7682,16 9.26823,16.8589 9.29948,12.6558C 9.33456,7.93691 13.3932,8.32764 13.3932,8.32764L 13.3932,9.53076 Z M 11.95,12.1C 11.2057,12 10.8307,12.7808 10.8307,12.7808L 10.85,13.5C 10.85,14.2732 11.3925,14.8276 12,14.8276C 12.6075,14.8276 13.05,14.2732 13.05,13.5C 13.05,12.7268 12.5575,12.1 11.95,12.1 Z ' })
                )
            );
        }
    }]);

    return MdiDiceD6;
}(React.Component);

exports.default = MdiDiceD6;
module.exports = exports['default'];