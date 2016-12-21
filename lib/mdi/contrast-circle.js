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

var MdiContrastCircle = function (_React$Component) {
    _inherits(MdiContrastCircle, _React$Component);

    function MdiContrastCircle() {
        _classCallCheck(this, MdiContrastCircle);

        return _possibleConstructorReturn(this, (MdiContrastCircle.__proto__ || Object.getPrototypeOf(MdiContrastCircle)).apply(this, arguments));
    }

    _createClass(MdiContrastCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9993,19.9981C 9.7903,19.9981 7.7903,19.1031 6.34231,17.6551L 17.6563,6.34107C 19.1043,7.78806 19.9993,9.78907 19.9993,11.9981C 19.9993,16.4171 16.4173,19.9981 11.9993,19.9981 Z M 5.9993,7.99807L 7.9993,7.99807L 7.9993,5.99807L 9.4993,5.99807L 9.4993,7.99807L 11.4993,7.99807L 11.4993,9.49807L 9.4993,9.49807L 9.4993,11.4981L 7.9993,11.4981L 7.9993,9.49807L 5.9993,9.49807M 11.9993,1.99807C 6.47631,1.99807 1.9993,6.47507 1.9993,11.9981C 1.9993,17.5211 6.47631,21.9981 11.9993,21.9981C 17.5223,21.9981 21.9993,17.5211 21.9993,11.9981C 21.9993,6.47507 17.5223,1.99807 11.9993,1.99807 Z M 11.9993,15.9981L 16.9993,15.9981L 16.9993,14.4981L 11.9993,14.4981L 11.9993,15.9981 Z ' })
                )
            );
        }
    }]);

    return MdiContrastCircle;
}(React.Component);

exports.default = MdiContrastCircle;
module.exports = exports['default'];