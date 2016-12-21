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

var MdiCakeLayered = function (_React$Component) {
    _inherits(MdiCakeLayered, _React$Component);

    function MdiCakeLayered() {
        _classCallCheck(this, MdiCakeLayered);

        return _possibleConstructorReturn(this, (MdiCakeLayered.__proto__ || Object.getPrototypeOf(MdiCakeLayered)).apply(this, arguments));
    }

    _createClass(MdiCakeLayered, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9994,20.9981L 20.9994,16.9981C 20.9994,15.8931 20.1044,14.9981 18.9994,14.9981L 17.9994,14.9981L 17.9994,11.9981C 17.9994,10.8931 17.1044,9.99807 15.9994,9.99807L 12.9994,9.99807L 12.9994,7.99807L 10.9994,7.99807L 10.9994,9.99807L 7.99938,9.99807C 6.89438,9.99807 5.99938,10.8931 5.99938,11.9981L 5.99938,14.9981L 4.99938,14.9981C 3.89438,14.9981 2.99938,15.8931 2.99938,16.9981L 2.99938,20.9981L 0.999382,20.9981L 0.999382,22.9981L 22.9994,22.9981L 22.9994,20.9981M 11.9994,6.99807C 13.1044,6.99807 13.9994,6.10206 13.9994,4.99807C 13.9994,4.62207 13.8954,4.26907 13.7144,3.96907L 11.9994,0.998068L 10.2844,3.96907C 10.1034,4.26907 9.99938,4.62207 9.99938,4.99807C 9.99938,6.10206 10.8944,6.99807 11.9994,6.99807 Z ' })
                )
            );
        }
    }]);

    return MdiCakeLayered;
}(React.Component);

exports.default = MdiCakeLayered;
module.exports = exports['default'];