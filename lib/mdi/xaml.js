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

var MdiXaml = function (_React$Component) {
    _inherits(MdiXaml, _React$Component);

    function MdiXaml() {
        _classCallCheck(this, MdiXaml);

        return _possibleConstructorReturn(this, (MdiXaml.__proto__ || Object.getPrototypeOf(MdiXaml)).apply(this, arguments));
    }

    _createClass(MdiXaml, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9282,12L 15.4641,18L 8.5359,18L 5.0718,12L 8.5359,6L 15.4641,6L 18.9282,12 Z M 23.7735,12L 19.732,19L 18,18L 21.4641,12L 18,6L 19.732,5L 23.7735,12 Z M 0.226501,12L 4.26795,5L 6,6L 2.5359,12L 6,18L 4.26795,19L 0.226501,12 Z ' })
                )
            );
        }
    }]);

    return MdiXaml;
}(React.Component);

exports.default = MdiXaml;
module.exports = exports['default'];