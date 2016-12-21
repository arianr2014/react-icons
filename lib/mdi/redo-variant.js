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

var MdiRedoVariant = function (_React$Component) {
    _inherits(MdiRedoVariant, _React$Component);

    function MdiRedoVariant() {
        _classCallCheck(this, MdiRedoVariant);

        return _possibleConstructorReturn(this, (MdiRedoVariant.__proto__ || Object.getPrototypeOf(MdiRedoVariant)).apply(this, arguments));
    }

    _createClass(MdiRedoVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 10.5,7C 6.91015,7 4,9.91015 4,13.5C 4,17.0899 6.91015,20 10.5,20L 14,20L 14,18L 10.5,18C 8.01472,18 6,15.9853 6,13.5C 6,11.0147 8.01472,9 10.5,9L 16.17,9L 13.09,12.09L 14.5,13.5L 20,8L 14.5,2.50005L 13.08,3.91005L 16.17,7L 10.5,7 Z M 18,18L 16,18L 16,20L 18,20L 18,18 Z ' })
                )
            );
        }
    }]);

    return MdiRedoVariant;
}(React.Component);

exports.default = MdiRedoVariant;
module.exports = exports['default'];