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

var MdiTumblr = function (_React$Component) {
    _inherits(MdiTumblr, _React$Component);

    function MdiTumblr() {
        _classCallCheck(this, MdiTumblr);

        return _possibleConstructorReturn(this, (MdiTumblr.__proto__ || Object.getPrototypeOf(MdiTumblr)).apply(this, arguments));
    }

    _createClass(MdiTumblr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 15.9994,10.9981L 12.9994,10.9981L 12.9994,14.8981C 12.9994,15.6311 13.1434,15.9981 14.0994,15.9981L 15.9994,15.9981L 15.9994,18.9981C 15.9994,18.9981 14.9711,19.0987 13.8994,19.0987C 11.2534,19.0987 9.9994,17.4751 9.9994,15.6981L 9.9994,10.9981L 7.9994,10.9981L 7.9994,8.19807C 10.4074,7.99807 10.6184,6.15607 10.7994,4.99807L 12.9994,4.99807L 12.9994,7.99807L 15.9994,7.99807M 19.9994,1.99807L 3.9994,1.99807C 2.8944,1.99807 2.0094,2.89307 2.0094,3.99807L 1.9994,19.9981C 1.9994,21.1016 2.8944,21.9981 3.9994,21.9981L 19.9994,21.9981C 21.1034,21.9981 21.9994,21.1016 21.9994,19.9981L 21.9994,3.99807C 21.9994,2.89307 21.1034,1.99807 19.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiTumblr;
}(React.Component);

exports.default = MdiTumblr;
module.exports = exports['default'];