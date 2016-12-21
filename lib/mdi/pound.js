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

var MdiPound = function (_React$Component) {
    _inherits(MdiPound, _React$Component);

    function MdiPound() {
        _classCallCheck(this, MdiPound);

        return _possibleConstructorReturn(this, (MdiPound.__proto__ || Object.getPrototypeOf(MdiPound)).apply(this, arguments));
    }

    _createClass(MdiPound, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 5.41306,21L 6.11836,17L 2.11837,17L 2.47102,15L 6.47102,15L 7.52897,9.00001L 3.52898,9L 3.88163,7.00001L 7.88163,7.00001L 8.58694,3L 10.5869,3L 9.88163,7.00001L 15.8816,7.00002L 16.5869,3.00001L 18.5869,3.00001L 17.8816,7.00002L 21.8816,7.00001L 21.529,9.00001L 17.529,9.00002L 16.471,15L 20.471,15L 20.1184,17L 16.1184,17L 15.413,21L 13.413,21L 14.1184,17L 8.11836,17L 7.41306,21L 5.41306,21 Z M 9.52897,9.00001L 8.47102,15L 14.471,15L 15.529,9.00002L 9.52897,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiPound;
}(React.Component);

exports.default = MdiPound;
module.exports = exports['default'];