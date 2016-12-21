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

var MdiCar = function (_React$Component) {
    _inherits(MdiCar, _React$Component);

    function MdiCar() {
        _classCallCheck(this, MdiCar);

        return _possibleConstructorReturn(this, (MdiCar.__proto__ || Object.getPrototypeOf(MdiCar)).apply(this, arguments));
    }

    _createClass(MdiCar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 4.9994,10.9981L 6.4994,6.49807L 17.4994,6.49807L 18.9994,10.9981M 17.4994,15.9981C 16.6714,15.9981 15.9994,15.3261 15.9994,14.4981C 15.9994,13.6701 16.6714,12.9981 17.4994,12.9981C 18.3284,12.9981 18.9994,13.6701 18.9994,14.4981C 18.9994,15.3261 18.3284,15.9981 17.4994,15.9981 Z M 6.4994,15.9981C 5.6714,15.9981 4.9994,15.3261 4.9994,14.4981C 4.9994,13.6701 5.6714,12.9981 6.4994,12.9981C 7.3284,12.9981 7.9994,13.6701 7.9994,14.4981C 7.9994,15.3261 7.3284,15.9981 6.4994,15.9981 Z M 18.9184,6.00907C 18.7154,5.42006 18.1564,4.99807 17.4994,4.99807L 6.4994,4.99807C 5.8424,4.99807 5.2844,5.42006 5.0814,6.00907L 2.9994,11.9981L 2.9994,19.9981C 2.9994,20.5501 3.4474,20.9981 3.9994,20.9981L 4.9994,20.9981C 5.5524,20.9981 5.9994,20.5501 5.9994,19.9981L 5.9994,18.9981L 17.9994,18.9981L 17.9994,19.9981C 17.9994,20.5501 18.4474,20.9981 18.9994,20.9981L 19.9994,20.9981C 20.5524,20.9981 20.9994,20.5501 20.9994,19.9981L 20.9994,11.9981L 18.9184,6.00907 Z ' })
                )
            );
        }
    }]);

    return MdiCar;
}(React.Component);

exports.default = MdiCar;
module.exports = exports['default'];