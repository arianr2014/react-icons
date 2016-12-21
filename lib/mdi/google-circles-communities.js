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

var MdiGoogleCirclesCommunities = function (_React$Component) {
    _inherits(MdiGoogleCirclesCommunities, _React$Component);

    function MdiGoogleCirclesCommunities() {
        _classCallCheck(this, MdiGoogleCirclesCommunities);

        return _possibleConstructorReturn(this, (MdiGoogleCirclesCommunities.__proto__ || Object.getPrototypeOf(MdiGoogleCirclesCommunities)).apply(this, arguments));
    }

    _createClass(MdiGoogleCirclesCommunities, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 14.9994,11.9981C 13.8944,11.9981 12.9994,12.8931 12.9994,13.9981C 12.9994,15.1016 13.8944,15.9981 14.9994,15.9981C 16.1034,15.9981 16.9994,15.1016 16.9994,13.9981C 16.9994,12.8931 16.1034,11.9981 14.9994,11.9981 Z M 11.9994,19.9981C 7.5814,19.9981 3.9994,16.4161 3.9994,11.9981C 3.9994,7.57907 7.5814,3.99807 11.9994,3.99807C 16.4174,3.99807 19.9994,7.57907 19.9994,11.9981C 19.9994,16.4161 16.4174,19.9981 11.9994,19.9981 Z M 11.9994,1.99807C 6.4764,1.99807 1.9994,6.47507 1.9994,11.9981C 1.9994,17.5211 6.4764,21.9981 11.9994,21.9981C 17.5224,21.9981 21.9994,17.5211 21.9994,11.9981C 21.9994,6.47507 17.5224,1.99807 11.9994,1.99807 Z M 13.9994,8.99807C 13.9994,7.89306 13.1034,6.99807 11.9994,6.99807C 10.8944,6.99807 9.9994,7.89306 9.9994,8.99807C 9.9994,10.1016 10.8944,10.9981 11.9994,10.9981C 13.1034,10.9981 13.9994,10.1016 13.9994,8.99807 Z M 8.9994,11.9981C 7.8954,11.9981 6.9994,12.8931 6.9994,13.9981C 6.9994,15.1016 7.8954,15.9981 8.9994,15.9981C 10.1034,15.9981 10.9994,15.1016 10.9994,13.9981C 10.9994,12.8931 10.1034,11.9981 8.9994,11.9981 Z ' })
                )
            );
        }
    }]);

    return MdiGoogleCirclesCommunities;
}(React.Component);

exports.default = MdiGoogleCirclesCommunities;
module.exports = exports['default'];