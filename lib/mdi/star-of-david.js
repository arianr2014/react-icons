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

var MdiStarOfDavid = function (_React$Component) {
    _inherits(MdiStarOfDavid, _React$Component);

    function MdiStarOfDavid() {
        _classCallCheck(this, MdiStarOfDavid);

        return _possibleConstructorReturn(this, (MdiStarOfDavid.__proto__ || Object.getPrototypeOf(MdiStarOfDavid)).apply(this, arguments));
    }

    _createClass(MdiStarOfDavid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 12,2L 14.8868,7L 20.6603,7L 17.7735,12L 20.6603,17L 14.8868,17L 12,22L 9.11325,17L 3.33975,17L 6.2265,12L 3.33975,7L 9.11325,7L 12,2 Z M 17.1961,15L 16.6188,14L 16.0414,15L 17.1961,15 Z M 12,6.00001L 11.4227,7L 12.5773,7L 12,6.00001 Z M 6.80385,15L 7.95855,15L 7.3812,14L 6.80385,15 Z M 17.1961,9L 16.0414,9L 16.6188,10L 17.1961,9 Z M 12,18L 12.5773,17L 11.4227,17L 12,18 Z M 6.80385,9L 7.3812,10L 7.95855,9L 6.80385,9 Z M 15.4641,12L 13.732,9L 10.268,9L 8.5359,12L 10.268,15L 13.732,15L 15.4641,12 Z ' })
                )
            );
        }
    }]);

    return MdiStarOfDavid;
}(React.Component);

exports.default = MdiStarOfDavid;
module.exports = exports['default'];