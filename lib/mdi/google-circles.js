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

var MdiGoogleCircles = function (_React$Component) {
    _inherits(MdiGoogleCircles, _React$Component);

    function MdiGoogleCircles() {
        _classCallCheck(this, MdiGoogleCircles);

        return _possibleConstructorReturn(this, (MdiGoogleCircles.__proto__ || Object.getPrototypeOf(MdiGoogleCircles)).apply(this, arguments));
    }

    _createClass(MdiGoogleCircles, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.6571,14.9808L 16.9991,14.9978C 18.0121,14.9978 18.9781,14.8018 19.8701,14.4588C 19.1711,18.7328 15.4711,21.9978 10.9991,21.9978C 6.0291,21.9978 1.9991,17.9688 1.9991,12.9978C 1.9991,8.52577 5.2651,4.82577 9.5391,4.12677C 9.19611,5.01877 8.9991,5.98477 8.9991,6.99777L 9.01611,7.34076C 6.67811,8.15977 4.9991,10.3798 4.9991,12.9978C 4.9991,16.3118 7.68611,18.9978 10.9991,18.9978C 13.6171,18.9978 15.8371,17.3188 16.6571,14.9808 Z M 16.9994,9.99807C 18.6564,9.99807 19.9994,8.65507 19.9994,6.99807C 19.9994,5.34107 18.6564,3.99807 16.9994,3.99807C 15.3424,3.99807 13.9994,5.34107 13.9994,6.99807C 13.9994,8.65507 15.3424,9.99807 16.9994,9.99807 Z M 16.9994,0.99807C 20.3124,0.99807 22.9994,3.68406 22.9994,6.99807C 22.9994,10.3121 20.3124,12.9981 16.9994,12.9981C 13.6854,12.9981 10.9994,10.3121 10.9994,6.99807C 10.9994,3.68406 13.6854,0.99807 16.9994,0.99807 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleCircles;
}(React.Component);

exports.default = MdiGoogleCircles;
module.exports = exports['default'];