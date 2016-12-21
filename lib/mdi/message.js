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

var MdiMessage = function (_React$Component) {
    _inherits(MdiMessage, _React$Component);

    function MdiMessage() {
        _classCallCheck(this, MdiMessage);

        return _possibleConstructorReturn(this, (MdiMessage.__proto__ || Object.getPrototypeOf(MdiMessage)).apply(this, arguments));
    }

    _createClass(MdiMessage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 19.9994,1.99807L 3.99938,1.99807C 2.89539,1.99807 2.01038,2.89306 2.01038,3.99807L 1.99938,21.9981L 5.99938,17.9981L 19.9994,17.9981C 21.1029,17.9981 21.9994,17.1021 21.9994,15.9981L 21.9994,3.99807C 21.9994,2.89306 21.1029,1.99807 19.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiMessage;
}(React.Component);

exports.default = MdiMessage;
module.exports = exports['default'];