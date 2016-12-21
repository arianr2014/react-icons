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

var MdiStocking = function (_React$Component) {
    _inherits(MdiStocking, _React$Component);

    function MdiStocking() {
        _classCallCheck(this, MdiStocking);

        return _possibleConstructorReturn(this, (MdiStocking.__proto__ || Object.getPrototypeOf(MdiStocking)).apply(this, arguments));
    }

    _createClass(MdiStocking, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17,2C 18.1046,2 19,2.89543 19,4L 19,7C 19,8.10457 18.1046,9 17,9L 17,17C 17,17.845 16.4759,18.5677 15.7351,18.8606L 9.48542,21.7749C 8.48434,22.2417 7.29438,21.8086 6.82756,20.8075L 5.98233,18.9949C 5.51552,17.9938 5.94863,16.8038 6.94971,16.337L 9.99999,14.9146L 10,9C 8.89543,9 8,8.10457 8,7L 8,4C 8,2.89543 8.89543,2.00001 10,2.00001L 17,2 Z M 10,4.00001L 10,7.00001L 17,7.00001L 17,4.00001L 10,4.00001 Z ' })
                )
            );
        }
    }]);

    return MdiStocking;
}(React.Component);

exports.default = MdiStocking;
module.exports = exports['default'];