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

var MdiFolderGoogleDrive = function (_React$Component) {
    _inherits(MdiFolderGoogleDrive, _React$Component);

    function MdiFolderGoogleDrive() {
        _classCallCheck(this, MdiFolderGoogleDrive);

        return _possibleConstructorReturn(this, (MdiFolderGoogleDrive.__proto__ || Object.getPrototypeOf(MdiFolderGoogleDrive)).apply(this, arguments));
    }

    _createClass(MdiFolderGoogleDrive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.7495,8.99807L 16.1405,8.99807L 18.9805,13.9981L 16.0495,13.9981L 13.4885,9.45708M 18.3005,16.9981L 12.7535,16.9981L 14.1535,14.4981L 19.2655,14.4981L 19.5255,14.9571M 11.4995,16.9981L 10.3995,14.8611L 13.2385,9.89806L 14.7395,12.5611L 12.2535,16.9981M 19.9995,5.99807L 11.9995,5.99807L 9.9995,3.99807L 3.9995,3.99807C 2.8945,3.99807 2.0095,4.89406 2.0095,5.99807L 1.9995,17.9981C 1.9995,19.1021 2.8945,19.9981 3.9995,19.9981L 19.9995,19.9981C 21.1035,19.9981 21.9995,19.1021 21.9995,17.9981L 21.9995,7.99807C 21.9995,6.89406 21.1035,5.99807 19.9995,5.99807 Z ' })
                )
            );
        }
    }]);

    return MdiFolderGoogleDrive;
}(React.Component);

exports.default = MdiFolderGoogleDrive;
module.exports = exports['default'];