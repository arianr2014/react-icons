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

var MdiParking = function (_React$Component) {
    _inherits(MdiParking, _React$Component);

    function MdiParking() {
        _classCallCheck(this, MdiParking);

        return _possibleConstructorReturn(this, (MdiParking.__proto__ || Object.getPrototypeOf(MdiParking)).apply(this, arguments));
    }

    _createClass(MdiParking, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.1994,10.9981L 9.99939,10.9981L 9.99939,6.99807L 13.1994,6.99807C 14.3034,6.99807 15.1994,7.89307 15.1994,8.99807C 15.1994,10.1031 14.3034,10.9981 13.1994,10.9981 Z M 12.9994,2.99807L 5.99939,2.99807L 5.99939,20.9981L 9.99939,20.9981L 9.99939,14.9981L 12.9994,14.9981C 16.3124,14.9981 18.9994,12.3121 18.9994,8.99807C 18.9994,5.68407 16.3124,2.99807 12.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiParking;
}(React.Component);

exports.default = MdiParking;
module.exports = exports['default'];