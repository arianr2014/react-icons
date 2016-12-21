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

var MdiTent = function (_React$Component) {
    _inherits(MdiTent, _React$Component);

    function MdiTent() {
        _classCallCheck(this, MdiTent);

        return _possibleConstructorReturn(this, (MdiTent.__proto__ || Object.getPrototypeOf(MdiTent)).apply(this, arguments));
    }

    _createClass(MdiTent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,6C 4,7.19467 4.3928,8.26702 5,9C 3.34314,9 2,7.65686 2,6C 2,4.34315 3.34315,3 5.01559,3.00004C 4.3928,3.73299 4,4.80533 4,6 Z M 2,21L 2,19L 4.757,19L 12,4.78481L 19.243,19L 22,19L 22,21L 2,21 Z M 12,9.19019L 7.00165,19L 16.9984,19L 12,9.19019 Z ' })
                )
            );
        }
    }]);

    return MdiTent;
}(React.Component);

exports.default = MdiTent;
module.exports = exports['default'];