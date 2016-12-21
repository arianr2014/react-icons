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

var MdiEmailOpenOutline = function (_React$Component) {
    _inherits(MdiEmailOpenOutline, _React$Component);

    function MdiEmailOpenOutline() {
        _classCallCheck(this, MdiEmailOpenOutline);

        return _possibleConstructorReturn(this, (MdiEmailOpenOutline.__proto__ || Object.getPrototypeOf(MdiEmailOpenOutline)).apply(this, arguments));
    }

    _createClass(MdiEmailOpenOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,15.3584L 4,10.3594L 4,18L 20,18L 20,10.3594L 12,15.3584 Z M 4,8.00105L 12,13L 20,8.00105L 20,8.00001L 12,3.00105L 4,8.00001L 4,8.00105 Z M 22,8.00001L 22,18C 22,19.1046 21.1046,20 20,20L 4,20C 2.89543,20 2,19.1046 2,18L 2,8.00001C 2,7.27242 2.38852,6.63558 2.96941,6.28563L 12,0.642693L 21.0306,6.28567C 21.6115,6.63563 22,7.27245 22,8.00001 Z ' })
                )
            );
        }
    }]);

    return MdiEmailOpenOutline;
}(React.Component);

exports.default = MdiEmailOpenOutline;
module.exports = exports['default'];