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

var MdiCartOutline = function (_React$Component) {
    _inherits(MdiCartOutline, _React$Component);

    function MdiCartOutline() {
        _classCallCheck(this, MdiCartOutline);

        return _possibleConstructorReturn(this, (MdiCartOutline.__proto__ || Object.getPrototypeOf(MdiCartOutline)).apply(this, arguments));
    }

    _createClass(MdiCartOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.9994,17.9981C 18.1034,17.9981 18.9994,18.8931 18.9994,19.9981C 18.9994,21.1031 18.1034,21.9981 16.9994,21.9981C 15.8944,21.9981 15.0094,21.1031 15.0094,19.9981C 15.0094,18.8931 15.8944,17.9981 16.9994,17.9981 Z M 0.999389,1.99807L 4.2654,1.99807L 5.21238,3.99807L 19.9994,3.99807C 20.5514,3.99807 20.9994,4.44507 20.9994,4.99807C 20.9994,5.17308 20.9544,5.33808 20.8754,5.48006L 17.2994,11.9691C 16.9574,12.5831 16.3024,12.9981 15.5504,12.9981L 8.1014,12.9981L 7.20439,14.6271L 7.1724,14.7481C 7.1724,14.8871 7.28438,14.9981 7.4224,14.9981L 18.9994,14.9981L 18.9994,16.9981L 6.99939,16.9981C 5.89439,16.9981 4.99939,16.1031 4.99939,14.9981C 4.99939,14.6501 5.0884,14.3221 5.24438,14.0371L 6.59607,11.5851L 2.99939,3.99807L 0.999389,3.99807L 0.999389,1.99807 Z M 6.99939,17.9981C 8.10339,17.9981 8.99939,18.8931 8.99939,19.9981C 8.99939,21.1031 8.10339,21.9981 6.99939,21.9981C 5.89439,21.9981 5.00938,21.1031 5.00938,19.9981C 5.00938,18.8931 5.89439,17.9981 6.99939,17.9981 Z M 16,11L 18.7778,6L 6.13889,6L 8.5,11L 16,11 Z ' })
                )
            );
        }
    }]);

    return MdiCartOutline;
}(React.Component);

exports.default = MdiCartOutline;
module.exports = exports['default'];