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

var MdiBlogger = function (_React$Component) {
    _inherits(MdiBlogger, _React$Component);

    function MdiBlogger() {
        _classCallCheck(this, MdiBlogger);

        return _possibleConstructorReturn(this, (MdiBlogger.__proto__ || Object.getPrototypeOf(MdiBlogger)).apply(this, arguments));
    }

    _createClass(MdiBlogger, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9994,12.9981L 9.94944,12.9981C 9.3964,12.9981 8.94944,13.4451 8.94944,13.9981C 8.94944,14.5511 9.3964,14.9981 9.94944,14.9981L 13.9994,14.9981C 14.5524,14.9981 14.9994,14.5511 14.9994,13.9981C 14.9994,13.4451 14.5524,12.9981 13.9994,12.9981 Z M 9.94944,9.99807L 12.5494,9.99807C 13.1014,9.99807 13.5494,9.55107 13.5494,8.99807C 13.5494,8.44507 13.1014,7.99807 12.5494,7.99807L 9.94944,7.99807C 9.3964,7.99807 8.94944,8.44507 8.94944,8.99807C 8.94944,9.55107 9.3964,9.99807 9.94944,9.99807 Z M 15.9994,8.99807L 15.9994,9.99807C 15.9994,10.5511 16.4465,10.9981 16.9994,10.9981C 17.5524,10.9981 17.9994,11.4451 17.9994,11.9981L 17.9994,14.9981C 17.9994,16.6541 16.6564,17.9981 14.9994,17.9981L 8.99943,17.9981C 7.34242,17.9981 5.99943,16.6541 5.99943,14.9981L 5.99943,7.99807C 5.99943,6.34207 7.34242,4.99807 8.99943,4.99807L 12.9994,4.99807C 14.6564,4.99807 15.9994,6.34207 15.9994,7.99807M 19.9994,1.99807L 3.99943,1.99807C 2.89442,1.99807 2.00944,2.89306 2.00944,3.99807L 1.99943,19.9981C 1.99943,21.1016 2.89442,21.9981 3.99943,21.9981L 19.9994,21.9981C 21.1034,21.9981 21.9994,21.1016 21.9994,19.9981L 21.9994,3.99807C 21.9994,2.89306 21.1034,1.99807 19.9994,1.99807 Z ' })
                )
            );
        }
    }]);

    return MdiBlogger;
}(React.Component);

exports.default = MdiBlogger;
module.exports = exports['default'];