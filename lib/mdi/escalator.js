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

var MdiEscalator = function (_React$Component) {
    _inherits(MdiEscalator, _React$Component);

    function MdiEscalator() {
        _classCallCheck(this, MdiEscalator);

        return _possibleConstructorReturn(this, (MdiEscalator.__proto__ || Object.getPrototypeOf(MdiEscalator)).apply(this, arguments));
    }

    _createClass(MdiEscalator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,8L 18.9467,8L 6.9467,20L 4,20C 2.89543,20 2,19.1046 2,18C 2,16.8954 2.89543,16 4,16L 5.28985,16L 7,14.2899L 7,10C 7,9.44772 7.44771,9 8,9L 9,9C 9.55228,9 10,9.44772 10,10L 10,11.2899L 17.2898,4L 20,4C 21.1046,4 22,4.89544 22,6C 22,7.10457 21.1046,8 20,8 Z M 8.5,5C 9.32842,5 10,5.67158 10,6.5C 10,7.32843 9.32843,8 8.5,8C 7.67157,8 7,7.32843 7,6.5C 7,5.67158 7.67157,5 8.5,5 Z ' })
                )
            );
        }
    }]);

    return MdiEscalator;
}(React.Component);

exports.default = MdiEscalator;
module.exports = exports['default'];