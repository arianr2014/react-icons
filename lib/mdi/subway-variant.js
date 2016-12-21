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

var MdiSubwayVariant = function (_React$Component) {
    _inherits(MdiSubwayVariant, _React$Component);

    function MdiSubwayVariant() {
        _classCallCheck(this, MdiSubwayVariant);

        return _possibleConstructorReturn(this, (MdiSubwayVariant.__proto__ || Object.getPrototypeOf(MdiSubwayVariant)).apply(this, arguments));
    }

    _createClass(MdiSubwayVariant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.9994,10.9981L 12.9994,10.9981L 12.9994,5.99807L 17.9994,5.99807M 16.4994,16.9981C 15.6714,16.9981 14.9994,16.3261 14.9994,15.4981C 14.9994,14.6701 15.6714,13.9981 16.4994,13.9981C 17.3284,13.9981 17.9994,14.6701 17.9994,15.4981C 17.9994,16.3261 17.3284,16.9981 16.4994,16.9981 Z M 10.9994,10.9981L 5.9994,10.9981L 5.9994,5.99807L 10.9994,5.99807M 7.4994,16.9981C 6.6714,16.9981 5.9994,16.3261 5.9994,15.4981C 5.9994,14.6701 6.6714,13.9981 7.4994,13.9981C 8.32839,13.9981 8.9994,14.6701 8.9994,15.4981C 8.9994,16.3261 8.32839,16.9981 7.4994,16.9981 Z M 11.9994,1.99807C 7.5814,1.99807 3.9994,2.49807 3.9994,5.99807L 3.9994,15.4981C 3.9994,17.4311 5.5684,18.9981 7.4994,18.9981L 5.9994,20.4981L 5.9994,20.9981L 17.9994,20.9981L 17.9994,20.4981L 16.4994,18.9981C 18.4344,18.9981 19.9994,17.4311 19.9994,15.4981L 19.9994,5.99807C 19.9994,2.49807 16.4174,1.99807 11.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiSubwayVariant;
}(React.Component);

exports.default = MdiSubwayVariant;
module.exports = exports['default'];