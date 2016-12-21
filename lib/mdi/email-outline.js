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

var MdiEmailOutline = function (_React$Component) {
    _inherits(MdiEmailOutline, _React$Component);

    function MdiEmailOutline() {
        _classCallCheck(this, MdiEmailOutline);

        return _possibleConstructorReturn(this, (MdiEmailOutline.__proto__ || Object.getPrototypeOf(MdiEmailOutline)).apply(this, arguments));
    }

    _createClass(MdiEmailOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,7.99806L 11.9997,12.9981L 4,7.99843L 4,18L 20,18L 20,7.99806 Z M 11.9997,10.9981L 19.9969,6L 4.00251,6L 11.9997,10.9981 Z M 19.9994,3.99807C 21.1034,3.99807 21.9994,4.89307 21.9994,5.99807L 21.9994,17.9981C 21.9994,19.1021 21.1034,19.9981 19.9994,19.9981L 3.9994,19.9981C 2.8944,19.9981 1.9994,19.1021 1.9994,17.9981L 2.00939,5.99807C 2.00939,4.89307 2.8944,3.99807 3.9994,3.99807L 19.9994,3.99807 Z ' })
                )
            );
        }
    }]);

    return MdiEmailOutline;
}(React.Component);

exports.default = MdiEmailOutline;
module.exports = exports['default'];