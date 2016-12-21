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

var MdiCastConnected = function (_React$Component) {
    _inherits(MdiCastConnected, _React$Component);

    function MdiCastConnected() {
        _classCallCheck(this, MdiCastConnected);

        return _possibleConstructorReturn(this, (MdiCastConnected.__proto__ || Object.getPrototypeOf(MdiCastConnected)).apply(this, arguments));
    }

    _createClass(MdiCastConnected, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 20.9994,2.99807L 2.9994,2.99807C 1.8944,2.99807 0.9994,3.89406 0.9994,4.99807L 0.9994,7.99807L 2.9994,7.99807L 2.9994,4.99807L 20.9994,4.99807L 20.9994,18.9981L 13.9994,18.9981L 13.9994,20.9981L 20.9994,20.9981C 22.1029,20.9981 22.9994,20.1021 22.9994,18.9981L 22.9994,4.99807C 22.9994,3.89406 22.1029,2.99807 20.9994,2.99807 Z M 0.9994,9.99807L 0.9994,11.9981C 5.9704,11.9981 9.9994,16.0271 9.9994,20.9981L 11.9994,20.9981C 11.9994,14.9231 7.0734,9.99807 0.9994,9.99807 Z M 18.9994,6.99807L 4.9994,6.99807L 4.9994,8.63207C 8.9594,9.91207 12.0854,13.0381 13.3654,16.9981L 18.9994,16.9981M 0.9994,13.9981L 0.9994,15.9981C 3.7614,15.9981 5.9994,18.2361 5.9994,20.9981L 7.9994,20.9981C 7.9994,17.1321 4.86463,13.9981 0.9994,13.9981 Z M 0.9994,17.9981L 0.9994,20.9981L 3.9994,20.9981C 3.9994,19.3421 2.65565,17.9981 0.9994,17.9981 Z ' })
                )
            );
        }
    }]);

    return MdiCastConnected;
}(React.Component);

exports.default = MdiCastConnected;
module.exports = exports['default'];