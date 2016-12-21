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

var MdiImage = function (_React$Component) {
    _inherits(MdiImage, _React$Component);

    function MdiImage() {
        _classCallCheck(this, MdiImage);

        return _possibleConstructorReturn(this, (MdiImage.__proto__ || Object.getPrototypeOf(MdiImage)).apply(this, arguments));
    }

    _createClass(MdiImage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 18.9989,3L 4.9911,3C 3.886,3 3.00001,3.89551 3.00001,5L 3.00001,19C 3.00001,20.1045 3.886,21 4.9911,21L 18.9989,21C 20.104,21 21,20.1045 21,19L 21,5C 21,3.89551 20.104,3 18.9989,3 Z M 18.9989,15.5C 18.9989,15.7761 18.7749,16 18.4986,16L 5.49138,16C 5.21511,16 4.9911,15.7761 4.9911,15.5L 4.9911,8.5C 4.9911,8.22388 5.21511,8 5.49138,8L 18.4986,8C 18.7749,8 18.9989,8.22388 18.9989,8.5L 18.9989,15.5 Z ' })
                )
            );
        }
    }]);

    return MdiImage;
}(React.Component);

exports.default = MdiImage;
module.exports = exports['default'];