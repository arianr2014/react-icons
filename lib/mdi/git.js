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

var MdiGit = function (_React$Component) {
    _inherits(MdiGit, _React$Component);

    function MdiGit() {
        _classCallCheck(this, MdiGit);

        return _possibleConstructorReturn(this, (MdiGit.__proto__ || Object.getPrototypeOf(MdiGit)).apply(this, arguments));
    }

    _createClass(MdiGit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 2.59548,10.5858L 8.38353,4.79774L 10.0679,6.48216C 9.83331,7.35316 10.2158,8.2809 11,8.73229L 11,14.2676C 10.4022,14.6134 10,15.2597 10,16C 10,17.1046 10.8954,18 12,18C 13.1046,18 14,17.1046 14,16C 14,15.2597 13.5978,14.6134 13,14.2676L 13,9.41421L 15.0677,11.482C 15.0236,11.6472 15,11.8208 15,12C 15,13.1046 15.8954,14 17,14C 18.1046,14 19,13.1046 19,12C 19,10.8954 18.1046,10 17,10C 16.8208,10 16.6472,10.0236 16.482,10.0677L 13.932,7.51784C 14.1875,6.5694 13.7113,5.55369 12.7815,5.15899C 12.3539,4.97751 11.8986,4.95622 11.4823,5.06808L 9.79774,3.38353L 10.5858,2.59548C 11.3668,1.81444 12.6332,1.81444 13.4142,2.59548L 21.4045,10.5858C 22.1856,11.3668 22.1856,12.6332 21.4045,13.4142L 13.4142,21.4045C 12.6332,22.1856 11.3668,22.1856 10.5858,21.4045L 2.59548,13.4142C 1.81443,12.6332 1.81443,11.3668 2.59548,10.5858 Z ' })
                )
            );
        }
    }]);

    return MdiGit;
}(React.Component);

exports.default = MdiGit;
module.exports = exports['default'];