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

var MdiFoodVariant = function (_React$Component) {
    _inherits(MdiFoodVariant, _React$Component);

    function MdiFoodVariant() {
        _classCallCheck(this, MdiFoodVariant);

        return _possibleConstructorReturn(this, (MdiFoodVariant.__proto__ || Object.getPrototypeOf(MdiFoodVariant)).apply(this, arguments));
    }

    _createClass(MdiFoodVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 22,18C 22,20.2091 20.2091,22 18,22L 15,22C 12.7909,22 11,20.2091 11,18L 11,16L 17.7936,16L 20.549,11.2274L 22.1079,12.1274L 19.872,16L 22,16L 22,18 Z M 9,22L 2,22C 2,19 2,16 2.33333,12.8333C 2.59995,10.3004 3.07984,7.66088 3.6024,5L 3,5L 3,3L 4,3.00001L 7,3.00001L 8,3L 8,5L 7.39759,5C 7.92016,7.66088 8.40004,10.3004 8.66666,12.8333C 9,16 9,19 9,22 Z ' })
                )
            );
        }
    }]);

    return MdiFoodVariant;
}(React.Component);

exports.default = MdiFoodVariant;
module.exports = exports['default'];