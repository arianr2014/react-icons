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

var MdiLightbulb = function (_React$Component) {
    _inherits(MdiLightbulb, _React$Component);

    function MdiLightbulb() {
        _classCallCheck(this, MdiLightbulb);

        return _possibleConstructorReturn(this, (MdiLightbulb.__proto__ || Object.getPrototypeOf(MdiLightbulb)).apply(this, arguments));
    }

    _createClass(MdiLightbulb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,1.99807C 8.13341,1.99807 4.99941,5.13207 4.99941,8.99807C 4.99941,11.3761 6.18741,13.4731 7.99941,14.7381L 7.99941,16.9981C 7.99941,17.5501 8.44741,17.9981 8.99941,17.9981L 14.9994,17.9981C 15.5514,17.9981 15.9994,17.5501 15.9994,16.9981L 15.9994,14.7381C 17.8114,13.4731 18.9994,11.3761 18.9994,8.99807C 18.9994,5.13207 15.8654,1.99807 11.9994,1.99807 Z M 8.99941,20.9981C 8.99941,21.5501 9.44741,21.9981 9.99941,21.9981L 13.9994,21.9981C 14.5514,21.9981 14.9994,21.5501 14.9994,20.9981L 14.9994,19.9981L 8.99941,19.9981L 8.99941,20.9981 Z ' })
                )
            );
        }
    }]);

    return MdiLightbulb;
}(React.Component);

exports.default = MdiLightbulb;
module.exports = exports['default'];