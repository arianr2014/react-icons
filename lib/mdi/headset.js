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

var MdiHeadset = function (_React$Component) {
    _inherits(MdiHeadset, _React$Component);

    function MdiHeadset() {
        _classCallCheck(this, MdiHeadset);

        return _possibleConstructorReturn(this, (MdiHeadset.__proto__ || Object.getPrototypeOf(MdiHeadset)).apply(this, arguments));
    }

    _createClass(MdiHeadset, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,0.998068C 7.0284,0.998068 2.99939,5.02706 2.99939,9.99807L 2.99939,16.9981C 2.99939,18.6551 4.34239,19.9981 5.99939,19.9981L 8.99939,19.9981L 8.99939,11.9981L 4.99939,11.9981L 4.99939,9.99807C 4.99939,6.13207 8.13339,2.99807 11.9994,2.99807C 15.8654,2.99807 18.9994,6.13207 18.9994,9.99807L 18.9994,11.9981L 14.9994,11.9981L 14.9994,19.9981L 18.9994,19.9981L 18.9994,20.9981L 11.9994,20.9981L 11.9994,22.9981L 17.9994,22.9981C 19.6564,22.9981 20.9994,21.6551 20.9994,19.9981L 20.9994,9.99807C 20.9994,5.02706 16.9704,0.998068 11.9994,0.998068 Z ' })
                )
            );
        }
    }]);

    return MdiHeadset;
}(React.Component);

exports.default = MdiHeadset;
module.exports = exports['default'];