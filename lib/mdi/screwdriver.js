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

var MdiScrewdriver = function (_React$Component) {
    _inherits(MdiScrewdriver, _React$Component);

    function MdiScrewdriver() {
        _classCallCheck(this, MdiScrewdriver);

        return _possibleConstructorReturn(this, (MdiScrewdriver.__proto__ || Object.getPrototypeOf(MdiScrewdriver)).apply(this, arguments));
    }

    _createClass(MdiScrewdriver, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18,1.8262C 17.4888,1.8262 16.9777,2.0223 16.5859,2.4141C 13.724,5.276 8,11 8,11L 9.5,12.5L 6,16L 4,16L 2,20L 4,22L 8,20L 8,18L 11.5,14.5L 13,16C 13,16 18.724,10.276 21.5859,7.4141C 22.2119,6.4998 22.3694,5.3694 21.5859,4.5859L 19.4141,2.4141C 19.0223,2.0223 18.5112,1.8262 18,1.8262 Z M 18,4L 20,6L 13,13L 11,11L 18,4 Z ' })
                )
            );
        }
    }]);

    return MdiScrewdriver;
}(React.Component);

exports.default = MdiScrewdriver;
module.exports = exports['default'];