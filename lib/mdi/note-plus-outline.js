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

var MdiNotePlusOutline = function (_React$Component) {
    _inherits(MdiNotePlusOutline, _React$Component);

    function MdiNotePlusOutline() {
        _classCallCheck(this, MdiNotePlusOutline);

        return _possibleConstructorReturn(this, (MdiNotePlusOutline.__proto__ || Object.getPrototypeOf(MdiNotePlusOutline)).apply(this, arguments));
    }

    _createClass(MdiNotePlusOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9991,9.99832L 20.4991,9.99832L 14.9991,4.49832L 14.9991,9.99832 Z M 3.99914,2.99832L 15.9991,2.99832L 21.9991,8.99832L 21.9991,18.9983C 21.9991,20.1023 21.1031,20.9983 19.9991,20.9983L 3.98913,20.9983C 2.88513,20.9983 1.99914,20.1023 1.99914,18.9983L 2.00915,4.99832C 2.00915,3.89432 2.89412,2.99832 3.99914,2.99832 Z M 4,5.00001L 4,19L 20,19L 20,12L 13,12L 13,5.00001L 4,5.00001 Z M 8,17L 8,15L 6,15L 6,13L 8,13L 8,11L 10,11L 10,13L 12,13L 12,15L 10,15L 10,17L 8,17 Z ' })
                )
            );
        }
    }]);

    return MdiNotePlusOutline;
}(React.Component);

exports.default = MdiNotePlusOutline;
module.exports = exports['default'];