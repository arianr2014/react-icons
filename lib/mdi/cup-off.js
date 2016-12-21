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

var MdiCupOff = function (_React$Component) {
    _inherits(MdiCupOff, _React$Component);

    function MdiCupOff() {
        _classCallCheck(this, MdiCupOff);

        return _possibleConstructorReturn(this, (MdiCupOff.__proto__ || Object.getPrototypeOf(MdiCupOff)).apply(this, arguments));
    }

    _createClass(MdiCupOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 0.999999,4.26849L 2.27711,3.00001L 21,21.7229L 19.7315,23L 18.2721,21.5406C 17.9264,21.8264 17.483,21.9981 16.9996,21.9981L 6.99962,21.9981C 5.97362,21.9981 5.12861,21.2261 5.01362,20.2311L 3.52985,6.79834L 0.999999,4.26849 Z M 18.3246,7.99807L 18.7666,3.99807L 5.82076,3.99807L 3.82078,1.99809L 20.9996,1.99809L 19.2908,17.4681L 9.82076,7.99807L 18.3246,7.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCupOff;
}(React.Component);

exports.default = MdiCupOff;
module.exports = exports['default'];