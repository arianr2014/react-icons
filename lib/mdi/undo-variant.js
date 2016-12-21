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

var MdiUndoVariant = function (_React$Component) {
    _inherits(MdiUndoVariant, _React$Component);

    function MdiUndoVariant() {
        _classCallCheck(this, MdiUndoVariant);

        return _possibleConstructorReturn(this, (MdiUndoVariant.__proto__ || Object.getPrototypeOf(MdiUndoVariant)).apply(this, arguments));
    }

    _createClass(MdiUndoVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.5,7C 17.0898,7 20,9.91015 20,13.5C 20,17.0899 17.0898,20 13.5,20L 9.99997,20L 9.99997,18L 13.5,18C 15.9853,18 18,15.9853 18,13.5C 18,11.0147 15.9853,9 13.5,9L 7.83,9L 10.91,12.09L 9.49998,13.5L 4,8L 9.49998,2.50005L 10.92,3.91005L 7.83,7L 13.5,7 Z M 6,18L 8,18L 8,20L 6,20L 6,18 Z ' })
                )
            );
        }
    }]);

    return MdiUndoVariant;
}(React.Component);

exports.default = MdiUndoVariant;
module.exports = exports['default'];