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

var MdiFileExcelBox = function (_React$Component) {
    _inherits(MdiFileExcelBox, _React$Component);

    function MdiFileExcelBox() {
        _classCallCheck(this, MdiFileExcelBox);

        return _possibleConstructorReturn(this, (MdiFileExcelBox.__proto__ || Object.getPrototypeOf(MdiFileExcelBox)).apply(this, arguments));
    }

    _createClass(MdiFileExcelBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 16.1996,16.9981L 14.1996,16.9981L 11.9996,13.1981L 9.79959,16.9981L 7.79959,16.9981L 10.9996,11.9981L 7.79959,6.99807L 9.79959,6.99807L 11.9996,10.7981L 14.1996,6.99807L 16.1996,6.99807L 12.9996,11.9981M 18.9996,2.99807L 4.9996,2.99807C 3.89459,2.99807 2.9996,3.89406 2.9996,4.99807L 2.9996,18.9981C 2.9996,20.1021 3.89459,20.9981 4.9996,20.9981L 18.9996,20.9981C 20.1036,20.9981 20.9996,20.1021 20.9996,18.9981L 20.9996,4.99807C 20.9996,3.89406 20.1036,2.99807 18.9996,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiFileExcelBox;
}(React.Component);

exports.default = MdiFileExcelBox;
module.exports = exports['default'];