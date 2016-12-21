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

var MdiEmoticonNeutral = function (_React$Component) {
    _inherits(MdiEmoticonNeutral, _React$Component);

    function MdiEmoticonNeutral() {
        _classCallCheck(this, MdiEmoticonNeutral);

        return _possibleConstructorReturn(this, (MdiEmoticonNeutral.__proto__ || Object.getPrototypeOf(MdiEmoticonNeutral)).apply(this, arguments));
    }

    _createClass(MdiEmoticonNeutral, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-linejoin': 'round', d: 'M 8.49939,10.9981C 7.67039,10.9981 6.99939,10.3261 6.99939,9.49807C 6.99939,8.67007 7.67039,7.99807 8.49939,7.99807C 9.32839,7.99807 9.99939,8.67007 9.99939,9.49807C 9.99939,10.3261 9.32839,10.9981 8.49939,10.9981 Z M 15.4994,10.9981C 14.6704,10.9981 13.9994,10.3261 13.9994,9.49808C 13.9994,8.67008 14.6704,7.99808 15.4994,7.99808C 16.3284,7.99808 16.9994,8.67008 16.9994,9.49808C 16.9994,10.3261 16.3284,10.9981 15.4994,10.9981 Z M 11.9994,19.9981C 16.4194,19.9981 19.9994,16.4161 19.9994,11.9981C 19.9994,7.58008 16.4194,3.99808 11.9994,3.99808C 7.57938,3.99808 3.99937,7.58008 3.99937,11.9981C 3.99937,16.4161 7.57938,19.9981 11.9994,19.9981 Z M 11.9944,1.99809C 17.5204,1.99809 21.9994,6.47508 21.9994,11.9981C 21.9994,17.5211 17.5204,21.9981 11.9944,21.9981C 6.46736,21.9981 1.99937,17.5211 1.99937,11.9981C 1.99937,6.47508 6.46736,1.99809 11.9944,1.99809 Z M 9,14L 15,14C 15.5523,14 16,14.4477 16,15C 16,15.5523 15.5523,16 15,16L 9,16C 8.44771,16 8,15.5523 8,15C 8,14.4477 8.44771,14 9,14 Z ' })
                )
            );
        }
    }]);

    return MdiEmoticonNeutral;
}(React.Component);

exports.default = MdiEmoticonNeutral;
module.exports = exports['default'];