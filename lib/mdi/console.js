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

var MdiConsole = function (_React$Component) {
    _inherits(MdiConsole, _React$Component);

    function MdiConsole() {
        _classCallCheck(this, MdiConsole);

        return _possibleConstructorReturn(this, (MdiConsole.__proto__ || Object.getPrototypeOf(MdiConsole)).apply(this, arguments));
    }

    _createClass(MdiConsole, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.999,18.9981L 19.999,6.99808L 3.99918,6.99808L 3.99919,18.9991L 19.999,18.9981 Z M 19.999,2.99807C 21.103,2.99807 21.999,3.89407 21.999,4.99807L 21.999,18.9981C 21.999,20.1031 21.103,20.9981 19.999,20.9981L 3.99914,20.9981C 2.89514,20.9981 1.99915,20.1031 1.99915,18.9981L 1.99915,4.99807C 1.99915,3.89407 2.89514,2.99807 3.99914,2.99807L 19.999,2.99807 Z M 13,17L 13,15L 18,15L 18,17L 13,17 Z M 9.58038,13.0095L 5.5709,9L 8.39933,9L 11.7017,12.3024C 12.0922,12.6929 12.0922,13.3261 11.7017,13.7166L 8.41828,17L 5.58985,17L 9.58038,13.0095 Z ' })
                )
            );
        }
    }]);

    return MdiConsole;
}(React.Component);

exports.default = MdiConsole;
module.exports = exports['default'];