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

var MdiCamcorderBox = function (_React$Component) {
    _inherits(MdiCamcorderBox, _React$Component);

    function MdiCamcorderBox() {
        _classCallCheck(this, MdiCamcorderBox);

        return _possibleConstructorReturn(this, (MdiCamcorderBox.__proto__ || Object.getPrototypeOf(MdiCamcorderBox)).apply(this, arguments));
    }

    _createClass(MdiCamcorderBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,15.998L 13.9994,12.798L 13.9994,15.998L 5.99943,15.998L 5.99943,7.99805L 13.9994,7.99805L 13.9994,11.1981L 17.9994,7.99805M 19.9994,3.99805L 3.99943,3.99805C 2.89543,3.99805 1.99943,4.89404 1.99943,5.99805L 1.99943,17.998C 1.99943,19.1021 2.89543,19.998 3.99943,19.998L 19.9994,19.998C 21.1034,19.998 21.9994,19.1021 21.9994,17.998L 21.9994,5.99805C 21.9994,4.89404 21.1034,3.99805 19.9994,3.99805 Z ' })
                )
            );
        }
    }]);

    return MdiCamcorderBox;
}(React.Component);

exports.default = MdiCamcorderBox;
module.exports = exports['default'];