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

var MdiLock = function (_React$Component) {
    _inherits(MdiLock, _React$Component);

    function MdiLock() {
        _classCallCheck(this, MdiLock);

        return _possibleConstructorReturn(this, (MdiLock.__proto__ || Object.getPrototypeOf(MdiLock)).apply(this, arguments));
    }

    _createClass(MdiLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,16.998C 13.1044,16.998 13.9994,16.1021 13.9994,14.998C 13.9994,13.894 13.1044,12.998 11.9994,12.998C 10.8954,12.998 9.9994,13.894 9.9994,14.998C 9.9994,16.1021 10.8954,16.998 11.9994,16.998 Z M 17.9994,7.99813C 19.1034,7.99813 19.9994,8.89413 19.9994,9.99813L 19.9994,19.9981C 19.9994,21.1021 19.1034,21.9981 17.9994,21.9981L 5.99938,21.9981C 4.89539,21.9981 3.99938,21.1021 3.99938,19.9981L 3.99938,9.99813C 3.99938,8.89413 4.89539,7.99813 5.99938,7.99813L 6.99938,7.99813L 6.99938,5.99813C 6.99938,3.23714 9.23838,0.998133 11.9994,0.998133C 14.7604,0.998133 16.9994,3.23714 16.9994,5.99813L 16.9994,7.99813L 17.9994,7.99813 Z M 12,3C 10.3431,3 9,4.34315 9,6L 9,8L 15,8L 15,6C 15,4.34315 13.6569,3 12,3 Z ' })
                )
            );
        }
    }]);

    return MdiLock;
}(React.Component);

exports.default = MdiLock;
module.exports = exports['default'];