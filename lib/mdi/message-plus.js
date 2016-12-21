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

var MdiMessagePlus = function (_React$Component) {
    _inherits(MdiMessagePlus, _React$Component);

    function MdiMessagePlus() {
        _classCallCheck(this, MdiMessagePlus);

        return _possibleConstructorReturn(this, (MdiMessagePlus.__proto__ || Object.getPrototypeOf(MdiMessagePlus)).apply(this, arguments));
    }

    _createClass(MdiMessagePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,1.99807C 21.1029,1.99807 21.9994,2.89307 21.9994,3.99807L 21.9994,15.9981C 21.9994,17.1021 21.1029,17.9981 19.9994,17.9981L 5.99938,17.9981L 1.99938,21.9981L 2.01038,3.99807C 2.01038,2.89307 2.89539,1.99807 3.99938,1.99807L 19.9994,1.99807 Z M 11,6L 11,9L 8,9L 8,11L 11,11L 11,14L 13,14L 13,11L 16,11L 16,9L 13,9L 13,6L 11,6 Z ' })
                )
            );
        }
    }]);

    return MdiMessagePlus;
}(React.Component);

exports.default = MdiMessagePlus;
module.exports = exports['default'];