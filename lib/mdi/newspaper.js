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

var MdiNewspaper = function (_React$Component) {
    _inherits(MdiNewspaper, _React$Component);

    function MdiNewspaper() {
        _classCallCheck(this, MdiNewspaper);

        return _possibleConstructorReturn(this, (MdiNewspaper.__proto__ || Object.getPrototypeOf(MdiNewspaper)).apply(this, arguments));
    }

    _createClass(MdiNewspaper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20,10.9999L 4.00002,10.9999L 4.00002,7.99994L 20,7.99994M 20,15.0001L 13,15.0001L 13,13.0001L 20,13.0001M 20,19L 13,19L 13,17.0001L 20,17.0001M 10.9999,19.0001L 3.99999,19L 3.99994,13.0001L 10.9999,13.0002M 20.333,4.66705L 18.667,3L 17,4.66705L 15.333,3L 13.667,4.66705L 12,3L 10.333,4.66705L 8.667,3L 6.99999,4.66705L 5.33298,3L 3.667,4.66705L 1.99999,3L 1.99999,19C 1.99999,20.104 2.89499,21 3.99999,21L 20,21C 21.104,21 21.99,20.104 21.99,19L 22,3L 20.333,4.66705 Z ' })
                )
            );
        }
    }]);

    return MdiNewspaper;
}(React.Component);

exports.default = MdiNewspaper;
module.exports = exports['default'];