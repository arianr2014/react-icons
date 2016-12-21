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

var MdiAccountOutline = function (_React$Component) {
    _inherits(MdiAccountOutline, _React$Component);

    function MdiAccountOutline() {
        _classCallCheck(this, MdiAccountOutline);

        return _possibleConstructorReturn(this, (MdiAccountOutline.__proto__ || Object.getPrototypeOf(MdiAccountOutline)).apply(this, arguments));
    }

    _createClass(MdiAccountOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 11.9994,12.9981C 9.3324,12.9981 3.99939,14.3331 3.99939,16.9981L 3.99939,19.9981L 19.9994,19.9981L 19.9994,16.9981C 19.9994,14.3331 14.6664,12.9981 11.9994,12.9981 Z M 11.9994,3.99807C 9.79138,3.99807 7.99939,5.79006 7.99939,7.99807C 7.99939,10.2051 9.79138,11.9981 11.9994,11.9981C 14.2074,11.9981 15.9994,10.2051 15.9994,7.99807C 15.9994,5.79006 14.2074,3.99807 11.9994,3.99807 Z M 11.9994,14.8981C 14.9734,14.8981 18.0994,16.3551 18.0994,16.9981L 18.0994,18.0981L 5.89938,18.0981L 5.89938,16.9981C 5.89938,16.3551 9.02539,14.8981 11.9994,14.8981 Z M 11.9994,5.89807C 13.1574,5.89807 14.0994,6.84007 14.0994,7.99807C 14.0994,9.15607 13.1574,10.0981 11.9994,10.0981C 10.8414,10.0981 9.89938,9.15607 9.89938,7.99807C 9.89938,6.84007 10.8414,5.89807 11.9994,5.89807 Z ' })
                )
            );
        }
    }]);

    return MdiAccountOutline;
}(React.Component);

exports.default = MdiAccountOutline;
module.exports = exports['default'];