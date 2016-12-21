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

var MdiPresentation = function (_React$Component) {
    _inherits(MdiPresentation, _React$Component);

    function MdiPresentation() {
        _classCallCheck(this, MdiPresentation);

        return _possibleConstructorReturn(this, (MdiPresentation.__proto__ || Object.getPrototypeOf(MdiPresentation)).apply(this, arguments));
    }

    _createClass(MdiPresentation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2,3L 10,3C 10,1.89543 10.8954,1 12,1C 13.1046,1 14,1.89543 14,3L 22,3L 22,5L 21,5L 21,16L 15.25,16L 17,22L 15,22L 13.25,16L 10.75,16L 9,22L 7,22L 8.75,16L 3,16L 3,5L 2,5L 2,3 Z M 5,5.00001L 5,14L 19,14L 19,5.00001L 5,5.00001 Z ' })
                )
            );
        }
    }]);

    return MdiPresentation;
}(React.Component);

exports.default = MdiPresentation;
module.exports = exports['default'];