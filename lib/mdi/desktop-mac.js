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

var MdiDesktopMac = function (_React$Component) {
    _inherits(MdiDesktopMac, _React$Component);

    function MdiDesktopMac() {
        _classCallCheck(this, MdiDesktopMac);

        return _possibleConstructorReturn(this, (MdiDesktopMac.__proto__ || Object.getPrototypeOf(MdiDesktopMac)).apply(this, arguments));
    }

    _createClass(MdiDesktopMac, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9994,13.9981L 2.99941,13.9981L 2.99941,3.99807L 20.9994,3.99807M 20.9994,1.99807L 2.99941,1.99807C 1.89441,1.99807 0.99941,2.89406 0.99941,3.99807L 0.99941,15.9981C 0.99941,17.1031 1.89441,17.9981 2.99941,17.9981L 9.99941,17.9981L 7.99941,20.9981L 7.99941,21.9981L 15.9994,21.9981L 15.9994,20.9981L 13.9994,17.9981L 20.9994,17.9981C 22.1034,17.9981 22.9994,17.1031 22.9994,15.9981L 22.9994,3.99807C 22.9994,2.89406 22.1034,1.99807 20.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiDesktopMac;
}(React.Component);

exports.default = MdiDesktopMac;
module.exports = exports['default'];