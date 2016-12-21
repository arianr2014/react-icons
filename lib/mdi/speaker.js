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

var MdiSpeaker = function (_React$Component) {
    _inherits(MdiSpeaker, _React$Component);

    function MdiSpeaker() {
        _classCallCheck(this, MdiSpeaker);

        return _possibleConstructorReturn(this, (MdiSpeaker.__proto__ || Object.getPrototypeOf(MdiSpeaker)).apply(this, arguments));
    }

    _createClass(MdiSpeaker, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,11.9981C 10.3434,11.9981 8.99943,13.3421 8.99943,14.9981C 8.99943,16.6541 10.3434,17.9981 11.9994,17.9981C 13.6554,17.9981 14.9994,16.6541 14.9994,14.9981C 14.9994,13.3421 13.6554,11.9981 11.9994,11.9981 Z M 11.9994,19.9981C 9.23942,19.9981 6.99943,17.7601 6.99943,14.9981C 6.99943,12.2361 9.23942,9.99807 11.9994,9.99807C 14.7604,9.99807 16.9994,12.2361 16.9994,14.9981C 16.9994,17.7601 14.7604,19.9981 11.9994,19.9981 Z M 11.9994,3.99807C 13.1024,3.99807 13.9994,4.89406 13.9994,5.99807C 13.9994,7.10207 13.1024,7.99807 11.9994,7.99807C 10.8934,7.99807 9.99943,7.10207 9.99943,5.99807C 9.99943,4.89406 10.8934,3.99807 11.9994,3.99807 Z M 16.9994,1.99807L 6.99943,1.99807C 5.89442,1.99807 4.99943,2.89406 4.99943,3.99807L 4.99943,19.9981C 4.99943,21.1021 5.89442,21.9881 6.99943,21.9881L 16.9994,21.9981C 18.1034,21.9981 18.9994,21.1021 18.9994,19.9981L 18.9994,3.99807C 18.9994,2.89406 18.1034,1.99807 16.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiSpeaker;
}(React.Component);

exports.default = MdiSpeaker;
module.exports = exports['default'];