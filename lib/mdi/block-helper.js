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

var MdiBlockHelper = function (_React$Component) {
    _inherits(MdiBlockHelper, _React$Component);

    function MdiBlockHelper() {
        _classCallCheck(this, MdiBlockHelper);

        return _possibleConstructorReturn(this, (MdiBlockHelper.__proto__ || Object.getPrototypeOf(MdiBlockHelper)).apply(this, arguments));
    }

    _createClass(MdiBlockHelper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,0C 18.6274,0 24,5.37259 24,12C 24,18.6274 18.6274,24 12,24C 5.37258,24 -1.27157e-006,18.6274 -1.27157e-006,12C -1.27157e-006,5.37259 5.37258,0 12,0 Z M 12,2.00001C 6.47715,2.00001 2,6.47716 2,12C 2,14.4013 2.84636,16.6049 4.25705,18.3287L 18.3287,4.25706C 16.6049,2.84637 14.4013,2.00001 12,2.00001 Z M 12,22C 17.5228,22 22,17.5228 22,12C 22,9.59873 21.1536,7.39514 19.7429,5.67127L 5.67127,19.7429C 7.39514,21.1536 9.59873,22 12,22 Z ' })
                )
            );
        }
    }]);

    return MdiBlockHelper;
}(React.Component);

exports.default = MdiBlockHelper;
module.exports = exports['default'];