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

var MdiXda = function (_React$Component) {
    _inherits(MdiXda, _React$Component);

    function MdiXda() {
        _classCallCheck(this, MdiXda);

        return _possibleConstructorReturn(this, (MdiXda.__proto__ || Object.getPrototypeOf(MdiXda)).apply(this, arguments));
    }

    _createClass(MdiXda, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '1.01057', 'stroke-linejoin': 'round', d: 'M -0.0513812,16.7891L 3.19459,12.9686L -0.0513787,9.14816L 1.48071,7.86259L 4.5,11.4129L 7.51929,7.86259L 9.05137,9.14817L 5.80541,12.9686L 9.05138,16.7891L 7.51929,18.0747L 4.5,14.5243L 1.48071,18.0747L -0.0513812,16.7891 Z M 24,17C 24,17.5523 23.5523,18 23,18L 20,18C 18.8954,18 18,17.1046 18,16L 18,14C 18,12.8954 18.8954,12 20,12L 22,12L 22,10L 18,10L 18,8L 23,8C 23.5475,8.00566 24,8.45121 24,9M 22,14L 20,14L 20,16L 22,16L 22,14 Z M 16,17C 16,17.5523 15.5523,18 15,18L 12,18C 10.8954,18 10,17.1046 10,16L 10,10C 10,8.89543 10.8954,8 12,8L 14,8L 14,5L 16,5L 16,17 Z M 14,16L 14,10L 12,10L 12,16L 14,16 Z ' })
                )
            );
        }
    }]);

    return MdiXda;
}(React.Component);

exports.default = MdiXda;
module.exports = exports['default'];