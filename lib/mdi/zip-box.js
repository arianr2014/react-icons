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

var MdiZipBox = function (_React$Component) {
    _inherits(MdiZipBox, _React$Component);

    function MdiZipBox() {
        _classCallCheck(this, MdiZipBox);

        return _possibleConstructorReturn(this, (MdiZipBox.__proto__ || Object.getPrototypeOf(MdiZipBox)).apply(this, arguments));
    }

    _createClass(MdiZipBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9994,16.9981L 11.9994,16.9981L 11.9994,14.9981L 9.99941,14.9981L 9.99941,12.9981L 11.9994,12.9981L 11.9994,14.9981L 13.9994,14.9981M 13.9994,8.99807L 11.9994,8.99807L 11.9994,10.9981L 13.9994,10.9981L 13.9994,12.9981L 11.9994,12.9981L 11.9994,10.9981L 9.99941,10.9981L 9.99941,8.99807L 11.9994,8.99807L 11.9994,6.99807L 9.99941,6.99807L 9.99941,4.99807L 11.9994,4.99807L 11.9994,6.99807L 13.9994,6.99807M 18.9994,2.99807L 4.99941,2.99807C 3.89441,2.99807 2.99941,3.89406 2.99941,4.99807L 2.99941,18.9981C 2.99941,20.1021 3.89441,20.9981 4.99941,20.9981L 18.9994,20.9981C 20.1034,20.9981 20.9994,20.1021 20.9994,18.9981L 20.9994,4.99807C 20.9994,3.89406 20.1034,2.99807 18.9994,2.99807 Z ' })
                )
            );
        }
    }]);

    return MdiZipBox;
}(React.Component);

exports.default = MdiZipBox;
module.exports = exports['default'];