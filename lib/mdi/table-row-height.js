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

var MdiTableRowHeight = function (_React$Component) {
    _inherits(MdiTableRowHeight, _React$Component);

    function MdiTableRowHeight() {
        _classCallCheck(this, MdiTableRowHeight);

        return _possibleConstructorReturn(this, (MdiTableRowHeight.__proto__ || Object.getPrototypeOf(MdiTableRowHeight)).apply(this, arguments));
    }

    _createClass(MdiTableRowHeight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 3,5L 15,5C 16.1045,5 17,5.89543 17,7L 17,17C 17,18.1046 16.1045,19 15,19L 3,19C 1.89543,19 1,18.1046 1,17L 1,7C 1,5.89543 1.89543,5 3,5 Z M 3,9.00001L 3,12L 7.99998,12L 7.99999,9.00001L 3,9.00001 Z M 9.99999,9.00001L 9.99999,12L 15,12L 15,9.00001L 9.99999,9.00001 Z M 3,14L 3,17L 7.99998,17L 7.99999,14L 3,14 Z M 9.99999,14L 9.99998,17L 15,17L 15,14L 9.99999,14 Z M 23,14L 23,7L 19,7L 19,9L 21,9L 21,12L 19,12L 19,14L 23,14 Z ' })
                )
            );
        }
    }]);

    return MdiTableRowHeight;
}(React.Component);

exports.default = MdiTableRowHeight;
module.exports = exports['default'];