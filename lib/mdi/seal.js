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

var MdiSeal = function (_React$Component) {
    _inherits(MdiSeal, _React$Component);

    function MdiSeal() {
        _classCallCheck(this, MdiSeal);

        return _possibleConstructorReturn(this, (MdiSeal.__proto__ || Object.getPrototypeOf(MdiSeal)).apply(this, arguments));
    }

    _createClass(MdiSeal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.33333', 'stroke-linejoin': 'miter', d: 'M 20.3943,19.3706L 16.3828,17.9893L 15.0016,22.0008L 11.9248,15.9996L 8.99895,21.9986L 7.61768,17.9871L 3.60619,19.3683L 6.53159,13.3704C 5.57315,12.1727 5,10.6533 5,9C 5,5.13401 8.13401,2 12,2C 15.866,2 19,5.13401 19,9C 19,10.6535 18.4267,12.1731 17.468,13.3708L 20.3943,19.3706 Z M 7,9.00001L 9.68578,10.3429L 9.50615,13.3356L 12.012,11.6811L 14.514,13.333L 14.334,10.3356L 17.0156,8.9948L 14.323,7.64851L 14.5017,4.6727L 12.0162,6.31371L 9.49384,4.64828L 9.67477,7.66262L 7,9.00001 Z ' })
                )
            );
        }
    }]);

    return MdiSeal;
}(React.Component);

exports.default = MdiSeal;
module.exports = exports['default'];