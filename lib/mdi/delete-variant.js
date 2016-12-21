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

var MdiDeleteVariant = function (_React$Component) {
    _inherits(MdiDeleteVariant, _React$Component);

    function MdiDeleteVariant() {
        _classCallCheck(this, MdiDeleteVariant);

        return _possibleConstructorReturn(this, (MdiDeleteVariant.__proto__ || Object.getPrototypeOf(MdiDeleteVariant)).apply(this, arguments));
    }

    _createClass(MdiDeleteVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 21.0284,3L 17.9755,20.3137C 17.825,21.2693 16.9978,22 16,22L 8,22C 7.00214,22 6.17496,21.2692 6.02445,20.3136L 2.97159,3L 21.0284,3 Z M 5.35509,5.00001L 8,20L 16,20L 18.6449,5.00001L 5.35509,5.00001 Z M 9,18L 9,14L 13,14L 13,18L 9,18 Z M 13,13.182L 9.81802,10L 13,6.81802L 16.182,10L 13,13.182 Z ' })
                )
            );
        }
    }]);

    return MdiDeleteVariant;
}(React.Component);

exports.default = MdiDeleteVariant;
module.exports = exports['default'];