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

var MdiFactory = function (_React$Component) {
    _inherits(MdiFactory, _React$Component);

    function MdiFactory() {
        _classCallCheck(this, MdiFactory);

        return _possibleConstructorReturn(this, (MdiFactory.__proto__ || Object.getPrototypeOf(MdiFactory)).apply(this, arguments));
    }

    _createClass(MdiFactory, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4,18L 4,20L 8,20L 8,18L 4,18 Z M 4,14L 4,16L 14,16L 14,14L 4,14 Z M 10,18L 10,20L 14,20L 14,18L 10,18 Z M 16,14L 16,16L 20,16L 20,14L 16,14 Z M 16,18L 16,20L 20,20L 20,18L 16,18 Z M 2,22L 2,8.00001L 7,12L 7,8.00001L 12,12L 12,8.00001L 17,12L 18,2.00001L 21,2L 22,12L 22,22L 2,22 Z ' })
                )
            );
        }
    }]);

    return MdiFactory;
}(React.Component);

exports.default = MdiFactory;
module.exports = exports['default'];