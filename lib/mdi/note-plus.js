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

var MdiNotePlus = function (_React$Component) {
    _inherits(MdiNotePlus, _React$Component);

    function MdiNotePlus() {
        _classCallCheck(this, MdiNotePlus);

        return _possibleConstructorReturn(this, (MdiNotePlus.__proto__ || Object.getPrototypeOf(MdiNotePlus)).apply(this, arguments));
    }

    _createClass(MdiNotePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9991,9.99831L 19.4991,9.99831L 13.9991,4.49831L 13.9991,9.99831 Z M 4.99915,2.99831L 14.9991,2.99831L 20.9991,8.99831L 20.9991,18.9983C 20.9991,20.1023 20.1031,20.9983 18.9991,20.9983L 4.98914,20.9983C 3.88513,20.9983 2.99914,20.1023 2.99914,18.9983L 3.00915,4.99831C 3.00915,3.89431 3.89412,2.99831 4.99915,2.99831 Z M 8.99999,18L 11,18L 11,15L 14,15L 14,13L 11,13L 11,10L 9,10L 8.99999,13L 6,13L 6,15L 8.99999,15L 8.99999,18 Z ' })
                )
            );
        }
    }]);

    return MdiNotePlus;
}(React.Component);

exports.default = MdiNotePlus;
module.exports = exports['default'];