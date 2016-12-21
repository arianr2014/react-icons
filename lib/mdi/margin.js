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

var MdiMargin = function (_React$Component) {
    _inherits(MdiMargin, _React$Component);

    function MdiMargin() {
        _classCallCheck(this, MdiMargin);

        return _possibleConstructorReturn(this, (MdiMargin.__proto__ || Object.getPrototypeOf(MdiMargin)).apply(this, arguments));
    }

    _createClass(MdiMargin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.634,6.77756L 12.9019,5.77756L 18.5,2.08141L 18.0981,8.77756L 16.366,7.77756L 8.73204,21L 6.42264,21L 14.634,6.77756 Z M 17.5,12C 19.433,12 21,13.7386 21,16.5C 21,19.2614 19.433,21 17.5,21C 15.567,21 14,19.2614 14,16.5C 14,13.7386 15.567,12 17.5,12 Z M 17.5,14C 16.6716,14 16,14.8431 16,16.5C 16,18.1569 16.6716,19 17.5,19C 18.3284,19 19,18.1569 19,16.5C 19,14.8431 18.3284,14 17.5,14 Z M 7.5,5.00001C 9.43299,5.00001 11,6.73858 11,9.5C 11,12.2614 9.433,14 7.5,14C 5.567,14 4,12.2614 4,9.5C 4,6.73858 5.567,5.00001 7.5,5.00001 Z M 7.5,7.00001C 6.67157,7.00001 6,7.84315 6,9.5C 6,11.1569 6.67157,12 7.5,12C 8.32843,12 9,11.1569 9,9.5C 9,7.84315 8.32842,7.00001 7.5,7.00001 Z ' })
                )
            );
        }
    }]);

    return MdiMargin;
}(React.Component);

exports.default = MdiMargin;
module.exports = exports['default'];