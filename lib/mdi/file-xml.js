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

var MdiFileXml = function (_React$Component) {
    _inherits(MdiFileXml, _React$Component);

    function MdiFileXml() {
        _classCallCheck(this, MdiFileXml);

        return _possibleConstructorReturn(this, (MdiFileXml.__proto__ || Object.getPrototypeOf(MdiFileXml)).apply(this, arguments));
    }

    _createClass(MdiFileXml, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,8.99807L 18.4994,8.99807L 12.9994,3.49807L 12.9994,8.99807 Z M 5.99939,1.99808L 13.9994,1.99808L 19.9994,7.99807L 19.9994,19.9981C 19.9994,21.1021 19.1034,21.9981 17.9994,21.9981L 5.98938,21.9981C 4.88538,21.9981 3.99939,21.1021 3.99939,19.9981L 4.0094,3.99807C 4.0094,2.89407 4.89437,1.99808 5.99939,1.99808 Z M 6.12157,15.5L 9.86421,19.2426L 11.2784,17.8284L 8.95,15.5L 11.2784,13.1716L 9.86421,11.7574L 6.12157,15.5 Z M 17.2784,15.5L 13.5358,11.7574L 12.1216,13.1716L 14.45,15.5L 12.1216,17.8284L 13.5358,19.2426L 17.2784,15.5 Z ' })
                )
            );
        }
    }]);

    return MdiFileXml;
}(React.Component);

exports.default = MdiFileXml;
module.exports = exports['default'];