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

var MdiSatellite = function (_React$Component) {
    _inherits(MdiSatellite, _React$Component);

    function MdiSatellite() {
        _classCallCheck(this, MdiSatellite);

        return _possibleConstructorReturn(this, (MdiSatellite.__proto__ || Object.getPrototypeOf(MdiSatellite)).apply(this, arguments));
    }

    _createClass(MdiSatellite, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.9993,17.9981L 8.4993,13.4981L 10.9993,16.5041L 14.4993,11.9981L 18.9993,17.9981M 4.9993,11.9981L 4.9993,9.99807C 7.76129,9.99807 9.9993,7.74907 9.9993,4.98807L 11.9993,4.98807C 11.9993,8.85407 8.8653,11.9981 4.9993,11.9981 Z M 4.9993,4.98807L 7.9993,4.98807C 7.9993,6.64507 6.65628,7.99807 4.9993,7.99807M 18.9993,2.99807L 4.9993,2.99807C 3.89529,2.99807 2.9993,3.89307 2.9993,4.99807L 2.9993,18.9981C 2.9993,20.1031 3.89529,20.9981 4.9993,20.9981L 18.9993,20.9981C 20.1033,20.9981 20.9993,20.1031 20.9993,18.9981L 20.9993,4.99807C 20.9993,3.89307 20.1033,2.99807 18.9993,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiSatellite;
}(React.Component);

exports.default = MdiSatellite;
module.exports = exports['default'];