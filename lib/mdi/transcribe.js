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

var MdiTranscribe = function (_React$Component) {
    _inherits(MdiTranscribe, _React$Component);

    function MdiTranscribe() {
        _classCallCheck(this, MdiTranscribe);

        return _possibleConstructorReturn(this, (MdiTranscribe.__proto__ || Object.getPrototypeOf(MdiTranscribe)).apply(this, arguments));
    }

    _createClass(MdiTranscribe, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,4.99807C 21.1034,4.99807 21.9994,5.89406 21.9994,6.99807L 21.9994,16.9981C 21.9994,18.1021 21.1034,18.9981 19.9994,18.9981L 3.99941,18.9981C 2.89441,18.9981 1.99941,18.1021 1.99941,16.9981L 2.0094,6.99807C 2.0094,5.89406 2.89441,4.99807 3.99941,4.99807L 19.9994,4.99807 Z M 18,17L 18,15L 12.5,15L 10.5,17L 18,17 Z M 6,17L 8.47502,17L 15.353,10.121C 15.549,9.92599 15.549,9.60899 15.353,9.414L 13.586,7.646C 13.39,7.45101 13.074,7.45101 12.878,7.646L 6,14.525L 6,17 Z ' })
                )
            );
        }
    }]);

    return MdiTranscribe;
}(React.Component);

exports.default = MdiTranscribe;
module.exports = exports['default'];