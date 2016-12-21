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

var MdiBookMultiple = function (_React$Component) {
    _inherits(MdiBookMultiple, _React$Component);

    function MdiBookMultiple() {
        _classCallCheck(this, MdiBookMultiple);

        return _possibleConstructorReturn(this, (MdiBookMultiple.__proto__ || Object.getPrototypeOf(MdiBookMultiple)).apply(this, arguments));
    }

    _createClass(MdiBookMultiple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 18.9999,18.0007L 9.00002,17.9997C 7.8965,17.9997 7.00002,17.1037 7.00002,15.9997L 6.99999,4.00016C 6.99999,2.89616 7.89647,2.00016 8.99998,2.00016L 9.99998,2.00016L 9.99995,7.00065L 11.9999,5.5013L 13.9999,7.00089L 14,2.00033L 18.9999,2.00114C 20.1048,2.00114 20.9998,2.89713 20.9998,4.00114L 20.9999,16.0007C 20.9999,17.1047 20.1049,18.0007 18.9999,18.0007 Z M 17,20L 17,22L 5,22C 3.89543,22 3,21.1046 3,20L 3,6L 5,6L 5,20L 17,20 Z ' })
                )
            );
        }
    }]);

    return MdiBookMultiple;
}(React.Component);

exports.default = MdiBookMultiple;
module.exports = exports['default'];