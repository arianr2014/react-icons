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

var MdiSimAlert = function (_React$Component) {
    _inherits(MdiSimAlert, _React$Component);

    function MdiSimAlert() {
        _classCallCheck(this, MdiSimAlert);

        return _possibleConstructorReturn(this, (MdiSimAlert.__proto__ || Object.getPrototypeOf(MdiSimAlert)).apply(this, arguments));
    }

    _createClass(MdiSimAlert, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12.9994,12.9981L 10.9994,12.9981L 10.9994,7.99807L 12.9994,7.99807M 12.9994,16.9981L 10.9994,16.9981L 10.9994,14.9981L 12.9994,14.9981M 17.9994,1.99807L 9.99939,1.99807L 4.02136,7.99807L 3.99939,19.9981C 3.99939,21.0981 4.89941,21.9981 5.99939,21.9981L 17.9994,21.9981C 19.0994,21.9981 19.9994,21.0981 19.9994,19.9981L 19.9994,3.99807C 19.9994,2.89807 19.0994,1.99807 17.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiSimAlert;
}(React.Component);

exports.default = MdiSimAlert;
module.exports = exports['default'];