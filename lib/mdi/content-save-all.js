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

var MdiContentSaveAll = function (_React$Component) {
    _inherits(MdiContentSaveAll, _React$Component);

    function MdiContentSaveAll() {
        _classCallCheck(this, MdiContentSaveAll);

        return _possibleConstructorReturn(this, (MdiContentSaveAll.__proto__ || Object.getPrototypeOf(MdiContentSaveAll)).apply(this, arguments));
    }

    _createClass(MdiContentSaveAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17,7L 17,3L 7,3L 7,7L 17,7 Z M 14,17C 15.66,17 17,15.66 17,14C 17,12.34 15.66,11 14,11C 12.34,11 11,12.34 11,14C 11,15.66 12.34,17 14,17 Z M 19,1L 23,5L 23,17C 23,18.1 22.1,19 21,19L 7,19C 5.89,19 5,18.1 5,17L 5,3C 5,1.9 5.89,1 7,1L 19,1 Z M 1.00002,7.00002L 3.00002,7.00002L 3,21L 17,21L 17,23L 3,23C 1.9,23 1.00001,22.1 1.00001,21L 1.00002,7.00002 Z ' })
                )
            );
        }
    }]);

    return MdiContentSaveAll;
}(React.Component);

exports.default = MdiContentSaveAll;
module.exports = exports['default'];