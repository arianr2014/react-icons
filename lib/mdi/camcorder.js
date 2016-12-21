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

var MdiCamcorder = function (_React$Component) {
    _inherits(MdiCamcorder, _React$Component);

    function MdiCamcorder() {
        _classCallCheck(this, MdiCamcorder);

        return _possibleConstructorReturn(this, (MdiCamcorder.__proto__ || Object.getPrototypeOf(MdiCamcorder)).apply(this, arguments));
    }

    _createClass(MdiCamcorder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17,10.5L 17,7.00003C 17,6.44803 16.552,6.00003 16,6.00003L 4,6.00003C 3.44799,6.00003 3,6.44803 3,7.00003L 3,17C 3,17.552 3.44799,18 4,18L 16,18C 16.552,18 17,17.552 17,17L 17,13.5L 21,17.5L 21,6.50003L 17,10.5 Z ' })
                )
            );
        }
    }]);

    return MdiCamcorder;
}(React.Component);

exports.default = MdiCamcorder;
module.exports = exports['default'];