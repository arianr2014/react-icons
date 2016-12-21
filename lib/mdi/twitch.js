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

var MdiTwitch = function (_React$Component) {
    _inherits(MdiTwitch, _React$Component);

    function MdiTwitch() {
        _classCallCheck(this, MdiTwitch);

        return _possibleConstructorReturn(this, (MdiTwitch.__proto__ || Object.getPrototypeOf(MdiTwitch)).apply(this, arguments));
    }

    _createClass(MdiTwitch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 4,2.00001L 22,2.00002L 22,14L 17,19L 13,19L 10,22L 7,22L 7,19L 2,19L 2,6.00001L 4,2.00001 Z M 20,13L 20,4.00001L 5.99999,4.00001L 6,16L 9,16L 9,19L 12,16L 17,16L 20,13 Z M 15,7L 17,7L 17,12L 15,12L 15,7 Z M 12,7L 12,12L 10,12L 10,7L 12,7 Z ' })
                )
            );
        }
    }]);

    return MdiTwitch;
}(React.Component);

exports.default = MdiTwitch;
module.exports = exports['default'];