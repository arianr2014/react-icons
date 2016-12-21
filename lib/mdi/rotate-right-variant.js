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

var MdiRotateRightVariant = function (_React$Component) {
    _inherits(MdiRotateRightVariant, _React$Component);

    function MdiRotateRightVariant() {
        _classCallCheck(this, MdiRotateRightVariant);

        return _possibleConstructorReturn(this, (MdiRotateRightVariant.__proto__ || Object.getPrototypeOf(MdiRotateRightVariant)).apply(this, arguments));
    }

    _createClass(MdiRotateRightVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 10,4L 10,1.00001L 14,5L 10,9L 10,6C 6.686,6 4,8.686 4,12L 4.08356,13L 2.06278,13L 2,12C 2,7.582 5.582,4 10,4 Z M 17,2.00001L 20,2.00001C 21.1046,2.00001 22,2.89544 22,4.00001L 22,20C 22,21.1046 21.1046,22 20,22L 17,22C 15.8954,22 15,21.1046 15,20L 15,4.00001C 15,2.89544 15.8954,2.00001 17,2.00001 Z M 4,15L 13,15L 13,22L 4,22C 2.89543,22 2,21.1046 2,20L 2,17C 2,15.8954 2.89543,15 4,15 Z ' })
                )
            );
        }
    }]);

    return MdiRotateRightVariant;
}(React.Component);

exports.default = MdiRotateRightVariant;
module.exports = exports['default'];