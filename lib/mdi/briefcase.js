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

var MdiBriefcase = function (_React$Component) {
    _inherits(MdiBriefcase, _React$Component);

    function MdiBriefcase() {
        _classCallCheck(this, MdiBriefcase);

        return _possibleConstructorReturn(this, (MdiBriefcase.__proto__ || Object.getPrototypeOf(MdiBriefcase)).apply(this, arguments));
    }

    _createClass(MdiBriefcase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9994,5.99805L 9.99939,5.99805L 9.99939,3.99805L 13.9994,3.99805M 19.9994,5.99805L 15.9994,5.99805L 15.9994,3.99805L 13.9994,1.99805L 9.99939,1.99805L 7.99939,3.99805L 7.99939,5.99805L 3.99939,5.99805C 2.89438,5.99805 2.0094,6.89203 2.0094,7.99805L 1.99939,18.998C 1.99939,20.1041 2.89438,20.998 3.99939,20.998L 19.9994,20.998C 21.1044,20.998 21.9994,20.1041 21.9994,18.998L 21.9994,7.99805C 21.9994,6.89203 21.1044,5.99805 19.9994,5.99805 Z ' })
                )
            );
        }
    }]);

    return MdiBriefcase;
}(React.Component);

exports.default = MdiBriefcase;
module.exports = exports['default'];