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

var MdiCommentMultipeOutline = function (_React$Component) {
    _inherits(MdiCommentMultipeOutline, _React$Component);

    function MdiCommentMultipeOutline() {
        _classCallCheck(this, MdiCommentMultipeOutline);

        return _possibleConstructorReturn(this, (MdiCommentMultipeOutline.__proto__ || Object.getPrototypeOf(MdiCommentMultipeOutline)).apply(this, arguments));
    }

    _createClass(MdiCommentMultipeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.0006,23C 11.4483,23 11.0006,22.5523 11.0006,22L 11.0006,19L 7.00063,19C 5.89606,19 5.00063,18.1046 5.00063,17L 5.01003,6.99809C 5.01003,5.89309 5.89601,4.9981 7.00001,4.9981L 21,4.9981C 22.104,4.9981 23,5.89309 23,6.99809L 23,16.9981C 23,18.1021 22.104,18.9981 21,18.9981L 16.9046,18.9997L 13.1986,22.7058C 13.0059,22.8984 12.7543,22.996 12.5019,22.9986L 12.5006,23L 12.0006,23 Z M 13.0006,17L 13.0006,20.0753L 16.0759,17L 21.0006,17L 21.0006,7.00004L 7.00062,7.00004L 7.00062,17L 13.0006,17 Z M 3,15L 0.999999,15L 1.00001,3C 1.00001,1.90001 1.90001,1.00001 3.00001,1.00001L 19,1.00001L 19,3L 3.00001,3L 3,15 Z ' })
                )
            );
        }
    }]);

    return MdiCommentMultipeOutline;
}(React.Component);

exports.default = MdiCommentMultipeOutline;
module.exports = exports['default'];